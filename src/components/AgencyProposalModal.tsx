import React, { useEffect } from 'react';
import { X, Sparkles, Smartphone, TrendingUp, Layers, Zap, ExternalLink, ArrowRight } from 'lucide-react';
import { VALUE_PROPOSITIONS_4VANCE, PHOTOGRAPHER_INFO } from '../data/photographyData';

interface AgencyProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AgencyProposalModal: React.FC<AgencyProposalModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const ICONS = [Zap, TrendingUp, Layers, Smartphone];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="proposal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] bg-[#FAF8F5] rounded-xl overflow-hidden shadow-2xl flex flex-col border border-[#D8C8B5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#1D1D1D] text-[#FAF8F5] flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-[#D8C8B5] uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proposta Comercial 4VANCE</span>
            </div>
            <h2 id="proposal-title" className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
              Visão Estratégica do Redesign Conceitual
            </h2>
            <p className="text-xs text-stone-300">
              Apresentação da 4VANCE para valorização digital de Felipe Santana Fotografia.
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar modal de proposta"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#1D1D1D]">
          {/* Important context notice */}
          <div className="p-4 bg-[#F4EFEA] border-l-2 border-[#1D1D1D] rounded-r-md text-xs space-y-1">
            <p className="font-semibold text-[#1D1D1D]">Aviso Institucional:</p>
            <p className="text-[#77716C] leading-relaxed">
              Esta é uma demonstração conceitual independente elaborada pela 4VANCE para ilustrar o potencial de evolução digital da marca Felipe Santana Fotografia. Não substitui o site oficial (felipesantanaart.com.br) e serve como base para uma conversa comercial de alto nível.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-[#1D1D1D] mb-4">
              Os 4 Pilares da Nova Experiência Digital:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUE_PROPOSITIONS_4VANCE.map((prop, idx) => {
                const IconComponent = ICONS[idx % ICONS.length];
                return (
                  <div
                    key={prop.title}
                    className="p-5 bg-white border border-[#D8C8B5]/70 rounded-lg space-y-2 shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-md bg-[#F4EFEA] flex items-center justify-center text-[#1D1D1D] mb-1">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-[#1D1D1D] text-sm">{prop.title}</h4>
                    <p className="text-xs text-[#77716C] leading-relaxed">{prop.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#D8C8B5]/80 rounded-lg space-y-3">
            <h4 className="font-serif text-base text-[#1D1D1D] font-medium">Comparativo com o Modelo Tradicional:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1 text-[#77716C]">
                <p className="font-medium text-[#1D1D1D]">Modelo Atual de Sites de Fotógrafos:</p>
                <p>• Carregamento pesado com fotos desordenadas</p>
                <p>• Formulários extensos que geram desistência</p>
                <p>• Visual genérico sem diferenciação de marca</p>
              </div>
              <div className="space-y-1 text-[#1D1D1D]">
                <p className="font-medium text-[#1D1D1D]">Proposta 4VANCE Implementada:</p>
                <p>• Carregamento instantâneo & otimizado para celular</p>
                <p>• Mensagem no WhatsApp em 1 clique já formatada</p>
                <p>• Estética de revista editorial internacional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#F4EFEA] border-t border-[#D8C8B5] flex flex-wrap items-center justify-between gap-3">
          <a
            href={PHOTOGRAPHER_INFO.officialSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#77716C] hover:text-[#1D1D1D] transition-colors"
          >
            <span>Ver site atual (felipesantanaart.com.br)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FAF8F5] bg-[#1D1D1D] hover:bg-[#333333] rounded-sm transition-colors cursor-pointer"
          >
            <span>Explorar Demonstração</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
