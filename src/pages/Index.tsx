import { ReactNode, Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  Bell,
  BookOpen,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Crown,
  Download,
  Glasses,
  GraduationCap,
  HelpCircle,
  Lock,
  LogOut,
  Mail,
  Moon,
  Palette,
  Plus,
  RotateCcw,
  Route,
  Settings,
  Shield,
  Shirt,
  Smartphone,
  Star,
  Target,
  Trash2,
  Trophy,
  Type,
  User,
  Volume2,
  X,
  Zap,
} from 'lucide-react';
import { type ProfilePreferences, useAppState } from '@/hooks/useAppState';
import { useContentLibrary } from '@/hooks/useContentLibrary';
import { Unit } from '@/types/curriculum';
import { getPracticeExamsForGrade, PracticeExam } from '@/data/pdfCurriculum';

const AdminPanel = lazy(() => import('@/components/AdminPanel'));
const AuthScreen = lazy(() => import('@/components/AuthScreen'));
const TutorialScreen = lazy(() => import('@/components/TutorialScreen'));
const SubjectScreen = lazy(() => import('@/components/SubjectScreen'));
const PathScreen = lazy(() => import('@/components/PathScreen'));
const SlidesScreen = lazy(() => import('@/components/SlidesScreen'));
const QuizScreen = lazy(() => import('@/components/QuizScreen'));
const ResultsScreen = lazy(() => import('@/components/ResultsScreen'));

type UtilityScreen = 'profile' | 'settings' | 'tests' | null;

type RankInfo = {
  title: string;
  level: number;
  progress: number;
  nextTitle: string | null;
  pointsToNext: number;
  currentThreshold: number;
  nextThreshold: number;
  isGraduated: boolean;
};

const rankSteps = [
  { title: 'Yeni Başlayan', threshold: 0 },
  { title: 'Meraklı Öğrenci', threshold: 500 },
  { title: 'Çalışkan Keçi', threshold: 1500 },
  { title: 'Bilge Keçi', threshold: 3000 },
  { title: 'Uzman Keçi', threshold: 5000 },
  { title: 'Deneyimli Keçi', threshold: 8000 },
];

const mascotImageByName: Record<string, string> = {
  Keçi: '/mascots/thumbs/ankara-kecisi.png',
  Aslan: '/mascots/thumbs/aslan.png',
  Kartal: '/mascots/thumbs/kartal.png',
  Kanarya: '/mascots/thumbs/kanarya.png',
  Hamsi: '/mascots/thumbs/hamsi.png',
  Alageyik: '/mascots/thumbs/alageyik.png',
  'Telli Turna': '/mascots/thumbs/telli-turna.png',
  'Yaban Kazı': '/mascots/thumbs/yaban-kazi.png',
  'İnci Kefali': '/mascots/thumbs/inci-kefali.png',
};

function calculateTotalPoints(unitScores: Record<string, number>): number {
  return Object.values(unitScores).reduce((sum, score) => sum + Math.max(50, score * 5), 0);
}

function getGradeUnits(units: Unit[], gradeId: number | null): Unit[] {
  if (!gradeId) return [];
  return units.filter(unit => unit.gradeId === gradeId);
}

function calculateRank(totalPoints: number, completedUnits: string[], gradeUnits: Unit[]): RankInfo {
  const hasGraduated = gradeUnits.length > 0 && gradeUnits.every(unit => completedUnits.includes(unit.id));
  if (hasGraduated) {
    return {
      title: 'Mezun Deneyimli',
      level: rankSteps.length + 1,
      progress: 100,
      nextTitle: null,
      pointsToNext: 0,
      currentThreshold: totalPoints,
      nextThreshold: totalPoints,
      isGraduated: true,
    };
  }

  const currentIndex = rankSteps.reduce((bestIndex, step, index) => (
    totalPoints >= step.threshold ? index : bestIndex
  ), 0);
  const current = rankSteps[currentIndex];
  const next = rankSteps[currentIndex + 1] ?? null;
  const progress = next
    ? Math.min(100, Math.round(((totalPoints - current.threshold) / (next.threshold - current.threshold)) * 100))
    : 100;

  return {
    title: current.title,
    level: currentIndex + 1,
    progress,
    nextTitle: next?.title ?? null,
    pointsToNext: next ? Math.max(0, next.threshold - totalPoints) : 0,
    currentThreshold: current.threshold,
    nextThreshold: next?.threshold ?? current.threshold,
    isGraduated: false,
  };
}

function getProfilePreferencesKey(userEmail: string | null): string {
  return `kecci-profile-preferences:${userEmail ?? 'guest'}`;
}

function writeProfilePreferences(key: string, preferences: ProfilePreferences) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(preferences));
}

const PRACTICE_TEST_TIME_SECONDS = 30 * 60;

function formatDuration(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function getQuestionFeedback(question: PracticeExam['questions'][number], isCorrect: boolean): string {
  const correctOption = question.options[question.correctIndex];
  const base = question.explanation || `Doğru cevap: ${correctOption}`;
  const guidance = isCorrect
    ? 'Sorudaki ana ipucunu doğru yakaladın; aynı mantıkla diğer seçenekleri de hızlıca eleyebilirsin.'
    : `Doğru seçenek "${correctOption}". Sorunun istediği bilgiyi bulup seçenekleri onunla karşılaştırmak bu tip sorularda en güvenli yoldur.`;

  return `${base} ${guidance}`;
}

function ScreenFallback() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md items-center justify-center bg-background px-6">
      <p className="text-sm font-semibold text-muted-foreground">Ekran hazırlanıyor...</p>
    </div>
  );
}

