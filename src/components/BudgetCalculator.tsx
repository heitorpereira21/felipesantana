import React, { useState } from 'react';
import { MessageCircle, Send, Check, PhoneCall, Mail, MapPin } from 'lucide-react';
import { PHOTOGRAPHER_INFO } from '../data/photographyData';

export const BudgetCalculator: React.FC = () => {
  const [name, setName] = useState('');
  const [eventType, setEventType] = useState('Casamento');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('Cataguases – MG');
  const [customMessage, setCustomMessage] = useState('');

  const EVENT_OPTIONS = [
    'Casamento',
    'Ensaio Pré-Wedding',
    'Festa de 15 Anos',
    'Ensaio Gestante / Maternidade',
    'Ensaio em Estúdio (Fine Art)',
    'Ensaio Infantil / Família',
    'Formatura / Institucional',
    'Outro momento especial',
  ];

  const handleGenerateWhatsAppLink = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `Olá Felipe! Vim através do site e gostaria de conversar sobre orçamento fotográfico.\n\n`;
    if (name.trim()) text += `*Nome:* ${name.trim()}\n`;
    text += `*Tipo de Ensaio / Evento:* ${eventType}\n`;
    if (eventDate.trim()) text += `*Data prevista:* ${eventDate.trim()}\n`;
    if (location.trim()) text += `*Local/Cidade:* ${location.trim()}\n`;
    if (customMessage.trim()) text += `*Detalhes:* ${customMessage.trim()}\n`;
    text += `\nPoderia me enviar mais informações sobre disponibilidade e propostas?`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${PHOTOGRAPHER_INFO.whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsApp = () => {
    const directText = encodeURIComponent(
      `Olá Felipe Santana! Gostaria de informações sobre disponibilidade e orçamentos para fotografia.`
    );
    window.open(`https://wa.me/${PHOTOGRAPHER_INFO.whatsappNumber}?text=${directText}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-t border-[#D8C8B5]/50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Emotional Context & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#77716C] tracking-widest uppercase font-medium">
                <span>Atendimento Personalizado</span>
                <span aria-hidden="true">·</span>
                <span>Canal Direto</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1D] leading-tight text-balance">
                Vamos registrar o que torna sua história única?
              </h2>
              <p className="text-base text-[#77716C] leading-relaxed">
                Conte um pouco sobre o momento que você quer eternizar. Vamos conversar sobre a melhor forma de registrar essa história. Cada casamento e ensaio recebe atenção artesanal, com número limitado de datas por ano.
              </p>
            </div>

            {/* Direct Official Contact Cards */}
            <div className="pt-4 space-y-3 border-t border-[#D8C8B5]/50 text-sm">
              <div className="flex items-start gap-3 p-3 bg-[#F4EFEA] rounded-lg border border-[#D8C8B5]/60">
                <PhoneCall className="w-4 h-4 text-[#1D1D1D] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#1D1D1D]">WhatsApp & Telefone Direto</p>
                  <p className="text-xs text-[#77716C] mt-0.5">
                    {PHOTOGRAPHER_INFO.phoneDisplay} · {PHOTOGRAPHER_INFO.phoneLandline}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#F4EFEA] rounded-lg border border-[#D8C8B5]/60">
                <Mail className="w-4 h-4 text-[#1D1D1D] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#1D1D1D]">E-mail Profissional</p>
                  <p className="text-xs text-[#77716C] mt-0.5">{PHOTOGRAPHER_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#F4EFEA] rounded-lg border border-[#D8C8B5]/60">
                <MapPin className="w-4 h-4 text-[#1D1D1D] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#1D1D1D]">Estúdio em Cataguases</p>
                  <p className="text-xs text-[#77716C] mt-0.5">{PHOTOGRAPHER_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="inline-flex items-center gap-2 text-xs text-[#1D1D1D] hover:text-[#77716C] font-semibold underline underline-offset-4 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#1D1D1D]" />
                <span>Ou abra uma conversa imediata no WhatsApp sem preenchimento</span>
              </button>
            </div>
          </div>

          {/* Right Column: Functional WhatsApp Inquiry Builder */}
          <div className="lg:col-span-7 bg-[#F4EFEA] border border-[#D8C8B5]/70 rounded-xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="pb-6 border-b border-[#D8C8B5]/50">
              <h3 className="font-serif text-2xl text-[#1D1D1D] font-normal">
                Planejador Rápido de Orçamento
              </h3>
              <p className="text-xs text-[#77716C] mt-1">
                Preencha os campos abaixo para abrir uma conversa formatada no WhatsApp oficial do fotógrafo.
              </p>
            </div>

            <form onSubmit={handleGenerateWhatsAppLink} className="pt-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-name" className="block text-xs font-semibold uppercase tracking-wider text-[#1D1D1D]">
                    Seu Nome ou do Casal
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Mariana & Lucas"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D8C8B5] rounded-sm text-[#1D1D1D] placeholder:text-[#77716C]/60 focus:outline-none focus:ring-1 focus:ring-[#1D1D1D]"
                  />
                </div>

                {/* Event Type */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-type" className="block text-xs font-semibold uppercase tracking-wider text-[#1D1D1D]">
                    Tipo de Ensaio / Evento
                  </label>
                  <select
                    id="inquiry-type"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D8C8B5] rounded-sm text-[#1D1D1D] focus:outline-none focus:ring-1 focus:ring-[#1D1D1D]"
                  >
                    {EVENT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Event Date */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-date" className="block text-xs font-semibold uppercase tracking-wider text-[#1D1D1D]">
                    Data Prevista ou Mês/Ano
                  </label>
                  <input
                    id="inquiry-date"
                    type="text"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    placeholder="Ex: Outubro de 2026 / 15/11/2026"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D8C8B5] rounded-sm text-[#1D1D1D] placeholder:text-[#77716C]/60 focus:outline-none focus:ring-1 focus:ring-[#1D1D1D]"
                  />
                </div>

                {/* Location */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-location" className="block text-xs font-semibold uppercase tracking-wider text-[#1D1D1D]">
                    Cidade / Local
                  </label>
                  <input
                    id="inquiry-location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: Cataguases, Juiz de Fora, etc."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D8C8B5] rounded-sm text-[#1D1D1D] placeholder:text-[#77716C]/60 focus:outline-none focus:ring-1 focus:ring-[#1D1D1D]"
                  />
                </div>
              </div>

              {/* Custom Message / Notes */}
              <div className="space-y-1.5">
                <label htmlFor="inquiry-message" className="block text-xs font-semibold uppercase tracking-wider text-[#1D1D1D]">
                  Conte um pouco sobre o momento (opcional)
                </label>
                <textarea
                  id="inquiry-message"
                  rows={3}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Ex: Será uma cerimônia intimista no sítio ao entardecer..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D8C8B5] rounded-sm text-[#1D1D1D] placeholder:text-[#77716C]/60 focus:outline-none focus:ring-1 focus:ring-[#1D1D1D] resize-none"
                />
              </div>

              {/* Submit to WhatsApp */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-[#FAF8F5] bg-[#1D1D1D] hover:bg-[#333333] active:bg-black rounded-sm transition-all duration-200 tracking-wide cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#D8C8B5]" />
                  <span>Conversar pelo WhatsApp (+55 32 99918-2169)</span>
                </button>
                <p className="text-center text-[11px] text-[#77716C] mt-2.5">
                  Nenhum dado é salvo no navegador; você será direcionado com a mensagem pronta no aplicativo do WhatsApp.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
