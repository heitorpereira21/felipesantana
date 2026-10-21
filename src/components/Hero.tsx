import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio }) => {
  const heroImage = '/src/assets/images/hero_wedding_cinematic_1792602294051.jpg';

  return (
    <section id="topo" className="relative min-h-[92vh] flex flex-col justify-between p-6 sm:p-10 lg:p-16 overflow-hidden">
      {/* Full-bleed background photograph with measured editorial scrim */}
      <div className="absolute inset-0 z-0 bg-[#171717]">
        <img
          src={heroImage}
          alt="Casamento ao ar livre por Felipe Santana"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.03] scale-100 hover:scale-[1.01] transition-transform duration-1000 ease-out"
        />
        {/* Fine editorial gradient overlay ensuring WCAG AA contrast for headline */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />
      </div>

      {/* Top Editorial Kicker & Location (Zero-Pill clean typography) */}
      <div className="relative z-10 flex items-center justify-between text-white/80 text-[11px] sm:text-xs tracking-[0.25em] uppercase font-mono">
        <span>Cataguases · Zona da Mata Mineira</span>
        <span className="hidden sm:inline">Edição Monográfica</span>
      </div>

      {/* Center / Lower-Third Oversized Editorial Headline & Signature */}
      <div className="relative z-10 max-w-5xl space-y-4 my-auto pt-24 pb-12">
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF8F5] leading-[1.02] tracking-tight text-balance font-normal">
          Histórias que merecem ser lembradas.
        </h1>
        <div className="flex items-center gap-3 pt-2 text-[#D8C8B5] text-xs sm:text-sm tracking-widest uppercase">
          <span className="w-8 h-[1px] bg-[#D8C8B5]/60" />
          <span>Felipe Santana Fotografia</span>
          <span className="text-white/40">/</span>
          <span className="text-stone-300 font-sans normal-case tracking-normal text-xs sm:text-sm">
            Casamentos, ensaios e momentos de afeto
          </span>
        </div>
      </div>

      {/* Bottom Quiet Call to Action */}
      <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/20 text-white/90 text-xs">
        <div className="font-mono text-[11px] text-stone-300">
          [ 01 — ENLACE NAS COLINAS MINEIRAS ]
        </div>

        <button
          onClick={onExplorePortfolio}
          className="group inline-flex items-center gap-2 hover:text-[#D8C8B5] transition-colors cursor-pointer py-1"
        >
          <span className="tracking-widest uppercase text-[11px]">Explorar o trabalho</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
