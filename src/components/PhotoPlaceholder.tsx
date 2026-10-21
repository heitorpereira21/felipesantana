import React from 'react';
import { Camera, Image as ImageIcon, Sliders } from 'lucide-react';

interface PhotoPlaceholderProps {
  label: string;
  category?: string;
  aspectRatioText?: string;
  className?: string;
  orientation?: 'landscape' | 'portrait' | 'square';
  featured?: boolean;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  label,
  category,
  aspectRatioText = '16:9 · Alta Resolução',
  className = '',
  orientation = 'landscape',
  featured = false,
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[220px] flex flex-col justify-between p-6 sm:p-8 bg-[#EFE9E0] text-[#1D1D1D] border border-[#D8C8B5] transition-all select-none overflow-hidden group ${className}`}
      style={{
        backgroundImage: `radial-gradient(#D8C8B5 0.75px, transparent 0.75px)`,
        backgroundSize: '16px 16px',
      }}
    >
      {/* Editorial framing marks (fine corner crosshairs) */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#77716C]/60" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#77716C]/60" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#77716C]/60" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#77716C]/60" />

      {/* Top Header Information */}
      <div className="flex items-center justify-between text-xs tracking-wider text-[#77716C] uppercase font-mono">
        <span className="flex items-center gap-1.5 font-sans font-semibold text-[#1D1D1D]">
          <Camera className="w-3.5 h-3.5 text-[#77716C]" />
          {category || 'Fotografia Oficial'}
        </span>
        <span className="text-[11px] text-[#77716C]">{aspectRatioText}</span>
      </div>

      {/* Center Label and Photographic Composition Guide */}
      <div className="my-auto py-6 text-center max-w-md mx-auto space-y-2.5">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF8F5] border border-[#D8C8B5] flex items-center justify-center text-[#77716C] shadow-2xs group-hover:scale-105 transition-transform duration-300">
          <ImageIcon className="w-5 h-5 text-[#1D1D1D]" />
        </div>
        <div>
          <p className="font-serif text-lg sm:text-xl text-[#1D1D1D] leading-snug">
            {label}
          </p>
          <p className="text-xs text-[#77716C] mt-1 font-sans">
            Espaço reservado para fotografia do acervo oficial de Felipe Santana
          </p>
        </div>
      </div>

      {/* Bottom Technical Bar */}
      <div className="pt-3 border-t border-[#D8C8B5]/60 flex items-center justify-between text-[11px] text-[#77716C] font-mono">
        <span>Slot: {orientation.toUpperCase()}</span>
        <span className="text-[#1D1D1D] font-sans font-medium">Aguardando arquivo original</span>
      </div>
    </div>
  );
};
