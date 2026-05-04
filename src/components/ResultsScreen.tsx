interface ResultsScreenProps {
  score: number;
  onContinue: () => void;
}

export default function ResultsScreen({ score, onContinue }: ResultsScreenProps) {
  const passed = score >= 60;
  const emoji = score >= 90 ? '🏆' : score >= 70 ? '⭐' : score >= 60 ? '👍' : '💪';
  const message = score >= 90
    ? 'Mükemmel!'
    : score >= 70
      ? 'Harika iş!'
      : score >= 60
        ? 'İyi gidiyorsun!'
        : 'Tekrar dene, yapabilirsin!';

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 safe-bottom">
      <div className="text-7xl mb-4">{emoji}</div>
      <h1 className="text-2xl font-extrabold text-foreground mb-2">{message}</h1>
      <p className="text-muted-foreground mb-6">
        Doğru cevap oranın: <span className={`font-extrabold ${passed ? 'text-primary' : 'text-destructive'}`}>%{score}</span>
      </p>

      <div className="w-full max-w-xs">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke={passed ? 'hsl(var(--primary))' : 'hsl(var(--destructive))'}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${(score / 100) * 314} 314`}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-extrabold text-foreground">%{score}</span>
          </div>
        </div>

        <button
          onClick={onContinue}
          className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-2xl text-base active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
        >
          Devam Et
        </button>
      </div>
    </div>
  );
}
