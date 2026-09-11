import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, MessageSquare, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationData } from '../types';

interface ReservationSectionProps {
  onReservationComplete: (data: ReservationData) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onReservationComplete,
}) => {
  // Today's date string YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: today,
    time: '20:00',
    guests: '2',
    occasion: 'Casual Dining',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const timeSlots = [
    { value: '12:30', label: '12:30 PM (Lunch)' },
    { value: '13:30', label: '01:30 PM (Lunch)' },
    { value: '14:30', label: '02:30 PM (Lunch)' },
    { value: '19:00', label: '07:00 PM (Dinner)' },
    { value: '19:30', label: '07:30 PM (Dinner)' },
    { value: '20:00', label: '08:00 PM (Prime Dinner)' },
    { value: '20:30', label: '08:30 PM (Prime Dinner)' },
    { value: '21:00', label: '09:00 PM (Dinner)' },
    { value: '21:30', label: '09:30 PM (Late Dinner)' },
    { value: '22:00', label: '10:00 PM (Late Dinner)' },
  ];

  const occasions = [
    'Casual Dining',
    'Romantic Date Night',
    'Birthday Celebration',
    'Wedding Anniversary',
    'Family Reunion',
    'Business Dinner',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit contact number');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newReservation: ReservationData = {
        id: `RES-${Date.now().toString().slice(-6)}`,
        name: formData.name,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        occasion: formData.occasion,
        notes: formData.notes,
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage
      try {
        const stored = localStorage.getItem('hotel_options_reservations');
        const list = stored ? JSON.parse(stored) : [];
        list.push(newReservation);
        localStorage.setItem('hotel_options_reservations', JSON.stringify(list));
      } catch {
        // Safe fallback
      }

      setIsSubmitting(false);
      onReservationComplete(newReservation);
    }, 600);
  };

  return (
    <section id="reservation" className="relative py-24 sm:py-32 border-b border-[#d4a656]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono-code text-xs text-[#d4a656] tracking-[0.3em] uppercase block">
            06 / Reserve a Table
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#f5ead8] tracking-tight">
            Join Us for an <span className="italic text-[#d4a656]">Unforgettable Evening</span>
          </h2>
          <p className="text-sm sm:text-base text-[#b8a48a] font-normal leading-relaxed">
            We recommend booking in advance for Friday &amp; weekend evenings. Walk-ins are always warmly welcomed subject to seating availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#2a0a12]/90 rounded-2xl border border-[#d4a656]/30 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs font-mono-code">
                  {errorMsg}
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-[#b8a48a] mb-2">
                    Your Full Name *
                  </label>
                  <input
                    id="reservation-name-input"
                    type="text"
                    required
                    placeholder="e.g. Surbhi Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a0810]/80 border border-[#d4a656]/25 text-sm text-[#f5ead8] placeholder-[#b8a48a]/40 focus:outline-none focus:border-[#d4a656] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-[#b8a48a] mb-2">
                    Contact Phone *
                  </label>
                  <input
                    id="reservation-phone-input"
                    type="tel"
                    required
                    placeholder="e.g. 083057 01904"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a0810]/80 border border-[#d4a656]/25 text-sm text-[#f5ead8] placeholder-[#b8a48a]/40 focus:outline-none focus:border-[#d4a656] transition-colors"
                  />
                </div>
              </div>

              {/* Date, Time, Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-[#b8a48a] mb-2">
                    Date *
                  </label>
                  <input
                    id="reservation-date-input"
                    type="date"
                    min={today}
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a0810]/80 border border-[#d4a656]/25 text-sm text-[#f5ead8] focus:outline-none focus:border-[#d4a656] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-[#b8a48a] mb-2">
                    Time Slot *
                  </label>
                  <select
                    id="reservation-time-select"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a0810]/80 border border-[#d4a656]/25 text-sm text-[#f5ead8] focus:outline-none focus:border-[#d4a656] transition-colors"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value} className="bg-[#1a0810] text-[#f5ead8]">
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-[#b8a48a] mb-2">
                    Guests *
                  </label>
                  <select
                    id="reservation-guests-select"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a0810]/80 border border-[#d4a656]/25 text-sm text-[#f5ead8] focus:outline-none focus:border-[#d4a656] transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '10+'].map((g) => (
                      <option key={g} value={g.toString()} className="bg-[#1a0810] text-[#f5ead8]">
                        {g} {g === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#b8a48a] mb-2">
                  Special Occasion
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {occasions.map((occ) => (
                    <button
                      type="button"
                      key={occ}
                      onClick={() => setFormData({ ...formData, occasion: occ })}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-all text-left truncate ${
                        formData.occasion === occ
                          ? 'bg-[#d4a656] text-[#1a0810] font-semibold'
                          : 'bg-[#1a0810]/60 text-[#b8a48a] hover:text-[#f5ead8] border border-[#d4a656]/15'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#b8a48a] mb-2">
                  Special Preferences or Requests (Optional)
                </label>
                <textarea
                  id="reservation-notes-textarea"
                  rows={2}
                  placeholder="e.g. Quiet corner table, Jain preparation, high chair needed, celebrating 10th anniversary"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1a0810]/80 border border-[#d4a656]/25 text-sm text-[#f5ead8] placeholder-[#b8a48a]/40 focus:outline-none focus:border-[#d4a656] transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                id="reservation-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4a656] via-[#e8c887] to-[#d4a656] text-[#1a0810] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_10px_35px_rgba(212,166,86,0.3)] hover:shadow-[0_15px_45px_rgba(212,166,86,0.5)] active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{isSubmitting ? 'Confirming Reservation...' : 'Confirm Table Reservation'}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono-code text-[#b8a48a]/80 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4a656]" />
                <span>Instant visual confirmation · No advance deposit required</span>
              </div>
            </form>
          </div>

          {/* Right Column: Direct Contact & Instant Booking */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Instant WhatsApp Booking */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#3d1420]/80 to-[#2a0a12] border border-[#d4a656]/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-[#f5ead8] font-light">
                    Direct WhatsApp Booking
                  </h3>
                  <p className="text-xs text-[#b8a48a]">
                    Instant response from restaurant manager
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#b8a48a] leading-relaxed">
                Prefer to message us directly? Tap below to send a pre-filled booking request straight to our host team via WhatsApp.
              </p>

              <a
                id="whatsapp-reserve-btn"
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp ({RESTAURANT_INFO.phone})</span>
              </a>
            </div>

            {/* Direct Phone Call */}
            <div className="p-8 rounded-2xl bg-[#2a0a12]/80 border border-[#d4a656]/20 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#521a2a] border border-[#d4a656]/30 flex items-center justify-center text-[#d4a656]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-[#f5ead8] font-light">
                    Immediate Telephone Booking
                  </h3>
                  <p className="text-xs text-[#b8a48a]">
                    Call for large parties or immediate seating
                  </p>
                </div>
              </div>

              <div className="text-2xl font-display font-medium text-[#d4a656]">
                {RESTAURANT_INFO.phone}
              </div>

              <a
                id="phone-reserve-btn"
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="w-full py-3.5 rounded-xl border border-[#d4a656]/40 text-[#f5ead8] hover:text-[#d4a656] hover:border-[#d4a656] font-semibold text-xs tracking-wider uppercase transition-all bg-[#3d1420]/60 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d4a656]" />
                <span>Call Restaurant Desk</span>
              </a>
            </div>

            {/* Dining Guidelines */}
            <div className="p-6 rounded-xl bg-[#1a0810]/70 border border-[#d4a656]/15 space-y-2.5 text-xs text-[#b8a48a]">
              <div className="font-mono-code text-[11px] text-[#d4a656] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d4a656]" /> Hospitality Policy
              </div>
              <ul className="space-y-1.5 text-[11px] leading-relaxed">
                <li>• Tables are held for 15 minutes past your scheduled reservation time.</li>
                <li>• Special dietary requirements (pure Jain, vegan) are accommodated gladly.</li>
                <li>• Valet parking available at Teen Patti entrance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
