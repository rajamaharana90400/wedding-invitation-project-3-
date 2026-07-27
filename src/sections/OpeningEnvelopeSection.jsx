import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { GoldFrame } from '../components/GoldFrame';
import { INVITATION_MESSAGE } from '../data/weddingData';
import { Sparkles } from 'lucide-react';
import invitationCardsImg from '../assets/invitationcards.png';

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
            /* Premium Royal Velvet Box state */
            <div
              onClick={handleOpenClick}
              className="group cursor-pointer relative w-full max-w-[600px] mx-auto aspect-[4/3] bg-gradient-to-br from-[#6A1128] via-[#8B1E3F] to-[#510A1D] rounded-lg border-[6px] border-[#D4AF37] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 sm:p-10 flex flex-col items-center justify-center transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              {/* Subtle inner velvet texture/glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />

              {/* Ornate Gold Inner Frame */}
              <div className="absolute inset-3 border-2 border-dashed border-[#D4AF37]/70 rounded-md pointer-events-none" />
              <div className="absolute inset-5 border border-[#D4AF37]/40 rounded-sm pointer-events-none" />

              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none" />

              {/* Royal Wax Seal / Gold Medallion */}
              <div className="relative z-20 flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#B8860B] via-[#FFD700] to-[#D4AF37] border-[3px] border-[#FFF8EF]/20 shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 hover:rotate-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#8B1E3F]/30 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFDF00] to-[#DAA520]">
                    <span className="font-great-vibes text-4xl sm:text-5xl font-bold text-[#8B1E3F] drop-shadow-sm block leading-none">A&R</span>
                  </div>
                </div>

                <p className="font-cinzel text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#FFD700] uppercase mt-8 group-hover:text-[#FFF] transition-colors flex items-center space-x-3 drop-shadow-md">
                  <Sparkles className="w-4 h-4 text-[#FFD700]" />
                  <span>UNSEAL INVITATION</span>
                  <Sparkles className="w-4 h-4 text-[#FFD700]" />
                </p>
              </div>

              {/* Recipient Ribbon */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-2 border-t border-b border-[#D4AF37]/50 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent text-[#FFD700] min-w-[250px] text-center">
                <span className="font-cormorant italic text-sm sm:text-base font-medium tracking-wide">For our beloved guest</span>
              </div>
            </div>
          ) : (
            /* Open Letter View with full invitationcards.png */
            <GoldFrame innerClassName="p-0 overflow-hidden relative shadow-2xl cursor-pointer" onClick={handleOpenClick}>
              <img 
                src={invitationCardsImg} 
                alt="Formal Invitation Card" 
                className="w-full h-auto block hover:opacity-95 transition-opacity"
                title="Click to re-seal"
              />
            </GoldFrame>
          )}
        </div>
      </div>
    </section>
  );
};
