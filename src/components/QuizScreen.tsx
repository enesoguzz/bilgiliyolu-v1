import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, Timer, X } from 'lucide-react';
import { getQuestionsForUnit } from '@/data/curriculum';
import { Question } from '@/types/curriculum';

interface QuizScreenProps {
  unitId: string;
  questions?: Question[];
  onComplete: (score: number) => void;
  onExit: () => void;
  onHome: () => void;
}

function shuffleAndPick(questions: Question[], count: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function QuizScreen({ unitId, questions: sourceQuestions, onComplete, onExit, onHome }: QuizScreenProps) {
  const questions = useMemo(() => shuffleAndPick(getQuestionsForUnit(unitId, sourceQuestions), 7), [sourceQuestions, unitId]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const q = questions[current];
  const progress = questions.length ? ((current + 1) / questions.length) * 100 : 0;

  if (!q) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6 safe-bottom">
        <p className="text-center text-sm text-muted-foreground">Bu ünite için alıştırma hazırlanıyor.</p>
      </div>
    );
  }

  const handleSelect = (index: number) => {
    if (showFeedback) return;
    setSelected(index);
    setShowFeedback(true);
  };

  const handleNext = () => {
    const nextCorrect = correct + (selected === q.correctIndex ? 1 : 0);

    if (current < questions.length - 1) {
      setCorrect(nextCorrect);
      setCurrent(value => value + 1);
      setSelected(null);
      setShowFeedback(false);
      return;
    }

    onComplete(Math.round((nextCorrect / questions.length) * 100));
  };

  const isCorrect = selected === q.correctIndex;

  return (
    <div className="min-h-screen bg-background pb-40 safe-bottom">
      <header className="sticky top-0 z-20 mx-auto flex h-16 max-w-md items-center justify-between border-b border-[#ead9cf] bg-white/95 px-5 backdrop-blur">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onExit}
            className="flex h-8 w-8 items-center justify-center rounded-full text-primary active:scale-95"
            aria-label="Sınavı kapat"
          >
            <X className="h-5 w-5" />
          </button>
          <button type="button" onClick={onHome} className="flex items-center gap-2 rounded-2xl active:scale-95" aria-label="Ana ekrana dön">
            <img src="/kecci-logo-thumb.png" alt="Keççi logo" className="h-8 w-8 rounded-full object-contain" />
            <span className="text-[20px] font-extrabold text-primary">Keççi</span>
          </button>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-[#e6e2dc] px-3 py-1 text-[#5a4538]">
          <Timer className="h-4 w-4" />
          <span className="text-xs font-extrabold">12:45</span>
        </div>
      </header>

      <main className="mx-auto flex max-w-md flex-col gap-7 px-5 pb-28 pt-5">
        <section className="space-y-2">
          <div className="flex items-end justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">Soru {current + 1} / {questions.length}</span>
            <span className="text-[11px] font-bold text-[#8b7564]">%{Math.round(progress)} Tamamlandı</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-[#e6e2dc]">
            <div className="h-full rounded-full bg-[#f8bb73] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </section>

        <section className="rounded-2xl border border-[#ead9cf] bg-white p-5 shadow-sm">
          <h1 className="mb-4 text-[24px] font-extrabold leading-8 text-primary">Soru Zamanı</h1>
          <p className="text-[16px] leading-7 text-[#2f1d14]">{q.text}</p>
        </section>

        <section className="flex flex-col gap-3">
          {q.options.map((option, index) => {
            const letter = String.fromCharCode(65 + index);
            const isSelected = selected === index;
            const isAnswer = index === q.correctIndex;
            const stateClass = showFeedback
              ? isAnswer
                ? 'border-primary bg-primary/10'
                : isSelected
                  ? 'border-destructive bg-destructive/10'
                  : 'border-[#ead9cf] bg-white'
              : isSelected
                ? 'border-primary bg-primary/10 ring-4 ring-primary/10'
                : 'border-[#ead9cf] bg-white hover:bg-[#fdf9f3]';

            return (
              <button
                key={`${letter}-${option}`}
                onClick={() => handleSelect(index)}
                disabled={showFeedback}
                className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-all active:scale-[0.98] ${stateClass}`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${
                    isSelected || (showFeedback && isAnswer) ? 'bg-primary text-white' : 'bg-[#e6e2dc] text-primary'
                  }`}
                >
                  {letter}
                </span>
                <span className={`flex-1 text-[15px] leading-6 ${isSelected ? 'font-extrabold text-primary' : 'font-semibold text-[#5a4538]'}`}>
                  {option}
                </span>
                {showFeedback && isAnswer && <CheckCircle2 className="h-5 w-5 text-primary" />}
              </button>
            );
          })}
        </section>

        {showFeedback && (
          <section className={`rounded-2xl p-4 ${isCorrect ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'}`}>
            <p className="text-sm font-extrabold">{isCorrect ? 'Doğru!' : 'Yanlış'}</p>
            <p className="mt-1 text-xs leading-5 text-[#5a4538]">{q.explanation}</p>
          </section>
        )}
      </main>

      <footer className="fixed bottom-0 left-1/2 z-30 w-full max-w-md -translate-x-1/2 border-t border-[#ead9cf] bg-white/95 px-4 pb-[max(env(safe-area-inset-bottom),1rem)] pt-3 shadow-[0_-8px_24px_rgba(122,58,24,0.08)] backdrop-blur">
        <button
          onClick={handleNext}
          disabled={!showFeedback}
          className={`flex h-12 w-full items-center justify-center gap-2 rounded-full text-[16px] font-extrabold transition-all ${
            showFeedback ? 'bg-primary text-white shadow-md active:scale-95' : 'bg-[#e6e2dc] text-[#8b7564] opacity-60'
          }`}
        >
          {current < questions.length - 1 ? 'Sonraki Soru' : 'Sonuçları Gör'}
          <ArrowRight className="h-5 w-5" />
        </button>
      </footer>
    </div>
  );
}
