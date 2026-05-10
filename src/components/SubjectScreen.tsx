import { getSubjectsForGrade } from '@/data/curriculum';
import { ArrowLeft, BookOpen, Calculator, ChevronRight, FlaskConical, Globe2, Languages, Leaf, LogOut, Medal, School, Shield, Star } from 'lucide-react';

interface SubjectScreenProps {
  gradeId: number;
  onSelectSubject: (subjectId: string) => void;
  onBack: () => void;
  isAdmin?: boolean;
  onAdmin?: () => void;
  onSignOut?: () => void;
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
  fizik: 'Fizik',
  kimya: 'Kimya',
  biyoloji: 'Biyoloji',
  edebiyat: 'Türk Edebiyatı',
};

export default function SubjectScreen({ gradeId, onSelectSubject, onBack, isAdmin, onAdmin, onSignOut }: SubjectScreenProps) {
  const subjects = getSubjectsForGrade(gradeId);

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
          <img src="/kecci-logo.png" alt="Keççi logo" className="h-10 w-10 rounded-full object-contain" />
          <div>
            <p className="text-[20px] font-extrabold leading-none text-primary">Keççi</p>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b7564]">{gradeId}. Sınıf</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-[#f0d6aa] bg-[#fff7e9] px-3 py-1 text-primary sm:flex">
            <Star className="mr-1 h-4 w-4 fill-[#f8bb73] text-[#f8bb73]" />
            <span className="text-xs font-extrabold">1250</span>
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

        <section className="space-y-4">
          <h2 className="text-[24px] font-bold text-primary">Derslerin</h2>
          {subjects.map((subject, index) => {
            const style = subjectStyle[subject.id] ?? subjectStyle.turkce;
            const Icon = style.icon;
            const progress = Math.max(12, Math.min(92, 72 - index * 9));

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
                  <span className="block text-[12px] font-bold uppercase tracking-wider text-[#8b7564]">{index + 5} yeni konu</span>
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
            <p className="mt-2 text-[15px] leading-6 text-white/90">3 gün üst üste derslerini tamamladın.</p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ffddb9] px-4 py-2 text-xs font-extrabold text-primary">
              <Medal className="h-4 w-4" />
              Ödülü Gör
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
