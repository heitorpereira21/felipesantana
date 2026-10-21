import React from 'react';
import { ArrowUp, Instagram, Mail, Phone, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { PHOTOGRAPHER_INFO } from '../data/photographyData';

interface FooterProps {
  onOpenAgencyProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAgencyProposal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D1D1D] text-[#FAF8F5] border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#333333]">
          {/* Brand & Editorial Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-3xl tracking-tight text-[#FAF8F5]">
              Felipe Santana
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#D8C8B5] font-medium">
              Fotografia de Casamentos & Momentos Especiais
            </p>
            <p className="text-sm text-stone-400 leading-relaxed max-w-md font-normal">
              Mais de duas décadas dedicadas a registrar o afeto, a emoção e a história de famílias em Cataguases, Juiz de Fora, Leopoldina e por todo o Brasil.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-[#D8C8B5]">
              <a
                href={PHOTOGRAPHER_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@felipesantanaart</span>
              </a>
              <span className="text-[#77716C]">·</span>
              <a
                href={`mailto:${PHOTOGRAPHER_INFO.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PHOTOGRAPHER_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Core Categories Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#D8C8B5] font-semibold">
              Categorias Principais
            </p>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Casamentos & Cerimônias
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Ensaios Pré-Casamento (Pré-Wedding)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Celebrações de 15 Anos
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Maternidade & Gestantes
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Retratos Fine Art em Estúdio
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Infantil, Batizados & Família
                </a>
              </li>
            </ul>
          </div>

          {/* Studio & Contact Channels */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#D8C8B5] font-semibold">
              Estúdio & Atendimento
            </p>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D8C8B5] shrink-0 mt-0.5" />
                <span>{PHOTOGRAPHER_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D8C8B5] shrink-0" />
                <span>WhatsApp: {PHOTOGRAPHER_INFO.phoneDisplay} | Fixo: {PHOTOGRAPHER_INFO.phoneLandline}</span>
              </div>
              <div className="pt-2">
                <a
                  href={PHOTOGRAPHER_INFO.officialSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white text-xs underline underline-offset-4 transition-colors"
                >
                  <span>Acessar site oficial atual ({PHOTOGRAPHER_INFO.officialSiteUrl})</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal Transparency */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span>© {new Date().getFullYear()} Felipe Santana Fotografia. Todos os direitos reservados.</span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span className="text-[#D8C8B5] font-medium">
              Conceito desenvolvido pela 4VANCE
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenAgencyProposal}
              className="inline-flex items-center gap-1.5 text-[#D8C8B5] hover:text-white transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sobre a proposta 4VANCE</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
