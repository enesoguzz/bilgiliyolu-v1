import { Unit } from '@/types/curriculum';
import { getUnitsForSubjectAndGrade, subjects } from '@/data/curriculum';
import { ArrowLeft, CheckCircle2, Lock, Play } from 'lucide-react';

interface PathScreenProps {
  gradeId: number;
  subjectId: string;
  completedUnits: string[];
  unitScores: Record<string, number>;
  units?: Unit[];
  onSelectUnit: (unitId: string) => void;
  onBack: () => void;
}

export default function PathScreen({
  gradeId,
  subjectId,
  completedUnits,
  unitScores,
  units: sourceUnits,
  onSelectUnit,
  onBack,
}: PathScreenProps) {
  const units = getUnitsForSubjectAndGrade(subjectId, gradeId, sourceUnits);
  const subject = subjects.find(item => item.id === subjectId);

  const getUnitStatus = (unit: Unit, index: number): 'completed' | 'active' | 'locked' => {
    if (completedUnits.includes(unit.id)) return 'completed';
    if (index === 0 || completedUnits.includes(units[index - 1]?.id)) return 'active';
    return 'locked';
  };

  return (
    <div className="min-h-screen bg-background flex flex-col px-4 py-6 safe-bottom">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-xl hover:bg-muted active:scale-95 transition-all"
          aria-label="Ders seçimine dön"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <h1 className="text-xl font-extrabold text-foreground">{subject?.icon} {subject?.name}</h1>
          <p className="text-xs text-muted-foreground">{gradeId}. Sınıf</p>
        </div>
      </div>

      {units.length === 0 ? (
        <div className="max-w-sm mx-auto w-full rounded-xl border border-border bg-card p-4">
          <p className="text-sm font-bold text-foreground">Bu ders için içerik hazırlanıyor.</p>
          <p className="text-xs text-muted-foreground mt-1">Yakında yeni üniteler eklenecek.</p>
        </div>
      ) : (
        <div className="max-w-sm mx-auto w-full flex flex-col items-center gap-4">
          {units.map((unit, index) => {
            const status = getUnitStatus(unit, index);
            const score = unitScores[unit.id];
            const isEven = index % 2 === 0;

            return (
              <div
                key={unit.id}
                className={`flex items-center w-full ${isEven ? '' : 'flex-row-reverse'}`}
              >
                <div className="flex-1" />

                <button
                  onClick={() => status !== 'locked' && onSelectUnit(unit.id)}
                  disabled={status === 'locked'}
                  className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all w-48 min-h-44
                    ${status === 'completed' ? 'bg-primary/10 border-primary' : ''}
                    ${status === 'active' ? 'bg-card border-primary shadow-lg shadow-primary/20 hover:shadow-xl' : ''}
                    ${status === 'locked' ? 'bg-muted border-border opacity-50' : ''}
                    ${status !== 'locked' ? 'active:scale-95' : ''}
                  `}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg
                    ${status === 'completed' ? 'bg-primary text-primary-foreground' : ''}
                    ${status === 'active' ? 'bg-primary text-primary-foreground animate-pulse' : ''}
                    ${status === 'locked' ? 'bg-muted-foreground/20 text-muted-foreground' : ''}
                  `}>
                    {status === 'completed' && <CheckCircle2 className="w-6 h-6" />}
                    {status === 'active' && <Play className="w-6 h-6" />}
                    {status === 'locked' && <Lock className="w-5 h-5" />}
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-foreground">{unit.title}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{unit.description}</p>
                    {score !== undefined && (
                      <p className="text-xs font-bold text-primary mt-1">%{score}</p>
                    )}
                  </div>
                </button>

                <div className="flex-1" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
