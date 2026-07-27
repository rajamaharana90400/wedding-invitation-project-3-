import React from 'react';
import { Heart, ChevronDown, Calendar, MapPin } from 'lucide-react';
import { COUPLE_DETAILS } from '../data/weddingData';
import aboveBack from '../assets/aboveback.png';
import lowerSide from '../assets/lowerside.png';
import swan from '../assets/swan.png';

export const HeroSection = ({ onOpenInvitation }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#FDF8F2] overflow-hidden px-4 py-16"
    >
      {/* Top Header Image (aboveback.png) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-0">
        <img 
          src={aboveBack} 
          alt="Top Header Decoration" 
          className="w-full h-auto min-h-[220px] sm:min-h-[360px] md:min-h-[480px] object-cover object-top block opacity-95"
        />
      </div>

      {/* Lower Background Decoration (lowerside.png) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-0">
        <img 
          src={lowerSide} 
          alt="Decorative bottom border" 
          className="w-full h-auto min-h-[200px] sm:min-h-[300px] md:min-h-[400px] object-cover object-bottom block opacity-95"
        />
      </div>

      {/* Royal Swan in front of the lower image */}
      <div className="absolute bottom-2 sm:bottom-4 left-3 sm:left-10 md:left-20 z-[5] pointer-events-none">
        <img 
          src={swan} 
          alt="Royal Swan" 
          className="w-24 sm:w-36 md:w-48 lg:w-56 h-auto object-contain mix-blend-multiply drop-shadow-md opacity-95"
        />
      </div>

      {/* Main Center Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Shubh Vivah Auspicious Mantra */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#8B1E3F]/10 backdrop-blur-md border border-[#8B1E3F]/30 text-[#8B1E3F] mb-6 shadow-sm">
          <span className="font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase">
            || श्री गणेशाय नमः ||
          </span>
        </div>

        {/* Central Rotating Mandala Emblem */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-6 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#D4AF37] stroke-[1.2] animate-spin-slow">
            <circle cx="50" cy="50" r="46" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="38" />
            <circle cx="50" cy="50" r="28" strokeDasharray="4 2" />
            <polygon points="50,12 60,35 85,35 65,50 72,75 50,60 28,75 35,50 15,35 40,35" className="fill-[#8B1E3F]/10 stroke-[#D4AF37]" />
          </svg>
          <div className="absolute text-[#8B1E3F] font-great-vibes text-3xl sm:text-4xl font-bold drop-shadow">
            AR
          </div>
        </div>

        <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] font-semibold text-[#AA771C] uppercase mb-3">
          The Wedding Celebration Of
        </p>

        {/* Bride & Groom Names & Royal Couple Photos */}
        <div className="flex flex-col items-center justify-center gap-3 my-2">
          {/* Royal Couple Photos Display */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 my-2">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-[#FFF3A7] to-[#8B1E3F] shadow-xl border-2 border-[#D4AF37] transition-transform duration-500 hover:scale-105">
                <img
                  src={COUPLE_DETAILS.bride.photo}
                  alt={COUPLE_DETAILS.bride.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full border border-[#FFF8EF]"
                />
              </div>
              <span className="font-cinzel text-[10px] sm:text-xs font-bold text-[#AA771C] tracking-wider uppercase mt-1.5">
                The Bride
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#8B1E3F] fill-[#D4AF37] animate-bounce" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-[#8B1E3F] via-[#FFF3A7] to-[#D4AF37] shadow-xl border-2 border-[#D4AF37] transition-transform duration-500 hover:scale-105">
                <img
                  src={COUPLE_DETAILS.groom.photo}
                  alt={COUPLE_DETAILS.groom.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full border border-[#FFF8EF]"
                />
              </div>
              <span className="font-cinzel text-[10px] sm:text-xs font-bold text-[#AA771C] tracking-wider uppercase mt-1.5">
                The Groom
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mt-1">
            <h1 className="font-great-vibes text-5xl sm:text-7xl md:text-8xl text-[#8B1E3F] drop-shadow-md font-normal">
              {COUPLE_DETAILS.bride.name}
            </h1>
            <span className="font-great-vibes text-3xl sm:text-5xl text-[#D4AF37] font-bold">&</span>
            <h1 className="font-great-vibes text-5xl sm:text-7xl md:text-8xl text-[#8B1E3F] drop-shadow-md font-normal">
              {COUPLE_DETAILS.groom.name}
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <p className="font-cormorant italic text-lg sm:text-2xl text-[#3A2E2A]/90 mt-2 mb-8 max-w-lg drop-shadow-sm font-medium">
          "{COUPLE_DETAILS.tagline}"
        </p>

        {/* Date & Venue Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#FFF8EF]/90 backdrop-blur-md border border-[#D4AF37] text-[#3A2E2A] royal-shadow">
            <Calendar className="w-4 h-4 text-[#8B1E3F]" />
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider">
              {COUPLE_DETAILS.displayDate}
            </span>
          </div>

          <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#FFF8EF]/90 backdrop-blur-md border border-[#D4AF37] text-[#3A2E2A] royal-shadow">
            <MapPin className="w-4 h-4 text-[#8B1E3F]" />
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider">
              {COUPLE_DETAILS.mainVenue}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <a
        href="#invitation"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#8B1E3F]/80 hover:text-[#8B1E3F] transition-colors z-10"
      >
        <span className="font-cinzel text-[10px] tracking-widest uppercase mb-1">Scroll To Experience</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#D4AF37]" />
      </a>
    </section>
  );
};
