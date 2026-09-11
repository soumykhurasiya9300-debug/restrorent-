import React from 'react';
import { Sparkles, ArrowRight, Utensils, Star } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';
import { SignatureDish } from '../types';

interface SignaturesSectionProps {
  onReserveClick: () => void;
  onSelectSignature: (dish: SignatureDish) => void;
}

export const SignaturesSection: React.FC<SignaturesSectionProps> = ({
  onReserveClick,
  onSelectSignature,
}) => {
  return (
    <section id="signatures" className="relative py-24 sm:py-32 border-b border-[#d4a656]/15">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#6b2235]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#d4a656]/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono-code text-xs text-[#d4a656] tracking-[0.3em] uppercase block mb-2">
              03 / The Signatures
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#f5ead8] tracking-tight">
              Dishes That <span className="italic text-[#d4a656]">Define Us</span>
            </h2>
          </div>
          <p className="font-mono-code text-xs text-[#b8a48a] max-w-xs text-left sm:text-right">
            Iconic creations recommended by 550+ verified Google diners
          </p>
        </div>

        {/* 3 Signatures Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SIGNATURE_DISHES.map((dish) => (
            <div
              key={dish.id}
              id={`signature-card-${dish.id}`}
              onClick={() => onSelectSignature(dish)}
              className="group relative rounded-2xl bg-[#2a0a12]/80 border border-[#d4a656]/25 overflow-hidden transition-all duration-300 hover:border-[#d4a656]/70 hover:shadow-[0_20px_50px_rgba(212,166,86,0.15)] flex flex-col justify-between cursor-pointer"
            >
              {/* Photo Area with Top Badges */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1a0810]">
                <img
                  src={dish.img}
                  alt={`${dish.title} ${dish.emphasis}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0a12] via-transparent to-transparent opacity-80" />

                {/* Number identifier */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono-code tracking-widest bg-[#1a0810]/85 text-[#e8c887] border border-[#d4a656]/30 backdrop-blur-md">
                    {dish.numberStr}
                  </span>
                </div>

                {/* Tag pill */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono-code tracking-wider bg-[#d4a656] text-[#1a0810] font-semibold shadow-md">
                    {dish.tag}
                  </span>
                </div>

                {/* Subtitle float */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono-code text-[#b8a48a]">
                  <span>{dish.subtitle}</span>
                  <span className="text-[#f5ead8] font-display text-base font-semibold">{dish.price}</span>
                </div>
              </div>

              {/* Text Description Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-light text-[#f5ead8] mb-2 group-hover:text-[#d4a656] transition-colors">
                    {dish.title} <span className="italic font-normal text-[#d4a656]">{dish.emphasis}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b8a48a] font-light leading-relaxed">
                    {dish.desc}
                  </p>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-4 border-t border-[#d4a656]/15 flex items-center justify-between">
                  <span className="text-xs font-mono-code text-[#e8c887] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4a656]" /> House Specialty
                  </span>
                  <span className="text-xs font-mono-code text-[#d4a656] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Taste This</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono-code text-[#b8a48a] mb-3 uppercase tracking-widest">
            Freshly prepared per service · Ask your server for pairing suggestions
          </p>
          <button
            id="signature-reserve-banner-btn"
            onClick={onReserveClick}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#d4a656] hover:text-[#f5ead8] underline underline-offset-4 transition-colors"
          >
            <span>Reserve your table now to enjoy our signature specialties</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
