import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { StorySection } from './components/StorySection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BudgetCalculator } from './components/BudgetCalculator';
import { LightboxModal } from './components/LightboxModal';
import { AgencyProposalModal } from './components/AgencyProposalModal';
import { Footer } from './components/Footer';
import { PhotoItem } from './types';
import { MessageCircle, Sparkles } from 'lucide-react';
import { PHOTOGRAPHER_INFO } from './data/photographyData';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [agencyProposalOpen, setAgencyProposalOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Felipe Santana! Gostaria de conversar sobre orçamento e disponibilidade para ensaio/casamento.`
    );
    window.open(`https://wa.me/${PHOTOGRAPHER_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1D1D1D] font-sans flex flex-col selection:bg-[#D8C8B5] selection:text-[#1D1D1D]">
      {/* Top Header with 4VANCE Demo bar & Top Bar Contract */}
      <Header
        onOpenAgencyProposal={() => setAgencyProposalOpen(true)}
        onNavigateToBooking={() => handleScrollToSection('contato')}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExplorePortfolio={() => handleScrollToSection('portfolio')}
          onOpenBooking={() => handleScrollToSection('contato')}
        />

        {/* Portfolio Visual Grid with filterable categories */}
        <PortfolioGrid onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

        {/* Real Stories & Narrative Arc */}
        <StorySection onOpenBookingForStory={() => handleScrollToSection('contato')} />

        {/* About Felipe Santana & Studio Legacy */}
        <AboutSection onOpenBooking={() => handleScrollToSection('contato')} />

        {/* Real Verified Testimonials */}
        <TestimonialsSection />

        {/* Budget Calculator & Direct WhatsApp Conversion */}
        <BudgetCalculator />
      </main>

      {/* Footer */}
      <Footer onOpenAgencyProposal={() => setAgencyProposalOpen(true)} />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />

      {/* 4VANCE Strategy Pitch Modal */}
      <AgencyProposalModal
        isOpen={agencyProposalOpen}
        onClose={() => setAgencyProposalOpen(false)}
      />

      {/* Floating Action Buttons (Sticky & Compliant with Mobile Cap) */}
      <div className="fixed bottom-4 right-4 z-30 flex items-center gap-2">
        {/* 4VANCE Proposal Pill button */}
        <button
          onClick={() => setAgencyProposalOpen(true)}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-[#1D1D1D]/90 hover:bg-[#1D1D1D] text-[#D8C8B5] text-xs font-medium rounded-full shadow-lg backdrop-blur-xs transition-all border border-[#333333] cursor-pointer"
          title="Ver proposta estratégica da 4VANCE"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D8C8B5]" />
          <span>Visão 4VANCE</span>
        </button>

        {/* WhatsApp Direct Floating Button */}
        <button
          onClick={handleQuickWhatsApp}
          className="p-3.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white rounded-full shadow-lg transition-transform cursor-pointer flex items-center justify-center"
          aria-label="Abrir conversa no WhatsApp"
          title="Conversar no WhatsApp com Felipe Santana (+55 32 99918-2169)"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </button>
      </div>
    </div>
  );
}
