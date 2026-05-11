import { ArrowLeft } from 'lucide-react';
import { grades } from '@/data/curriculum';
import { GradeLevel } from '@/types/curriculum';

interface OnboardingScreenProps {
  level: GradeLevel;
  onSelectGrade: (gradeId: number) => void;
  onBack: () => void;
}

const levelLabels: Record<GradeLevel, string> = {
  primary: 'İlkokul',
  middle: 'Ortaokul',
};

const levelDescriptions: Record<GradeLevel, string> = {
  primary: '1, 2, 3 ve 4. sınıf',
  middle: '5, 6, 7 ve 8. sınıf',
};

export default function OnboardingScreen({ level, onSelectGrade, onBack }: OnboardingScreenProps) {
  const levelGrades = grades.filter(grade => grade.level === level);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-8 safe-bottom">
      <div className="w-full max-w-sm">
        <button
          type="button"
          onClick={onBack}
          className="mb-6 p-2 -ml-2 rounded-xl hover:bg-muted active:scale-95 transition-all"
          aria-label="Kademe seçimine dön"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>

        <div className="text-4xl mb-2">🎓</div>
        <h1 className="text-2xl font-extrabold text-foreground mb-1">{levelLabels[level]}</h1>
        <p className="text-muted-foreground text-sm mb-8">{levelDescriptions[level]} arasından sınıfını seç</p>

        <div className="grid grid-cols-2 gap-3">
          {levelGrades.map(grade => (
            <button
              key={grade.id}
              onClick={() => onSelectGrade(grade.id)}
              className="bg-card border-2 border-border hover:border-primary hover:bg-primary/5 rounded-2xl p-5 text-center transition-all active:scale-95 min-h-28"
            >
              <span className="text-3xl font-extrabold text-foreground">{grade.id}</span>
              <span className="block text-xs text-muted-foreground font-bold mt-1">sınıf</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
