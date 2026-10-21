import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, PHOTOGRAPHER_INFO } from '../data/photographyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 bg-[#F4EFEA] border-t border-[#D8C8B5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D8C8B5]/50">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-[#77716C] tracking-widest uppercase font-medium">
              <span>Depoimentos Verificados</span>
              <span aria-hidden="true">·</span>
              <span>Vozes de Quem Viveu Essa Experiência</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1D] leading-tight text-balance">
              Histórias contadas por quem confiou seus maiores momentos.
            </h2>
            <p className="text-sm sm:text-base text-[#77716C] leading-relaxed">
              Avaliações autênticas compartilhadas publicamente no Google e no Casamentos.com.br por famílias, noivos e debutantes de Cataguases e região.
            </p>
          </div>

          {/* Social Proof Metric Badge (Clean Typography without candy capsules) */}
          <div className="p-4 bg-[#FAF8F5] border border-[#D8C8B5]/60 rounded-lg shrink-0">
            <div className="flex items-center gap-1.5 text-[#1D1D1D]">
              <div className="flex text-amber-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="font-serif text-lg font-bold tabular-nums ml-1">5.0</span>
            </div>
            <p className="text-xs text-[#77716C] mt-1">
              Nota máxima com base em <strong className="text-[#1D1D1D]">{PHOTOGRAPHER_INFO.reviewCount} avaliações</strong> reais
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 sm:p-10 bg-[#FAF8F5] border border-[#D8C8B5]/60 rounded-xl flex flex-col justify-between space-y-6 hover:shadow-xs transition-shadow"
            >
              <div className="space-y-4">
                <Quote className="w-7 h-7 text-[#D8C8B5] shrink-0" />
                <p className="font-serif text-base sm:text-lg text-[#1D1D1D] leading-relaxed italic">
                  “{testimonial.text}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8C8B5]/40 flex items-center justify-between gap-4">
                <div>
                  <p className="font-sans text-sm font-semibold text-[#1D1D1D]">{testimonial.author}</p>
                  <p className="text-xs text-[#77716C]">{testimonial.role} · {testimonial.event}</p>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#77716C]">
                    <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                    {testimonial.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
