import React, { useState } from 'react';
import { COUPLE_DETAILS } from '../data/weddingData';
import { Heart, Share2, Check } from 'lucide-react';

export const FooterSection = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Ananya & Rohan Royal Wedding Invitation',
        text: 'You are cordially invited to celebrate the wedding of Ananya & Rohan in Udaipur!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="bg-[#1E1215] text-[#FFF8EF] pt-16 pb-12 px-4 relative overflow-hidden border-t-2 border-[#D4AF37]">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-32 bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Royal Crest Emblem */}
        <div className="w-16 h-16 rounded-full bg-[#8B1E3F] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-great-vibes text-3xl font-bold mx-auto mb-6 royal-shadow">
          AR
        </div>

        <h3 className="font-great-vibes text-4xl sm:text-5xl text-[#D4AF37] mb-2">
          {COUPLE_DETAILS.bride.name} & {COUPLE_DETAILS.groom.name}
        </h3>

        <p className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#FFF8EF]/80 uppercase mb-6">
          {COUPLE_DETAILS.hashtag}
        </p>

        <p className="font-cormorant italic text-lg sm:text-xl text-[#FFF8EF]/90 max-w-md mx-auto mb-8">
          "With overflowing hearts and eternal gratitude for your presence in our lives."
        </p>

        {/* Share Button */}
        <div className="mb-10">
          <button
            onClick={handleShare}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] font-cinzel text-xs font-bold tracking-wider hover:bg-[#D4AF37] hover:text-[#1E1215] transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'INVITATION LINK COPIED!' : 'SHARE ROYAL INVITATION'}</span>
          </button>
        </div>

        <div className="w-full h-[1px] bg-[#D4AF37]/30 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-poppins text-[#FFF8EF]/60 space-y-2 sm:space-y-0">
          <p>© 2026 Ananya & Rohan Wedding Celebration. All Rights Reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#8B1E3F] fill-[#8B1E3F]" />
            <span>for a Royal Lifetime</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
