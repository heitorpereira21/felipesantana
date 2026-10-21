import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin, Camera } from 'lucide-react';
import { PhotoItem } from '../types';
import { PORTFOLIO_ITEMS, PHOTOGRAPHER_INFO } from '../data/photographyData';

interface LightboxModalProps {
  photo: PhotoItem | null;
  onClose: () => void;
  onNavigate?: (photo: PhotoItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose, onNavigate }) => {
  const currentIndex = photo ? PORTFOLIO_ITEMS.findIndex((p) => p.id === photo.id) : -1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0 && onNavigate) {
      onNavigate(PORTFOLIO_ITEMS[currentIndex - 1]);
    } else if (currentIndex === 0 && onNavigate) {
      onNavigate(PORTFOLIO_ITEMS[PORTFOLIO_ITEMS.length - 1]);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < PORTFOLIO_ITEMS.length - 1 && onNavigate) {
      onNavigate(PORTFOLIO_ITEMS[currentIndex + 1]);
    } else if (currentIndex === PORTFOLIO_ITEMS.length - 1 && onNavigate) {
      onNavigate(PORTFOLIO_ITEMS[0]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onNavigate && currentIndex >= 0) {
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : PORTFOLIO_ITEMS.length - 1;
        onNavigate(PORTFOLIO_ITEMS[prevIndex]);
      }
      if (e.key === 'ArrowRight' && onNavigate && currentIndex >= 0) {
        const nextIndex = currentIndex < PORTFOLIO_ITEMS.length - 1 ? currentIndex + 1 : 0;
        onNavigate(PORTFOLIO_ITEMS[nextIndex]);
      }
    };

    if (photo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose, onNavigate, currentIndex]);

  if (!photo) return null;

  const handleRequestStyle = () => {
    const text = encodeURIComponent(
      `Olá Felipe Santana! Estava vendo a foto "${photo.title}" (${photo.categoryLabel}) no seu site e gostaria de conversar sobre orçamento para um ensaio nesse estilo.`
    );
    window.open(`https://wa.me/${PHOTOGRAPHER_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full max-h-[94vh] bg-[#FAF8F5] rounded-lg overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-neutral-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar visualização (Esc)"
          className="absolute top-4 right-4 z-20 p-2 text-white bg-black/60 hover:bg-black rounded-full transition-colors cursor-pointer border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Container */}
        <div className="lg:w-8/12 bg-[#121212] relative flex items-center justify-center overflow-hidden min-h-[350px] lg:min-h-[620px] select-none">
          <img
            src={photo.image}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="w-full h-full max-h-[82vh] object-contain"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Foto anterior (seta esquerda)"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black text-white rounded-full transition-all border border-white/10 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Próxima foto (seta direita)"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black text-white rounded-full transition-all border border-white/10 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 text-white/60 font-mono text-xs">
            {currentIndex + 1} / {PORTFOLIO_ITEMS.length}
          </div>
        </div>

        {/* Details & Minimalist Editorial Panel */}
        <div className="lg:w-4/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] lg:max-h-none space-y-6 bg-[#FAF8F5]">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#77716C]">
              <span>{photo.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{photo.year}</span>
            </div>

            <h2 id="lightbox-title" className="font-serif text-2xl sm:text-3xl text-[#1D1D1D] leading-snug">
              {photo.title}
            </h2>

            <p className="text-sm text-[#77716C] leading-relaxed font-light">
              {photo.caption}
            </p>

            {/* Technical Photographic Exif */}
            <div className="pt-4 border-t border-[#E5E0D8] space-y-2 text-xs text-[#1D1D1D] font-mono">
              <div className="flex items-center gap-2 text-[#77716C]">
                <MapPin className="w-3.5 h-3.5 text-[#1D1D1D] shrink-0" />
                <span className="text-[#1D1D1D] font-sans font-medium">{photo.location}</span>
              </div>

              {photo.details?.gear && (
                <div className="flex items-center gap-2 text-[#77716C]">
                  <Camera className="w-3.5 h-3.5 text-[#1D1D1D] shrink-0" />
                  <span>{photo.details.gear}</span>
                </div>
              )}

              {photo.details?.lighting && (
                <div className="flex items-center gap-2 text-[#77716C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#77716C]" />
                  <span>{photo.details.lighting}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action to inquire */}
          <div className="pt-4 border-t border-[#E5E0D8] space-y-2">
            <button
              onClick={handleRequestStyle}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1D1D1D] hover:bg-black rounded-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#D8C8B5]" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </button>
            <p className="text-[11px] text-[#77716C] text-center font-mono">
              Atendimento direto: {PHOTOGRAPHER_INFO.phoneDisplay}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
