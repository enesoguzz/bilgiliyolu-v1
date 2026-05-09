import { useCallback, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { GradeLevel, UserProgress } from '@/types/curriculum';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

export type AppScreen =
  | 'admin'
  | 'level'
  | 'onboarding'
  | 'subjects'
  | 'path'
  | 'slides'
  | 'quiz'
  | 'results';

interface AppState {
  screen: AppScreen;
  selectedLevel: GradeLevel | null;
  gradeId: number | null;
  subjectId: string | null;
  unitId: string | null;
  progress: UserProgress;
}

type ProgressRow = {
  grade_id: number | null;
  completed_units: string[] | null;
  unit_scores: Record<string, number> | null;
  current_unit: string | null;
};

type ProfileRow = {
  is_admin: boolean | null;
};

const STORAGE_KEY = 'bilgi-yolu-progress';
const AUTH_REDIRECT_URL = cleanRedirectUrl(import.meta.env.VITE_AUTH_REDIRECT_URL as string | undefined);

const initialProgress: UserProgress = {
  gradeId: 0,
  completedUnits: [],
  unitScores: {},
  currentUnit: null,
};

function normalizeProgress(progress: Partial<UserProgress> | null | undefined): UserProgress {
  return {
    gradeId: typeof progress?.gradeId === 'number' ? progress.gradeId : 0,
    completedUnits: Array.isArray(progress?.completedUnits) ? progress.completedUnits : [],
    unitScores: progress?.unitScores && typeof progress.unitScores === 'object' ? progress.unitScores : {},
    currentUnit: typeof progress?.currentUnit === 'string' ? progress.currentUnit : null,
  };
}

function progressFromRow(row: ProgressRow): UserProgress {
  return {
    gradeId: typeof row.grade_id === 'number' ? row.grade_id : 0,
    completedUnits: Array.isArray(row.completed_units) ? row.completed_units : [],
    unitScores: row.unit_scores && typeof row.unit_scores === 'object' ? row.unit_scores : {},
    currentUnit: typeof row.current_unit === 'string' ? row.current_unit : null,
  };
}

function readProgress(): UserProgress {
  if (typeof window === 'undefined') return initialProgress;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return initialProgress;
    return normalizeProgress(JSON.parse(stored) as Partial<UserProgress>);
  } catch {
    return initialProgress;
  }
}

function screenForProgress(progress: UserProgress): AppScreen {
  return progress.gradeId ? 'subjects' : 'level';
}

function getUserEmail(user: User | null): string | null {
  return user?.email ?? null;
}

function cleanRedirectUrl(url: string | undefined): string | null {
  const cleaned = (url ?? '').trim().replace(/\/+$/, '');
  return cleaned || null;
}

function getAuthRedirectUrl(): string {
  if (AUTH_REDIRECT_URL) return AUTH_REDIRECT_URL;
  return window.location.origin;
}

