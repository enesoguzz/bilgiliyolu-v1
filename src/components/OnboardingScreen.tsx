import { grades } from '@/data/curriculum';
import { GradeLevel } from '@/types/curriculum';

interface OnboardingScreenProps {
  onSelectGrade: (gradeId: number) => void;
}

const levelLabels: Record<GradeLevel, string> = {
  primary: 'İlkokul',
  middle: 'Ortaokul',
  high: 'Lise',
};

const levelEmojis: Record<GradeLevel, string> = {
  primary: '🌱',
  middle: '🌿',
  high: '🌳',
};

export default function OnboardingScreen({ onSelectGrade }: OnboardingScreenProps) {
  const grouped = grades.reduce((acc, grade) => {
    if (!acc[grade.level]) acc[grade.level] = [];
    acc[grade.level].push(grade);
    return acc;
  }, {} as Record<GradeLevel, typeof grades>);

  const levels: GradeLevel[] = ['primary', 'middle', 'high'];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-8 safe-bottom">
      <div className="text-4xl mb-2">🎓</div>
      <h1 className="text-2xl font-extrabold text-foreground mb-1">Öğrenmeye Başla!</h1>
      <p className="text-muted-foreground text-sm mb-8">Sınıfını seç, hemen başlayalım</p>

      <div className="w-full max-w-sm space-y-6">
        {levels.map(level => (
          <div key={level}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{levelEmojis[level]}</span>
              <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                {levelLabels[level]}
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {grouped[level]?.map(grade => (
                <button
                  key={grade.id}
                  onClick={() => onSelectGrade(grade.id)}
                  className="bg-card border-2 border-border hover:border-primary hover:bg-primary/5 rounded-xl p-3 text-center transition-all active:scale-95"
                >
                  <span className="text-lg font-extrabold text-foreground">{grade.id}</span>
                  <span className="block text-[10px] text-muted-foreground font-semibold mt-0.5">sınıf</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
