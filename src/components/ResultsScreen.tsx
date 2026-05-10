import { CheckCircle2, Home, RefreshCcw, Star, XCircle } from 'lucide-react';

interface ResultsScreenProps {
  score: number;
  onContinue: () => void;
}

export default function ResultsScreen({ score, onContinue }: ResultsScreenProps) {
  const passed = score >= 60;
  const message = score >= 90
    ? 'Tebrikler!'
    : score >= 70
      ? 'Harika iş!'
      : score >= 60
        ? 'İyi gidiyorsun!'
        : 'Tekrar deneyebilirsin!';
  const wrongCount = Math.max(0, Math.round((100 - score) / 14));
  const correctCount = Math.max(0, 7 - wrongCount);

  return (
    <div className="flex min-h-screen flex-col items-center bg-background pb-12 safe-bottom">
      <header className="sticky top-0 z-20 mx-auto flex h-16 w-full max-w-md items-center justify-between border-b border-[#ead9cf] bg-white/95 px-5 backdrop-blur">
        <div className="flex items-center gap-3">
          <img src="/kecci-logo.png" alt="Keççi logo" className="h-10 w-10 rounded-full object-contain" />
          <p className="text-[20px] font-extrabold text-primary">Keççi</p>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-md flex-col items-center px-5 pt-6">
        <section className="mb-6 w-full text-center">
          <h1 className="text-[32px] font-extrabold leading-10 text-primary">{message}</h1>
          <p className="mt-2 text-[15px] leading-6 text-[#5a4538]">
            {passed ? 'Harika bir sınav çıkardın, gelişimin göz kamaştırıyor.' : 'Bir tekrar daha seni güçlendirecek.'}
          </p>
        </section>

        <div className="relative mb-7 flex aspect-square w-full max-w-[260px] items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#ffddb9]/30 blur-3xl" />
          <img src="/kecci-logo.png" alt="Keççi başarı maskotu" className="relative z-10 h-full w-full object-contain" />
        </div>

        <section className="mb-7 grid w-full grid-cols-2 gap-3">
          <div className="col-span-2 rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-6 text-center shadow-sm">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b7564]">Başarı Yüzdesi</p>
            <p className="mt-1 text-[48px] font-extrabold leading-none text-primary">%{score}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#e6e2dc]">
              <div className="h-full rounded-full bg-[#f8bb73]" style={{ width: `${score}%` }} />
            </div>
          </div>

          <div className="rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-4 text-center">
            <CheckCircle2 className="mx-auto mb-1 h-5 w-5 text-primary" />
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b7564]">Doğru</p>
            <p className="text-[22px] font-extrabold text-primary">{correctCount}</p>
          </div>
          <div className="rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-4 text-center">
            <XCircle className="mx-auto mb-1 h-5 w-5 text-destructive" />
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b7564]">Yanlış</p>
            <p className="text-[22px] font-extrabold text-primary">{wrongCount}</p>
          </div>

          <div className="col-span-2 flex items-center justify-between rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffddb9] text-primary">
                <Star className="h-5 w-5 fill-primary" />
              </span>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b7564]">Kazanılan Puan</p>
                <p className="text-[18px] font-extrabold text-primary">+{Math.max(50, score * 5)} Puan</p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex w-full flex-col gap-3">
          <button
            onClick={onContinue}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-[16px] font-extrabold text-white shadow-md active:scale-95"
          >
            <Home className="h-5 w-5" />
            Ana Sayfaya Dön
          </button>
          <button
            onClick={onContinue}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-primary bg-white text-[16px] font-extrabold text-primary active:scale-95"
          >
            <RefreshCcw className="h-5 w-5" />
            Devam Et
          </button>
        </div>
      </main>
    </div>
  );
}
