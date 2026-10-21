import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PHOTOGRAPHER_INFO } from '../data/photographyData';

interface HeaderProps {
  onOpenAgencyProposal: () => void;
  onNavigateToBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAgencyProposal, onNavigateToBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 4VANCE Conceptual Demo Ribbon */}
      <div className="bg-[#1D1D1D] text-[#FAF8F5] border-b border-[#333333] px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[#D8C8B5] font-medium tracking-wider uppercase text-[10px]">
              Demonstração Conceitual 4VANCE
            </span>
            <span className="text-[#77716C] hidden sm:inline">·</span>
            <span className="text-stone-300 hidden sm:inline">
              Proposta de Redesign para Felipe Santana Fotografia (Cataguases–MG)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAgencyProposal}
              className="inline-flex items-center gap-1.5 text-[#D8C8B5] hover:text-white transition-colors cursor-pointer text-xs font-medium"
            >
              <Sparkles className="w-3 h-3 text-[#D8C8B5]" />
              <span>Ver visão estratégica 4VANCE</span>
            </button>
            <span className="text-[#77716C]">·</span>
            <a
              href={PHOTOGRAPHER_INFO.officialSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-200 inline-flex items-center gap-0.5 text-xs transition-colors"
            >
              <span>Site Oficial Atual</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (Nav Links) - Zone 3 (1 Primary Action) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#D8C8B5]/50 py-3 shadow-xs'
            : 'bg-[#FAF8F5] border-b border-[#D8C8B5]/30 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#topo"
              className="font-serif text-2xl sm:text-3xl tracking-tight text-[#1D1D1D] hover:text-[#77716C] transition-colors whitespace-nowrap shrink-0"
            >
              Felipe Santana
            </a>

            {/* Zone 2: 4-5 Clean Nav Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#77716C]">
              <a
                href="#portfolio"
                className="hover:text-[#1D1D1D] transition-colors whitespace-nowrap shrink-0"
              >
                Portfólio
              </a>
              <a
                href="#historias"
                className="hover:text-[#1D1D1D] transition-colors whitespace-nowrap shrink-0"
              >
                Histórias
              </a>
              <a
                href="#sobre"
                className="hover:text-[#1D1D1D] transition-colors whitespace-nowrap shrink-0"
              >
                Sobre
              </a>
              <a
                href="#depoimentos"
                className="hover:text-[#1D1D1D] transition-colors whitespace-nowrap shrink-0"
              >
                Depoimentos
              </a>
              <a
                href="#contato"
                className="hover:text-[#1D1D1D] transition-colors whitespace-nowrap shrink-0"
              >
                Contato
              </a>
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onNavigateToBooking}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-[#FAF8F5] bg-[#1D1D1D] hover:bg-[#333333] active:bg-black rounded-sm transition-colors whitespace-nowrap shrink-0 tracking-wide cursor-pointer"
              >
                Solicitar Orçamento
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#1D1D1D] hover:text-[#77716C] focus:outline-none focus:ring-1 focus:ring-[#D8C8B5] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#D8C8B5]/40 bg-[#FAF8F5] px-4 pt-4 pb-6 space-y-3">
            <nav className="flex flex-col space-y-3 text-base font-medium text-[#1D1D1D]">
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#77716C] transition-colors"
              >
                Portfólio & Galerias
              </a>
              <a
                href="#historias"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#77716C] transition-colors"
              >
                Histórias Fotográficas
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#77716C] transition-colors"
              >
                Sobre o Fotógrafo
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#77716C] transition-colors"
              >
                Avaliações de Clientes
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#77716C] transition-colors"
              >
                Localização & Contato
              </a>
            </nav>
            <div className="pt-3 border-t border-[#D8C8B5]/40 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToBooking();
                }}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold text-[#FAF8F5] bg-[#1D1D1D] rounded-sm tracking-wide"
              >
                Solicitar Orçamento no WhatsApp
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAgencyProposal();
                }}
                className="w-full text-center py-2 px-4 text-xs font-medium text-[#1D1D1D] bg-[#F4EFEA] border border-[#D8C8B5] rounded-sm"
              >
                Ver Proposta Estratégica 4VANCE
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
