import React from 'react';
import { ArrowUp, Instagram, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { PHOTOGRAPHER_INFO } from '../data/photographyData';

interface FooterProps {
  onOpenAgencyProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAgencyProposal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-[#FAF8F5] border-t border-[#262626] py-14 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-10 border-b border-[#262626]">
          {/* Brand Signature */}
          <div className="space-y-2">
            <h3 className="font-serif text-3xl sm:text-4xl tracking-tight text-white font-normal">
              Felipe Santana
            </h3>
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#D8C8B5]">
              Fotografia de Casamentos & Ensaios · Cataguases–MG
            </p>
          </div>

          {/* Essential Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-widest text-stone-400">
            <a href="#portfolio" className="hover:text-white transition-colors">
              Portfólio
            </a>
            <a href="#sobre" className="hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#galeria-cliente" className="hover:text-white transition-colors text-[#D8C8B5]">
              Área do Cliente
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>

        {/* Studio location, Official Link & 4VANCE Notice */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs text-stone-400 font-light">
          <div className="md:col-span-5 space-y-2">
            <p className="font-mono uppercase tracking-wider text-[11px] text-stone-300">Estúdio Físico</p>
            <p className="leading-relaxed">
              {PHOTOGRAPHER_INFO.address}
            </p>
            <div className="pt-1 flex items-center gap-4 text-stone-300 font-mono text-[11px]">
              <a
                href={PHOTOGRAPHER_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{PHOTOGRAPHER_INFO.instagram}</span>
              </a>
              <span>·</span>
              <a
                href={`mailto:${PHOTOGRAPHER_INFO.email}`}
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PHOTOGRAPHER_INFO.email}</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-2">
            <p className="font-mono uppercase tracking-wider text-[11px] text-stone-300">Site Oficial Existente</p>
            <p className="leading-relaxed text-stone-400">
              Esta é uma proposta visual desenvolvida pela 4VANCE e não substitui o domínio oficial de Felipe Santana.
            </p>
            <a
              href={PHOTOGRAPHER_INFO.officialSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8C8B5] hover:text-white inline-flex items-center gap-1 underline underline-offset-4 text-xs font-mono"
            >
              <span>{PHOTOGRAPHER_INFO.officialSiteUrl}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <button
              onClick={onOpenAgencyProposal}
              className="inline-flex items-center gap-1.5 text-xs text-[#D8C8B5] hover:text-white transition-colors font-mono cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>Visão Estratégica 4VANCE</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors font-mono cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Colophon bottom bar */}
        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} Felipe Santana Fotografia.
          </div>
          <div>
            Conceito & Redesign Editorial apresentado por <strong className="text-stone-300 font-medium">4VANCE</strong>.
          </div>
        </div>
      </div>
    </footer>
  );
};
