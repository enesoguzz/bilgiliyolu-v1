import { ReactNode, useEffect, useRef, useState } from 'react';
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
import { useAppState } from '@/hooks/useAppState';
import { useContentLibrary } from '@/hooks/useContentLibrary';
import AdminPanel from '@/components/AdminPanel';
import AuthScreen from '@/components/AuthScreen';
import TutorialScreen from '@/components/TutorialScreen';
import SubjectScreen from '@/components/SubjectScreen';
import PathScreen from '@/components/PathScreen';
import SlidesScreen from '@/components/SlidesScreen';
import QuizScreen from '@/components/QuizScreen';
import ResultsScreen from '@/components/ResultsScreen';

type UtilityScreen = 'profile' | 'settings' | null;

function calculateTotalPoints(unitScores: Record<string, number>): number {
  return Object.values(unitScores).reduce((sum, score) => sum + Math.max(50, score * 5), 0);
}

export default function Index() {
  const app = useAppState();
  const content = useContentLibrary(app.isAuthenticated);
  const [utilityScreen, setUtilityScreen] = useState<UtilityScreen>(null);
  const [proPrompt, setProPrompt] = useState<string | null>(null);
  const totalPoints = calculateTotalPoints(app.progress.unitScores);
  const showBottomNav = app.isAuthenticated && !['admin', 'level', 'tutorial', 'onboarding', 'slides', 'quiz', 'results'].includes(app.screen);

  useEffect(() => {
    setUtilityScreen(null);
  }, [app.screen]);

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
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-md bg-background">
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

      {utilityScreen === 'profile' && app.gradeId && (
        <ProfileScreen
          gradeId={app.gradeId}
          userEmail={app.userEmail}
          displayName={app.userDisplayName}
          totalPoints={totalPoints}
          onProFeature={setProPrompt}
        />
      )}
      {utilityScreen === 'settings' && (
        <SettingsScreen onSignOut={app.signOut} isAdmin={app.isAdmin} onAdmin={app.goToAdmin} />
      )}
      {!utilityScreen && app.screen === 'admin' && app.isAdmin && (
        <AdminPanel
          units={content.units}
          remoteUnits={content.remoteUnits}
          remoteSlides={content.remoteSlides}
          remoteQuestions={content.remoteQuestions}
          onBack={app.gradeId ? app.goToSubjects : app.goToOnboarding}
          onRefresh={content.refreshContent}
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
          onProFeature={setProPrompt}
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
        />
      )}
      {!utilityScreen && app.screen === 'slides' && app.unitId && (
        <SlidesScreen unitId={app.unitId} slides={content.slides} onComplete={app.startQuiz} />
      )}
      {!utilityScreen && app.screen === 'quiz' && app.unitId && (
        <QuizScreen unitId={app.unitId} questions={content.questions} onComplete={app.completeQuiz} onExit={app.goToPath} />
      )}
      {!utilityScreen && app.screen === 'results' && (
        <ResultsScreen
          score={app.progress.unitScores[app.unitId!] || 0}
          onContinue={app.goToPath}
          onHome={app.goToSubjects}
        />
      )}
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
          onTests={() => setProPrompt('Denemelerim')}
          onProfile={() => setUtilityScreen('profile')}
          onSettings={() => setUtilityScreen('settings')}
        />
      )}
      {proPrompt && <ProFeatureModal feature={proPrompt} onClose={() => setProPrompt(null)} />}
    </div>
  );
}

function BottomNav({
  active,
  canOpenJourney,
  onSubjects,
  onJourney,
  onTests,
  onProfile,
  onSettings,
}: {
  active: 'subjects' | 'journey' | 'profile' | 'settings';
  canOpenJourney: boolean;
  onSubjects: () => void;
  onJourney: () => void;
  onTests: () => void;
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
      <NavButton label="Denemeler" onClick={onTests} icon={<ClipboardList className="h-5 w-5" />} locked />
      <NavButton label="Profil" active={active === 'profile'} onClick={onProfile} icon={<User className="h-5 w-5" />} />
      <NavButton label="Ayarlar" active={active === 'settings'} onClick={onSettings} icon={<Settings className="h-5 w-5" />} />
    </nav>
  );
}

function ProFeatureModal({ feature, onClose }: { feature: string; onClose: () => void }) {
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
            onClick={onClose}
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

function UtilityHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex h-16 max-w-md items-center gap-3 border-b border-[#ead9cf] bg-white/95 px-5 backdrop-blur">
      <img src="/kecci-logo.png" alt="Keççi logo" className="h-10 w-10 rounded-full object-contain" />
      <div>
        <p className="text-[20px] font-extrabold leading-none text-primary">{title}</p>
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b7564]">{subtitle}</p>
      </div>
    </header>
  );
}

