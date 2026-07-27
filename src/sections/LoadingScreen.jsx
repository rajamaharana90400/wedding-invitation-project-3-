import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 300);
          setTimeout(() => onComplete(), 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FDF8F2] transition-opacity duration-1000 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Soft Glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#8B1E3F]/20 blur-3xl animate-pulse" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Animated Royal Mandala */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 flex items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full stroke-[#D4AF37] fill-none stroke-[1.5] animate-spin-slow"
          >
            <circle cx="100" cy="100" r="90" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="75" />
            <circle cx="100" cy="100" r="60" strokeDasharray="8 4" />
            {/* Petals pattern */}
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 30} 100 100)`}>
                <path d="M100 25 C110 45 110 65 100 75 C90 65 90 45 100 25 Z" className="fill-[#8B1E3F]/20 stroke-[#D4AF37]" />
              </g>
            ))}
            <circle cx="100" cy="100" r="20" className="fill-[#8B1E3F] stroke-[#D4AF37]" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center text-[#FFF8EF] font-great-vibes text-3xl font-bold">
            AR
          </div>
        </div>

        {/* Royal Names */}
        <h1 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#8B1E3F] tracking-widest mb-2">
          ANANYA & ROHAN
        </h1>

        <p className="font-cormorant italic text-base sm:text-lg text-[#3A2E2A]/80 mb-8">
          Unfolding a Royal Celebration of Love
        </p>

        {/* Progress Bar & Percentage */}
        <div className="w-64 max-w-xs h-1.5 bg-[#D4AF37]/20 rounded-full overflow-hidden mb-3 relative">
          <div
            className="h-full bg-gradient-to-r from-[#D4AF37] via-[#8B1E3F] to-[#D4AF37] transition-all duration-100 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center space-x-1 font-poppins text-xs font-semibold text-[#8B1E3F] tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" />
          <span>{progress}% Loaded</span>
        </div>
      </div>
    </div>
  );
};
