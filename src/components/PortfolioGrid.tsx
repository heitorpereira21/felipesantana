import React, { useState } from 'react';
import { Maximize2, MapPin, Camera } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/photographyData';
import { PhotoItem, CategoryKey } from '../types';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface PortfolioGridProps {
  onSelectPhoto: (photo: PhotoItem) => void;
}

const CATEGORIES: { key: CategoryKey; label: string }[] = [
  { key: 'todos', label: 'Todas as Obras' },
  { key: 'casamentos', label: 'Casamentos' },
  { key: 'pre-casamento', label: 'Pré-Casamento' },
  { key: '15-anos', label: '15 Anos' },
  { key: 'gestantes', label: 'Gestantes' },
  { key: 'estudio', label: 'Ensaios em Estúdio' },
  { key: 'infantil', label: 'Infantil & Família' },
  { key: 'formaturas', label: 'Formaturas & Institucional' },
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
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-t border-[#D8C8B5]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D8C8B5]/50">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-[#77716C] tracking-widest uppercase font-medium">
              <span>Portfólio Selecionado</span>
              <span aria-hidden="true">·</span>
              <span>Galeria de Obras</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1D] leading-tight text-balance">
              Cada história tem seu jeito de ser lembrada.
            </h2>
            <p className="text-sm sm:text-base text-[#77716C] leading-relaxed">
              Composições autênticas que equilibram a elegância do retrato atemporal e a verdade do fotojornalismo. Clique em qualquer obra para explorar os detalhes e enquadramento.
            </p>
          </div>

          <div className="text-xs text-[#77716C] shrink-0 font-medium self-start md:self-end">
            Exibindo <span className="text-[#1D1D1D] font-bold tabular-nums">{filteredItems.length}</span> registros visuais
          </div>
        </div>

        {/* Interactive Filter Controls (clean segmented control buttons) */}
        <div className="pt-8 pb-10 overflow-x-auto scrollbar-none">
          <div className="inline-flex items-center gap-1.5 p-1 bg-[#F4EFEA] border border-[#D8C8B5]/60 rounded-md">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1D1D1D] text-[#FAF8F5] shadow-xs'
                      : 'text-[#77716C] hover:text-[#1D1D1D] hover:bg-black/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid with Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredItems.map((item, index) => {
            const isFeatured = index === 0;

            return (
              <article
                key={item.id}
                onClick={() => onSelectPhoto(item)}
                className={`group relative bg-[#F4EFEA] border border-[#D8C8B5]/60 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md hover:border-[#1D1D1D]/30 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    isFeatured
                      ? 'aspect-[16/10]'
                      : item.aspectRatio === 'portrait'
                      ? 'aspect-[3/4]'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <PhotoPlaceholder
                    label={item.title}
                    category={item.categoryLabel}
                    aspectRatioText={
                      isFeatured
                        ? '16:10 · 2400 × 1500px'
                        : item.aspectRatio === 'portrait'
                        ? '3:4 · 1800 × 2400px'
                        : '4:3 · 2400 × 1800px'
                    }
                    orientation={item.aspectRatio}
                    featured={isFeatured}
                    className="h-full"
                  />

                  {/* Top corner hover badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="p-2 bg-black/60 text-white rounded-full inline-flex items-center justify-center border border-white/20">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Permanent Card Footer (Zero-Pill clean typography) */}
                <div className="p-4 sm:p-5 flex items-center justify-between gap-4 border-t border-[#D8C8B5]/40 bg-[#FAF8F5]">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg text-[#1D1D1D] group-hover:text-[#77716C] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#77716C] mt-0.5">
                      <span>{item.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <span className="text-xs text-[#77716C] group-hover:text-[#1D1D1D] transition-colors shrink-0 font-medium">
                    Ver detalhes →
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
