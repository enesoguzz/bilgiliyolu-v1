import { BookOpen, GraduationCap, School } from 'lucide-react';
import { GradeLevel } from '@/types/curriculum';

interface LevelSelectionScreenProps {
  onSelectLevel: (level: GradeLevel) => void;
}

const levels: Array<{
  id: GradeLevel;
  title: string;
  subtitle: string;
  icon: typeof School;
}> = [
  {
    id: 'primary',
    title: 'İlkokul',
    subtitle: '1, 2, 3 ve 4. sınıf',
    icon: School,
  },
  {
    id: 'middle',
    title: 'Ortaokul',
    subtitle: '5, 6, 7 ve 8. sınıf',
    icon: BookOpen,
  },
  {
    id: 'high',
    title: 'Lise',
    subtitle: '9, 10, 11 ve 12. sınıf',
    icon: GraduationCap,
  },
];

export default function LevelSelectionScreen({ onSelectLevel }: LevelSelectionScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col px-4 py-8 safe-bottom">
      <div className="max-w-sm mx-auto w-full">
        <div className="mb-8">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">İkinci adım</p>
          <h1 className="text-2xl font-extrabold text-foreground">Okul kademeni seç</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Sana uygun sınıf ve dersleri buna göre göstereceğiz.
          </p>
        </div>

        <div className="space-y-3">
          {levels.map(level => {
            const Icon = level.icon;

            return (
              <button
                key={level.id}
                type="button"
                onClick={() => onSelectLevel(level.id)}
                className="w-full rounded-2xl border-2 border-border bg-card p-4 text-left transition-all hover:border-primary hover:bg-primary/5 active:scale-[0.98] flex items-center gap-4"
              >
                <span className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </span>
                <span>
                  <span className="block text-base font-extrabold text-foreground">{level.title}</span>
                  <span className="block text-xs font-semibold text-muted-foreground mt-0.5">{level.subtitle}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
