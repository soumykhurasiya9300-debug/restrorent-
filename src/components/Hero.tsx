import React, { useState, useRef, useEffect } from 'react';
import {
  Star,
  MapPin,
  ArrowRight,
  Utensils,
  Heart,
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Eye,
  Flame,
} from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [cinemaMode, setCinemaMode] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was blocked; will resume on first user interaction
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-32 pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* 
        Full-Section Repetitive Background Video:
        Sourced from Pinterest pin (https://pin.it/4MtgIOdlt) with local cached MP4 and CDN fallback.
        Engineered with calibrated gradients so the video stays properly visible and vivid.
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          id="hero-background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/videos/hero-bg-poster.jpg"
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out scale-[1.01] ${
            cinemaMode ? 'brightness-100 contrast-105' : 'brightness-90 contrast-105'
          }`}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source
            src="https://v1.pinimg.com/videos/iht/expMp4/cc/b8/2c/ccb82c660a88e9bba0c633063bff2dff_720w.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dynamic Light/Atmospheric Overlays crafted for maximum video visibility + text legibility */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
            cinemaMode
              ? 'bg-gradient-to-r from-[#140409]/60 via-[#140409]/20 to-transparent'
              : 'bg-gradient-to-r from-[#140409]/85 via-[#1a0810]/40 to-[#140409]/20'
          }`}
        />

        {/* Top bar vignette for seamless navigation blending */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1a0810]/95 via-[#1a0810]/50 to-transparent pointer-events-none" />

        {/* Bottom soft vignette blending into the marquee ticker */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#2a0a12] via-[#2a0a12]/60 to-transparent pointer-events-none" />

        {/* Subtle warm ambient glow in corners that enhances the video hues */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#6b2235]/20 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-[#d4a656]/15 blur-[120px] pointer-events-none" />
      </div>

      {/* Main Section Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography, Highlights & Calls-to-Action */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top pill badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a0a12]/80 border border-[#d4a656]/40 text-xs text-[#f5ead8] backdrop-blur-md shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono-code text-[11px] text-[#e8c887] font-semibold">OPEN NOW</span>
                <span className="text-[#b8a48a]">·</span>
                <span className="text-[#f5ead8] text-[11px]">Closes 11:30 PM</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1a0810]/75 border border-[#d4a656]/30 text-[11px] text-[#d4a656] font-mono-code backdrop-blur-md">
                <MapPin className="w-3 h-3 text-[#d4a656]" />
                <span>Wright Town, Jabalpur</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3d1420]/75 border border-rose-400/30 text-[11px] text-rose-200 font-mono-code backdrop-blur-md">
                <Flame className="w-3 h-3 text-rose-400 animate-pulse" />
                <span>Atmospheric Fine Dining</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-[#f5ead8] leading-[1.08] tracking-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.7)]">
              Where <span className="italic font-normal text-[#d4a656]">Flavour</span> Meets{' '}
              <span className="italic font-normal text-[#e0a5a5]">Atmosphere</span>
            </h1>

            {/* Subtext description with refined shadow for crisp readability over the video */}
            <p className="text-base sm:text-lg text-[#f5ead8]/90 max-w-2xl font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Jabalpur’s beloved fine-dining destination. Generous North Indian delicacies, wood-fired continental favourites, and an intimate flamboyant ambience crafted for family gatherings, dates, and celebratory feasts.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-reserve-btn"
                onClick={onReserveClick}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4a656] via-[#e8c887] to-[#d4a656] text-[#1a0810] font-semibold text-sm tracking-wider uppercase transition-all shadow-[0_10px_35px_rgba(212,166,86,0.35)] hover:shadow-[0_15px_45px_rgba(212,166,86,0.55)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 group"
              >
                <span>Reserve a Table</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                id="hero-menu-btn"
                href="#menu"
                className="px-7 py-4 rounded-full border border-[#d4a656]/50 text-[#f5ead8] hover:text-[#d4a656] hover:border-[#d4a656] text-sm font-medium tracking-wide transition-all bg-[#1a0810]/75 hover:bg-[#2a0a12]/90 backdrop-blur-md flex items-center gap-2 shadow-lg"
              >
                <Utensils className="w-4 h-4 text-[#d4a656]" />
                <span>Explore The Menu</span>
              </a>
            </div>

            {/* Trust Metrics Bar with translucent glass backing */}
            <div className="pt-6 border-t border-[#d4a656]/20 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="p-3 rounded-xl bg-[#1a0810]/40 backdrop-blur-sm border border-[#d4a656]/15">
                <div className="flex items-center gap-1.5 text-[#d4a656] mb-1">
                  <span className="font-display text-2xl sm:text-3xl font-semibold text-[#f5ead8]">4.7</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#d4a656] text-[#d4a656]" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-[#e8c887] font-mono-code">557+ Google Reviews</div>
              </div>

              <div className="p-3 rounded-xl bg-[#1a0810]/40 backdrop-blur-sm border border-[#d4a656]/15">
                <div className="font-display text-2xl sm:text-3xl font-semibold text-[#f5ead8] mb-1">
                  ₹200–1.4K
                </div>
                <div className="text-xs text-[#e8c887] font-mono-code">Avg. Per Person</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#1a0810]/40 backdrop-blur-sm border border-[#d4a656]/15">
                <div className="font-display text-2xl sm:text-3xl font-semibold text-[#f5ead8] mb-1">
                  3 Modes
                </div>
                <div className="text-xs text-[#e8c887] font-mono-code">Dine-in · Takeaway · Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Column: Translucent Glass Ambiance Showcase & Interactive Video Controls */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gold frame accent backing */}
              <div className="absolute -inset-2 rounded-2xl border border-[#d4a656]/30 bg-gradient-to-tr from-[#3d1420]/30 to-transparent pointer-events-none" />

              {/* Glassmorphic Ambiance Showcase Card - allows the video background to shine through */}
              <div className="relative rounded-xl overflow-hidden p-6 sm:p-7 bg-[#1a0810]/55 backdrop-blur-xl border border-[#d4a656]/35 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-6">
                {/* Header status */}
                <div className="flex items-center justify-between border-b border-[#d4a656]/20 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a656] opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d4a656]" />
                    </span>
                    <span className="font-mono-code text-xs text-[#d4a656] tracking-wider uppercase font-semibold">
                      Ambiance Reel · Live
                    </span>
                  </div>
                  <span className="text-[11px] font-mono-code text-[#b8a48a] px-2.5 py-1 rounded-full bg-[#2a0a12]/80 border border-[#d4a656]/20">
                    Wright Town
                  </span>
                </div>

                {/* Quote block */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#e8c887] font-mono-code">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4a656]" />
                    <span>Jabalpur's Dining Gem</span>
                  </div>
                  <p className="font-display text-xl sm:text-2xl text-[#f5ead8] font-light leading-snug italic">
                    "Delicious food, beautiful interior, and a truly flamboyant atmosphere."
                  </p>
                  <p className="text-xs text-[#b8a48a] font-mono-code pt-1">— Verified Google Review</p>
                </div>

                {/* Featured house signature teaser */}
                <div className="p-3.5 rounded-lg bg-[#2a0a12]/75 border border-[#d4a656]/25 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#d4a656]/20 border border-[#d4a656]/40 flex items-center justify-center text-[#d4a656]">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono-code text-[#d4a656] uppercase">Signature Starter</div>
                      <div className="text-sm font-semibold text-[#f5ead8]">Hot Peanut Butter</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#e8c887] font-mono-code px-2.5 py-1 rounded bg-[#1a0810] border border-[#d4a656]/20">
                    ₹290
                  </span>
                </div>

                {/* Badges row */}
                <div className="flex items-center justify-between pt-1 gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2a0a12]/80 border border-rose-400/30 text-xs text-rose-200">
                    <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
                    <span className="text-[11px] font-medium">Women-Owned</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2a0a12]/80 border border-[#d4a656]/30 text-xs text-[#d4a656]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a656]" />
                    <span className="text-[11px] font-mono-code">LGBTQ+ Friendly</span>
                  </div>
                </div>

                {/* Interactive Video Controller Bar */}
                <div className="pt-4 border-t border-[#d4a656]/20 flex items-center justify-between">
                  <div className="text-[11px] font-mono-code text-[#b8a48a] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Background Video:</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Toggle Clear/Cinema View for maximum video visibility */}
                    <button
                      id="hero-video-clarity-btn"
                      onClick={() => setCinemaMode(!cinemaMode)}
                      title={cinemaMode ? 'Restore subtle contrast overlay' : 'Highlight video (Clear View)'}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono-code flex items-center gap-1 transition-all border ${
                        cinemaMode
                          ? 'bg-[#d4a656] text-[#1a0810] border-[#d4a656] font-semibold shadow-md'
                          : 'bg-[#2a0a12]/80 text-[#f5ead8] border-[#d4a656]/30 hover:border-[#d4a656]'
                      }`}
                    >
                      <Eye className="w-3 h-3" />
                      <span>{cinemaMode ? 'Clear View: On' : 'Clear View'}</span>
                    </button>

                    {/* Play/Pause */}
                    <button
                      id="hero-video-play-btn"
                      onClick={togglePlay}
                      title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
                      className="p-1.5 rounded-md bg-[#2a0a12]/80 hover:bg-[#3d1420] text-[#f5ead8] border border-[#d4a656]/30 hover:border-[#d4a656] transition-all"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    </button>

                    {/* Mute/Unmute */}
                    <button
                      id="hero-video-audio-btn"
                      onClick={toggleMute}
                      title={isMuted ? 'Unmute Ambient Sound' : 'Mute Ambient Sound'}
                      className="p-1.5 rounded-md bg-[#2a0a12]/80 hover:bg-[#3d1420] text-[#f5ead8] border border-[#d4a656]/30 hover:border-[#d4a656] transition-all"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#d4a656]" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

