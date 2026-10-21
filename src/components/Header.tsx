import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PHOTOGRAPHER_INFO } from '../data/photographyData';

interface HeaderProps {
  onOpenAgencyProposal: () => void;
  onNavigateToBooking: () => void;
  onNavigateToClientGallery: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAgencyProposal,
  onNavigateToBooking,
  onNavigateToClientGallery,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 4VANCE Strategic Redesign Notice Ribbon */}
      <div className="bg-[#171717] text-[#FAF8F5] border-b border-[#2C2C2C] px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[#D8C8B5] font-mono uppercase tracking-widest text-[10px]">
              Demonstração Conceitual 4VANCE
            </span>
            <span className="text-[#555555] hidden sm:inline">·</span>
            <span className="text-stone-300 hidden sm:inline text-xs font-light">
              Proposta de Redesign Editorial para Felipe Santana (Cataguases–MG)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAgencyProposal}
              className="inline-flex items-center gap-1.5 text-[#D8C8B5] hover:text-white transition-colors cursor-pointer text-xs font-medium"
            >
              <Sparkles className="w-3 h-3 text-[#D8C8B5]" />
              <span>Visão Comercial 4VANCE</span>
            </button>
            <span className="text-[#555555]">·</span>
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
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5E0D8] py-3.5 shadow-2xs'
            : 'bg-[#FAF8F5] border-b border-[#E5E0D8]/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark with subtle authorial signature */}
            <a
              href="#topo"
              className="group flex flex-col tracking-tight text-[#1D1D1D] whitespace-nowrap shrink-0"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-tight leading-none group-hover:text-neutral-600 transition-colors">
                Felipe Santana
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#77716C] mt-1 font-mono">
                Fotografia
              </span>
            </a>

            {/* Zone 2: Editorial Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-[#77716C]">
              <a
                href="#portfolio"
                className="hover:text-[#1D1D1D] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Portfólio
              </a>
              <a
                href="#sobre"
                className="hover:text-[#1D1D1D] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Sobre
              </a>
              <button
                type="button"
                onClick={onNavigateToClientGallery}
                className="hover:text-[#1D1D1D] transition-colors whitespace-nowrap shrink-0 py-1 inline-flex items-center gap-1.5 cursor-pointer text-[#1D1D1D] font-medium"
              >
                <span>Seleção de Fotos</span>
                <span className="text-[9px] bg-[#EAE4DC] text-[#1D1D1D] font-mono px-1.5 py-0.2 rounded-xs">
                  Demo
                </span>
              </button>
              <a
                href="#contato"
                className="hover:text-[#1D1D1D] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Contato
              </a>
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onNavigateToBooking}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#1D1D1D] hover:bg-black rounded-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Orçamento
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#1D1D1D] hover:text-[#77716C] focus:outline-none"
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
          <div className="md:hidden border-t border-[#E5E0D8] bg-[#FAF8F5] px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-sm uppercase tracking-widest text-[#1D1D1D]">
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#77716C] transition-colors"
              >
                Portfólio
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#77716C] transition-colors"
              >
                Sobre o Fotógrafo
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToClientGallery();
                }}
                className="text-left py-1 text-[#1D1D1D] font-semibold flex items-center justify-between"
              >
                <span>Seleção de Fotos (Área do Cliente)</span>
                <span className="text-[10px] bg-[#EAE4DC] px-2 py-0.5 rounded-xs font-mono">
                  4VANCE
                </span>
              </button>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#77716C] transition-colors"
              >
                Contato & Orçamento
              </a>
            </nav>

            <div className="pt-4 border-t border-[#E5E0D8] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToBooking();
                }}
                className="w-full text-center py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#1D1D1D] rounded-xs"
              >
                Solicitar Orçamento
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAgencyProposal();
                }}
                className="w-full text-center py-2.5 px-4 text-xs font-medium text-[#1D1D1D] bg-[#F5F2EB] border border-[#D8C8B5] rounded-xs"
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
