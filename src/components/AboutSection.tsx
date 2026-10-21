import React from 'react';
import { ArrowUpRight, Award, HeartHandshake, MapPin } from 'lucide-react';
import { PHOTOGRAPHER_INFO } from '../data/photographyData';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-t border-[#D8C8B5]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Authentic Portrait Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-[#D8C8B5]/70 bg-[#F4EFEA] shadow-sm">
              <PhotoPlaceholder
                label="Retrato Oficial de Felipe Santana"
                category="Fotógrafo Principal"
                aspectRatioText="4:5 · 2000 × 2500px"
                orientation="portrait"
                className="h-full"
              />
            </div>

            {/* Subtle floating quote card without pill boxes */}
            <div className="mt-4 p-4 bg-[#F4EFEA] border border-[#D8C8B5]/60 rounded-md">
              <p className="font-serif italic text-sm text-[#1D1D1D] leading-relaxed">
                “A fotografia não é apenas sobre apertar o disparador; é sobre estar presente de coração aberto para acolher o que é verdadeiro.”
              </p>
            </div>
          </div>

          {/* Right Column: Authentic Trajectory */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#77716C] tracking-widest uppercase font-medium">
                <span>Trajetória & Essência</span>
                <span aria-hidden="true">·</span>
                <span>Mais de Duas Décadas</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1D] leading-tight text-balance">
                O olhar que começou no estúdio de família e se tornou vocação de vida.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#77716C] leading-relaxed">
              <p>
                Nascido em Belo Horizonte em 1991, Felipe Santana chegou a Cataguases ainda na infância, aos 7 anos. Foi observando a dedicação de seu pai, fotógrafo apaixonado pelo ofício, que descobriu o poder de congelar a passagem do tempo em imagens carregadas de significado.
              </p>
              <p>
                Aos 13 anos de idade, iniciou formalmente seus primeiros passos no estúdio do pai, aprendendo desde cedo a sensibilidade com a luz, a técnica apurada e, acima de tudo, o respeito pelas pessoas que estão diante da lente.
              </p>
              <p>
                Com mais de 20 anos de experiência profissional, workshops nacionais, estudos contínuos e premiações em fotografia de casamento, Felipe consolidou sua assinatura: um equilíbrio refinado entre a estética documental atemporal e o afeto genuíno das famílias mineiras.
              </p>
            </div>

            {/* Quiet attribute markers */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#D8C8B5]/40 text-xs text-[#1D1D1D]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#77716C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Estúdio Físico em Cataguases</p>
                  <p className="text-[#77716C] mt-0.5">Praça Gov. Valadares 101, Sala 110 - Centro</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <HeartHandshake className="w-4 h-4 text-[#77716C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Atendimento Afetuoso & Direto</p>
                  <p className="text-[#77716C] mt-0.5">Sem intermediários no planejamento do seu ensaio</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#FAF8F5] bg-[#1D1D1D] hover:bg-[#333333] rounded-sm transition-colors cursor-pointer"
              >
                <span>Conversar com o Felipe</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C8B5]" />
              </button>

              <a
                href={PHOTOGRAPHER_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium text-[#1D1D1D] bg-[#F4EFEA] hover:bg-[#EAE4DC] border border-[#D8C8B5] rounded-sm transition-colors"
              >
                <span>Acompanhar @felipesantanaart</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#77716C]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
