import { getSubjectsForGrade, getUnitsForSubjectAndGrade } from '@/data/curriculum';
import { Unit } from '@/types/curriculum';
import {
  ArrowLeft,
  BookOpen,
  Calculator,
  ChevronRight,
  ClipboardList,
  FlaskConical,
  Globe2,
  Languages,
  Leaf,
  Lock,
  LogOut,
  Medal,
  School,
  Shield,
  Star,
} from 'lucide-react';

interface SubjectScreenProps {
  gradeId: number;
  onSelectSubject: (subjectId: string) => void;
  onBack: () => void;
  isAdmin?: boolean;
  onAdmin?: () => void;
  onSignOut?: () => void;
  onProFeature?: (feature: string) => void;
  onOpenTests?: () => void;
  onHome?: () => void;
  isPro?: boolean;
  completedUnits: string[];
  unitScores: Record<string, number>;
  units?: Unit[];
  totalPoints: number;
}

const subjectStyle: Record<string, { bg: string; iconBg: string; iconText: string; icon: typeof BookOpen }> = {
  turkce: { bg: 'bg-[#fdf9f3]', iconBg: 'bg-orange-100', iconText: 'text-orange-800', icon: BookOpen },
  matematik: { bg: 'bg-[#fdf9f3]', iconBg: 'bg-blue-100', iconText: 'text-blue-800', icon: Calculator },
  'hayat-bilgisi': { bg: 'bg-[#fdf9f3]', iconBg: 'bg-green-100', iconText: 'text-green-800', icon: Leaf },
  fen: { bg: 'bg-[#fdf9f3]', iconBg: 'bg-emerald-100', iconText: 'text-emerald-800', icon: FlaskConical },
  sosyal: { bg: 'bg-[#fdf9f3]', iconBg: 'bg-amber-100', iconText: 'text-amber-800', icon: Globe2 },
  ingilizce: { bg: 'bg-[#fdf9f3]', iconBg: 'bg-purple-100', iconText: 'text-purple-800', icon: Languages },
};

const subjectNames: Record<string, string> = {
  turkce: 'Türkçe',
  matematik: 'Matematik',
  'hayat-bilgisi': 'Hayat Bilgisi',
  fen: 'Fen Bilimleri',
  sosyal: 'Sosyal Bilgiler',
  ingilizce: 'İngilizce',
};

