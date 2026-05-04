import { getSubjectsForGrade } from '@/data/curriculum';
import { ArrowLeft } from 'lucide-react';

interface SubjectScreenProps {
  gradeId: number;
  onSelectSubject: (subjectId: string) => void;
  onBack: () => void;
}

const colorMap: Record<string, string> = {
  primary: 'bg-primary/10 border-primary/30',
  info: 'bg-info/10 border-info/30',
  warning: 'bg-warning/10 border-warning/30',
  success: 'bg-success/10 border-success/30',
  accent: 'bg-accent/10 border-accent/30',
  destructive: 'bg-destructive/10 border-destructive/30',
};

export default function SubjectScreen({ gradeId, onSelectSubject, onBack }: SubjectScreenProps) {
  const subjects = getSubjectsForGrade(gradeId);

  return (
    <div className="min-h-screen bg-background flex flex-col px-4 py-6 safe-bottom">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-xl hover:bg-muted active:scale-95 transition-all"
          aria-label="Sınıf seçimine dön"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <h1 className="text-xl font-extrabold text-foreground">{gradeId}. Sınıf</h1>
          <p className="text-xs text-muted-foreground">Dersini seç</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto w-full">
        {subjects.map(subject => (
          <button
            key={subject.id}
            onClick={() => onSelectSubject(subject.id)}
            className={`${colorMap[subject.color] || 'bg-muted border-border'} border-2 rounded-2xl p-4 text-left transition-all active:scale-95 hover:shadow-md min-h-28`}
          >
            <span className="text-3xl block mb-2">{subject.icon}</span>
            <span className="text-sm font-bold text-foreground">{subject.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
