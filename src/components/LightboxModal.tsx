import React, { useEffect } from 'react';
import { X, MapPin, Camera, MessageCircle, Calendar } from 'lucide-react';
import { PhotoItem } from '../types';
import { PHOTOGRAPHER_INFO } from '../data/photographyData';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface LightboxModalProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
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
  }, [photo, onClose]);

  if (!photo) return null;

  const handleRequestStyle = () => {
    const text = encodeURIComponent(
      `Olá Felipe Santana! Vi a foto "${photo.title}" (${photo.categoryLabel}) no site e gostaria de saber mais sobre orçamentos para um ensaio nesse estilo.`
    );
    window.open(`https://wa.me/${PHOTOGRAPHER_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] bg-[#FAF8F5] rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-[#D8C8B5]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar visualização"
          className="absolute top-4 right-4 z-10 p-2 text-white bg-black/60 hover:bg-black rounded-full transition-colors cursor-pointer border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Container with PhotoPlaceholder */}
        <div className="lg:w-7/12 bg-[#EFE9E0] flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-[560px]">
          <PhotoPlaceholder
            label={photo.title}
            category={photo.categoryLabel}
            aspectRatioText={
              photo.aspectRatio === 'portrait'
                ? '3:4 · 1800 × 2400px'
                : '16:9 · 2560 × 1440px'
            }
            orientation={photo.aspectRatio}
            className="h-full min-h-[340px] lg:min-h-[560px]"
          />
        </div>

        {/* Details & Action Panel */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-none space-y-6 bg-[#FAF8F5]">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#77716C] uppercase tracking-wider font-medium">
              <span>{photo.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#77716C]" />
                {photo.year}
              </span>
            </div>

            <h2 id="lightbox-title" className="font-serif text-2xl sm:text-3xl text-[#1D1D1D] leading-snug">
              {photo.title}
            </h2>

            <p className="text-sm text-[#77716C] leading-relaxed">
              {photo.caption}
            </p>

            {/* Photographic Technical Details */}
            <div className="pt-4 border-t border-[#D8C8B5]/50 space-y-2.5 text-xs text-[#1D1D1D]">
              <div className="flex items-center gap-2 text-[#77716C]">
                <MapPin className="w-4 h-4 text-[#1D1D1D] shrink-0" />
                <span className="text-[#1D1D1D] font-medium">{photo.location}</span>
              </div>

              {photo.details?.gear && (
                <div className="flex items-center gap-2 text-[#77716C]">
                  <Camera className="w-4 h-4 text-[#1D1D1D] shrink-0" />
                  <span>{photo.details.gear}</span>
                </div>
              )}

              {photo.details?.lighting && (
                <div className="flex items-center gap-2 text-[#77716C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8C8B5]" />
                  <span>Iluminação: {photo.details.lighting}</span>
                </div>
              )}

              {photo.details?.setting && (
                <div className="flex items-center gap-2 text-[#77716C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8C8B5]" />
                  <span>Cenário: {photo.details.setting}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action to book or inquire about this style */}
          <div className="pt-4 border-t border-[#D8C8B5]/50 space-y-3">
            <button
              onClick={handleRequestStyle}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-[#FAF8F5] bg-[#1D1D1D] hover:bg-[#333333] active:bg-black rounded-sm transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#D8C8B5]" />
              <span>Quero fotos com esse estilo no WhatsApp</span>
            </button>
            <p className="text-[11px] text-[#77716C] text-center">
              Fale diretamente com Felipe Santana sobre disponibilidade e datas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
