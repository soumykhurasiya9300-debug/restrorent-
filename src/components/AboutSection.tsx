import React from 'react';
import { Heart, Sparkles, Star, Users, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-b border-[#d4a656]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with index marker */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono-code text-xs text-[#d4a656] tracking-[0.3em] uppercase block mb-2">
              01 / The Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#f5ead8] tracking-tight">
              A Dining Room Shaped by <span className="italic text-[#d4a656]">Warmth</span> &amp; Care
            </h2>
          </div>
          <p className="font-mono-code text-xs text-[#b8a48a] max-w-xs text-left sm:text-right">
            Wright Town · Jabalpur · Est. with pride &amp; hospitality
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual collage & Guest highlight */}
          <div className="lg:col-span-6 relative space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4a656]/25 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
                alt="Hotel Options Interior Hospitality"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0810] via-[#1a0810]/20 to-transparent" />

              {/* Bottom badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#2a0a12]/90 backdrop-blur-md border border-[#d4a656]/30">
                <div className="flex items-center gap-1.5 text-[#d4a656] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#d4a656]" />
                  ))}
                  <span className="text-xs font-mono-code text-[#f5ead8] ml-2">4.7 / 5.0 on Google</span>
                </div>
                <p className="text-xs text-[#f5ead8]/90 italic leading-relaxed">
                  "Must try within the city — delicious food, beautiful interior, flamboyant atmosphere. A genuinely pleasant experience."
                </p>
                <div className="mt-2 text-[11px] font-mono-code text-[#d4a656] uppercase">
                  — Verified Google Guest Review
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Core Values */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-[#b8a48a] text-base leading-relaxed">
              <p>
                Nestled near Teen Patti Square in Wright Town, <strong className="text-[#f5ead8] font-medium">Hotel Options Restaurant</strong> has earned its place as Jabalpur's premier sanctuary for lovers of exquisite taste, rich hospitality, and unforgettable visual ambiance.
              </p>
              <p>
                We believe dining is an emotional art. From the crackle of our signature <span className="text-[#d4a656] font-medium">Hot Peanut Butter</span> to the slow-cooked royalty of our <span className="text-[#d4a656] font-medium">House Special Curry</span>, each dish celebrates authenticity, generous portions, and masterfully balanced spice blends.
              </p>
              <p>
                As a proud <strong className="text-[#e0a5a5] font-medium">women-owned and LGBTQ+ welcoming establishment</strong>, our doors stand wide open for everyone. Whether you are hosting a festive family banquet, an intimate anniversary dinner, or enjoying a quick evening takeaway, our dedicated team ensures you feel truly honored.
              </p>
            </div>

            {/* 4 Pillars / Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {RESTAURANT_INFO.values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#3d1420]/40 border border-[#d4a656]/20 hover:border-[#d4a656]/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xl">{val.icon}</span>
                    <h3 className="text-sm font-semibold text-[#f5ead8]">{val.label}</h3>
                  </div>
                  <p className="text-xs text-[#b8a48a] leading-normal">{val.desc}</p>
                </div>
              ))}
            </div>

            {/* Highlights checklist */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono-code text-[#f5ead8]/90">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a656]" />
                <span>Vegetarian & Non-Veg Kitchens</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a656]" />
                <span>Private Party Bookings</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a656]" />
                <span>Air Conditioned & Valet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
