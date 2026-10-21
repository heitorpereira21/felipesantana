import React, { useState } from 'react';
import { ArrowRight, BookOpen, Heart } from 'lucide-react';
import { STORY_CHAPTERS } from '../data/photographyData';
import { StoryChapter } from '../types';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface StorySectionProps {
  onOpenBookingForStory: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onOpenBookingForStory }) => {
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const activeChapter: StoryChapter = STORY_CHAPTERS[selectedChapterIndex];

  return (
    <section id="historias" className="py-16 sm:py-20 lg:py-24 bg-[#F4EFEA] border-t border-[#D8C8B5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12">
          <div className="flex items-center gap-2 text-xs text-[#77716C] tracking-widest uppercase font-medium">
            <BookOpen className="w-3.5 h-3.5 text-[#1D1D1D]" />
            <span>Narrativa Visual Completa</span>
            <span aria-hidden="true">·</span>
            <span>Da Expectativa à Celebração</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1D] leading-tight text-balance">
            Mais do que fotos isoladas, a memória viva de um dia inteiro.
          </h2>
          <p className="text-sm sm:text-base text-[#77716C] leading-relaxed">
            A verdadeira fotografia de casamento constrói um arco narrativo onde cada imagem dialoga com a seguinte. Da timidez inicial do pré-wedding ao choro incontido dos votos e à explosão de alegria na festa.
          </p>
        </div>

        {/* Narrative Chapters Timeline Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {STORY_CHAPTERS.map((chapter, idx) => {
            const isSelected = selectedChapterIndex === idx;
            return (
              <button
                key={chapter.title}
                type="button"
                onClick={() => setSelectedChapterIndex(idx)}
                className={`text-left p-5 rounded-lg border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#FAF8F5] border-[#1D1D1D] shadow-sm'
                    : 'bg-[#FAF8F5]/60 border-[#D8C8B5]/50 hover:bg-[#FAF8F5] hover:border-[#D8C8B5]'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-[#77716C] font-mono mb-2">
                  <span>Capítulo 0{idx + 1}</span>
                  <span className="text-[#1D1D1D] font-sans font-medium">{chapter.moment}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1D1D1D] leading-snug">
                  {chapter.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Showcase Card */}
        <div className="bg-[#FAF8F5] border border-[#D8C8B5]/70 rounded-xl overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Chapter Image Display with PhotoPlaceholder */}
          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[480px] bg-[#EFE9E0] overflow-hidden">
            <PhotoPlaceholder
              label={activeChapter.title}
              category={`Capítulo: ${activeChapter.moment}`}
              aspectRatioText="16:9 · 2400 × 1350px"
              orientation="landscape"
              className="h-full"
            />
          </div>

          {/* Chapter Narrative Description */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <div className="text-xs text-[#77716C] uppercase tracking-wider font-medium">
                Arco Narrativo · Capítulo 0{selectedChapterIndex + 1} de {STORY_CHAPTERS.length}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1D] leading-snug">
                {activeChapter.title}
              </h3>
              <p className="text-sm sm:text-base text-[#77716C] leading-relaxed font-normal">
                {activeChapter.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#D8C8B5]/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-[#77716C]">
                <Heart className="w-3.5 h-3.5 text-[#1D1D1D]" />
                <span>Registro autêntico em Minas Gerais</span>
              </div>

              <button
                onClick={onOpenBookingForStory}
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#1D1D1D] hover:text-[#77716C] transition-colors py-2 cursor-pointer"
              >
                <span>Quero uma narrativa assim</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