export default function Index() {
  const app = useAppState();
  const content = useContentLibrary(app.isAuthenticated);
  const [utilityScreen, setUtilityScreen] = useState<UtilityScreen>(null);
  const [proPrompt, setProPrompt] = useState<string | null>(null);
  const totalPoints = calculateTotalPoints(app.progress.unitScores);
  const gradeUnits = useMemo(() => getGradeUnits(content.units, app.gradeId), [app.gradeId, content.units]);
  const rankInfo = useMemo(
    () => calculateRank(totalPoints, app.progress.completedUnits, gradeUnits),
    [app.progress.completedUnits, gradeUnits, totalPoints],
  );
  const activeMascotSrc = mascotImageByName[app.profilePreferences.mascot] ?? mascotImageByName.Keçi;
  const isAdminScreen = !utilityScreen && app.screen === 'admin' && app.isAdmin;
  const showBottomNav = app.isAuthenticated && !['admin', 'level', 'tutorial', 'onboarding', 'slides', 'quiz', 'results'].includes(app.screen);
  const unitSlides = useMemo(
    () => app.unitId ? content.remoteSlides.filter(slide => slide.unitId === app.unitId) : [],
    [app.unitId, content.remoteSlides],
  );
  const unitQuestions = useMemo(
    () => app.unitId ? content.remoteQuestions.filter(question => question.unitId === app.unitId) : [],
    [app.unitId, content.remoteQuestions],
  );

  useEffect(() => {
    setUtilityScreen(null);
  }, [app.screen]);

  useEffect(() => {
    if (app.unitId && (app.screen === 'slides' || app.screen === 'quiz')) {
      void content.loadUnitContent(app.unitId);
    }
  }, [app.screen, app.unitId, content.loadUnitContent]);

  useEffect(() => {
    if (isAdminScreen) {
      void content.refreshContent({ includeAll: true });
    }
  }, [content.refreshContent, isAdminScreen]);

  if (app.authLoading && !app.pendingVerification) {
    return (
      <div className="mx-auto flex min-h-screen max-w-md items-center justify-center bg-background px-6">
        <p className="text-sm font-semibold text-muted-foreground">Hesap bilgileri yükleniyor...</p>
      </div>
    );
  }

  if (!app.isAuthenticated) {
    return (
      <div className="mx-auto min-h-screen max-w-md">
        <Suspense fallback={<ScreenFallback />}>
          <AuthScreen
            loading={app.authLoading}
            error={app.authError}
            notice={app.authNotice}
            passwordRecovery={app.passwordRecovery}
            pendingVerification={app.pendingVerification}
            onBeginPasswordVerification={app.beginPasswordVerification}
            onSignUp={app.signUp}
            onResetPassword={app.resetPassword}
            onUpdatePassword={app.updatePassword}
            onSendPhoneOtp={app.sendPhoneOtp}
            onVerifyPhoneOtp={app.verifyPhoneOtp}
            onVerifyEmailOtp={app.verifyEmailOtp}
            onClearPendingVerification={app.clearPendingVerification}
            onOAuthSignIn={app.signInWithOAuth}
          />
        </Suspense>
      </div>
    );
  }

  return (
    <div className={isAdminScreen ? 'min-h-screen bg-background' : 'mx-auto min-h-screen max-w-md bg-background'}>
      {app.progressLoading && (
        <div className="bg-primary/10 px-4 py-2 text-center text-xs font-bold text-primary">
          İlerlemen buluttan yükleniyor...
        </div>
      )}
      {content.loading && (
        <div className="bg-primary/10 px-4 py-2 text-center text-xs font-bold text-primary">
          İçerikler güncelleniyor...
        </div>
      )}
      {content.error && (
        <div className="bg-destructive/10 px-4 py-2 text-center text-xs font-bold text-destructive">
          İçerik yüklenemedi: {content.error}
        </div>
      )}

      <Suspense fallback={<ScreenFallback />}>
        {utilityScreen === 'profile' && app.gradeId && (
          <ProfileScreen
            gradeId={app.gradeId}
            userEmail={app.userEmail}
            displayName={app.userDisplayName}
            totalPoints={totalPoints}
            rankInfo={rankInfo}
            isPro={app.isPro}
            savedPreferences={app.profilePreferences}
            onSavePreferences={app.saveProfilePreferences}
            onProFeature={setProPrompt}
            onHome={() => {
              setUtilityScreen(null);
              app.goToSubjects();
            }}
          />
        )}
        {utilityScreen === 'tests' && (
          <TestsScreen
            gradeId={app.gradeId ?? 1}
            isPro={app.isPro}
            onProFeature={setProPrompt}
            onHome={() => {
              setUtilityScreen(null);
              app.goToSubjects();
            }}
          />
        )}
        {utilityScreen === 'settings' && (
          <EnhancedSettingsScreen
            onSignOut={app.signOut}
            isAdmin={app.isAdmin}
            isPro={app.isPro}
            userEmail={app.userEmail}
            displayName={app.userDisplayName}
            gradeId={app.gradeId}
            totalPoints={totalPoints}
            completedUnits={app.progress.completedUnits.length}
            onAdmin={app.goToAdmin}
            onChangeGrade={() => {
              setUtilityScreen(null);
              app.goToOnboarding();
            }}
            onProFeature={setProPrompt}
            onResetPassword={app.resetPassword}
            onUpdateDisplayName={app.updateDisplayName}
            onHome={() => {
              setUtilityScreen(null);
              app.goToSubjects();
            }}
          />
        )}
        {!utilityScreen && app.screen === 'admin' && app.isAdmin && (
          <AdminPanel
            units={content.units}
            remoteUnits={content.remoteUnits}
            remoteSlides={content.remoteSlides}
            remoteQuestions={content.remoteQuestions}
            onBack={app.gradeId ? app.goToSubjects : app.goToOnboarding}
            onRefresh={() => content.refreshContent({ includeAll: true })}
          />
        )}
        {!utilityScreen && (app.screen === 'level' || app.screen === 'tutorial' || app.screen === 'onboarding') && (
          <TutorialScreen onSelectGrade={app.selectGrade} />
        )}
        {!utilityScreen && app.screen === 'subjects' && app.gradeId && (
          <SubjectScreen
            gradeId={app.gradeId}
            onSelectSubject={app.selectSubject}
            onBack={app.goToOnboarding}
            isAdmin={app.isAdmin}
            onAdmin={app.goToAdmin}
            onSignOut={app.signOut}
            onHome={app.goToSubjects}
            onProFeature={setProPrompt}
            onOpenTests={() => setUtilityScreen('tests')}
            isPro={app.isPro}
            completedUnits={app.progress.completedUnits}
            unitScores={app.progress.unitScores}
            units={content.units}
            totalPoints={totalPoints}
          />
        )}
        {!utilityScreen && app.screen === 'path' && app.gradeId && app.subjectId && (
          <PathScreen
            gradeId={app.gradeId}
            subjectId={app.subjectId}
            completedUnits={app.progress.completedUnits}
            unitScores={app.progress.unitScores}
            units={content.units}
            mascotSrc={activeMascotSrc}
            onSelectUnit={app.selectUnit}
            onBack={app.goToSubjects}
            onHome={app.goToSubjects}
          />
        )}
        {!utilityScreen && app.screen === 'slides' && app.unitId && (
          <SlidesScreen unitId={app.unitId} slides={unitSlides.length ? unitSlides : undefined} onComplete={app.startQuiz} onHome={app.goToSubjects} />
        )}
        {!utilityScreen && app.screen === 'quiz' && app.unitId && (
          <QuizScreen unitId={app.unitId} questions={unitQuestions.length ? unitQuestions : undefined} onComplete={app.completeQuiz} onExit={app.goToPath} onHome={app.goToSubjects} />
        )}
        {!utilityScreen && app.screen === 'results' && (
          <ResultsScreen
            score={app.progress.unitScores[app.unitId!] || 0}
            onContinue={app.goToPath}
            onHome={app.goToSubjects}
          />
        )}
      </Suspense>
      {showBottomNav && (
        <BottomNav
          active={utilityScreen ?? (app.screen === 'subjects' ? 'subjects' : 'journey')}
          canOpenJourney={Boolean(app.gradeId)}
          onSubjects={() => {
            setUtilityScreen(null);
            app.goToSubjects();
          }}
          onJourney={() => {
            setUtilityScreen(null);
            if (app.subjectId) app.goToPath();
            else app.selectSubject('turkce');
          }}
          isPro={app.isPro}
          onTests={() => {
            if (app.isPro) setUtilityScreen('tests');
            else setProPrompt('Denemelerim');
          }}
          onProfile={() => setUtilityScreen('profile')}
          onSettings={() => setUtilityScreen('settings')}
        />
      )}
      {proPrompt && (
        <ProFeatureModal
          feature={proPrompt}
          onClose={() => setProPrompt(null)}
          onSubscribe={() => {
            setProPrompt(null);
            setUtilityScreen('profile');
          }}
        />
      )}
    </div>
  );
}

