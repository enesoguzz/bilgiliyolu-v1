import { useMemo, useState } from 'react';
import { getQuestionsForUnit } from '@/data/curriculum';
import { Question } from '@/types/curriculum';

interface QuizScreenProps {
  unitId: string;
  onComplete: (score: number) => void;
}

function shuffleAndPick(questions: Question[], count: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function QuizScreen({ unitId, onComplete }: QuizScreenProps) {
  const questions = useMemo(() => shuffleAndPick(getQuestionsForUnit(unitId), 7), [unitId]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const q = questions[current];
  const progress = questions.length ? ((current + 1) / questions.length) * 100 : 0;

  if (!q) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 safe-bottom">
        <p className="text-sm text-muted-foreground text-center">Bu ünite için alıştırma hazırlanıyor.</p>
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

    const score = Math.round((nextCorrect / questions.length) * 100);
    onComplete(score);
  };

  const isCorrect = selected === q.correctIndex;

  return (
    <div className="min-h-screen bg-background flex flex-col safe-bottom">
      <div className="px-4 pt-4 pb-2">
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1 text-center">
          Soru {current + 1} / {questions.length}
        </p>
      </div>

      <div className="flex-1 flex flex-col px-4 py-6 max-w-sm mx-auto w-full">
        <h2 className="text-lg font-bold text-foreground mb-6">{q.text}</h2>

        <div className="space-y-3">
          {q.options.map((option, index) => {
            let optionClass = 'bg-card border-2 border-border';

            if (showFeedback) {
              if (index === q.correctIndex) optionClass = 'bg-primary/10 border-2 border-primary';
              else if (index === selected) optionClass = 'bg-destructive/10 border-2 border-destructive';
            } else if (index === selected) {
              optionClass = 'bg-primary/10 border-2 border-primary';
            }

            return (
              <button
                key={option}
                onClick={() => handleSelect(index)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-xl transition-all active:scale-[0.98] ${optionClass}`}
              >
                <span className="text-sm font-semibold text-foreground">{option}</span>
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className={`mt-6 p-4 rounded-xl ${isCorrect ? 'bg-primary/10' : 'bg-destructive/10'}`}>
            <p className={`text-sm font-bold mb-1 ${isCorrect ? 'text-primary' : 'text-destructive'}`}>
              {isCorrect ? '✓ Doğru!' : '✕ Yanlış'}
            </p>
            <p className="text-xs text-foreground/70">{q.explanation}</p>
          </div>
        )}
      </div>

      {showFeedback && (
        <div className="px-4 pb-6">
          <button
            onClick={handleNext}
            className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-2xl text-base active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
          >
            {current < questions.length - 1 ? 'Sonraki Soru' : 'Sonuçları Gör'}
          </button>
        </div>
      )}
    </div>
  );
}
