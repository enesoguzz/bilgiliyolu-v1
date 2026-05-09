import { useState } from 'react';
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
      <div className="min-h-screen bg-background flex items-center justify-center px-6 safe-bottom">
        <p className="text-sm text-muted-foreground text-center">Bu ünite için içerik hazırlanıyor.</p>
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

  return (
    <div className="min-h-screen bg-background flex flex-col safe-bottom">
      <div className="px-4 pt-4 pb-2">
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1 text-center">
          {currentIndex + 1} / {slides.length}
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 py-8 max-w-sm mx-auto w-full">
        <h2 className="text-xl font-extrabold text-foreground mb-4">{slide.title}</h2>
        <p className="text-base text-foreground/80 leading-relaxed mb-6">{slide.content}</p>

        {slide.example && (
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
            <p className="text-xs font-bold text-primary mb-1">💡 Örnek</p>
            <p className="text-sm text-foreground font-semibold whitespace-pre-line">{slide.example}</p>
          </div>
        )}
      </div>

      <div className="px-4 pb-6">
        <button
          onClick={goNext}
          className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-2xl text-base active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
        >
          {currentIndex < slides.length - 1 ? 'Devam Et' : 'Alıştırmaya Geç →'}
        </button>
      </div>
    </div>
  );
}
