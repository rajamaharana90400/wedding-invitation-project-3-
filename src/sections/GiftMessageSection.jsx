import React from 'react';
import { GoldFrame } from '../components/GoldFrame';
import { SectionDivider } from '../components/SectionDivider';
import { Heart, Gift, Sparkles } from 'lucide-react';

export const GiftMessageSection = () => {
  return (
    <section className="py-20 px-4 bg-[#FDF8F2] relative overflow-hidden text-center">
      <div className="max-w-3xl mx-auto">
        <GoldFrame innerClassName="p-8 sm:p-12 bg-[#FFF8EF]">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-[#8B1E3F]/10 border border-[#D4AF37] flex items-center justify-center text-[#8B1E3F]">
              <Gift className="w-7 h-7" />
            </div>
          </div>

          <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#AA771C] uppercase block mb-2">
            A Note On Gifts
          </span>

          <h2 className="font-great-vibes text-4xl sm:text-6xl text-[#8B1E3F] mb-4">
            "Your Blessings Are The Greatest Gift"
          </h2>

          <SectionDivider type="vine" className="my-6" />

          <p className="font-poppins text-xs sm:text-sm text-[#3A2E2A]/80 leading-relaxed max-w-lg mx-auto mb-6">
            The greatest gift you can bestow upon us is your presence, smiles, and warm wishes as we begin our new journey together. Please bring only your blessings!
          </p>

          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 text-[#8B1E3F] font-cinzel text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>No Boxed Gifts Preferred</span>
          </div>
        </GoldFrame>
      </div>
    </section>
  );
};
