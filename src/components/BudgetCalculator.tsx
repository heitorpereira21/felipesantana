import React, { useState } from 'react';
import { MessageCircle, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { PHOTOGRAPHER_INFO } from '../data/photographyData';

export const BudgetCalculator: React.FC = () => {
  const [eventType, setEventType] = useState('Casamento');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('Cataguases');

  const EVENT_OPTIONS = [
    'Casamento',
    'Ensaio Pré-Wedding',
    'Celebração de 15 Anos',
    'Ensaio Gestante / Maternidade',
    'Ensaio Fine Art em Estúdio',
    'Família & Infantil',
    'Formatura / Institucional',
  ];

  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `Olá Felipe Santana!\n\n`;
    if (name.trim()) message += `Meu nome é ${name.trim()}.\n`;
    message += `Gostaria de saber sobre orçamentos e disponibilidade para ${eventType}.\n`;
    if (date.trim()) message += `Data ou previsão: ${date.trim()}.\n`;
    if (city.trim()) message += `Local: ${city.trim()}.\n`;
    message += `\nPodemos conversar?`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${PHOTOGRAPHER_INFO.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Felipe Santana! Acessei seu site e gostaria de conversar sobre disponibilidade para ensaio/evento.`
    );
    window.open(`https://wa.me/${PHOTOGRAPHER_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 sm:py-28 lg:py-32 bg-[#171717] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Striking Minimalist Call */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#D8C8B5]">
              Disponibilidade & Contato
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.05] tracking-tight">
              Vamos registrar o que torna sua história única?
            </h2>

            <p className="text-base text-stone-300 font-light leading-relaxed max-w-lg">
              Cada casamento e ensaio recebe atenção dedicada e artesanal. Atendemos com agenda limitada em Cataguases, Juiz de Fora, Zona da Mata e eventos com deslocamento.
            </p>

            {/* Direct contact references */}
            <div className="pt-6 border-t border-[#333333] space-y-3 text-xs font-mono text-stone-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D8C8B5]" />
                <span>WhatsApp: {PHOTOGRAPHER_INFO.phoneDisplay} · Fixo: {PHOTOGRAPHER_INFO.phoneLandline}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D8C8B5]" />
                <span>E-mail: {PHOTOGRAPHER_INFO.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D8C8B5] shrink-0 mt-0.5" />
                <span>Estúdio: {PHOTOGRAPHER_INFO.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8C8B5] hover:text-white underline underline-offset-4 cursor-pointer font-mono"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Iniciar conversa imediata no WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Contextual WhatsApp Inquiry Form */}
          <div className="lg:col-span-6 bg-[#212121] border border-[#333333] p-8 sm:p-10 rounded-lg">
            <div className="pb-6 border-b border-[#333333]">
              <h3 className="font-serif text-2xl text-white font-normal">
                Iniciar Proposta Personalizada
              </h3>
              <p className="text-xs text-stone-400 mt-1 font-light">
                Preencha os dados básicos para abrir uma mensagem já formatada no WhatsApp de Felipe Santana.
              </p>
            </div>

            <form onSubmit={handleOpenWhatsApp} className="pt-6 space-y-4 text-xs font-mono">
              <div className="space-y-1">
                <label className="text-stone-300 uppercase tracking-wider block">Seu Nome / Nome do Casal</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Mariana & Lucas"
                  className="w-full px-3.5 py-2.5 bg-[#171717] border border-[#444444] text-white rounded-xs focus:outline-none focus:border-[#D8C8B5] font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-stone-300 uppercase tracking-wider block">Tipo de Ensaio</label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#171717] border border-[#444444] text-white rounded-xs focus:outline-none focus:border-[#D8C8B5] font-sans text-xs"
                  >
                    {EVENT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-stone-300 uppercase tracking-wider block">Data Prevista ou Mês</label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Ex: Outubro / 2026"
                    className="w-full px-3.5 py-2.5 bg-[#171717] border border-[#444444] text-white rounded-xs focus:outline-none focus:border-[#D8C8B5] font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-stone-300 uppercase tracking-wider block">Cidade / Local do Evento</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ex: Cataguases, Juiz de Fora, etc."
                  className="w-full px-3.5 py-2.5 bg-[#171717] border border-[#444444] text-white rounded-xs focus:outline-none focus:border-[#D8C8B5] font-sans"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FAF8F5] hover:bg-white text-[#171717] font-semibold text-xs uppercase tracking-widest rounded-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Enviar Solicitação pelo WhatsApp</span>
                </button>
                <p className="text-[11px] text-stone-400 text-center mt-2 font-sans font-light">
                  Abertura direta no WhatsApp: {PHOTOGRAPHER_INFO.phoneDisplay}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
