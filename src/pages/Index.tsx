import { LogOut, Shield } from 'lucide-react';
import { useAppState } from '@/hooks/useAppState';
import { useContentLibrary } from '@/hooks/useContentLibrary';
import AdminPanel from '@/components/AdminPanel';
import AuthScreen from '@/components/AuthScreen';
import LevelSelectionScreen from '@/components/LevelSelectionScreen';
import OnboardingScreen from '@/components/OnboardingScreen';
import SubjectScreen from '@/components/SubjectScreen';
import PathScreen from '@/components/PathScreen';
import SlidesScreen from '@/components/SlidesScreen';
import QuizScreen from '@/components/QuizScreen';
import ResultsScreen from '@/components/ResultsScreen';

export default function Index() {
  const app = useAppState();
  const content = useContentLibrary(app.isAuthenticated);

  if (app.authLoading) {
    return (
      <div className="max-w-md mx-auto min-h-screen bg-background flex items-center justify-center px-6">
        <p className="text-sm font-semibold text-muted-foreground">Hesap bilgileri yükleniyor...</p>
      </div>
    );
  }

  if (!app.isAuthenticated) {
    return (
      <div className="max-w-md mx-auto min-h-screen">
        <AuthScreen
          loading={app.authLoading}
          error={app.authError}
          notice={app.authNotice}
          onSignIn={app.signIn}
          onSignUp={app.signUp}
        />
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-xs font-bold text-muted-foreground">Bilgi Yolu</p>
          <p className="text-xs text-foreground truncate max-w-52">{app.userEmail}</p>
        </div>
        <div className="flex items-center gap-2">
          {app.isAdmin && (
            <button
              type="button"
              onClick={app.goToAdmin}
              className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center active:scale-95 transition-all"
              aria-label="Admin paneli"
            >
              <Shield className="w-4 h-4 text-foreground" />
            </button>
          )}
          <button
            type="button"
            onClick={app.signOut}
            className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center active:scale-95 transition-all"
            aria-label="Çıkış yap"
          >
            <LogOut className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>

      {app.progressLoading && (
        <div className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold text-center">
          İlerlemen buluttan yükleniyor...
        </div>
      )}
      {content.loading && (
        <div className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold text-center">
          İçerikler güncelleniyor...
        </div>
      )}
      {content.error && (
        <div className="px-4 py-2 bg-destructive/10 text-destructive text-xs font-bold text-center">
          İçerik yüklenemedi: {content.error}
        </div>
      )}

      {app.screen === 'admin' && app.isAdmin && (
        <AdminPanel
          units={content.units}
          remoteUnits={content.remoteUnits}
          remoteSlides={content.remoteSlides}
          remoteQuestions={content.remoteQuestions}
          onBack={app.gradeId ? app.goToSubjects : app.goToOnboarding}
          onRefresh={content.refreshContent}
        />
      )}
      {app.screen === 'level' && (
        <LevelSelectionScreen onSelectLevel={app.selectLevel} />
      )}
      {app.screen === 'onboarding' && app.selectedLevel && (
        <OnboardingScreen
          level={app.selectedLevel}
          onSelectGrade={app.selectGrade}
          onBack={app.goToLevelSelection}
        />
      )}
      {app.screen === 'subjects' && app.gradeId && (
        <SubjectScreen
          gradeId={app.gradeId}
          onSelectSubject={app.selectSubject}
          onBack={app.goToOnboarding}
        />
      )}
      {app.screen === 'path' && app.gradeId && app.subjectId && (
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
      {app.screen === 'slides' && app.unitId && (
        <SlidesScreen unitId={app.unitId} slides={content.slides} onComplete={app.startQuiz} />
      )}
      {app.screen === 'quiz' && app.unitId && (
        <QuizScreen unitId={app.unitId} questions={content.questions} onComplete={app.completeQuiz} />
      )}
      {app.screen === 'results' && (
        <ResultsScreen
          score={app.progress.unitScores[app.unitId!] || 0}
          onContinue={app.goToPath}
        />
      )}
    </div>
  );
}
