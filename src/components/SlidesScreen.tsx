import { useState } from 'react';
import { ArrowLeft, ArrowRight, Lightbulb, MessageCircle } from 'lucide-react';
import { getSlidesForUnit } from '@/data/curriculum';
import { TopicSlide } from '@/types/curriculum';

interface SlidesScreenProps {
  unitId: string;
  slides?: TopicSlide[];
  onComplete: () => void;
}

export default function SlidesScreen({ unitId, slides: sourceSlides, onComplete }: SlidesScreenProps) {
  const slides = getSlidesForUnit(unitId, sourceSlides);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slide = slides[currentIndex];
  const progress = slides.length ? ((currentIndex + 1) / slides.length) * 100 : 0;

  if (!slide) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6 safe-bottom">
        <p className="text-center text-sm text-muted-foreground">Bu ünite için içerik hazırlanıyor.</p>
      </div>
    );
  }

  const goNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(index => index + 1);
    } else {
      onComplete();
    }
  };

  const goBack = () => {
    setCurrentIndex(index => Math.max(0, index - 1));
  };

  return (
    <div className="min-h-screen bg-background pb-32 safe-bottom">
      <header className="sticky top-0 z-20 mx-auto flex h-16 max-w-md items-center justify-between border-b border-[#ead9cf] bg-white/95 px-5 backdrop-blur">
        <div className="flex items-center gap-3">
          <img src="/kecci-logo.png" alt="Keççi logo" className="h-10 w-10 rounded-full object-contain" />
          <div>
            <p className="text-[20px] font-extrabold leading-none text-primary">Keççi</p>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b7564]">Konu Anlatımı</p>
          </div>
        </div>
        <span className="rounded-full bg-[#fdf9f3] px-3 py-1 text-xs font-extrabold text-primary">
          {currentIndex + 1} / {slides.length}
        </span>
      </header>

      <main className="mx-auto flex max-w-md flex-col gap-5 px-5 pt-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b7564]">Konu İlerlemesi</span>
            <span className="text-[11px] font-extrabold text-primary">%{Math.round(progress)}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#dfd3c7]">
            <div className="h-full rounded-full bg-[#f8bb73] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <section>
          <h1 className="text-[26px] font-extrabold leading-8 text-primary">{slide.title}</h1>
          <p className="mt-2 text-[15px] leading-6 text-[#5a4538]">Keççi ile adım adım öğren.</p>
        </section>

        <section className="relative overflow-hidden rounded-2xl border border-[#ead9cf] bg-white shadow-sm">
          <div className="flex min-h-[210px] items-center justify-center bg-[#fdf9f3] p-5">
            <div className="relative flex min-h-[170px] w-full flex-col justify-center rounded-xl border border-dashed border-[#dfd3c7] bg-white p-5">
              <p className="text-[17px] leading-7 text-[#2f1d14]">{slide.content}</p>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#ffddb9]/40 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
            </div>
          </div>
          <div className="absolute bottom-4 right-4 flex max-w-[78%] items-end gap-2">
            <div className="rounded-2xl rounded-br-none border border-primary/40 bg-primary p-3 text-[11px] leading-4 text-white shadow-lg">
              Bir sonraki adımda bunu küçük bir alıştırmayla pekiştireceğiz.
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
          </div>
        </section>

        {slide.example && (
          <section className="rounded-2xl border border-[#e0d7d0] bg-[#fdf9f3] p-5">
            <div className="mb-3 flex items-center gap-2 text-primary">
              <Lightbulb className="h-5 w-5" />
              <h2 className="text-[20px] font-bold">Unutma!</h2>
            </div>
            <p className="whitespace-pre-line text-[15px] font-semibold leading-6 text-[#5a4538]">{slide.example}</p>
          </section>
        )}

        <div className="mt-2 hidden flex-col gap-3">
          <button
            onClick={goNext}
            className="flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-[16px] font-extrabold text-white shadow-sm shadow-primary/20 active:scale-95"
          >
            {currentIndex < slides.length - 1 ? 'Sonraki Adım' : 'Alıştırmaya Geç'}
            <ArrowRight className="h-5 w-5" />
          </button>
          {currentIndex > 0 && (
            <button
              onClick={goBack}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-primary bg-white text-[15px] font-extrabold text-primary active:scale-95"
            >
              <ArrowLeft className="h-4 w-4" />
              Önceki Sayfa
            </button>
          )}
        </div>
      </main>

      <footer className="fixed bottom-0 left-1/2 z-30 w-full max-w-md -translate-x-1/2 border-t border-[#ead9cf] bg-white/95 px-5 pb-[max(env(safe-area-inset-bottom),1rem)] pt-3 shadow-[0_-8px_24px_rgba(122,58,24,0.08)] backdrop-blur">
        <div className="flex gap-3">
          {currentIndex > 0 && (
            <button
              onClick={goBack}
              className="flex h-12 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary bg-white text-primary active:scale-95"
              aria-label="Önceki sayfa"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          <button
            onClick={goNext}
            className="flex h-[52px] flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-[16px] font-extrabold text-white shadow-sm shadow-primary/20 active:scale-95"
          >
            {currentIndex < slides.length - 1 ? 'Sonraki Adım' : 'Alıştırmaya Geç'}
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
