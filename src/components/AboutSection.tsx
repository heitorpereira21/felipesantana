import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { PHOTOGRAPHER_INFO } from '../data/photographyData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const photographerImage = '/src/assets/images/felipe_santana_portrait_1792602294736.jpg';

  return (
    <section id="sobre" className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] border-t border-[#E5E0D8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Portrait with clean editorial framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#EFE9E0] border border-[#E5E0D8] shadow-xs">
              <img
                src={photographerImage}
                alt="Felipe Santana com sua câmera fotográfica"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
              />
            </div>
            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#77716C] uppercase tracking-wider">
              <span>Felipe Santana</span>
              <span>Cataguases · MG</span>
            </div>
          </div>

          {/* Right Column: Human & Concise Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#77716C]">
                Trajetória & Abordagem
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1D] leading-[1.08] tracking-tight">
                Mais de duas décadas cultivando a sensibilidade do olhar.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#77716C] font-light leading-relaxed">
              <p>
                Nascido em Belo Horizonte e criado em Cataguases desde os sete anos, Felipe Santana descobriu a fotografia ainda na adolescência. Aos 13 anos, começou a acompanhar o pai no estúdio e em eventos, aprendendo a respeitar a luz natural e a verdade dos sentimentos humanos.
              </p>
              <p>
                Com mais de 20 anos de ofício, sua assinatura une a elegância do fotojornalismo à serenidade dos retratos clássicos. Cada trabalho em Cataguases, Juiz de Fora e região é conduzido com discrição, permitindo que os noivos e famílias vivam seus momentos com leveza.
              </p>
            </div>

            {/* Studio location marker */}
            <div className="pt-4 border-t border-[#E5E0D8] flex items-center gap-2 text-xs text-[#1D1D1D] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#77716C]" />
              <span>Estúdio: {PHOTOGRAPHER_INFO.address}</span>
            </div>

            {/* Minimalist Action */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1D1D1D] hover:bg-black rounded-xs transition-colors cursor-pointer"
              >
                <span>Conversar com o Felipe</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={PHOTOGRAPHER_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-[#77716C] hover:text-[#1D1D1D] transition-colors py-2 font-mono"
              >
                Instagram {PHOTOGRAPHER_INFO.instagram}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
