/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { SignaturesSection } from './components/SignaturesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { DishDetailModal } from './components/DishDetailModal';
import { ReservationModal } from './components/ReservationModal';
import { FloatingActions } from './components/FloatingActions';
import { MenuItem, SignatureDish, GalleryItem, ReservationData } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [selectedDish, setSelectedDish] = useState<MenuItem | SignatureDish | null>(null);
  const [completedReservation, setCompletedReservation] = useState<ReservationData | null>(null);

  const handleReserveClick = useCallback(() => {
    const reservationElement = document.getElementById('reservation');
    if (reservationElement) {
      reservationElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleReserveForDish = useCallback((dishName: string) => {
    handleReserveClick();
    setTimeout(() => {
      const notesInput = document.getElementById('reservation-notes-textarea') as HTMLTextAreaElement | null;
      if (notesInput) {
        notesInput.value = `Interested in ordering: ${dishName}`;
        notesInput.focus();
      }
    }, 400);
  }, [handleReserveClick]);

  return (
    <div className="relative min-h-screen bg-[#2a0a12] text-[#f5ead8] selection:bg-[#d4a656] selection:text-[#1a0810]">
      {/* Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Atmospheric FX: Film grain texture and ambient glow */}
      <div className="film-grain" />
      <div className="ambient-glow" />

      {/* Sticky Navigation Bar */}
      <Navbar onReserveClick={handleReserveClick} />

      {/* Main Content Sections */}
      <main>
        <Hero onReserveClick={handleReserveClick} />
        <Marquee />
        <AboutSection />
        <MenuSection
          onSelectDish={(dish) => setSelectedDish(dish)}
          onReserveClick={handleReserveClick}
        />
        <SignaturesSection
          onReserveClick={handleReserveClick}
          onSelectSignature={(sig) => setSelectedDish(sig)}
        />
        <ReviewsSection />
        <GallerySection onSelectImage={(item) => setSelectedGalleryItem(item)} />
        <ReservationSection
          onReservationComplete={(res) => setCompletedReservation(res)}
        />
        <VisitSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA Buttons & Back-to-Top */}
      <FloatingActions />

      {/* Modals */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />

      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserveForDish={handleReserveForDish}
      />

      <ReservationModal
        reservation={completedReservation}
        onClose={() => setCompletedReservation(null)}
      />
    </div>
  );
}
