import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Car, Utensils, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const VisitSection: React.FC = () => {
  return (
    <section id="visit" className="relative py-24 sm:py-32 border-b border-[#d4a656]/15 bg-[#1a0810]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono-code text-xs text-[#d4a656] tracking-[0.3em] uppercase block mb-2">
              07 / Visit Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#f5ead8] tracking-tight">
              In The Heart of <span className="italic text-[#d4a656]">Jabalpur</span>
            </h2>
          </div>
          <p className="font-mono-code text-xs text-[#b8a48a] max-w-xs text-left sm:text-right">
            Near Teen Patti Square · Easily accessible from all parts of the city
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address & Details Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Address Card */}
            <div className="p-7 rounded-2xl bg-[#2a0a12]/80 border border-[#d4a656]/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3d1420] border border-[#d4a656]/30 flex items-center justify-center text-[#d4a656]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-[#f5ead8]">Restaurant Location</h3>
                  <span className="text-xs font-mono-code text-[#d4a656]">Wright Town Landmark</span>
                </div>
              </div>

              <div className="text-sm text-[#f5ead8] leading-relaxed pl-1">
                {RESTAURANT_INFO.address}
              </div>

              <div className="pt-2 border-t border-[#d4a656]/15 flex items-center justify-between text-xs font-mono-code text-[#b8a48a]">
                <span>Plus Code</span>
                <span className="text-[#e8c887]">{RESTAURANT_INFO.plusCode}</span>
              </div>
            </div>

            {/* Timings & Peak Hours */}
            <div className="p-7 rounded-2xl bg-[#2a0a12]/80 border border-[#d4a656]/20 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3d1420] border border-[#d4a656]/30 flex items-center justify-center text-[#d4a656]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-[#f5ead8]">Opening Hours</h3>
                  <span className="text-xs font-mono-code text-emerald-400">Open 7 Days a Week</span>
                </div>
              </div>

              <div className="space-y-2 text-sm pl-1">
                <div className="flex justify-between items-center text-[#f5ead8]">
                  <span>Monday – Sunday</span>
                  <span className="font-mono-code text-xs text-[#d4a656]">11:00 AM – 11:30 PM</span>
                </div>
                <div className="flex justify-between items-center text-xs text-[#b8a48a] pt-2 border-t border-[#d4a656]/10">
                  <span>Peak Evening Flow</span>
                  <span className="font-mono-code text-[11px] text-[#e8c887]">07:30 PM – 10:30 PM</span>
                </div>
              </div>
            </div>

            {/* Direct Contact & Direction CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                id="visit-get-directions-btn"
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl bg-[#d4a656] text-[#1a0810] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:bg-[#e8c887] transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                id="visit-call-now-btn"
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="py-3.5 px-6 rounded-xl border border-[#d4a656]/40 text-[#f5ead8] hover:text-[#d4a656] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 bg-[#2a0a12] hover:bg-[#3d1420] transition-all"
              >
                <Phone className="w-4 h-4 text-[#d4a656]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map Container */}
          <div className="lg:col-span-7 relative min-h-[380px] rounded-2xl overflow-hidden border border-[#d4a656]/30 shadow-2xl bg-[#2a0a12] flex flex-col">
            {/* Embedded Interactive Visual Map / Mockup with Live Pin */}
            <div className="relative flex-1 w-full min-h-[320px] bg-[#1a0810] overflow-hidden group">
              {/* Styled map background graphics */}
              <div
                className="absolute inset-0 opacity-40 bg-cover bg-center filter saturate-50 contrast-125 group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a0a12] via-[#2a0a12]/60 to-[#1a0810]/70" />

              {/* Center Map Pin Card */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative max-w-sm w-full p-6 rounded-2xl bg-[#1a0810]/95 backdrop-blur-md border border-[#d4a656]/40 shadow-2xl text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#d4a656] text-[#1a0810] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(212,166,86,0.6)] pulse-ring relative">
                    <MapPin className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-medium text-[#f5ead8]">
                      Hotel Options Restaurant
                    </h3>
                    <p className="text-xs text-[#d4a656] font-mono-code mt-0.5">
                      Near Teen Patti Square · Wright Town
                    </p>
                  </div>

                  <p className="text-xs text-[#b8a48a] leading-relaxed">
                    Conveniently situated next to Jabalpur central transit, featuring comfortable valet assistance for guests.
                  </p>

                  <a
                    id="map-open-google-btn"
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3d1420] text-[#d4a656] hover:text-[#f5ead8] hover:bg-[#521a2a] border border-[#d4a656]/30 text-xs font-mono-code uppercase tracking-wider transition-all"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Service Badges Footer */}
            <div className="p-4 bg-[#1a0810] border-t border-[#d4a656]/20 flex flex-wrap items-center justify-around gap-4 text-xs font-mono-code text-[#b8a48a]">
              <div className="flex items-center gap-2 text-[#f5ead8]">
                <Utensils className="w-4 h-4 text-[#d4a656]" />
                <span>Fine Dine-in</span>
              </div>
              <div className="flex items-center gap-2 text-[#f5ead8]">
                <Car className="w-4 h-4 text-[#d4a656]" />
                <span>Takeaway Counter</span>
              </div>
              <div className="flex items-center gap-2 text-[#f5ead8]">
                <CheckCircle className="w-4 h-4 text-[#d4a656]" />
                <span>Doorstep Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
