import { useCallback, useEffect, useRef, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { GradeLevel, UserProgress } from '@/types/curriculum';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

export type AppScreen =
  | 'admin'
  | 'level'
  | 'tutorial'
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
  is_pro: boolean | null;
  subscription_status: string | null;
  pro_expires_at: string | null;
  mascot: string | null;
  accessory: string | null;
};

type VerificationStartResult = {
  ok: boolean;
  type?: 'email' | 'sms';
  identifier?: string;
};

export type PendingVerification = {
  type: 'email' | 'sms';
  identifier: string;
  purpose?: 'login' | 'signup';
  emailOtpType?: 'email' | 'signup';
} | null;

export type ProfilePreferences = {
  mascot: string;
  accessory: string;
};

const STORAGE_KEY = 'bilgi-yolu-progress';
const AUTH_REDIRECT_URL = cleanRedirectUrl(import.meta.env.VITE_AUTH_REDIRECT_URL as string | undefined);

const initialProgress: UserProgress = {
  gradeId: 0,
  completedUnits: [],
  unitScores: {},
  currentUnit: null,
};

const defaultProfilePreferences: ProfilePreferences = {
  mascot: 'Keçi',
  accessory: 'Gözlük',
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
  return progress.gradeId ? 'subjects' : 'tutorial';
}

function getUserEmail(user: User | null): string | null {
  return user?.email ?? null;
}

function getUserDisplayName(user: User | null): string | null {
  const metadata = user?.user_metadata;
  const candidates = [
    metadata?.display_name,
    metadata?.full_name,
    metadata?.name,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === 'string' && candidate.trim()) return candidate.trim();
  }

  return null;
}

function cleanRedirectUrl(url: string | undefined): string | null {
  const cleaned = (url ?? '').trim().replace(/\/+$/, '');
  return cleaned || null;
}

function getAuthRedirectUrl(): string {
  if (typeof window !== 'undefined') {
    const { hostname, origin } = window.location;
    if (hostname === 'localhost' || hostname === '127.0.0.1') return origin;
  }

  if (AUTH_REDIRECT_URL) return AUTH_REDIRECT_URL;
  return window.location.origin;
}

function isPasswordRecoveryUrl(): boolean {
  if (typeof window === 'undefined') return false;

  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
  const searchParams = new URLSearchParams(window.location.search);

  return hashParams.get('type') === 'recovery' || searchParams.get('type') === 'recovery';
}

function translateAuthError(message: string): string {
  const normalized = message.toLowerCase();

  if (normalized.includes('invalid login credentials')) {
    return 'E-posta, telefon numarası veya şifre hatalı.';
  }

  if (normalized.includes('email not confirmed')) {
    return 'E-posta adresin henüz doğrulanmamış. Lütfen gelen kutunu kontrol et.';
  }

  if (normalized.includes('user not found') || normalized.includes('signup disabled')) {
    return 'Bu bilgilerle kayıtlı bir hesap bulunamadı.';
  }

  if (normalized.includes('user already registered') || normalized.includes('already registered')) {
    return 'Bu e-posta adresiyle daha önce hesap oluşturulmuş.';
  }

  if (normalized.includes('otp') || normalized.includes('token') || normalized.includes('expired')) {
    return 'Doğrulama kodu geçersiz veya süresi dolmuş. Lütfen yeni kod iste.';
  }

  if (normalized.includes('password')) {
    return 'Şifre en az 8 karakter olmalı.';
  }

  if (normalized.includes('phone')) {
    return 'Telefon numarası geçersiz. Lütfen 5 ile başlayan 10 haneli numaranı yaz.';
  }

  if (normalized.includes('rate limit') || normalized.includes('too many')) {
    return 'Çok fazla deneme yapıldı. Lütfen birkaç dakika sonra tekrar dene.';
  }

  if (normalized.includes('provider is not enabled') || normalized.includes('unsupported provider')) {
    return 'Google girişi için Supabase Auth > Providers bölümünde Google sağlayıcısını aktif etmelisin.';
  }

  if (normalized.includes('provider is not enabled') || normalized.includes('unsupported provider')) {
    return 'Bu giriş yöntemi henüz aktif değil. Lütfen e-posta veya telefonla giriş yap.';
  }

  if (normalized.includes('network') || normalized.includes('fetch')) {
    return 'Bağlantı kurulamadı. İnternetini kontrol edip tekrar dene.';
  }

  return 'İşlem tamamlanamadı. Lütfen bilgilerini kontrol edip tekrar dene.';
}