export default function SubjectScreen({
  gradeId,
  onSelectSubject,
  onBack,
  isAdmin,
  onAdmin,
  onSignOut,
  onProFeature,
  onOpenTests,
  onHome,
  isPro = false,
  completedUnits,
  unitScores,
  units,
  totalPoints,
}: SubjectScreenProps) {
  const subjects = getSubjectsForGrade(gradeId);
  const subjectSummaries = subjects.map(subject => {
    const subjectUnits = getUnitsForSubjectAndGrade(subject.id, gradeId, units);
    const completedSubjectUnits = subjectUnits.filter(unit => completedUnits.includes(unit.id));
    const progress = subjectUnits.length
      ? Math.round((completedSubjectUnits.length / subjectUnits.length) * 100)
      : 0;
    const averageScore = completedSubjectUnits.length
      ? Math.round(
        completedSubjectUnits.reduce((sum, unit) => sum + (unitScores[unit.id] ?? 0), 0) / completedSubjectUnits.length,
      )
      : 0;

    return {
      subject,
      subjectUnits,
      completedSubjectUnits,
      progress,
      averageScore,
    };
  });
  const totalUnits = subjectSummaries.reduce((sum, item) => sum + item.subjectUnits.length, 0);
  const totalCompleted = subjectSummaries.reduce((sum, item) => sum + item.completedSubjectUnits.length, 0);
  const overallProgress = totalUnits ? Math.round((totalCompleted / totalUnits) * 100) : 0;
  const completedScores = Object.entries(unitScores).filter(([unitId]) => completedUnits.includes(unitId)).map(([, score]) => score);
  const overallAverage = completedScores.length
    ? Math.round(completedScores.reduce((sum, score) => sum + score, 0) / completedScores.length)
    : 0;

  return (
    <div className="min-h-screen bg-background pb-40 safe-bottom">
      <header className="sticky top-0 z-20 mx-auto flex h-16 max-w-md items-center justify-between border-b border-[#ead9cf] bg-white/95 px-5 backdrop-blur">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ead9cf] bg-[#fdf9f3] text-primary active:scale-95"
            aria-label="Sınıf seçimine dön"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button type="button" onClick={onHome} className="rounded-full active:scale-95" aria-label="Ana ekrana dön">
            <img src="/kecci-logo-thumb.png" alt="Keççi logo" className="h-10 w-10 rounded-full object-contain" />
          </button>
          <div>
            <p className="text-[20px] font-extrabold leading-none text-primary">Keççi</p>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b7564]">{gradeId}. Sınıf</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-[#f0d6aa] bg-[#fff7e9] px-3 py-1 text-primary">
            <Star className="mr-1 h-4 w-4 fill-[#f8bb73] text-[#f8bb73]" />
            <span className="text-xs font-extrabold">{totalPoints}</span>
          </div>
          {isAdmin && onAdmin && (
            <button
              type="button"
              onClick={onAdmin}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ead9cf] bg-[#fdf9f3] text-primary active:scale-95"
              aria-label="Admin paneli"
            >
              <Shield className="h-4 w-4" />
            </button>
          )}
          {onSignOut && (
            <button
              type="button"
              onClick={onSignOut}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ead9cf] bg-[#fdf9f3] text-primary active:scale-95"
              aria-label="Çıkış yap"
            >
              <LogOut className="h-4 w-4" />
            </button>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-md px-5 pt-6">
        <section className="mb-8">
          <h1 className="text-[32px] font-extrabold leading-tight text-primary">Merhaba!</h1>
          <p className="mt-1 text-[16px] leading-6 text-[#5a4538]">Bugün ne öğrenmek istersin?</p>
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#ead9cf] bg-white p-4">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b7564]">Mevcut Sınıf</p>
              <p className="text-[20px] font-bold text-primary">{gradeId}. Sınıf</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffddb9] text-primary">
              <School className="h-6 w-6" />
            </div>
          </div>
        </section>

        <section className="mb-8 rounded-3xl border border-[#e0d7d0] bg-white p-5 shadow-[0_4px_0_0_#e0d7d0]">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b7564]">Genel Özet</p>
              <h2 className="mt-1 text-[24px] font-extrabold text-primary">%{overallProgress} tamamlandı</h2>
              <p className="mt-1 text-[13px] font-semibold text-[#5a4538]">
                {totalCompleted} / {totalUnits} ünite tamamlandı
              </p>
            </div>
            <div className="rounded-2xl bg-[#fff7e9] px-4 py-3 text-right">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b7564]">Ortalama</p>
              <p className="text-[22px] font-extrabold text-primary">%{overallAverage}</p>
            </div>
          </div>

          <div className="space-y-3">
            {subjectSummaries.map(({ subject, progress }) => (
              <div key={subject.id} className="grid grid-cols-[88px_1fr_40px] items-center gap-3">
                <span className="truncate text-[12px] font-extrabold text-primary">{subjectNames[subject.id] ?? subject.name}</span>
                <span className="h-3 overflow-hidden rounded-full bg-[#dfd3c7]">
                  <span className="block h-full rounded-full bg-[#f8bb73]" style={{ width: `${progress}%` }} />
                </span>
                <span className="text-right text-[12px] font-extrabold text-[#8b7564]">%{progress}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-[24px] font-bold text-primary">Derslerin</h2>
            <button
              type="button"
              onClick={() => {
                if (isPro) onOpenTests?.();
                else onProFeature?.('Denemelerim');
              }}
              className="flex items-center gap-2 rounded-full border border-[#d9c2b8] bg-white px-3 py-2 text-[12px] font-extrabold text-primary shadow-sm active:scale-95"
            >
              <ClipboardList className="h-4 w-4" />
              Denemelerim
              {!isPro && <Lock className="h-3.5 w-3.5" />}
            </button>
          </div>
          {subjectSummaries.map(({ subject, progress, averageScore }) => {
            const style = subjectStyle[subject.id] ?? subjectStyle.turkce;
            const Icon = style.icon;

            return (
              <button
                key={subject.id}
                onClick={() => onSelectSubject(subject.id)}
                className={`w-full ${style.bg} flex items-center gap-4 rounded-2xl border border-[#e0d7d0] p-4 text-left shadow-[0_4px_0_0_#e0d7d0] transition-all hover:border-primary/40 active:translate-y-1 active:shadow-none`}
              >
                <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${style.iconBg}`}>
                  <Icon className={`h-8 w-8 ${style.iconText}`} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[20px] font-bold leading-7 text-primary">{subjectNames[subject.id] ?? subject.name}</span>
                  <span className="block text-[12px] font-bold uppercase tracking-wider text-[#8b7564]">
                    %{progress} tamamlandı {averageScore ? `- ort. %${averageScore}` : ''}
                  </span>
                  <span className="mt-3 block h-1.5 overflow-hidden rounded-full bg-[#dfd3c7]">
                    <span className="block h-full rounded-full bg-[#f8bb73]" style={{ width: `${progress}%` }} />
                  </span>
                </span>
                <ChevronRight className="h-5 w-5 text-[#8b7564]" />
              </button>
            );
          })}
        </section>

        <section className="mb-20 mt-10 rounded-3xl bg-primary p-6 text-white">
          <div className="relative z-10">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-white/75">Haftalık Hedef</p>
            <h3 className="mt-1 text-[24px] font-bold">Süper Başarı Yolunda!</h3>
            <p className="mt-2 text-[15px] leading-6 text-white/90">
              {completedUnits.length > 0
                ? `${completedUnits.length} üniteyi tamamladın. Puanların yukarıda güncellendi.`
                : 'İlk üniteni tamamla, puanlarını toplamaya başla.'}
            </p>
            <button
              type="button"
              onClick={() => onProFeature?.('Haftalık ödüller')}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ffddb9] px-4 py-2 text-xs font-extrabold text-primary active:scale-95"
            >
              <Medal className="h-4 w-4" />
              Ödülü Gör
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
