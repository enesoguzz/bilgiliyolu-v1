import { Unit } from '@/types/curriculum';
import { getUnitsForSubjectAndGrade, subjects } from '@/data/curriculum';
import { ArrowLeft, BookOpen, CheckCircle2, Edit3, Lock, Play, Route } from 'lucide-react';

interface PathScreenProps {
  gradeId: number;
  subjectId: string;
  completedUnits: string[];
  unitScores: Record<string, number>;
  units?: Unit[];
  onSelectUnit: (unitId: string) => void;
  onBack: () => void;
}

const subjectNames: Record<string, string> = {
  turkce: 'Türkçe',
  matematik: 'Matematik',
  'hayat-bilgisi': 'Hayat Bilgisi',
  fen: 'Fen Bilimleri',
  sosyal: 'Sosyal Bilgiler',
  ingilizce: 'İngilizce',
};

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
  const subjectName = subjectNames[subjectId] ?? subject?.name ?? 'Ders';
  const roadHeight = Math.max(800, units.length * 180);

  const getUnitStatus = (unit: Unit, index: number): 'completed' | 'active' | 'locked' => {
    if (completedUnits.includes(unit.id)) return 'completed';
    if (index === 0 || completedUnits.includes(units[index - 1]?.id)) return 'active';
    return 'locked';
  };

  const activeUnit = units.find((unit, index) => getUnitStatus(unit, index) === 'active') ?? units[0];

  return (
    <div className="min-h-screen bg-[#f9f9f9] pb-40 safe-bottom">
      <header className="sticky top-0 z-20 mx-auto flex h-16 max-w-md items-center justify-between border-b border-[#d9c2b8] bg-[#f9f9f9]/95 px-5 backdrop-blur">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9c2b8] bg-white text-primary active:scale-95"
            aria-label="Ders seçimine dön"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#ffdbcc]">
            <img src="/kecci-logo.png" alt="Keççi logo" className="h-8 w-8 object-contain" />
          </span>
          <div>
            <p className="text-[20px] font-extrabold leading-none text-primary">Keççi</p>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#86736b]">{subjectName}</p>
          </div>
        </div>
        <Route className="h-5 w-5 text-primary" />
      </header>

      <main className="mx-auto max-w-md">
        <section className="px-5 pb-4 pt-8">
          <div className="mb-2 flex items-center gap-2">
            <BookOpen className="h-4 w-4 fill-primary text-primary" />
            <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#86736b]">
              {subjectName} Dersi
            </span>
          </div>
          <h1 className="text-[32px] font-extrabold leading-10 text-primary">Okuma ve Anlama</h1>
          <p className="mt-2 text-[16px] leading-6 text-[#54433c]">Öğrenme yolculuğuna devam et!</p>
        </section>

        {units.length === 0 ? (
          <div className="mx-5 mt-8 rounded-2xl border border-[#d9c2b8] bg-white p-5">
            <p className="text-sm font-bold text-primary">Bu ders için içerik hazırlanıyor.</p>
            <p className="mt-1 text-xs text-[#86736b]">Yakında yeni üniteler eklenecek.</p>
          </div>
        ) : (
          <section className="relative mt-8 pb-28">
            <svg
              className="pointer-events-none absolute left-1/2 top-0 z-0 w-32 -translate-x-1/2"
              fill="none"
              style={{ height: `${roadHeight}px` }}
              viewBox={`0 0 100 ${roadHeight}`}
            >
              <path
                d={`M50 0 C70 ${roadHeight * 0.12} 30 ${roadHeight * 0.25} 50 ${roadHeight * 0.38} C70 ${roadHeight * 0.5} 30 ${roadHeight * 0.62} 50 ${roadHeight * 0.75} C70 ${roadHeight * 0.87} 30 ${roadHeight} 50 ${roadHeight + 120}`}
                stroke="#d9c2b8"
                strokeDasharray="12 8"
                strokeWidth="4"
              />
            </svg>

            <div className="relative z-10 flex flex-col items-center gap-24">
              {units.map((unit, index) => {
                const status = getUnitStatus(unit, index);
                const score = unitScores[unit.id];
                const isCompleted = status === 'completed';
                const isActive = status === 'active';
                const isLocked = status === 'locked';

                return (
                  <button
                    key={unit.id}
                    onClick={() => !isLocked && onSelectUnit(unit.id)}
                    disabled={isLocked}
                    className={`relative flex flex-col items-center text-center transition-all ${
                      isLocked ? 'cursor-not-allowed opacity-60' : 'active:scale-95'
                    }`}
                  >
                    {(isCompleted || isActive) && (
                      <span
                        className={`mb-4 rounded-full px-3 py-1 text-[12px] font-extrabold shadow-sm ${
                          isCompleted ? 'bg-[#6d4303] text-[#edb26b]' : 'bg-[#e6e2dc] text-[#666460]'
                        }`}
                      >
                        {isCompleted ? `%${score ?? 100} Tamamlandı` : 'Sırada Bu Var'}
                      </span>
                    )}

                    <span
                      className={`relative flex items-center justify-center rounded-full shadow-md ${
                        isCompleted
                          ? 'h-20 w-20 border-4 border-[#ffdbcc] bg-primary text-white'
                          : isActive
                            ? 'h-16 w-16 border-2 border-primary bg-white text-primary'
                            : 'h-16 w-16 border-2 border-[#d9c2b8] bg-[#eeeeee] text-[#86736b]'
                      }`}
                    >
                      {isCompleted && <CheckCircle2 className="h-8 w-8" />}
                      {isActive && <Edit3 className="h-7 w-7" />}
                      {isLocked && <Lock className="h-6 w-6" />}

                      {index === 0 && (
                        <span className="absolute -right-12 -top-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#d9c2b8] bg-white p-1 shadow-md">
                          <img src="/mascots/ankara-kecisi.png" alt="Keççi maskotu" className="h-full w-full object-contain" />
                        </span>
                      )}
                    </span>

                    <span className={`mt-4 px-8 text-[20px] font-bold leading-7 ${isLocked ? 'text-[#86736b]' : 'text-primary'}`}>
                      {unit.title}
                    </span>
                    {isActive && (
                      <span className="mt-2 block h-1.5 w-24 overflow-hidden rounded-full bg-[#d9c2b8]">
                        <span className="block h-full w-0 bg-[#f8bb73]" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </main>

      {activeUnit && (
        <button
          type="button"
          onClick={() => onSelectUnit(activeUnit.id)}
          className="fixed bottom-24 right-[max(2rem,calc((100vw-390px)/2+2rem))] z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-transform active:scale-95"
          aria-label="Aktif derse başla"
        >
          <Play className="h-7 w-7 fill-white" />
        </button>
      )}
    </div>
  );
}
