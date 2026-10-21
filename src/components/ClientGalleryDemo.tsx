import React, { useState } from 'react';
import {
  Heart,
  Check,
  Sparkles,
  Lock,
  ArrowRight,
  RotateCcw,
  Send,
  Eye,
  SlidersHorizontal,
  X,
  MessageCircle
} from 'lucide-react';
import { CLIENT_GALLERIES, PHOTOGRAPHER_INFO } from '../data/photographyData';
import { ClientGalleryPhoto } from '../types';

interface ClientGalleryDemoProps {
  onClose?: () => void;
  isStandaloneSection?: boolean;
}

export const ClientGalleryDemo: React.FC<ClientGalleryDemoProps> = ({
  onClose,
  isStandaloneSection = true,
}) => {
  const [selectedGalleryId, setSelectedGalleryId] = useState(CLIENT_GALLERIES[0].id);
  const activeGallery = CLIENT_GALLERIES.find((g) => g.id === selectedGalleryId) || CLIENT_GALLERIES[0];

  // Store selected photo IDs per gallery
  const [selectedPhotoIds, setSelectedPhotoIds] = useState<Record<string, string[]>>({
    [CLIENT_GALLERIES[0].id]: ['ml-01', 'ml-02', 'ml-03'],
    [CLIENT_GALLERIES[1].id]: ['ap-01', 'ap-02'],
  });

  const [activeFilter, setActiveFilter] = useState<'all' | 'selected' | 'unselected'>('all');
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [previewPhoto, setPreviewPhoto] = useState<ClientGalleryPhoto | null>(null);

  const currentSelection = selectedPhotoIds[activeGallery.id] || [];
  const selectedCount = currentSelection.length;
  const maxQuota = activeGallery.maxAlbumSelection;
  const remainingCount = Math.max(0, maxQuota - selectedCount);
  const progressPercent = Math.min(100, Math.round((selectedCount / maxQuota) * 100));

  const toggleSelectPhoto = (photoId: string) => {
    setSelectedPhotoIds((prev) => {
      const current = prev[activeGallery.id] || [];
      if (current.includes(photoId)) {
        return {
          ...prev,
          [activeGallery.id]: current.filter((id) => id !== photoId),
        };
      } else {
        if (current.length >= maxQuota) {
          alert(`Você atingiu o limite de ${maxQuota} fotos contratadas para este álbum. Desmarque alguma para adicionar outra.`);
          return prev;
        }
        return {
          ...prev,
          [activeGallery.id]: [...current, photoId],
        };
      }
    });
  };

  const filteredPhotos = activeGallery.photos.filter((photo) => {
    const isSelected = currentSelection.includes(photo.id);
    if (activeFilter === 'selected') return isSelected;
    if (activeFilter === 'unselected') return !isSelected;
    return true;
  });

  const handleSendToWhatsApp = () => {
    const photoNames = activeGallery.photos
      .filter((p) => currentSelection.includes(p.id))
      .map((p, idx) => `${idx + 1}. ${p.title} (${p.id})`)
      .join('\n');

    const message = encodeURIComponent(
      `Olá Felipe Santana!\n\nAqui é ${activeGallery.clientName}.\nFinalizei a seleção das fotos para o álbum "${activeGallery.eventTitle}"!\n\n*Código da Galeria:* ${activeGallery.accessCode}\n*Total Escolhido:* ${selectedCount} fotos\n\n*Lista de Fotos Selecionadas:*\n${photoNames}\n\nPode confirmar o recebimento para darmos andamento à diagramação do álbum?`
    );

    window.open(`https://wa.me/${PHOTOGRAPHER_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
    setConfirmationSent(true);
    setReviewModalOpen(false);
  };

  const handleReset = () => {
    setSelectedPhotoIds((prev) => ({
      ...prev,
      [activeGallery.id]: [],
    }));
    setConfirmationSent(false);
  };

  return (
    <section id="galeria-cliente" className="py-16 sm:py-24 bg-[#F5F2EB] border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* 4VANCE Strategy Pitch Banner */}
        <div className="p-5 sm:p-6 bg-[#1D1D1D] text-[#FAF8F5] rounded-xl border border-[#333333] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#D8C8B5] text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diferencial Comercial 4VANCE · Fase 2</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
              Demonstração: Área Privada para Seleção de Álbum
            </h3>
            <p className="text-xs text-stone-300 max-w-2xl font-light leading-relaxed">
              Permite que os clientes de Felipe Santana selecionem as fotos favoritas diretamente no celular, com limite contratado e envio automático da lista via WhatsApp, substituindo dias de planilhas.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="text-[11px] font-mono text-stone-400 border border-[#444444] px-2.5 py-1 rounded-sm">
              Simulador Front-end
            </span>
            {onClose && (
              <button
                onClick={onClose}
                className="p-1.5 text-stone-400 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Gallery Selection Bar & Access Simulation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E0D8]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#77716C] uppercase tracking-wider">
              <Lock className="w-3 h-3 text-[#1D1D1D]" />
              <span>Galeria Ativa · Código: {activeGallery.accessCode}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1D1D]">
              {activeGallery.eventTitle}
            </h2>
            <p className="text-xs text-[#77716C]">
              {activeGallery.clientName} · {activeGallery.eventDate} · {activeGallery.location}
            </p>
          </div>

          {/* Switch Sample Galleries */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto">
            <span className="text-xs text-[#77716C] hidden sm:inline">Trocar Ensaio:</span>
            <div className="inline-flex p-1 bg-[#EAE4DC] rounded-md border border-[#D8C8B5]/60 text-xs">
              {CLIENT_GALLERIES.map((gal) => (
                <button
                  key={gal.id}
                  onClick={() => {
                    setSelectedGalleryId(gal.id);
                    setConfirmationSent(false);
                  }}
                  className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
                    selectedGalleryId === gal.id
                      ? 'bg-[#1D1D1D] text-white font-medium shadow-2xs'
                      : 'text-[#77716C] hover:text-[#1D1D1D]'
                  }`}
                >
                  {gal.clientName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress & Selection Quota Bar */}
        <div className="p-5 bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="space-y-2 flex-1 max-w-xl">
            <div className="flex items-center justify-between text-xs font-medium text-[#1D1D1D]">
              <span>Cota do Álbum Impresso</span>
              <span className="font-mono tabular-nums">
                <strong className="text-base font-serif">{selectedCount}</strong> / {maxQuota} selecionadas
              </span>
            </div>
            {/* Fine Progress Bar */}
            <div className="w-full h-2 bg-[#EAE4DC] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1D1D1D] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-[11px] text-[#77716C]">
              {remainingCount > 0
                ? `Você ainda pode selecionar mais ${remainingCount} foto${remainingCount > 1 ? 's' : ''}.`
                : 'Você atingiu o número exato de fotos do pacote.'}
            </p>
          </div>

          {/* Filter Tabs & Review Button */}
          <div className="flex flex-wrap items-center gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-[#E5E0D8]">
            <div className="inline-flex p-0.5 bg-[#EAE4DC] rounded-md text-xs">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#FAF8F5] text-[#1D1D1D] font-medium shadow-2xs'
                    : 'text-[#77716C] hover:text-[#1D1D1D]'
                }`}
              >
                Todas ({activeGallery.photos.length})
              </button>
              <button
                onClick={() => setActiveFilter('selected')}
                className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
                  activeFilter === 'selected'
                    ? 'bg-[#FAF8F5] text-[#1D1D1D] font-medium shadow-2xs'
                    : 'text-[#77716C] hover:text-[#1D1D1D]'
                }`}
              >
                Marcadas ({selectedCount})
              </button>
            </div>

            <button
              onClick={() => setReviewModalOpen(true)}
              disabled={selectedCount === 0}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
                selectedCount > 0
                  ? 'bg-[#1D1D1D] text-white hover:bg-black'
                  : 'bg-stone-300 text-stone-500 cursor-not-allowed'
              }`}
            >
              <span>Revisar ({selectedCount})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Confirmation banner if already sent */}
        {confirmationSent && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between gap-4 text-emerald-900 text-xs">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Seleção enviada com sucesso!</strong> A lista das {selectedCount} fotografias foi encaminhada para diagramação.
              </span>
            </div>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-emerald-800 underline hover:text-emerald-950 font-medium"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reiniciar seleção de teste</span>
            </button>
          </div>
        )}

        {/* Client Gallery Grid with Selection Interactions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {filteredPhotos.map((photo, index) => {
            const isSelected = currentSelection.includes(photo.id);

            return (
              <div
                key={photo.id}
                className={`group relative bg-[#FAF8F5] border rounded-lg overflow-hidden transition-all duration-200 ${
                  isSelected
                    ? 'border-[#1D1D1D] shadow-md ring-2 ring-[#1D1D1D]/10'
                    : 'border-[#E5E0D8] hover:border-[#1D1D1D]/40'
                }`}
              >
                {/* Photo container */}
                <div
                  className={`relative w-full overflow-hidden bg-stone-200 ${
                    photo.aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top action buttons: Select / Heart & Magnify */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] bg-black/60 text-white px-2 py-0.5 rounded-xs backdrop-blur-xs">
                      #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setPreviewPhoto(photo)}
                        type="button"
                        className="p-1.5 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer backdrop-blur-xs"
                        title="Ver ampliada"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => toggleSelectPhoto(photo.id)}
                        type="button"
                        aria-pressed={isSelected}
                        className={`p-2 rounded-full transition-all cursor-pointer backdrop-blur-xs ${
                          isSelected
                            ? 'bg-[#1D1D1D] text-[#FAF8F5] ring-2 ring-white shadow-md'
                            : 'bg-black/50 hover:bg-black/80 text-white'
                        }`}
                        title={isSelected ? 'Desmarcar foto' : 'Marcar para o álbum'}
                      >
                        <Heart
                          className={`w-4 h-4 transition-transform ${
                            isSelected ? 'fill-rose-400 text-rose-400 scale-110' : 'text-white'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Selection Badge if selected */}
                  {isSelected && (
                    <div className="absolute bottom-3 left-3 bg-[#1D1D1D] text-white text-[11px] font-medium px-2.5 py-1 rounded-xs flex items-center gap-1 shadow-sm">
                      <Check className="w-3 h-3 text-[#D8C8B5]" />
                      <span>Selecionada para o Álbum</span>
                    </div>
                  )}
                </div>

                {/* Footer caption */}
                <div className="p-3.5 flex items-center justify-between text-xs border-t border-[#E5E0D8]">
                  <div className="truncate mr-2">
                    <p className="font-medium text-[#1D1D1D] truncate">{photo.title}</p>
                    <p className="text-[11px] text-[#77716C]">{photo.moment}</p>
                  </div>

                  <button
                    onClick={() => toggleSelectPhoto(photo.id)}
                    className={`text-[11px] font-semibold underline underline-offset-2 shrink-0 cursor-pointer ${
                      isSelected ? 'text-rose-600 hover:text-rose-800' : 'text-[#1D1D1D] hover:text-[#77716C]'
                    }`}
                  >
                    {isSelected ? 'Remover' : 'Selecionar'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Filter State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-16 bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl space-y-3">
            <Heart className="w-8 h-8 text-[#D8C8B5] mx-auto" />
            <p className="font-serif text-lg text-[#1D1D1D]">Nenhuma foto marcada ainda</p>
            <p className="text-xs text-[#77716C] max-w-sm mx-auto">
              Clique no coração sobre qualquer foto da galeria para adicioná-la à seleção do seu álbum.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-2 text-xs font-semibold text-[#1D1D1D] underline"
            >
              Ver todas as fotos da galeria
            </button>
          </div>
        )}
      </div>

      {/* Review Modal Before Submission */}
      {reviewModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xs animate-fade-in"
          onClick={() => setReviewModalOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#FAF8F5] rounded-xl border border-[#D8C8B5] p-6 sm:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-[#E5E0D8]">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#77716C]">
                  Revisão Final da Seleção
                </p>
                <h3 className="font-serif text-2xl text-[#1D1D1D]">
                  {activeGallery.clientName} — Álbum
                </h3>
              </div>
              <button
                onClick={() => setReviewModalOpen(false)}
                className="p-1 text-[#77716C] hover:text-[#1D1D1D]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[#F5F2EB] rounded-lg text-xs space-y-1">
                <p className="font-semibold text-[#1D1D1D]">Resumo da Escolha:</p>
                <p className="text-[#77716C]">
                  Você selecionou <strong>{selectedCount} de {maxQuota}</strong> fotografias permitidas pelo pacote contratado.
                </p>
              </div>

              {/* Thumbnails of selected photos */}
              <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
                {activeGallery.photos
                  .filter((p) => currentSelection.includes(p.id))
                  .map((p, i) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between p-2.5 bg-white border border-[#E5E0D8] rounded-md text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-10 h-10 object-cover rounded-xs"
                        />
                        <div>
                          <p className="font-medium text-[#1D1D1D]">{p.title}</p>
                          <p className="text-[11px] text-[#77716C]">{p.moment}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleSelectPhoto(p.id)}
                        className="text-stone-400 hover:text-rose-600 text-[11px]"
                      >
                        Remover
                      </button>
                    </div>
                  ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setReviewModalOpen(false)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-[#77716C] hover:text-[#1D1D1D] border border-stone-300 rounded-sm"
              >
                Continuar Escolhendo
              </button>

              <button
                onClick={handleSendToWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#1D1D1D] hover:bg-black rounded-sm shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#D8C8B5]" />
                <span>Confirmar e Enviar via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Preview Lightbox */}
      {previewPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setPreviewPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#FAF8F5] rounded-xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/70 text-white rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-black flex items-center justify-center max-h-[70vh]">
              <img
                src={previewPhoto.image}
                alt={previewPhoto.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-4 sm:p-6 flex items-center justify-between bg-[#FAF8F5]">
              <div>
                <h4 className="font-serif text-lg text-[#1D1D1D]">{previewPhoto.title}</h4>
                <p className="text-xs text-[#77716C]">{previewPhoto.moment}</p>
              </div>

              <button
                onClick={() => {
                  toggleSelectPhoto(previewPhoto.id);
                  setPreviewPhoto(null);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-sm ${
                  currentSelection.includes(previewPhoto.id)
                    ? 'bg-rose-50 text-rose-700 border border-rose-300'
                    : 'bg-[#1D1D1D] text-white hover:bg-black'
                }`}
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    currentSelection.includes(previewPhoto.id) ? 'fill-rose-600 text-rose-600' : ''
                  }`}
                />
                <span>
                  {currentSelection.includes(previewPhoto.id)
                    ? 'Remover do Álbum'
                    : 'Selecionar para o Álbum'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
