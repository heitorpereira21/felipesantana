import React from 'react';
import { ArrowDown, MessageCircle, MapPin, Award, Star, Clock } from 'lucide-react';
import { PHOTOGRAPHER_INFO } from '../data/photographyData';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface HeroProps {
  onExplorePortfolio: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio, onOpenBooking }) => {

  return (
    <section id="topo" className="relative pt-6 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-5 flex flex-col justify-between py-4 lg:py-8">
            <div className="space-y-6">
              {/* Quiet Kicker (Zero-Pill text with separator) */}
              <div className="flex items-center gap-2 text-xs text-[#77716C] tracking-widest uppercase font-medium">
                <span>Fotografia Editorial & Documental</span>
                <span aria-hidden="true">·</span>
                <span>Cataguases & Região</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-[#1D1D1D] tracking-tight text-balance">
                Histórias que merecem ser lembradas para sempre.
              </h1>

              {/* Subtitle / Lead Copy */}
              <p className="text-base sm:text-lg text-[#77716C] leading-relaxed max-w-xl font-normal">
                Fotografia de casamentos, ensaios e momentos especiais em Cataguases, Juiz de Fora e região. Uma abordagem sensível que valoriza a espontaneidade, o afeto genuíno e a atemporalidade de cada instante.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#FAF8F5] bg-[#1D1D1D] hover:bg-[#333333] active:bg-black rounded-sm transition-all duration-200 tracking-wide cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#D8C8B5]" />
                <span>Vamos contar sua história</span>
              </button>

              <button
                onClick={onExplorePortfolio}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#1D1D1D] bg-[#F4EFEA] hover:bg-[#EAE4DC] border border-[#D8C8B5]/60 rounded-sm transition-colors cursor-pointer"
              >
                <span>Explorar portfólio</span>
                <ArrowDown className="w-4 h-4 text-[#77716C]" />
              </button>
            </div>

            {/* Quiet trust badge without pills */}
            <div className="pt-6 border-t border-[#D8C8B5]/40 mt-8 flex items-center gap-3 text-xs text-[#77716C]">
              <span className="flex text-[#1D1D1D] font-medium items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#1D1D1D] text-[#1D1D1D]" />
                {PHOTOGRAPHER_INFO.ratingScore} no Google
              </span>
              <span aria-hidden="true">·</span>
              <span>{PHOTOGRAPHER_INFO.reviewCount} avaliações reais de clientes</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container Placeholder */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] rounded-lg overflow-hidden border border-[#D8C8B5] bg-[#EFE9E0] shadow-sm flex flex-col">
            <PhotoPlaceholder
              label="Casamento ao Ar Livre — Colinas Mineiras"
              category="Fotografia Principal Hero"
              aspectRatioText="16:9 · 2560 × 1440px"
              orientation="landscape"
              featured={true}
              className="h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[580px]"
            />
          </div>
        </div>

        {/* 4-Item Credentials Strip in full-width below the split (strictly complying with 7_portfolio_photography.md) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#D8C8B5]/50 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#77716C] shrink-0 mt-0.5" />
            <div>
              <p className="text-base font-semibold text-[#1D1D1D] tracking-tight tabular-nums">20+ Anos de Ofício</p>
              <p className="text-xs text-[#77716C] mt-0.5">Tradição iniciada no estúdio da família</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#77716C] shrink-0 mt-0.5" />
            <div>
              <p className="text-base font-semibold text-[#1D1D1D] tracking-tight">Cataguases & Região</p>
              <p className="text-xs text-[#77716C] mt-0.5">Atendimento em toda a Zona da Mata e RJ</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-[#77716C] shrink-0 mt-0.5" />
            <div>
              <p className="text-base font-semibold text-[#1D1D1D] tracking-tight tabular-nums">5.0 Estrelas</p>
              <p className="text-xs text-[#77716C] mt-0.5">Mais de 217 avaliações no Google</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-[#77716C] shrink-0 mt-0.5" />
            <div>
              <p className="text-base font-semibold text-[#1D1D1D] tracking-tight">Prêmios & Distinções</p>
              <p className="text-xs text-[#77716C] mt-0.5">Reconhecimento em fotografia de casamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