export function useAppState() {
  const [state, setState] = useState<AppState>(() => {
    const progress = readProgress();

    return {
      screen: screenForProgress(progress),
      selectedLevel: null,
      gradeId: progress.gradeId || null,
      subjectId: null,
      unitId: null,
      progress,
    };
  });
  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(isSupabaseConfigured);
  const [progressLoading, setProgressLoading] = useState(false);
  const [remoteReady, setRemoteReady] = useState(!isSupabaseConfigured);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authNotice, setAuthNotice] = useState<string | null>(null);
  const [passwordRecovery, setPasswordRecovery] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const currentUser = session?.user ?? null;
  const currentUserId = currentUser?.id ?? null;
  const currentUserEmail = getUserEmail(currentUser);
  const currentUserDisplayName = typeof currentUser?.user_metadata?.display_name === 'string'
    ? currentUser.user_metadata.display_name
    : null;

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }, [state.progress]);

  useEffect(() => {
    if (!supabase) {
      setAuthLoading(false);
      setRemoteReady(true);
      return;
    }

    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session);
      setAuthLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((event, nextSession) => {
      setSession(nextSession);
      setAuthError(null);

      if (event === 'PASSWORD_RECOVERY') {
        setPasswordRecovery(true);
        setAuthNotice('Yeni şifreni belirleyebilirsin.');
      }

      if (!nextSession) {
        setRemoteReady(false);
        setAuthNotice(null);
      }
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!supabase || !currentUserId) return;

    let active = true;

    async function loadUserData() {
      setProgressLoading(true);
      setRemoteReady(false);
      const localProgress = readProgress();

      await supabase
        .from('profiles')
        .upsert({
          id: currentUserId,
          email: currentUserEmail ?? '',
          display_name: currentUserDisplayName,
          grade_id: localProgress.gradeId,
        });

      const { data, error } = await supabase
        .from('user_progress')
        .select('grade_id, completed_units, unit_scores, current_unit')
        .eq('user_id', currentUserId)
        .maybeSingle();

      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', currentUserId)
        .maybeSingle();

      if (!active) return;

      if (error) {
        setAuthError(error.message);
        setProgressLoading(false);
        return;
      }

      if (profileError) {
        setAuthError(profileError.message);
      } else {
        setIsAdmin(Boolean((profileData as ProfileRow | null)?.is_admin));
      }

      if (data) {
        const remoteProgress = progressFromRow(data as ProgressRow);
        setState(current => ({
          ...current,
          screen: screenForProgress(remoteProgress),
          selectedLevel: null,
          gradeId: remoteProgress.gradeId || null,
          subjectId: null,
          unitId: null,
          progress: remoteProgress,
        }));
      } else {
        await supabase
          .from('user_progress')
          .upsert({
            user_id: currentUserId,
            grade_id: localProgress.gradeId,
            completed_units: localProgress.completedUnits,
            unit_scores: localProgress.unitScores,
            current_unit: localProgress.currentUnit,
          });
      }

      if (!active) return;
      setRemoteReady(true);
      setProgressLoading(false);
    }

    loadUserData();

    return () => {
      active = false;
    };
  }, [currentUserDisplayName, currentUserEmail, currentUserId]);

  useEffect(() => {
    if (!supabase || !currentUserId || !remoteReady) return;

    const progress = state.progress;

    const timer = window.setTimeout(() => {
      supabase
        .from('user_progress')
        .upsert({
          user_id: currentUserId,
          grade_id: progress.gradeId,
          completed_units: progress.completedUnits,
          unit_scores: progress.unitScores,
          current_unit: progress.currentUnit,
        })
        .then(({ error }) => {
          if (error) setAuthError(error.message);
        });

      supabase
        .from('profiles')
        .update({ grade_id: progress.gradeId })
        .eq('id', currentUserId)
        .then(({ error }) => {
          if (error) setAuthError(error.message);
        });
    }, 500);

    return () => window.clearTimeout(timer);
  }, [state.progress, currentUserId, remoteReady]);

  const signIn = useCallback(async (email: string) => {
    if (!supabase) return;

    setAuthLoading(true);
    setAuthError(null);
    setAuthNotice(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: getAuthRedirectUrl(),
      },
    });

    if (error) {
      setAuthError(error.message);
    } else {
      setAuthNotice('Giriş bağlantısı e-posta adresine gönderildi.');
    }
    setAuthLoading(false);
  }, []);

  const signInWithPassword = useCallback(async (identifier: string, password: string) => {
    if (!supabase) return;

    setAuthLoading(true);
    setAuthError(null);
    setAuthNotice(null);

    const trimmedIdentifier = identifier.trim();
    const normalizedPhone = trimmedIdentifier.includes('@') ? null : normalizeTurkishPhone(trimmedIdentifier);

    if (!trimmedIdentifier.includes('@') && !normalizedPhone) {
      setAuthError('Telefon numarası 5 ile başlayan 10 haneli formatta olmalı.');
      setAuthLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword(
      trimmedIdentifier.includes('@')
        ? { email: trimmedIdentifier, password }
        : { phone: normalizedPhone!, password },
    );

    if (error) {
      setAuthError(error.message);
    }

    setAuthLoading(false);
  }, []);

  const signUp = useCallback(async (email: string, password: string, displayName: string, phone?: string) => {
    if (!supabase) return;

    setAuthLoading(true);
    setAuthError(null);
    setAuthNotice(null);

    const normalizedPhone = phone ? normalizeTurkishPhone(phone) : null;
    if (phone && !normalizedPhone) {
      setAuthError('Telefon numarası 5 ile başlayan 10 haneli formatta olmalı.');
      setAuthLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      phone: normalizedPhone ?? undefined,
      options: {
        emailRedirectTo: getAuthRedirectUrl(),
        data: {
          display_name: displayName.trim() || null,
        },
      },
    });

    if (error) {
      setAuthError(error.message);
    } else if (!data.session) {
      setAuthNotice('Kayıt alındı. E-posta doğrulama bağlantısı için gelen kutunu kontrol et.');
    } else {
      setAuthNotice('Hesabın oluşturuldu.');
    }

    setAuthLoading(false);
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    if (!supabase) return;

    setAuthLoading(true);
    setAuthError(null);
    setAuthNotice(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: getAuthRedirectUrl(),
    });

    if (error) {
      setAuthError(error.message);
    } else {
      setAuthNotice('Şifre sıfırlama bağlantısı e-posta adresine gönderildi.');
    }

    setAuthLoading(false);
  }, []);

  const updatePassword = useCallback(async (password: string) => {
    if (!supabase) return;

    setAuthLoading(true);
    setAuthError(null);
    setAuthNotice(null);

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setAuthError(error.message);
    } else {
      setPasswordRecovery(false);
      setAuthNotice('Şifren güncellendi.');
    }

    setAuthLoading(false);
  }, []);

  const sendPhoneOtp = useCallback(async (phone: string) => {
    if (!supabase) return;

    setAuthLoading(true);
    setAuthError(null);
    setAuthNotice(null);

    const normalizedPhone = normalizeTurkishPhone(phone);
    if (!normalizedPhone) {
      setAuthError('Telefon numarası 5 ile başlayan 10 haneli formatta olmalı.');
      setAuthLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({ phone: normalizedPhone });

    if (error) {
      setAuthError(error.message);
    } else {
      setAuthNotice('SMS doğrulama kodu gönderildi.');
    }

    setAuthLoading(false);
  }, []);

  const verifyPhoneOtp = useCallback(async (phone: string, token: string) => {
    if (!supabase) return;

    setAuthLoading(true);
    setAuthError(null);
    setAuthNotice(null);

    const normalizedPhone = normalizeTurkishPhone(phone);
    if (!normalizedPhone) {
      setAuthError('Telefon numarası 5 ile başlayan 10 haneli formatta olmalı.');
      setAuthLoading(false);
      return;
    }

    const { error } = await supabase.auth.verifyOtp({
      phone: normalizedPhone,
      token,
      type: 'sms',
    });

    if (error) {
      setAuthError(error.message);
    } else {
      setAuthNotice('Telefon doğrulandı.');
    }

    setAuthLoading(false);
  }, []);

  const signInWithOAuth = useCallback(async (provider: 'google' | 'apple') => {
    if (!supabase) return;

    setAuthLoading(true);
    setAuthError(null);
    setAuthNotice(null);

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: getAuthRedirectUrl(),
      },
    });

    if (error) {
      setAuthError(error.message);
      setAuthLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setSession(null);
    setRemoteReady(false);
    setIsAdmin(false);
  }, []);

  const selectLevel = useCallback((level: GradeLevel) => {
    setState(current => ({
      ...current,
      selectedLevel: level,
      screen: 'onboarding',
    }));
  }, []);

  const selectGrade = useCallback((gradeId: number) => {
    setState(current => ({
      ...current,
      gradeId,
      subjectId: null,
      unitId: null,
      screen: 'subjects',
      progress: { ...current.progress, gradeId },
    }));
  }, []);

  const selectSubject = useCallback((subjectId: string) => {
    setState(current => ({ ...current, subjectId, unitId: null, screen: 'path' }));
  }, []);

  const selectUnit = useCallback((unitId: string) => {
    setState(current => ({
      ...current,
      unitId,
      screen: 'slides',
      progress: { ...current.progress, currentUnit: unitId },
    }));
  }, []);

  const startQuiz = useCallback(() => {
    setState(current => ({ ...current, screen: 'quiz' }));
  }, []);

  const completeQuiz = useCallback((score: number) => {
    setState(current => ({
      ...current,
      screen: 'results',
      progress: {
        ...current.progress,
        completedUnits: current.unitId && !current.progress.completedUnits.includes(current.unitId)
          ? [...current.progress.completedUnits, current.unitId]
          : current.progress.completedUnits,
        unitScores: current.unitId
          ? {
            ...current.progress.unitScores,
            [current.unitId]: Math.max(score, current.progress.unitScores[current.unitId] || 0),
          }
          : current.progress.unitScores,
        currentUnit: current.unitId,
      },
    }));
  }, []);

  const goToPath = useCallback(() => {
    setState(current => ({ ...current, screen: 'path', unitId: null }));
  }, []);

  const goToSubjects = useCallback(() => {
    setState(current => ({ ...current, screen: 'subjects', subjectId: null, unitId: null }));
  }, []);

  const goToOnboarding = useCallback(() => {
    setState(current => ({
      ...current,
      screen: 'level',
      selectedLevel: null,
      gradeId: null,
      subjectId: null,
      unitId: null,
      progress: { ...current.progress, gradeId: 0 },
    }));
  }, []);

  const goToLevelSelection = useCallback(() => {
    setState(current => ({
      ...current,
      screen: 'level',
      selectedLevel: null,
    }));
  }, []);

  const goToAdmin = useCallback(() => {
    setState(current => ({
      ...current,
      screen: 'admin',
    }));
  }, []);

  return {
    ...state,
    authLoading,
    progressLoading,
    authError,
    authNotice,
    passwordRecovery,
    isAdmin,
    isAuthenticated: Boolean(currentUser),
    userEmail: currentUserEmail,
    signIn,
    signInWithPassword,
    signUp,
    resetPassword,
    updatePassword,
    sendPhoneOtp,
    verifyPhoneOtp,
    signInWithOAuth,
    signOut,
    selectLevel,
    selectGrade,
    selectSubject,
    selectUnit,
    startQuiz,
    completeQuiz,
    goToPath,
    goToSubjects,
    goToOnboarding,
    goToLevelSelection,
    goToAdmin,
  };
}

function normalizeTurkishPhone(phone: string): string | null {
  const digits = phone.replace(/\D/g, '');
  const withoutLeadingZero = digits.startsWith('0') ? digits.slice(1) : digits;

  if (/^5\d{9}$/.test(withoutLeadingZero)) {
    return `+90${withoutLeadingZero}`;
  }

  return null;
}
