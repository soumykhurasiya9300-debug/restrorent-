import React from 'react';
import { CheckCircle2, Calendar, Clock, Users, Phone, MessageSquare, X, Copy, Check } from 'lucide-react';
import { ReservationData } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  reservation: ReservationData | null;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  reservation,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!reservation) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Hotel Options Restaurant! I have booked table reservation #${reservation.id} for ${reservation.guests} guests on ${reservation.date} at ${reservation.time}. Name: ${reservation.name}.`
  );

  const whatsappLink = `https://wa.me/${RESTAURANT_INFO.phoneClean.replace('+', '')}?text=${whatsappMessage}`;

  const copyDetails = () => {
    navigator.clipboard.writeText(
      `Hotel Options Reservation #${reservation.id}\nDate: ${reservation.date}\nTime: ${reservation.time}\nGuests: ${reservation.guests}\nName: ${reservation.name}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="reservation-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-[99990] bg-[#1a0810]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300"
    >
      <div
        id="reservation-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full bg-[#2a0a12] border border-[#d4a656]/50 rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] p-6 sm:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#b8a48a] hover:text-[#d4a656] hover:bg-[#3d1420] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="text-center space-y-1 mb-6">
          <span className="text-[11px] font-mono-code text-[#d4a656] uppercase tracking-widest block">
            Table Confirmed · Hotel Options
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-[#f5ead8] font-light">
            We Look Forward to Welcoming You
          </h2>
          <p className="text-xs text-[#b8a48a]">
            Reference Code:{' '}
            <span className="font-mono-code font-bold text-[#e8c887]">{reservation.id}</span>
          </p>
        </div>

        {/* Details Card */}
        <div className="p-4 rounded-xl bg-[#1a0810]/80 border border-[#d4a656]/20 space-y-3 text-xs mb-6">
          <div className="flex justify-between items-center py-1 border-b border-[#d4a656]/10">
            <span className="text-[#b8a48a]">Guest Name:</span>
            <span className="font-medium text-[#f5ead8]">{reservation.name}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-[#d4a656]/10">
            <span className="text-[#b8a48a]">Date &amp; Time:</span>
            <span className="font-mono-code text-[#d4a656]">
              {reservation.date} at {reservation.time}
            </span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-[#d4a656]/10">
            <span className="text-[#b8a48a]">Party Size:</span>
            <span className="font-medium text-[#f5ead8]">{reservation.guests} Guests</span>
          </div>
          {reservation.occasion && (
            <div className="flex justify-between items-center py-1 border-b border-[#d4a656]/10">
              <span className="text-[#b8a48a]">Occasion:</span>
              <span className="text-[#e8c887]">{reservation.occasion}</span>
            </div>
          )}
          {reservation.notes && (
            <div className="flex justify-between items-start py-1">
              <span className="text-[#b8a48a]">Special Notes:</span>
              <span className="text-[#f5ead8] max-w-[60%] text-right font-light italic">
                {reservation.notes}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            id="modal-send-whatsapp-btn"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Confirmation to WhatsApp</span>
          </a>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={copyDetails}
              className="py-3 rounded-xl border border-[#d4a656]/30 text-[#f5ead8] hover:text-[#d4a656] text-xs font-mono-code flex items-center justify-center gap-1.5 hover:bg-[#3d1420] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Details' : 'Copy Details'}</span>
            </button>

            <button
              onClick={onClose}
              className="py-3 rounded-xl bg-[#3d1420] hover:bg-[#521a2a] text-[#d4a656] text-xs font-mono-code border border-[#d4a656]/30 transition-colors"
            >
              Done
            </button>
          </div>
        </div>

        {/* Location reminder */}
        <div className="mt-5 text-center text-[11px] font-mono-code text-[#b8a48a]/70">
          📍 Bus Stand, 872, near Teen Patti Square, Wright Town, Jabalpur
        </div>
      </div>
    </div>
  );
};
