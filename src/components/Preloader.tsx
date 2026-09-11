import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setFading(true);
          setTimeout(onComplete, 700);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      id="preloader"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#1a0810] transition-opacity duration-700 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#6b2235]/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#d4a656]/40 mb-6 bg-[#2a0a12]/80 backdrop-blur-sm shadow-[0_0_30px_rgba(212,166,86,0.15)]">
          <span className="font-display text-2xl text-[#d4a656] italic">O</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#f5ead8] font-light tracking-wide mb-3">
          Hotel Options
        </h1>

        <p className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#d4a656] mb-8">
          Fine Dining · Jabalpur
        </p>

        {/* Progress bar */}
        <div className="w-48 sm:w-64 h-[2px] bg-[#3d1420] mx-auto rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#a87c30] via-[#d4a656] to-[#f0dfb8] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 font-mono-code text-[11px] text-[#b8a48a]/70 tracking-widest">
          {progress}%
        </div>
      </div>

      {/* Quick skip button */}
      <button
        id="preloader-skip-btn"
        onClick={() => {
          setFading(true);
          setTimeout(onComplete, 200);
        }}
        className="absolute bottom-8 text-xs text-[#b8a48a]/60 hover:text-[#d4a656] transition-colors font-mono-code tracking-wider uppercase px-4 py-2"
      >
        Skip Intro
      </button>
    </div>
  );
};
