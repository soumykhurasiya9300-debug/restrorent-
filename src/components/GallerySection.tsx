import React from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 border-b border-[#d4a656]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono-code text-xs text-[#d4a656] tracking-[0.3em] uppercase block mb-2">
              05 / The Atmosphere
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#f5ead8] tracking-tight">
              Beautiful Interiors, <span className="italic text-[#d4a656]">Flamboyant Spirit</span>
            </h2>
          </div>
          <p className="font-mono-code text-xs text-[#b8a48a] max-w-xs text-left sm:text-right">
            Click any photograph to view in high-resolution
          </p>
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => onSelectImage(item)}
              className={`group relative rounded-2xl overflow-hidden bg-[#1a0810] border border-[#d4a656]/20 cursor-pointer hover:border-[#d4a656]/60 transition-all duration-300 hover:shadow-2xl ${
                item.wide ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-square'
              }`}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Dark vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0810] via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Expand Icon Badge */}
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-[#1a0810]/70 backdrop-blur-md text-[#f5ead8] border border-[#d4a656]/30 opacity-0 group-hover:opacity-100 transition-all transform -translate-y-2 group-hover:translate-y-0">
                <Maximize2 className="w-4 h-4 text-[#d4a656]" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <span className="font-mono-code text-[11px] text-[#d4a656] uppercase tracking-wider block mb-1">
                    Wright Town Jabalpur
                  </span>
                  <h3 className="font-display text-lg font-light text-[#f5ead8]">
                    {item.label}
                  </h3>
                </div>
                <span className="text-xs font-mono-code text-[#b8a48a] opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