function BottomNav({
  active,
  canOpenJourney,
  onSubjects,
  onJourney,
  onTests,
  isPro,
  onProfile,
  onSettings,
}: {
  active: 'subjects' | 'journey' | 'tests' | 'profile' | 'settings';
  canOpenJourney: boolean;
  onSubjects: () => void;
  onJourney: () => void;
  onTests: () => void;
  isPro: boolean;
  onProfile: () => void;
  onSettings: () => void;
}) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-40 flex w-full max-w-md -translate-x-1/2 items-center justify-around rounded-t-2xl border-t border-[#ead9cf] bg-white px-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 shadow-[0_-8px_24px_rgba(122,58,24,0.08)]">
      <NavButton label="Dersler" active={active === 'subjects'} onClick={onSubjects} icon={<BookOpen className="h-5 w-5" />} />
      <NavButton
        label="Yolculuk"
        active={active === 'journey'}
        onClick={onJourney}
        disabled={!canOpenJourney}
        icon={<Route className="h-5 w-5" />}
      />
      <NavButton label="Denemeler" active={active === 'tests'} onClick={onTests} icon={<ClipboardList className="h-5 w-5" />} locked={!isPro} />
      <NavButton label="Profil" active={active === 'profile'} onClick={onProfile} icon={<User className="h-5 w-5" />} />
      <NavButton label="Ayarlar" active={active === 'settings'} onClick={onSettings} icon={<Settings className="h-5 w-5" />} />
    </nav>
  );
}

function ProFeatureModal({
  feature,
  onClose,
  onSubscribe,
}: {
  feature: string;
  onClose: () => void;
  onSubscribe: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/35 px-4 pb-4 sm:items-center sm:pb-0">
      <section className="w-full max-w-md rounded-3xl border border-[#d9c2b8] bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ffddb9] text-primary">
            <Crown className="h-7 w-7" />
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ead9cf] text-primary active:scale-95"
            aria-label="Pro uyarısını kapat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-5 text-[12px] font-extrabold uppercase tracking-wider text-[#8b7564]">Pro Özellik</p>
        <h2 className="mt-1 text-[26px] font-extrabold leading-8 text-primary">{feature}</h2>
        <p className="mt-3 text-[15px] font-semibold leading-6 text-[#5a4538]">
          Bu özellik Keççi Pro hesaplara özeldir. Pro hesaba geçerek denemeler, özel maskotlar, aksesuarlar ve gelişmiş raporları açabilirsin.
        </p>
        <div className="mt-5 grid gap-3">
          <button
            type="button"
            onClick={onSubscribe}
            className="h-12 rounded-2xl bg-primary text-[15px] font-extrabold text-white active:scale-95"
          >
            Pro Hesap Al
          </button>
          <button
            type="button"
            onClick={onClose}
            className="h-12 rounded-2xl border border-primary bg-white text-[15px] font-extrabold text-primary active:scale-95"
          >
            Şimdilik Kapat
          </button>
        </div>
      </section>
    </div>
  );
}

function UtilityHeader({ title, subtitle, onHome }: { title: string; subtitle: string; onHome?: () => void }) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex h-16 max-w-md items-center gap-3 border-b border-[#ead9cf] bg-white/95 px-5 backdrop-blur">
      <button type="button" onClick={onHome} className="rounded-2xl active:scale-95" aria-label="Ana ekrana dön">
        <img src="/kecci-logo-thumb.png" alt="Keççi logo" className="h-10 w-10 rounded-full object-contain" />
      </button>
      <div>
        <p className="text-[20px] font-extrabold leading-none text-primary">{title}</p>
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b7564]">{subtitle}</p>
      </div>
    </header>
  );
}

