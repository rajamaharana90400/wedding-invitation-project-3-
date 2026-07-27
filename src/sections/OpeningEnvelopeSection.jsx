import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { GoldFrame } from '../components/GoldFrame';
import { INVITATION_MESSAGE } from '../data/weddingData';
import { Sparkles } from 'lucide-react';
import invitationCardImg from '../assets/invitationcard.jpg';

export const OpeningEnvelopeSection = ({
  isOpen,
  onToggleOpen,
}) => {
  const [animating, setAnimating] = useState(false);

  const handleOpenClick = () => {
    if (animating) return;
    setAnimating(true);
    onToggleOpen();

    // Trigger golden confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#8B1E3F', '#F3E5AB', '#AA771C'],
    });

    setTimeout(() => {
      setAnimating(false);
    }, 1200);
  };

  return (
    <section id="invitation" className="relative min-h-screen py-20 px-4 flex flex-col items-center justify-center bg-[#FFF8EF] overflow-hidden">
      {/* Background Mandala Watermark */}
      <div className="absolute w-[600px] h-[600px] opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#8B1E3F]">
          <circle cx="100" cy="100" r="90" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl w-full mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-8">
          <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#AA771C] uppercase block mb-2">
            Royal Proclamation
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F]">
            The Formal Invitation
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Envelope Container */}
        <div className="relative w-full max-w-2xl mx-auto my-8 perspective-1000">
          {!isOpen ? (
            /* Closed Royal Envelope state */
            <div
              onClick={handleOpenClick}
              className="group cursor-pointer relative w-full aspect-[16/10] bg-gradient-to-br from-[#FFF8EF] via-[#FDF8F2] to-[#FAF4EB] rounded-2xl border-2 border-[#D4AF37] royal-shadow p-6 sm:p-10 flex flex-col items-center justify-center transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
            >
              {/* Envelope Flap Border Design */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#FFF8EF] to-[#FAF4EB] border-b-2 border-[#D4AF37]/60 clip-polygon-flap pointer-events-none" />

              {/* Decorative Envelope Borders */}
              <div className="absolute inset-4 border border-[#D4AF37]/40 rounded-xl pointer-events-none" />

              {/* Royal Wax Seal Button */}
              <div className="relative z-20 flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#8B1E3F] via-[#A82848] to-[#8B1E3F] border-4 border-[#D4AF37] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="text-center text-[#FFF8EF]">
                    <span className="font-great-vibes text-2xl sm:text-3xl font-bold block leading-none">AR</span>
                    <span className="text-[9px] font-cinzel tracking-widest block uppercase text-[#D4AF37]">SEAL</span>
                  </div>
                </div>

                <p className="font-cinzel text-xs font-bold tracking-widest text-[#8B1E3F] uppercase mt-6 group-hover:text-[#AA771C] transition-colors flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>CLICK TO UNSEAL ROYAL LETTER</span>
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                </p>
              </div>

              {/* Recipient Ribbon */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 text-[#3A2E2A]">
                <span className="font-cormorant italic text-sm">Cordially Invited to the Wedding of Ananya & Rohan</span>
              </div>
            </div>
          ) : (
            /* Open Letter View with invitationcard.jpg background */
            <GoldFrame innerClassName="p-0 overflow-hidden relative border-2 border-[#D4AF37]/80 shadow-2xl">
              <div
                className="relative p-6 sm:p-12 text-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${invitationCardImg})` }}
              >
                {/* Subtle scrim for crystal clear background image visibility */}
                <div className="absolute inset-0 bg-black/15 z-0" />

                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#8B1E3F] flex items-center justify-center text-[#D4AF37] font-great-vibes text-2xl font-bold shadow-lg border border-[#D4AF37]">
                      🕉
                    </div>
                  </div>

                  <p className="font-cormorant italic text-lg sm:text-2xl text-[#8B1E3F] font-bold mb-3 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    {INVITATION_MESSAGE.quote}
                  </p>

                  <p className="font-poppins text-xs sm:text-sm text-[#2A1810] mb-8 max-w-xl mx-auto leading-relaxed font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                    {INVITATION_MESSAGE.translation}
                  </p>

                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#8B1E3F] to-transparent mx-auto mb-8" />

                  <div className="font-poppins text-sm sm:text-base text-[#2C1810] leading-relaxed whitespace-pre-line mb-10 max-w-xl mx-auto font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    {INVITATION_MESSAGE.letterBody}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                    <a
                      href="#events"
                      className="px-6 py-3 rounded-full bg-[#8B1E3F] text-[#FFF8EF] font-cinzel text-xs font-bold tracking-widest hover:bg-[#A82848] transition-all shadow-md active:scale-95"
                    >
                      VIEW EVENT SCHEDULE
                    </a>
                    <button
                      onClick={handleOpenClick}
                      className="px-6 py-3 rounded-full bg-[#FFF8EF]/90 border-2 border-[#8B1E3F] text-[#8B1E3F] font-cinzel text-xs font-bold tracking-widest hover:bg-[#8B1E3F] hover:text-[#FFF8EF] transition-all shadow-xs active:scale-95"
                    >
                      RE-SEAL LETTER ✉️
                    </button>
                  </div>
                </div>
              </div>
            </GoldFrame>
          )}
        </div>
      </div>
    </section>
  );
};