function ProfileScreen({
  gradeId,
  userEmail,
  displayName,
  totalPoints,
  onProFeature,
}: {
  gradeId: number;
  userEmail: string | null;
  displayName: string | null;
  totalPoints: number;
  onProFeature: (feature: string) => void;
}) {
  const mascotScrollRef = useRef<HTMLDivElement>(null);
  const [saveNotice, setSaveNotice] = useState(false);
  const mascots = [
    { name: 'Keçi', src: '/mascots/ankara-kecisi.png', pro: false },
    { name: 'Aslan', src: '/mascots/aslan.png', pro: true },
    { name: 'Kartal', src: '/mascots/kartal.png', pro: true },
    { name: 'Kanarya', src: '/mascots/kanarya.png', pro: true },
    { name: 'Hamsi', src: '/mascots/hamsi.png', pro: true },
    { name: 'Alageyik', src: '/mascots/alageyik.png', pro: true },
    { name: 'Telli Turna', src: '/mascots/telli-turna.png', pro: true },
    { name: 'Yaban Kazı', src: '/mascots/yaban-kazi.png', pro: true },
    { name: 'İnci Kefali', src: '/mascots/inci-kefali.png', pro: true },
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

  return (
    <div className="min-h-screen bg-background pb-44 safe-bottom">
      <UtilityHeader title="Profil" subtitle="Maskot ve ilerleme" />
      <main className="mx-auto max-w-md space-y-8 px-5 pt-6">
        <section className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-[#ffb694] bg-white p-1">
              <img src="/mascots/ankara-kecisi.png" alt="Seçili Keççi maskotu" className="h-full w-full rounded-full object-contain" />
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
                onClick={() => mascot.pro && onProFeature(`${mascot.name} maskotu`)}
                className={`relative flex aspect-square w-28 shrink-0 flex-col items-center justify-center rounded-xl bg-white p-2 transition-all active:scale-95 ${
                  index === 0 ? 'border-2 border-primary shadow-sm' : 'border border-[#d9c2b8]'
                }`}
              >
                <img src={mascot.src} alt={mascot.name} className={`mb-1 h-16 w-16 object-contain ${mascot.pro ? 'grayscale-[0.2]' : ''}`} />
                <span className={`mt-1 text-[12px] font-extrabold ${index === 0 ? 'text-primary' : 'text-[#54433c]'}`}>{mascot.name}</span>
                {index === 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                )}
                {mascot.pro && (
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
            <WardrobeCard icon={<Glasses className="h-6 w-6" />} title="Gözlük" status="Kuşanıldı" active />
            <WardrobeCard icon={<GraduationCap className="h-6 w-6" />} title="Mezuniyet" status="Pro" locked pro onClick={() => onProFeature('Mezuniyet aksesuarı')} />
            <WardrobeCard icon={<Shirt className="h-6 w-6" />} title="Pelerin" status="Kilitli" locked onClick={() => onProFeature('Pelerin aksesuarı')} />
            <WardrobeCard icon={<Plus className="h-6 w-6" />} title="Şapka Ekle" status="" />
          </div>
        </section>

        <section className="rounded-3xl border border-[#d9c2b8] bg-[#fdf9f3] p-5 shadow-[0_3px_0_0_#e0d7d0]">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffddb9] text-primary">
              <Crown className="h-6 w-6" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-extrabold uppercase tracking-wider text-[#8b7564]">Abonelik</p>
              <h2 className="text-[22px] font-extrabold text-primary">Keççi Pro</h2>
              <p className="mt-1 text-[13px] font-semibold leading-5 text-[#5a4538]">
                Denemelerim, özel maskotlar, aksesuarlar ve gelişmiş ilerleme raporları Pro hesapla açılır.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onProFeature('Keççi Pro aboneliği')}
            className="mt-4 h-12 w-full rounded-2xl bg-primary text-[15px] font-extrabold text-white active:scale-95"
          >
            Pro Hesaba Geç
          </button>
        </section>

        <button
          type="button"
          onClick={() => {
            setSaveNotice(true);
            window.setTimeout(() => setSaveNotice(false), 1800);
          }}
          className="h-14 w-full rounded-xl bg-primary text-[20px] font-extrabold text-white shadow-sm transition-transform active:scale-95"
        >
          Kaydet
        </button>
        {saveNotice && (
          <p className="-mt-5 rounded-2xl bg-[#f7e5bc] px-4 py-3 text-center text-[13px] font-extrabold text-primary">
            Profil tercihlerin kaydedildi.
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

function SettingsScreen({ onSignOut, isAdmin, onAdmin }: { onSignOut: () => void; isAdmin: boolean; onAdmin: () => void }) {
  return (
    <div className="min-h-screen bg-background pb-40 safe-bottom">
      <UtilityHeader title="Ayarlar" subtitle="Hesap ve tercihler" />
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