function TestsScreen({
  gradeId,
  isPro,
  onProFeature,
  onHome,
}: {
  gradeId: number;
  isPro: boolean;
  onProFeature: (feature: string) => void;
  onHome: () => void;
}) {
  const tests = getPracticeExamsForGrade(gradeId);
  const [activeTest, setActiveTest] = useState<PracticeExam | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finishedScore, setFinishedScore] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(PRACTICE_TEST_TIME_SECONDS);

  const startTest = (exam: PracticeExam) => {
    setActiveTest(exam);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setFinishedScore(null);
    setTimeLeft(PRACTICE_TEST_TIME_SECONDS);
  };

  const answerQuestion = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
  };

  const nextQuestion = () => {
    if (!activeTest) return;

    const question = activeTest.questions[currentQuestion];
    const nextCorrectCount = correctCount + (selectedOption === question.correctIndex ? 1 : 0);

    if (currentQuestion < activeTest.questions.length - 1) {
      setCorrectCount(nextCorrectCount);
      setCurrentQuestion(value => value + 1);
      setSelectedOption(null);
      return;
    }

    setCorrectCount(nextCorrectCount);
    setFinishedScore(Math.round((nextCorrectCount / activeTest.questions.length) * 100));
  };

  useEffect(() => {
    if (!activeTest || finishedScore !== null) return undefined;

    const interval = window.setInterval(() => {
      setTimeLeft(value => {
        if (value <= 1) {
          window.clearInterval(interval);
          setActiveTest(null);
          setCurrentQuestion(0);
          setSelectedOption(null);
          setCorrectCount(0);
          setFinishedScore(null);
          onHome();
          return 0;
        }

        return value - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [activeTest, finishedScore, onHome]);

  return (
    <div className="min-h-screen overflow-y-auto bg-background pb-56 safe-bottom">
      <UtilityHeader title="Denemelerim" subtitle={isPro ? 'Pro deneme merkezi' : 'Pro özellik'} onHome={onHome} />
      <main className="mx-auto max-w-md px-5 pb-44 pt-6">
        {!isPro && (
          <section className="rounded-3xl border border-[#d9c2b8] bg-[#fdf9f3] p-6 shadow-[0_3px_0_0_#e0d7d0]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffddb9] text-primary">
              <Crown className="h-7 w-7" />
            </div>
            <h1 className="mt-4 text-[28px] font-extrabold leading-9 text-primary">Denemeler Pro hesaplara özel</h1>
            <p className="mt-2 text-[15px] font-semibold leading-6 text-[#5a4538]">
              Sınıfına göre genel denemeler, kazanım taramaları ve gelişmiş sonuç raporları Pro üyelikle açılır.
            </p>
            <button
              type="button"
              onClick={() => onProFeature('Denemelerim')}
              className="mt-5 h-12 w-full rounded-2xl bg-primary text-[15px] font-extrabold text-white active:scale-95"
            >
              Pro Hesap Al
            </button>
          </section>
        )}

        {isPro && !activeTest && (
          <>
            <section className="mb-6 rounded-3xl bg-primary p-6 text-white">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-white/75">Pro Aktif</p>
              <h1 className="mt-1 text-[28px] font-extrabold leading-9">Deneme merkezine hoş geldin</h1>
              <p className="mt-2 text-[15px] font-semibold leading-6 text-white/90">
                Buradan sınıfına uygun denemeleri çözebilir ve sonuçlarını takip edebilirsin.
              </p>
            </section>
            <section className="space-y-4">
              {tests.map(test => (
                <button
                  key={test.title}
                  type="button"
                  onClick={() => startTest(test)}
                  className="w-full rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-4 text-left shadow-[0_4px_0_0_#e0d7d0] active:translate-y-1 active:shadow-none"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ffddb9] text-primary">
                      <ClipboardList className="h-7 w-7" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[18px] font-extrabold text-primary">{test.title}</span>
                      <span className="block text-[12px] font-bold uppercase tracking-wider text-[#8b7564]">
                        {test.questions.length} soru - 30 dk
                      </span>
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-primary">
                      Başla
                    </span>
                  </div>
                </button>
              ))}
            </section>
          </>
        )}

        {isPro && activeTest && finishedScore === null && (
          <section className="mb-32 rounded-3xl border border-[#e0d7d0] bg-white p-5 shadow-[0_4px_0_0_#e0d7d0]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b7564]">{activeTest.title}</p>
                <h1 className="mt-1 text-[24px] font-extrabold text-primary">Soru {currentQuestion + 1} / {activeTest.questions.length}</h1>
              </div>
              <span className="rounded-full bg-[#e6e2dc] px-3 py-1 text-xs font-extrabold text-[#5a4538]">
                {formatDuration(timeLeft)}
              </span>
            </div>
            <p className="mt-4 text-[17px] font-semibold leading-7 text-[#2f1d14]">{activeTest.questions[currentQuestion].text}</p>
            <div className="mt-5 space-y-3">
              {activeTest.questions[currentQuestion].options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = index === activeTest.questions[currentQuestion].correctIndex;
                const revealed = selectedOption !== null;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => answerQuestion(index)}
                    className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left text-[15px] font-bold active:scale-[0.99] ${
                      revealed && isCorrect
                        ? 'border-green-500 bg-green-50 text-green-800 shadow-[inset_4px_0_0_#22c55e]'
                        : revealed && isSelected
                          ? 'border-red-200 bg-red-50 text-red-700'
                          : 'border-[#ead9cf] bg-[#fdf9f3] text-[#5a4538]'
                    }`}
                  >
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      revealed && isCorrect ? 'bg-green-600 text-white' : 'bg-white text-primary'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
            {selectedOption !== null && (
              <div className={`mt-5 rounded-2xl p-4 ${
                selectedOption === activeTest.questions[currentQuestion].correctIndex
                  ? 'bg-green-50 text-green-800 ring-1 ring-green-200'
                  : 'bg-red-50 text-red-700 ring-1 ring-red-100'
              }`}>
                <p className="text-sm font-extrabold">
                  {selectedOption === activeTest.questions[currentQuestion].correctIndex ? 'Doğru!' : 'Yanlış'}
                </p>
                <p className="mt-1 text-xs font-semibold leading-5 text-[#5a4538]">
                  {getQuestionFeedback(
                    activeTest.questions[currentQuestion],
                    selectedOption === activeTest.questions[currentQuestion].correctIndex,
                  )}
                </p>
              </div>
            )}
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={() => setActiveTest(null)}
                className="h-12 flex-1 rounded-2xl border border-primary bg-white text-[14px] font-extrabold text-primary active:scale-95"
              >
                Çık
              </button>
              <button
                type="button"
                disabled={selectedOption === null}
                onClick={nextQuestion}
                className="h-12 flex-[2] rounded-2xl bg-primary text-[14px] font-extrabold text-white active:scale-95 disabled:opacity-50"
              >
                {currentQuestion < activeTest.questions.length - 1 ? 'Sonraki Soru' : 'Sonucu Gör'}
              </button>
            </div>
          </section>
        )}

        {isPro && activeTest && finishedScore !== null && (
          <section className="rounded-3xl border border-[#e0d7d0] bg-[#fdf9f3] p-6 text-center shadow-[0_4px_0_0_#e0d7d0]">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b7564]">{activeTest.title}</p>
            <h1 className="mt-2 text-[48px] font-extrabold leading-none text-primary">%{finishedScore}</h1>
            <p className="mt-3 text-[15px] font-semibold leading-6 text-[#5a4538]">
              {correctCount} doğru, {activeTest.questions.length - correctCount} yanlış. Deneme sonucunu burada takip edebilirsin.
            </p>
            <div className="mt-5 grid gap-3">
              <button
                type="button"
                onClick={() => startTest(activeTest)}
                className="h-12 rounded-2xl border border-primary bg-white text-[14px] font-extrabold text-primary active:scale-95"
              >
                Tekrar Çöz
              </button>
              <button
                type="button"
                onClick={() => setActiveTest(null)}
                className="h-12 rounded-2xl bg-primary text-[14px] font-extrabold text-white active:scale-95"
              >
                Denemelere Dön
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function ProfileScreen({
  gradeId,
  userEmail,
  displayName,
  totalPoints,
  rankInfo,
  isPro,
  savedPreferences,
  onSavePreferences,
  onProFeature,
  onHome,
}: {
  gradeId: number;
  userEmail: string | null;
  displayName: string | null;
  totalPoints: number;
  rankInfo: RankInfo;
  isPro: boolean;
  savedPreferences: ProfilePreferences;
  onSavePreferences: (preferences: ProfilePreferences) => Promise<boolean>;
  onProFeature: (feature: string) => void;
  onHome: () => void;
}) {
  const mascotScrollRef = useRef<HTMLDivElement>(null);
  const preferencesKey = getProfilePreferencesKey(userEmail);
  const [saveNotice, setSaveNotice] = useState(false);
  const [selectedMascot, setSelectedMascot] = useState(() => savedPreferences.mascot);
  const [selectedAccessory, setSelectedAccessory] = useState(() => savedPreferences.accessory);
  const mascots = [
    { name: 'Keçi', src: '/mascots/thumbs/ankara-kecisi.png', pro: false },
    { name: 'Aslan', src: '/mascots/thumbs/aslan.png', pro: true },
    { name: 'Kartal', src: '/mascots/thumbs/kartal.png', pro: true },
    { name: 'Kanarya', src: '/mascots/thumbs/kanarya.png', pro: true },
    { name: 'Hamsi', src: '/mascots/thumbs/hamsi.png', pro: true },
    { name: 'Alageyik', src: '/mascots/thumbs/alageyik.png', pro: true },
    { name: 'Telli Turna', src: '/mascots/thumbs/telli-turna.png', pro: true },
    { name: 'Yaban Kazı', src: '/mascots/thumbs/yaban-kazi.png', pro: true },
    { name: 'İnci Kefali', src: '/mascots/thumbs/inci-kefali.png', pro: true },
  ];
  const scrollMascots = (direction: 'left' | 'right') => {
    mascotScrollRef.current?.scrollBy({
      left: direction === 'left' ? -150 : 150,
      behavior: 'smooth',
    });
  };
  const profileName = displayName || userEmail?.split('@')[0] || 'Keççi Öğrencisi';
  const selectedMascotData = mascots.find(mascot => mascot.name === selectedMascot) ?? mascots[0];

  useEffect(() => {
    setSelectedMascot(savedPreferences.mascot);
    setSelectedAccessory(savedPreferences.accessory);
  }, [savedPreferences.accessory, savedPreferences.mascot]);

  return (
    <div className="min-h-screen bg-background pb-56 safe-bottom">
      <UtilityHeader title="Profil" subtitle="Maskot ve ilerleme" onHome={onHome} />
      <main className="mx-auto max-w-md space-y-8 px-5 pb-32 pt-6">
        <section className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-[#ffb694] bg-white p-1">
              <img src={selectedMascotData.src} alt={`Seçili ${selectedMascotData.name} maskotu`} className="h-full w-full rounded-full object-contain" decoding="async" />
            </div>
            <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#f8bb73] text-[#351000] shadow-sm">
              <Trophy className="h-4 w-4 fill-[#351000]" />
            </div>
          </div>

          <h1 className="mt-4 text-[32px] font-extrabold leading-10 text-primary">{profileName}</h1>
          <p className="text-[20px] font-bold text-[#54433c]">{rankInfo.title} - Seviye {rankInfo.level}</p>
          {userEmail && <p className="mt-1 text-xs font-semibold text-[#86736b]">{userEmail}</p>}

          <div className="mt-5 w-full rounded-xl border border-[#d9c2b8] bg-[#f3f3f3] p-4 text-left">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-[12px] font-extrabold uppercase tracking-wider text-primary">
                {rankInfo.nextTitle ? `Sonraki Rütbe: ${rankInfo.nextTitle}` : 'Tebrikler: Tüm üniteler tamamlandı'}
              </span>
              <span className="shrink-0 text-[12px] font-bold text-[#54433c]">
                {rankInfo.nextTitle ? `${totalPoints} / ${rankInfo.nextThreshold} Puan` : `${totalPoints} Puan`}
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-[#e6e2dc]">
              <div className="h-full rounded-full bg-[#f8bb73]" style={{ width: `${rankInfo.progress}%` }} />
            </div>
            <p className="mt-2 text-[11px] font-semibold italic text-[#54433c]">
              {rankInfo.nextTitle
                ? `${rankInfo.nextTitle} rütbesine ulaşmak için ${rankInfo.pointsToNext} puan daha gerekli.`
                : 'Mezun Deneyimli rütbesi aktif. Harika iş çıkardın.'}
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-[#d9c2b8] bg-white p-5">
          <h2 className="text-[12px] font-extrabold uppercase tracking-wider text-primary">Rütbe Adımları</h2>
          <div className="mt-4 space-y-3">
            {rankSteps.map((step, index) => {
              const reached = totalPoints >= step.threshold || rankInfo.isGraduated;
              return (
                <div key={step.title} className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-extrabold ${
                    reached ? 'bg-primary text-white' : 'bg-[#e6e2dc] text-[#86736b]'
                  }`}>
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-extrabold ${reached ? 'text-primary' : 'text-[#86736b]'}`}>{step.title}</p>
                    <p className="text-[11px] font-semibold text-[#8b7564]">{step.threshold} puan</p>
                  </div>
                  {reached && <Check className="h-4 w-4 text-primary" />}
                </div>
              );
            })}
            <div className="flex items-center gap-3">
              <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-extrabold ${
                rankInfo.isGraduated ? 'bg-primary text-white' : 'bg-[#e6e2dc] text-[#86736b]'
              }`}>
                {rankSteps.length + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className={`text-sm font-extrabold ${rankInfo.isGraduated ? 'text-primary' : 'text-[#86736b]'}`}>Mezun Deneyimli</p>
                <p className="text-[11px] font-semibold text-[#8b7564]">Tüm dersler ve üniteler tamamlanınca açılır</p>
              </div>
              {rankInfo.isGraduated && <GraduationCap className="h-4 w-4 text-primary" />}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[12px] font-extrabold uppercase tracking-wider text-primary">Maskotunu Seç</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollMascots('left')}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9c2b8] bg-white text-primary active:scale-95"
                aria-label="Önceki maskotlar"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollMascots('right')}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9c2b8] bg-white text-primary active:scale-95"
                aria-label="Sonraki maskotlar"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div
            ref={mascotScrollRef}
            className="-mx-1 flex gap-4 overflow-x-auto scroll-smooth px-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {mascots.map((mascot, index) => (
              <button
                key={mascot.name}
                type="button"
                onClick={() => {
                  if (mascot.pro && !isPro) onProFeature(`${mascot.name} maskotu`);
                  else setSelectedMascot(mascot.name);
                }}
                className={`relative flex aspect-square w-28 shrink-0 flex-col items-center justify-center rounded-xl bg-white p-2 transition-all active:scale-95 ${
                  selectedMascot === mascot.name ? 'border-2 border-primary shadow-sm' : 'border border-[#d9c2b8]'
                }`}
              >
                <img src={mascot.src} alt={mascot.name} className={`mb-1 h-16 w-16 object-contain ${mascot.pro && !isPro ? 'grayscale-[0.2]' : ''}`} loading="lazy" decoding="async" />
                <span className={`mt-1 text-[12px] font-extrabold ${selectedMascot === mascot.name ? 'text-primary' : 'text-[#54433c]'}`}>{mascot.name}</span>
                {selectedMascot === mascot.name && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                )}
                {mascot.pro && !isPro && (
                  <span className="absolute right-1 top-1 rounded bg-primary px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-white">
                    Pro
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-[12px] font-extrabold uppercase tracking-wider text-primary">Karakterini Giydir</h2>
          <div className="grid grid-cols-2 gap-4">
            <WardrobeCard icon={<Glasses className="h-6 w-6" />} title="Gözlük" status={selectedAccessory === 'Gözlük' ? 'Kuşanıldı' : 'Açık'} active={selectedAccessory === 'Gözlük'} onClick={() => setSelectedAccessory('Gözlük')} />
            <WardrobeCard icon={<GraduationCap className="h-6 w-6" />} title="Mezuniyet" status={selectedAccessory === 'Mezuniyet' ? 'Kuşanıldı' : isPro ? 'Açık' : 'Pro'} active={selectedAccessory === 'Mezuniyet'} locked={!isPro} pro onClick={() => {
              if (!isPro) onProFeature('Mezuniyet aksesuarı');
              else setSelectedAccessory('Mezuniyet');
            }} />
            <WardrobeCard icon={<Shirt className="h-6 w-6" />} title="Pelerin" status={selectedAccessory === 'Pelerin' ? 'Kuşanıldı' : isPro ? 'Açık' : 'Kilitli'} active={selectedAccessory === 'Pelerin'} locked={!isPro} onClick={() => {
              if (!isPro) onProFeature('Pelerin aksesuarı');
              else setSelectedAccessory('Pelerin');
            }} />
            <WardrobeCard icon={<Plus className="h-6 w-6" />} title="Şapka Ekle" status={selectedAccessory === 'Şapka' ? 'Kuşanıldı' : isPro ? 'Açık' : 'Pro'} active={selectedAccessory === 'Şapka'} locked={!isPro} pro onClick={() => {
              if (!isPro) onProFeature('Şapka aksesuarı');
              else setSelectedAccessory('Şapka');
            }} />
          </div>
        </section>

        <section className="rounded-3xl border border-[#d9c2b8] bg-[#fdf9f3] p-5 shadow-[0_3px_0_0_#e0d7d0]">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffddb9] text-primary">
              <Crown className="h-6 w-6" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-extrabold uppercase tracking-wider text-[#8b7564]">Abonelik</p>
              <h2 className="text-[22px] font-extrabold text-primary">{isPro ? 'Keççi Pro Aktif' : 'Keççi Pro'}</h2>
              <p className="mt-1 text-[13px] font-semibold leading-5 text-[#5a4538]">
                {isPro
                  ? 'Denemelerim, özel maskotlar, aksesuarlar ve gelişmiş ilerleme raporları hesabında aktif.'
                  : 'Denemelerim, özel maskotlar, aksesuarlar ve gelişmiş ilerleme raporları Pro hesapla açılır.'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => !isPro && onProFeature('Keççi Pro aboneliği')}
            className="mt-4 h-12 w-full rounded-2xl bg-primary text-[15px] font-extrabold text-white active:scale-95"
          >
            {isPro ? 'Pro Hesap Aktif' : 'Pro Hesaba Geç'}
          </button>
        </section>

        <button
          type="button"
          onClick={async () => {
            const preferences = {
              mascot: selectedMascot,
              accessory: selectedAccessory,
            };
            const saved = await onSavePreferences(preferences);
            if (saved) {
              writeProfilePreferences(preferencesKey, preferences);
              setSaveNotice(true);
              window.setTimeout(() => setSaveNotice(false), 1800);
            }
          }}
          className="h-14 w-full rounded-xl bg-primary text-[20px] font-extrabold text-white shadow-sm transition-transform active:scale-95"
        >
          Kaydet
        </button>
        {saveNotice && (
          <p className="-mt-5 rounded-2xl bg-[#f7e5bc] px-4 py-3 text-center text-[13px] font-extrabold text-primary">
            {selectedMascot} maskotu ve {selectedAccessory} tercihin kaydedildi.
          </p>
        )}
      </main>
    </div>
  );
}

function WardrobeCard({
  icon,
  title,
  status,
  active = false,
  locked = false,
  pro = false,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  status: string;
  active?: boolean;
  locked?: boolean;
  pro?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-3 rounded-xl p-6 text-center transition-all active:scale-95 ${
        active
          ? 'border-2 border-[#ffb694] bg-white'
          : locked
            ? 'border border-dashed border-[#86736b] bg-[#f3f3f3] opacity-70'
            : 'border border-[#d9c2b8] bg-white hover:border-primary'
      }`}
    >
      <span className={`relative flex h-12 w-12 items-center justify-center rounded-full ${active ? 'bg-[#ffdbcc]' : 'bg-[#e6e2dc]'} text-primary`}>
        {icon}
        {locked && (
          <span className={`absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full ${pro ? 'bg-primary' : 'bg-[#605e5a]'} text-white`}>
            <Lock className="h-3 w-3 fill-white" />
          </span>
        )}
      </span>
      <span>
        <span className={`block text-[12px] font-extrabold ${active ? 'text-primary' : 'text-[#605e5a]'}`}>{title}</span>
        {status && (
          <span className={`block text-[10px] font-extrabold uppercase ${active || pro ? 'text-primary' : 'text-[#54433c]'}`}>
            {status}
          </span>
        )}
      </span>
    </button>
  );
}

function SettingsScreen({
  onSignOut,
  isAdmin,
  onAdmin,
  onHome,
}: {
  onSignOut: () => void;
  isAdmin: boolean;
  onAdmin: () => void;
  onHome: () => void;
}) {
  return (
    <div className="min-h-screen bg-background pb-40 safe-bottom">
      <UtilityHeader title="Ayarlar" subtitle="Hesap ve tercihler" onHome={onHome} />
      <main className="mx-auto max-w-md px-5 pt-6">
        <div className="space-y-3">
          <SettingsRow icon={<Palette className="h-5 w-5" />} title="Tema" description="Keççi kahverengi ve beyaz tema" />
          <SettingsRow icon={<Bell className="h-5 w-5" />} title="Bildirimler" description="Ders hatırlatmaları yakında" />
          {isAdmin && (
            <button type="button" onClick={onAdmin} className="w-full">
              <SettingsRow icon={<Shield className="h-5 w-5" />} title="Admin Paneli" description="İçerikleri düzenle" action />
            </button>
          )}
          <button
            type="button"
            onClick={onSignOut}
            className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-[16px] font-extrabold text-white active:scale-95"
          >
            <LogOut className="h-5 w-5" />
            Çıkış Yap
          </button>
        </div>
      </main>
    </div>
  );
}

function SettingsRow({ icon, title, description, action = false }: { icon: ReactNode; title: string; description: string; action?: boolean }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-4 text-left shadow-[0_3px_0_0_#e0d7d0]">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffddb9] text-primary">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[17px] font-extrabold text-primary">{title}</span>
        <span className="block text-[13px] font-semibold text-[#8b7564]">{description}</span>
      </span>
      {action && <ChevronRight className="h-5 w-5 text-[#8b7564]" />}
    </div>
  );
}

type AppSettings = {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'normal' | 'large';
  dailyGoal: '10' | '20' | '30';
  questionCount: '5' | '10' | '15';
  difficulty: 'easy' | 'normal' | 'hard';
  studyReminder: boolean;
  examReminder: boolean;
  achievementReminder: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  reducedMotion: boolean;
};

const SETTINGS_KEY = 'kecci-app-settings';

const defaultAppSettings: AppSettings = {
  theme: 'light',
  fontSize: 'normal',
  dailyGoal: '20',
  questionCount: '10',
  difficulty: 'normal',
  studyReminder: true,
  examReminder: true,
  achievementReminder: true,
  emailNotifications: true,
  soundEffects: true,
  reducedMotion: false,
};

function readAppSettings(): AppSettings {
  if (typeof window === 'undefined') return defaultAppSettings;

  try {
    const stored = window.localStorage.getItem(SETTINGS_KEY);
    return stored ? { ...defaultAppSettings, ...JSON.parse(stored) } : defaultAppSettings;
  } catch {
    return defaultAppSettings;
  }
}

function writeAppSettings(settings: AppSettings) {
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function applyVisualSettings(settings: AppSettings) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  root.classList.toggle('dark', settings.theme === 'dark' || (settings.theme === 'system' && prefersDark));
  root.style.fontSize = settings.fontSize === 'large' ? '17px' : '';
  root.style.scrollBehavior = settings.reducedMotion ? 'auto' : 'smooth';
}

function EnhancedSettingsScreen({
  onSignOut,
  isAdmin,
  isPro,
  userEmail,
  displayName,
  gradeId,
  totalPoints,
  completedUnits,
  onAdmin,
  onHome,
  onChangeGrade,
  onProFeature,
  onResetPassword,
  onUpdateDisplayName,
}: {
  onSignOut: () => void;
  isAdmin: boolean;
  isPro: boolean;
  userEmail: string | null;
  displayName: string | null;
  gradeId: number | null;
  totalPoints: number;
  completedUnits: number;
  onAdmin: () => void;
  onHome: () => void;
  onChangeGrade: () => void;
  onProFeature: (feature: string) => void;
  onResetPassword: (email: string) => Promise<void>;
  onUpdateDisplayName: (displayName: string) => Promise<boolean>;
}) {
  const [settings, setSettings] = useState<AppSettings>(() => readAppSettings());
  const [name, setName] = useState(displayName || userEmail?.split('@')[0] || '');
  const [notice, setNotice] = useState<string | null>(null);
  const [savingName, setSavingName] = useState(false);

  useEffect(() => {
    writeAppSettings(settings);
    applyVisualSettings(settings);
  }, [settings]);

  const updateSetting = <Key extends keyof AppSettings>(key: Key, value: AppSettings[Key]) => {
    setSettings(current => ({ ...current, [key]: value }));
  };

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(null), 2200);
  };

  const exportData = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      account: { displayName: name, email: userEmail, gradeId, isPro },
      progress: { totalPoints, completedUnits },
      settings,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'kecci-verilerim.json';
    link.click();
    URL.revokeObjectURL(url);
    showNotice('Verilerin indirildi.');
  };

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      showNotice('Bu tarayıcı bildirimleri desteklemiyor.');
      return;
    }

    const permission = await Notification.requestPermission();
    showNotice(permission === 'granted' ? 'Bildirim izni açıldı.' : 'Bildirim izni verilmedi.');
  };

  return (
    <div className="min-h-screen bg-background pb-40 safe-bottom">
      <UtilityHeader title="Ayarlar" subtitle="Hesap ve tercihler" onHome={onHome} />
      <main className="mx-auto max-w-md space-y-6 px-5 pt-6">
        {notice && (
          <div className="rounded-2xl bg-[#ffddb9] px-4 py-3 text-center text-[13px] font-extrabold text-primary">
            {notice}
          </div>
        )}

        <SettingsSection title="Hesap">
          <div className="rounded-2xl border border-[#e0d7d0] bg-white p-4 shadow-[0_3px_0_0_#e0d7d0]">
            <label className="text-[12px] font-extrabold uppercase tracking-wider text-[#8b7564]">Ad Soyad</label>
            <div className="mt-2 flex gap-2">
              <input
                value={name}
                onChange={event => setName(event.target.value)}
                className="min-w-0 flex-1 rounded-xl border border-[#d9c2b8] bg-[#fdf9f3] px-4 py-3 text-[15px] font-bold text-primary outline-none focus:border-primary"
                placeholder="Adını yaz"
              />
              <button
                type="button"
                disabled={savingName || !name.trim()}
                onClick={async () => {
                  setSavingName(true);
                  const saved = await onUpdateDisplayName(name);
                  setSavingName(false);
                  showNotice(saved ? 'Profil adın güncellendi.' : 'Ad güncellenemedi.');
                }}
                className="rounded-xl bg-primary px-4 text-[13px] font-extrabold text-white disabled:opacity-45"
              >
                Kaydet
              </button>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[13px] font-semibold text-[#8b7564]">
              <Mail className="h-4 w-4" />
              <span className="truncate">{userEmail || 'E-posta bulunamadı'}</span>
            </div>
          </div>

          <ActionRow icon={<RotateCcw className="h-5 w-5" />} title="Şifre Değiştir" description="E-postana güvenli şifre sıfırlama bağlantısı gönder" onClick={async () => {
            if (!userEmail) return showNotice('Önce e-posta ile giriş yapmalısın.');
            await onResetPassword(userEmail);
            showNotice('Şifre sıfırlama e-postası gönderildi.');
          }} />
          <ActionRow icon={<Target className="h-5 w-5" />} title="Sınıf Seviyesini Değiştir" description={gradeId ? `Mevcut sınıf: ${gradeId}. sınıf` : 'Sınıf seçimi yapılmadı'} onClick={onChangeGrade} />
        </SettingsSection>

        <SettingsSection title="Öğrenme Tercihleri">
          <SegmentedControl label="Günlük hedef" value={settings.dailyGoal} options={[['10', '10 dk'], ['20', '20 dk'], ['30', '30 dk']]} onChange={value => updateSetting('dailyGoal', value as AppSettings['dailyGoal'])} />
          <SegmentedControl label="Test soru sayısı" value={settings.questionCount} options={[['5', '5'], ['10', '10'], ['15', '15']]} onChange={value => updateSetting('questionCount', value as AppSettings['questionCount'])} />
          <SegmentedControl label="Zorluk seviyesi" value={settings.difficulty} options={[['easy', 'Kolay'], ['normal', 'Orta'], ['hard', 'Zor']]} onChange={value => updateSetting('difficulty', value as AppSettings['difficulty'])} />
        </SettingsSection>

        <SettingsSection title="Bildirimler">
          <ToggleRow icon={<Bell className="h-5 w-5" />} title="Günlük çalışma hatırlatıcısı" checked={settings.studyReminder} onChange={value => updateSetting('studyReminder', value)} />
          <ToggleRow icon={<Calendar className="h-5 w-5" />} title="Deneme sınavı hatırlatıcısı" checked={settings.examReminder} onChange={value => updateSetting('examReminder', value)} />
          <ToggleRow icon={<Trophy className="h-5 w-5" />} title="Başarı ve rozet bildirimleri" checked={settings.achievementReminder} onChange={value => updateSetting('achievementReminder', value)} />
          <ToggleRow icon={<Mail className="h-5 w-5" />} title="E-posta bildirimleri" checked={settings.emailNotifications} onChange={value => updateSetting('emailNotifications', value)} />
          <ActionRow icon={<Smartphone className="h-5 w-5" />} title="Cihaz Bildirim İzni" description="Tarayıcı bildirim iznini aç" onClick={requestNotificationPermission} />
        </SettingsSection>

        <SettingsSection title="Görünüm">
          <SegmentedControl label="Tema" value={settings.theme} options={[['light', 'Açık'], ['dark', 'Koyu'], ['system', 'Sistem']]} onChange={value => updateSetting('theme', value as AppSettings['theme'])} />
          <SegmentedControl label="Yazı boyutu" value={settings.fontSize} options={[['normal', 'Normal'], ['large', 'Büyük']]} onChange={value => updateSetting('fontSize', value as AppSettings['fontSize'])} />
          <ToggleRow icon={<Volume2 className="h-5 w-5" />} title="Ses efektleri" checked={settings.soundEffects} onChange={value => updateSetting('soundEffects', value)} />
          <ToggleRow icon={<Zap className="h-5 w-5" />} title="Animasyonları azalt" checked={settings.reducedMotion} onChange={value => updateSetting('reducedMotion', value)} />
        </SettingsSection>

        <SettingsSection title="Pro ve Abonelik">
          <ActionRow icon={<Crown className="h-5 w-5" />} title={isPro ? 'Keççi Pro Aktif' : 'Pro Hesaba Geç'} description={isPro ? 'Denemelerim ve özel maskotlar açık' : 'Denemelerim, özel maskotlar ve gelişmiş raporlar'} onClick={() => !isPro && onProFeature('Keççi Pro aboneliği')} />
        </SettingsSection>

        <SettingsSection title="Gizlilik ve Güvenlik">
          <ActionRow icon={<Download className="h-5 w-5" />} title="Verilerimi İndir" description="Hesap, ilerleme ve ayar özetini JSON olarak al" onClick={exportData} />
          <ActionRow icon={<Trash2 className="h-5 w-5" />} title="Hesabı Silme Talebi" description="Destek ekibine hesap silme talebi oluştur" onClick={() => showNotice('Hesap silme akışı için destek formu hazırlanacak.')} />
        </SettingsSection>

        <SettingsSection title="Destek">
          {isAdmin && <ActionRow icon={<Shield className="h-5 w-5" />} title="Admin Paneli" description="İçerikleri ve kullanıcı özelliklerini düzenle" onClick={onAdmin} />}
          <ActionRow icon={<HelpCircle className="h-5 w-5" />} title="Yardım ve SSS" description="Sık sorulan soruları aç" onClick={() => showNotice('Yardım merkezi yakında ayrı sayfa olarak açılacak.')} />
          <ActionRow icon={<AlertTriangle className="h-5 w-5" />} title="Hata Bildir" description="Geri bildirim göndermek için hazırla" onClick={() => window.location.href = `mailto:${userEmail || 'destek@kecci.app'}?subject=Keççi hata bildirimi`} />
          <div className="rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-4 text-[13px] font-bold text-[#8b7564]">Uygulama sürümü: 0.0.0</div>
        </SettingsSection>

        <button type="button" onClick={onSignOut} className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-[16px] font-extrabold text-white active:scale-95">
          <LogOut className="h-5 w-5" />
          Çıkış Yap
        </button>
      </main>
    </div>
  );
}

function SettingsSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="px-1 text-[12px] font-extrabold uppercase tracking-wider text-primary">{title}</h2>
      {children}
    </section>
  );
}

function ActionRow({ icon, title, description, onClick }: { icon: ReactNode; title: string; description: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex w-full items-center gap-4 rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-4 text-left shadow-[0_3px_0_0_#e0d7d0] active:scale-[0.99]">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffddb9] text-primary">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[17px] font-extrabold text-primary">{title}</span>
        <span className="block text-[13px] font-semibold text-[#8b7564]">{description}</span>
      </span>
      <ChevronRight className="h-5 w-5 text-[#8b7564]" />
    </button>
  );
}

function ToggleRow({ icon, title, checked, onChange }: { icon: ReactNode; title: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-4 shadow-[0_3px_0_0_#e0d7d0]">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffddb9] text-primary">{icon}</span>
      <span className="flex-1 text-[16px] font-extrabold text-primary">{title}</span>
      <button type="button" role="switch" aria-checked={checked} onClick={() => onChange(!checked)} className={`flex h-8 w-14 items-center rounded-full p-1 transition-colors ${checked ? 'bg-primary' : 'bg-[#d9c2b8]'}`}>
        <span className={`h-6 w-6 rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-0'}`} />
      </button>
    </div>
  );
}

function SegmentedControl({ label, value, options, onChange }: { label: string; value: string; options: Array<[string, string]>; onChange: (value: string) => void }) {
  return (
    <div className="rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-4 shadow-[0_3px_0_0_#e0d7d0]">
      <div className="mb-3 flex items-center gap-2 text-[14px] font-extrabold text-primary">
        <Type className="h-4 w-4" />
        {label}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {options.map(([optionValue, optionLabel]) => (
          <button key={optionValue} type="button" onClick={() => onChange(optionValue)} className={`h-10 rounded-xl text-[13px] font-extrabold transition-all active:scale-95 ${value === optionValue ? 'bg-primary text-white' : 'bg-white text-[#8b7564] ring-1 ring-[#d9c2b8]'}`}>
            {optionLabel}
          </button>
        ))}
      </div>
    </div>
  );
}

function NavButton({
  label,
  icon,
  active = false,
  disabled = false,
  locked = false,
  onClick,
}: {
  label: string;
  icon: ReactNode;
  active?: boolean;
  disabled?: boolean;
  locked?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex min-w-16 flex-col items-center justify-center rounded-xl px-3 py-1.5 text-[11px] font-extrabold transition-all ${
        active ? 'bg-[#ffddb9]/45 text-primary' : 'text-[#8b7564]'
      } ${disabled ? 'cursor-not-allowed opacity-45' : 'active:scale-95'}`}
    >
      {icon}
      <span className="mt-0.5 flex items-center gap-1">
        {label}
        {locked && <Lock className="h-3 w-3" />}
      </span>
    </button>
  );
}
