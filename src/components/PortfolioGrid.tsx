import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/photographyData';
import { PhotoItem, CategoryKey } from '../types';
import { Maximize2, MapPin } from 'lucide-react';

interface PortfolioGridProps {
  onSelectPhoto: (photo: PhotoItem) => void;
}

const CATEGORIES: { key: CategoryKey; label: string }[] = [
  { key: 'todos', label: 'Todas as Obras' },
  { key: 'casamentos', label: 'Casamentos' },
  { key: 'pre-casamento', label: 'Pré-Wedding' },
  { key: '15-anos', label: '15 Anos' },
  { key: 'gestantes', label: 'Gestantes' },
  { key: 'estudio', label: 'Estúdio Fine Art' },
  { key: 'infantil', label: 'Família & Infantil' },
  { key: 'formaturas', label: 'Formaturas' },
];

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('todos');

  const filteredItems = activeCategory === 'todos'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => {
        if (activeCategory === 'formaturas') {
          return item.category === 'formaturas' || item.category === 'institucional';
        }
        return item.category === activeCategory;
      });

  return (
    <section id="portfolio" className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] border-t border-[#E5E0D8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E0D8]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] text-[#77716C] tracking-[0.25em] uppercase font-mono">
              <span>Portfólio Autoral</span>
              <span aria-hidden="true">·</span>
              <span>Cataguases & Região</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1D1D1D] leading-[1.05] tracking-tight">
              A verdade do instante em cada enquadramento.
            </h2>
          </div>

          <div className="text-xs font-mono text-[#77716C] tracking-wider self-start md:self-end">
            [ {filteredItems.length < 10 ? `0${filteredItems.length}` : filteredItems.length} REGISTROS SELECIONADOS ]
          </div>
        </div>

        {/* Minimalist Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`text-xs uppercase tracking-wider py-1.5 px-3 rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#1D1D1D] text-[#FAF8F5] font-medium'
                    : 'text-[#77716C] hover:text-[#1D1D1D] bg-transparent'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {filteredItems.map((item, index) => {
            // Asymmetric layout rhythm:
            // Item 0: Hero showcase (col-span-12 or col-span-8)
            // Item 1: Vertical editorial portrait (col-span-4)
            // Item 2: Horizontal wide (col-span-7)
            // Item 3: Tall vertical portrait (col-span-5)
            // Item 4, 5, 6, 7: Balanced asymmetric composition
            const isSpanFull = index === 0;
            const isSpanVertical = index === 1 || index === 3 || index === 5;
            const colSpan = isSpanFull
              ? 'md:col-span-8'
              : isSpanVertical
              ? 'md:col-span-4'
              : index % 2 === 0
              ? 'md:col-span-7'
              : 'md:col-span-5';

            const photoNumber = index + 1 < 10 ? `0${index + 1}` : index + 1;

            return (
              <article
                key={item.id}
                onClick={() => onSelectPhoto(item)}
                className={`group cursor-pointer space-y-3 ${colSpan}`}
              >
                {/* Photo frame with responsive aspect ratio */}
                <div
                  className={`relative overflow-hidden bg-[#EFE9E0] transition-all duration-500 ${
                    item.aspectRatio === 'portrait'
                      ? 'aspect-[3/4]'
                      : isSpanFull
                      ? 'aspect-[16/10]'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out filter brightness-[0.98] contrast-[1.02]"
                  />

                  {/* Editorial subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Corner indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="p-2 bg-black/60 text-white rounded-full inline-flex items-center justify-center backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 text-white text-[11px] font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">
                    {item.details?.gear || 'Luz Natural · Documental'}
                  </div>
                </div>

                {/* Editorial Caption Bar */}
                <div className="flex items-baseline justify-between pt-1 border-t border-[#E5E0D8]/70">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#77716C]">
                      {photoNumber} · {item.categoryLabel}
                    </p>
                    <h3 className="font-serif text-lg sm:text-xl text-[#1D1D1D] group-hover:text-neutral-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <span className="text-[11px] text-[#77716C] font-mono shrink-0">
                    {item.location}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
