import React from 'react';
import { CountdownTimer } from '../components/CountdownTimer';
import { COUPLE_DETAILS } from '../data/weddingData';
import { SectionDivider } from '../components/SectionDivider';
import { Sparkles, Calendar, MapPin } from 'lucide-react';
import lowerSide from '../assets/lowerside.png';

export const CountdownSection = () => {
  return (
    <section id="countdown" className="py-24 px-4 bg-[#F7E1D7] relative overflow-hidden text-center">
      {/* Lower Decorative Side Background Image */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-0">
        <img 
          src={lowerSide} 
          alt="Decorative bottom border" 
          className="w-full h-auto min-h-[220px] sm:min-h-[350px] md:min-h-[480px] object-cover object-bottom block opacity-60"
        />
      </div>

      {/* Ambient Floating Orbs */}
      <div className="absolute top-10 left-12 w-36 h-36 rounded-full bg-gradient-to-br from-white/80 via-[#FFF3A7]/30 to-[#D4AF37]/20 backdrop-blur-md border border-white/70 pointer-events-none animate-pulse duration-[7s]" />
      <div className="absolute top-1/3 right-10 w-44 h-44 rounded-full bg-gradient-to-tr from-white/70 via-[#8B1E3F]/15 to-[#D4AF37]/25 backdrop-blur-lg border border-white/80 pointer-events-none animate-bounce duration-[9s]" />

      {/* Background Mandala Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none animate-spin-slow z-1">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#D4AF37] fill-none stroke-[1]">
          <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-[#D4AF37]/40 shadow-xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#AA771C] uppercase">
            Counting Down To Eternity
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F] drop-shadow-xs">
          Until We Say "I Do"
        </h2>

        <p className="font-cormorant italic text-lg sm:text-xl text-[#3A2E2A]/85 my-4 max-w-lg mx-auto font-semibold">
          "Every second brings us closer to the most magical day of our lives."
        </p>

        <SectionDivider type="lotus" />

        {/* Live Countdown Component */}
        <CountdownTimer targetDate={COUPLE_DETAILS.weddingDate} />

        {/* Date & Venue Glass Badge */}
        <div className="mt-8 px-6 py-3.5 rounded-full bg-white/70 backdrop-blur-xl border-2 border-white/90 shadow-[0_10px_25px_rgba(139,30,63,0.1),inset_0_0_15px_rgba(255,255,255,0.9)] max-w-lg mx-auto inline-flex items-center justify-center space-x-3 text-[#8B1E3F]">
          <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span className="font-cinzel text-xs sm:text-sm font-bold tracking-wider">
            DECEMBER 12, 2026
          </span>
          <span className="text-[#D4AF37]">•</span>
          <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span className="font-cinzel text-xs sm:text-sm font-bold tracking-wider">
            THE LEELA PALACE, UDAIPUR
          </span>
        </div>
      </div>
    </section>
  );
};