function isProfilePro(profile: ProfileRow | null): boolean {
  if (!profile?.is_pro) return false;
  if (!profile.pro_expires_at) return true;

  return new Date(profile.pro_expires_at).getTime() > Date.now();
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
  const [authGateActive, setAuthGateActive] = useState(false);
  const [pendingVerification, setPendingVerification] = useState<PendingVerification>(null);
  const authGateActiveRef = useRef(false);
  const [passwordRecovery, setPasswordRecovery] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [profilePreferences, setProfilePreferences] = useState<ProfilePreferences>(defaultProfilePreferences);
  const currentUser = session?.user ?? null;
  const currentUserId = currentUser?.id ?? null;
  const currentUserEmail = getUserEmail(currentUser);
  const currentUserDisplayName = getUserDisplayName(currentUser);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }, [state.progress]);

  useEffect(() => {
    authGateActiveRef.current = authGateActive;
  }, [authGateActive]);

  useEffect(() => {
    if (!supabase) {
      setAuthLoading(false);
      setRemoteReady(true);
      return;
    }

    let active = true;

    const openedFromPasswordRecovery = isPasswordRecoveryUrl();

    if (openedFromPasswordRecovery) {
      setPasswordRecovery(true);
      setPendingVerification(null);
      setAuthNotice('Yeni şifreni belirleyebilirsin.');
    }

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      if (openedFromPasswordRecovery && data.session) {
        setPasswordRecovery(true);
        setPendingVerification(null);
      }
      setSession(data.session);
      setAuthLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((event, nextSession) => {
      setSession(nextSession);
      setAuthError(null);

      if (event === 'PASSWORD_RECOVERY') {
        setPasswordRecovery(true);
        setPendingVerification(null);
        setAuthGateActive(false);
        setAuthNotice('Yeni şifreni belirleyebilirsin.');
      }

      if (!nextSession && !authGateActiveRef.current) {
        setRemoteReady(false);
        setAuthNotice(null);
        setAuthGateActive(false);
      }
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!supabase || !currentUserId || passwordRecovery) return;

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
        .select('is_admin, is_pro, subscription_status, pro_expires_at')
        .eq('id', currentUserId)
        .maybeSingle();

      const { data: preferenceData } = await supabase
        .from('profiles')
        .select('mascot, accessory')
        .eq('id', currentUserId)
        .maybeSingle();

      if (!active) return;

      if (error) {
        setAuthError(translateAuthError(error.message));
        setProgressLoading(false);
        return;
      }

      if (profileError) {
        setAuthError(translateAuthError(profileError.message));
      } else {
        const profile = profileData as ProfileRow | null;
        setIsAdmin(Boolean(profile?.is_admin));
        setIsPro(isProfilePro(profile));
      }

      if (preferenceData) {
        const preferences = preferenceData as Pick<ProfileRow, 'mascot' | 'accessory'>;
        setProfilePreferences({
          mascot: preferences.mascot || defaultProfilePreferences.mascot,
          accessory: preferences.accessory || defaultProfilePreferences.accessory,
        });
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
  }, [currentUserDisplayName, currentUserEmail, currentUserId, passwordRecovery]);

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
          if (error) setAuthError(translateAuthError(error.message));
        });

      supabase
        .from('profiles')
        .update({ grade_id: progress.gradeId })
        .eq('id', currentUserId)
        .then(({ error }) => {
          if (error) setAuthError(translateAuthError(error.message));
        });
    }, 500);

    return () => window.clearTimeout(timer);
  }, [state.progress, currentUserId, remoteReady]);

  const signIn = useCallback(async (email: string): Promise<boolean> => {
    if (!supabase) return false;

    setAuthLoading(true);
    setAuthError(null);
    setAuthNotice(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: getAuthRedirectUrl(),
        shouldCreateUser: false,
      },
    });

    if (error) {
      setAuthError(translateAuthError(error.message));
      setAuthLoading(false);
      return false;
    } else {
      setAuthNotice('Giriş bağlantısı e-posta adresine gönderildi.');
    }
    setAuthLoading(false);
    return true;
  }, []);

  const beginPasswordVerification = useCallback(async (
    identifier: string,
    password: string,
  ): Promise<VerificationStartResult> => {
    if (!supabase) return { ok: false };

    setAuthLoading(true);
    setAuthGateActive(true);
    setAuthError(null);
    setAuthNotice(null);

    const trimmedIdentifier = identifier.trim();
    const normalizedPhone = trimmedIdentifier.includes('@') ? null : normalizeTurkishPhone(trimmedIdentifier);

    if (!trimmedIdentifier.includes('@') && !normalizedPhone) {
      setAuthError('Telefon numarası 5 ile başlayan 10 haneli formatta olmalı.');
      setAuthLoading(false);
      setAuthGateActive(false);
      return { ok: false };
    }

    const { error } = await supabase.auth.signInWithPassword(
      trimmedIdentifier.includes('@')
        ? { email: trimmedIdentifier, password }
        : { phone: normalizedPhone!, password },
    );

    if (error) {
      setAuthError(translateAuthError(error.message));
      setAuthLoading(false);
      setAuthGateActive(false);
      return { ok: false };
    }

    await supabase.auth.signOut({ scope: 'local' });
    setSession(null);
    setRemoteReady(false);

    if (trimmedIdentifier.includes('@')) {
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email: trimmedIdentifier,
        options: {
          emailRedirectTo: getAuthRedirectUrl(),
          shouldCreateUser: false,
        },
      });

      if (otpError) {
        setAuthError(translateAuthError(otpError.message));
        setAuthLoading(false);
        setAuthGateActive(false);
        return { ok: false };
      }

      setAuthNotice('Doğrulama kodu e-posta adresine gönderildi.');
      setPendingVerification({ type: 'email', identifier: trimmedIdentifier, purpose: 'login' });
      setAuthLoading(false);
      return { ok: true, type: 'email', identifier: trimmedIdentifier };
    }

    const { error: otpError } = await supabase.auth.signInWithOtp({ phone: normalizedPhone! });

    if (otpError) {
      setAuthError(translateAuthError(otpError.message));
      setAuthLoading(false);
      setAuthGateActive(false);
      return { ok: false };
    }

    setAuthNotice('Doğrulama kodu telefonuna gönderildi.');
    setPendingVerification({ type: 'sms', identifier: trimmedIdentifier });
    setAuthLoading(false);
    return { ok: true, type: 'sms', identifier: trimmedIdentifier };
  }, []);

  const signInWithPassword = useCallback(async (identifier: string, password: string) => {
    await beginPasswordVerification(identifier, password);
  }, [beginPasswordVerification]);

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
      setAuthError(translateAuthError(error.message));
    } else {
      if (data.session) {
        await supabase.auth.signOut({ scope: 'local' });
        setSession(null);

        const { error: otpError } = await supabase.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: getAuthRedirectUrl(),
            shouldCreateUser: false,
          },
        });

        if (otpError) {
          setAuthError(translateAuthError(otpError.message));
          setAuthLoading(false);
          return;
        }
      }

      setState(current => ({
        ...current,
        screen: 'tutorial',
        selectedLevel: null,
        gradeId: null,
        subjectId: null,
        unitId: null,
        progress: initialProgress,
      }));
      setAuthGateActive(true);
      setPendingVerification({
        type: 'email',
        identifier: email,
        purpose: 'signup',
        emailOtpType: data.session ? 'email' : 'signup',
      });
      setAuthNotice('Kayıt alındı. E-posta doğrulama kodu için gelen kutunu kontrol et.');
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
      setAuthError(translateAuthError(error.message));
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
      setAuthError(translateAuthError(error.message));
    } else {
      await supabase.auth.signOut({ scope: 'local' });
      setSession(null);
      setPasswordRecovery(false);
      setPendingVerification(null);
      setAuthGateActive(false);
      setAuthNotice('Şifren güncellendi. Yeni şifrenle giriş yapabilirsin.');
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

    const { error } = await supabase.auth.signInWithOtp({
      phone: normalizedPhone,
      options: { shouldCreateUser: false },
    });

    if (error) {
      setAuthError(translateAuthError(error.message));
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
      setAuthError(translateAuthError(error.message));
    } else {
      setAuthGateActive(false);
      setPendingVerification(null);
      setAuthNotice('Telefon doğrulandı.');
    }

    setAuthLoading(false);
  }, []);

  const verifyEmailOtp = useCallback(async (email: string, token: string) => {
    if (!supabase) return;

    setAuthLoading(true);
    setAuthGateActive(true);
    setAuthError(null);
    setAuthNotice(null);

    const emailOtpType = pendingVerification?.emailOtpType ?? (pendingVerification?.purpose === 'signup' ? 'signup' : 'email');
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: emailOtpType,
    });

    if (error) {
      setAuthError(translateAuthError(error.message));
    } else {
      setAuthGateActive(false);
      setPendingVerification(null);
      setAuthNotice('E-posta doğrulandı.');
    }

    setAuthLoading(false);
  }, [pendingVerification]);

  const signInWithOAuth = useCallback(async (provider: 'google' | 'apple') => {
    if (!supabase) return;

    setAuthLoading(true);
    setAuthError(null);
    setAuthNotice(null);

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: getAuthRedirectUrl(),
        queryParams: provider === 'google'
          ? {
            access_type: 'offline',
            prompt: 'select_account',
          }
          : undefined,
      },
    });

    if (error) {
      setAuthError(translateAuthError(error.message));
      setAuthLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setSession(null);
    setRemoteReady(false);
    setIsAdmin(false);
    setIsPro(false);
    setProfilePreferences(defaultProfilePreferences);
    setAuthGateActive(false);
    setPendingVerification(null);
    setState(current => ({
      ...current,
      screen: 'tutorial',
      selectedLevel: null,
      gradeId: null,
      subjectId: null,
      unitId: null,
      progress: initialProgress,
    }));
  }, []);

  const saveProfilePreferences = useCallback(async (preferences: ProfilePreferences): Promise<boolean> => {
    setProfilePreferences(preferences);

    if (!supabase || !currentUserId) return false;

    const { error } = await supabase
      .from('profiles')
      .update({
        mascot: preferences.mascot,
        accessory: preferences.accessory,
      })
      .eq('id', currentUserId);

    if (error) {
      setAuthError(translateAuthError(error.message));
      return false;
    }

    return true;
  }, [currentUserId]);

  const clearPendingVerification = useCallback(() => {
    setPendingVerification(null);
    setAuthGateActive(false);
    setAuthNotice(null);
  }, []);

  const selectLevel = useCallback((level: GradeLevel) => {
    setState(current => ({
      ...current,
      selectedLevel: level,
      screen: 'tutorial',
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
      screen: 'tutorial',
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
      screen: 'tutorial',
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
    pendingVerification,
    passwordRecovery,
    isAdmin,
    isPro,
    profilePreferences,
    isAuthenticated: Boolean(currentUser) && !authGateActive && !passwordRecovery && !pendingVerification,
    userEmail: currentUserEmail,
    userDisplayName: currentUserDisplayName,
    signIn,
    signInWithPassword,
    beginPasswordVerification,
    signUp,
    resetPassword,
    updatePassword,
    sendPhoneOtp,
    verifyPhoneOtp,
    verifyEmailOtp,
    clearPendingVerification,
    signInWithOAuth,
    signOut,
    saveProfilePreferences,
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
