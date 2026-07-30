import React from 'react';
import { COUPLE_DETAILS } from '../data/weddingData';
import { SectionDivider } from '../components/SectionDivider';

export const BrideGroomSection = () => {
  return (
    <section id="couple" className="py-20 px-4 bg-[#FFF8EF] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#AA771C] uppercase block mb-2">
            The Royal Couple
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F]">
            Bride & Groom
          </h2>
          <SectionDivider type="lotus" />
        </div>

        {/* Grid for Bride and Groom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bride */}
          <div className="flex flex-col items-center text-center">
            {/* Ornate Circular Photo Frame */}
            <div className="relative mb-6 group">
              {/* Outer Glowing Gold Ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#FFF3A7] to-[#8B1E3F] opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
              
              {/* Decorative Dashed Gold Halo */}
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-[#D4AF37]/60 animate-[spin_30s_linear_infinite]" />

              {/* Main Circular Frame */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full p-2 bg-gradient-to-tr from-[#D4AF37] via-[#FFF3A7] to-[#8B1E3F] shadow-[0_10px_25px_rgba(139,30,63,0.25)] border-2 border-[#D4AF37] transition-transform duration-500 group-hover:scale-105">
                <img
                  src={COUPLE_DETAILS.bride.photo}
                  alt={COUPLE_DETAILS.bride.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full border-4 border-[#FFF8EF] shadow-inner"
                />
              </div>

              {/* Royal Badge at Bottom */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#8B1E3F] to-[#A82848] text-[#D4AF37] border border-[#D4AF37] text-[10px] sm:text-xs font-cinzel font-bold tracking-widest shadow-lg flex items-center gap-1 whitespace-nowrap">
                <span>THE BRIDE</span>
              </div>
            </div>

            <h3 className="font-great-vibes text-4xl sm:text-5xl text-[#8B1E3F] mb-2 mt-2">
              {COUPLE_DETAILS.bride.fullName}
            </h3>

            <p className="font-poppins text-xs font-semibold text-[#8B1E3F]/80 mb-1">
              {COUPLE_DETAILS.bride.parents}
            </p>
            <p className="font-poppins font-bold text-[11px] text-[#3A2E2A]/70 mb-4">
              {COUPLE_DETAILS.bride.grandparents}
            </p>

            <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />

            <p className="font-poppins text-xs sm:text-sm text-[#3A2E2A]/90 leading-relaxed mb-6 italic max-w-sm">
              "{COUPLE_DETAILS.bride.about}"
            </p>

          </div>

          {/* Groom */}
          <div className="flex flex-col items-center text-center">
            {/* Ornate Circular Photo Frame */}
            <div className="relative mb-6 group">
              {/* Outer Glowing Gold Ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#8B1E3F] via-[#FFF3A7] to-[#D4AF37] opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
              
              {/* Decorative Dashed Gold Halo */}
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-[#D4AF37]/60 animate-[spin_30s_linear_infinite]" />

              {/* Main Circular Frame */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full p-2 bg-gradient-to-tr from-[#8B1E3F] via-[#FFF3A7] to-[#D4AF37] shadow-[0_10px_25px_rgba(139,30,63,0.25)] border-2 border-[#D4AF37] transition-transform duration-500 group-hover:scale-105">
                <img
                  src={COUPLE_DETAILS.groom.photo}
                  alt={COUPLE_DETAILS.groom.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full border-4 border-[#FFF8EF] shadow-inner"
                />
              </div>

              {/* Royal Badge at Bottom */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#8B1E3F] to-[#A82848] text-[#D4AF37] border border-[#D4AF37] text-[10px] sm:text-xs font-cinzel font-bold tracking-widest shadow-lg flex items-center gap-1 whitespace-nowrap">
                <span>THE GROOM</span>
              </div>
            </div>

            <h3 className="font-great-vibes text-4xl sm:text-5xl text-[#8B1E3F] mb-2 mt-2">
              {COUPLE_DETAILS.groom.fullName}
            </h3>

            <p className="font-poppins text-xs font-semibold text-[#8B1E3F]/80 mb-1">
              {COUPLE_DETAILS.groom.parents}
            </p>
            <p className="font-poppins font-bold text-[11px] text-[#3A2E2A]/70 mb-4">
              {COUPLE_DETAILS.groom.grandparents}
            </p>

            <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />

            <p className="font-poppins text-xs sm:text-sm text-[#3A2E2A]/90 leading-relaxed mb-6 italic max-w-sm">
              "{COUPLE_DETAILS.groom.about}"
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};
