import { ReactNode, Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react';
import {
  Bell,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Crown,
  Glasses,
  GraduationCap,
  Lock,
  LogOut,
  Palette,
  Plus,
  Route,
  Settings,
  Shield,
  Shirt,
  Star,
  Trophy,
  User,
  X,
} from 'lucide-react';
import { type ProfilePreferences, useAppState } from '@/hooks/useAppState';
import { useContentLibrary } from '@/hooks/useContentLibrary';

const AdminPanel = lazy(() => import('@/components/AdminPanel'));
const AuthScreen = lazy(() => import('@/components/AuthScreen'));
const TutorialScreen = lazy(() => import('@/components/TutorialScreen'));
const SubjectScreen = lazy(() => import('@/components/SubjectScreen'));
const PathScreen = lazy(() => import('@/components/PathScreen'));
const SlidesScreen = lazy(() => import('@/components/SlidesScreen'));
const QuizScreen = lazy(() => import('@/components/QuizScreen'));
const ResultsScreen = lazy(() => import('@/components/ResultsScreen'));

type UtilityScreen = 'profile' | 'settings' | 'tests' | null;

function calculateTotalPoints(unitScores: Record<string, number>): number {
  return Object.values(unitScores).reduce((sum, score) => sum + Math.max(50, score * 5), 0);
}

function getProfilePreferencesKey(userEmail: string | null): string {
  return `kecci-profile-preferences:${userEmail ?? 'guest'}`;
}

function writeProfilePreferences(key: string, preferences: ProfilePreferences) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(preferences));
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
            isPro={app.isPro}
            onProFeature={setProPrompt}
            onHome={() => {
              setUtilityScreen(null);
              app.goToSubjects();
            }}
          />
        )}
        {utilityScreen === 'settings' && (
          <SettingsScreen
            onSignOut={app.signOut}
            isAdmin={app.isAdmin}
            onAdmin={app.goToAdmin}
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
  isPro,
  onProFeature,
  onHome,
}: {
  isPro: boolean;
  onProFeature: (feature: string) => void;
  onHome: () => void;
}) {
  const tests = [
    { title: '1. Sınıf Genel Deneme', questions: 20, duration: '30 dk', score: null },
    { title: 'Türkçe Kazanım Denemesi', questions: 12, duration: '18 dk', score: 86 },
    { title: 'Matematik Hızlı Tarama', questions: 15, duration: '20 dk', score: null },
  ];
  const sampleQuestions = [
    {
      text: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?',
      options: ['Her şey yolunda.', 'Bugün okula gittim.', 'Yanlız kalmak istiyorum.', 'Kitabımı bitirdim.'],
      correctIndex: 2,
    },
    {
      text: '8 + 7 işleminin sonucu kaçtır?',
      options: ['13', '14', '15', '16'],
      correctIndex: 2,
    },
    {
      text: 'Bitkilerin büyümek için en çok ihtiyaç duyduğu şeylerden biri hangisidir?',
      options: ['Güneş ışığı', 'Kum', 'Plastik', 'Taş'],
      correctIndex: 0,
    },
  ];
  const [activeTest, setActiveTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finishedScore, setFinishedScore] = useState<number | null>(null);

  const startTest = (title: string) => {
    setActiveTest(title);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setFinishedScore(null);
  };

  const answerQuestion = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
  };

  const nextQuestion = () => {
    const question = sampleQuestions[currentQuestion];
    const nextCorrectCount = correctCount + (selectedOption === question.correctIndex ? 1 : 0);

    if (currentQuestion < sampleQuestions.length - 1) {
      setCorrectCount(nextCorrectCount);
      setCurrentQuestion(value => value + 1);
      setSelectedOption(null);
      return;
    }

    setCorrectCount(nextCorrectCount);
    setFinishedScore(Math.round((nextCorrectCount / sampleQuestions.length) * 100));
  };

  return (
    <div className="min-h-screen bg-background pb-40 safe-bottom">
      <UtilityHeader title="Denemelerim" subtitle={isPro ? 'Pro deneme merkezi' : 'Pro özellik'} onHome={onHome} />
      <main className="mx-auto max-w-md px-5 pt-6">
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
                  onClick={() => startTest(test.title)}
                  className="w-full rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-4 text-left shadow-[0_4px_0_0_#e0d7d0] active:translate-y-1 active:shadow-none"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ffddb9] text-primary">
                      <ClipboardList className="h-7 w-7" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[18px] font-extrabold text-primary">{test.title}</span>
                      <span className="block text-[12px] font-bold uppercase tracking-wider text-[#8b7564]">
                        {test.questions} soru - {test.duration}
                      </span>
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-primary">
                      {test.score ? `%${test.score}` : 'Başla'}
                    </span>
                  </div>
                </button>
              ))}
            </section>
          </>
        )}

        {isPro && activeTest && finishedScore === null && (
          <section className="rounded-3xl border border-[#e0d7d0] bg-white p-5 shadow-[0_4px_0_0_#e0d7d0]">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b7564]">{activeTest}</p>
            <h1 className="mt-1 text-[24px] font-extrabold text-primary">Soru {currentQuestion + 1} / {sampleQuestions.length}</h1>
            <p className="mt-4 text-[17px] font-semibold leading-7 text-[#2f1d14]">{sampleQuestions[currentQuestion].text}</p>
            <div className="mt-5 space-y-3">
              {sampleQuestions[currentQuestion].options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = index === sampleQuestions[currentQuestion].correctIndex;
                const revealed = selectedOption !== null;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => answerQuestion(index)}
                    className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left text-[15px] font-bold active:scale-[0.99] ${
                      revealed && isCorrect
                        ? 'border-primary bg-primary/10 text-primary'
                        : revealed && isSelected
                          ? 'border-red-200 bg-red-50 text-red-700'
                          : 'border-[#ead9cf] bg-[#fdf9f3] text-[#5a4538]'
                    }`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-primary">{String.fromCharCode(65 + index)}</span>
                    {option}
                  </button>
                );
              })}
            </div>
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
                {currentQuestion < sampleQuestions.length - 1 ? 'Sonraki Soru' : 'Sonucu Gör'}
              </button>
            </div>
          </section>
        )}

        {isPro && activeTest && finishedScore !== null && (
          <section className="rounded-3xl border border-[#e0d7d0] bg-[#fdf9f3] p-6 text-center shadow-[0_4px_0_0_#e0d7d0]">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b7564]">{activeTest}</p>
            <h1 className="mt-2 text-[48px] font-extrabold leading-none text-primary">%{finishedScore}</h1>
            <p className="mt-3 text-[15px] font-semibold leading-6 text-[#5a4538]">
              {correctCount} doğru, {sampleQuestions.length - correctCount} yanlış. Deneme sonucunu burada takip edebilirsin.
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
  const nextRankPoints = 1500;
  const rankProgress = Math.min(100, Math.round((totalPoints / nextRankPoints) * 100));
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
          <p className="text-[20px] font-bold text-[#54433c]">Bilge Keçi - Seviye 5</p>
          {userEmail && <p className="mt-1 text-xs font-semibold text-[#86736b]">{userEmail}</p>}

          <div className="mt-5 w-full rounded-xl border border-[#d9c2b8] bg-[#f3f3f3] p-4 text-left">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-[12px] font-extrabold uppercase tracking-wider text-primary">Sonraki Rütbe: Üstad Keçi</span>
              <span className="shrink-0 text-[12px] font-bold text-[#54433c]">{totalPoints} / {nextRankPoints} Puan</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-[#e6e2dc]">
              <div className="h-full rounded-full bg-[#f8bb73]" style={{ width: `${rankProgress}%` }} />
            </div>
            <p className="mt-2 text-[11px] font-semibold italic text-[#54433c]">
              Üstad rütbesine ulaşmak için {Math.max(0, nextRankPoints - totalPoints)} puan daha gerekli.
            </p>
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
