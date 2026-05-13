import { BookOpen, CheckCircle2, GraduationCap, Route, Sparkles, Trophy } from 'lucide-react';
import { grades } from '@/data/curriculum';

interface TutorialScreenProps {
  onSelectGrade: (gradeId: number) => void;
}

const introCards = [
  {
    title: 'Ders Yolunu Gör',
    text: 'Her ders, küçük konu adımlarına ayrılır. Nerede kaldığını uygulama senin için hatırlar.',
    icon: Route,
  },
  {
    title: 'Konu Anlatımı',
    text: 'Önce kısa ve sade anlatımı oku, ardından küçük alıştırmalarla öğrendiklerini pekiştir.',
    icon: BookOpen,
  },
  {
    title: 'Puan ve Gelişim',
    text: 'Doğru cevapların puan toplar. Profilinde seviyeni, maskotunu ve ilerlemeni görebilirsin.',
    icon: Trophy,
  },
];

export default function TutorialScreen({ onSelectGrade }: TutorialScreenProps) {
  const primaryGrades = grades.filter(grade => grade.level === 'primary');
  const middleGrades = grades.filter(grade => grade.level === 'middle');

  return (
    <div className="min-h-screen bg-white px-5 py-8 text-[#2f1d14] safe-bottom">
      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col">
        <header className="text-center">
          <img src="/kecci-logo-thumb.png" alt="Keççi logo" className="mx-auto h-36 w-36 object-contain" />
          <p className="mt-3 text-[12px] font-extrabold uppercase tracking-wider text-[#8b7564]">Hoş geldin</p>
          <h1 className="mt-1 text-[32px] font-extrabold leading-10 text-primary">Keççi'yi Tanıyalım</h1>
          <p className="mt-3 text-[16px] leading-6 text-[#5a4538]">
            Sana uygun dersleri hazırlayabilmemiz için önce sınıfını seç. Bunu sadece ilk kurulumda soracağız.
          </p>
        </header>

        <section className="mt-8 grid gap-3">
          {introCards.map(card => {
            const Icon = card.icon;

            return (
              <div key={card.title} className="flex gap-4 rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-4 shadow-[0_3px_0_0_#e0d7d0]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffddb9] text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-[17px] font-extrabold text-primary">{card.title}</span>
                  <span className="mt-1 block text-[13px] font-semibold leading-5 text-[#5a4538]">{card.text}</span>
                </span>
              </div>
            );
          })}
        </section>

        <section className="mt-8 rounded-3xl border border-[#d9c2b8] bg-white p-5">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ffdbcc] text-primary">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-[22px] font-extrabold text-primary">Sınıfını Seç</h2>
              <p className="text-[13px] font-semibold text-[#8b7564]">İlkokul ve ortaokul içerikleri hazır.</p>
            </div>
          </div>

          <GradeGroup title="İlkokul" grades={primaryGrades.map(grade => grade.id)} onSelectGrade={onSelectGrade} />
          <GradeGroup title="Ortaokul" grades={middleGrades.map(grade => grade.id)} onSelectGrade={onSelectGrade} />
        </section>

        <div className="mt-6 flex items-center gap-2 rounded-2xl bg-[#f7e5bc] px-4 py-3 text-primary">
          <Sparkles className="h-5 w-5 shrink-0" />
          <p className="text-[12px] font-extrabold leading-5">
            Sınıf seçimin hesabına kaydedilecek. Sonraki girişlerinde doğrudan derslerine gideceksin.
          </p>
        </div>
      </main>
    </div>
  );
}

function GradeGroup({
  title,
  grades: gradeIds,
  onSelectGrade,
}: {
  title: string;
  grades: number[];
  onSelectGrade: (gradeId: number) => void;
}) {
  return (
    <div className="mt-5">
      <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wider text-[#8b7564]">{title}</p>
      <div className="grid grid-cols-4 gap-2">
        {gradeIds.map(gradeId => (
          <button
            key={gradeId}
            type="button"
            onClick={() => onSelectGrade(gradeId)}
            className="flex min-h-20 flex-col items-center justify-center rounded-2xl border border-[#d9c2b8] bg-[#fdf9f3] text-primary transition-all hover:border-primary active:scale-95"
          >
            <span className="text-[24px] font-extrabold">{gradeId}</span>
            <span className="text-[11px] font-bold">Sınıf</span>
            {gradeId === 1 && <CheckCircle2 className="mt-1 h-4 w-4" />}
          </button>
        ))}
      </div>
    </div>
  );
}
