import React from 'react';
import { VENUE_INFO } from '../data/weddingData';
import { SectionDivider } from '../components/SectionDivider';
import { MapPin, Phone, Mail, Navigation, Sparkles, Building, Compass } from 'lucide-react';

export const VenueSection = () => {
  return (
    <section id="venue" className="py-24 px-4 bg-gradient-to-b from-[#FDF8F2] via-[#F8EFE3] to-[#FDF8F2] relative overflow-hidden">
      {/* Glossy Background Bubbles & Floating Orbs */}
      <div className="absolute top-10 left-8 w-32 h-32 rounded-full bg-gradient-to-br from-white/80 via-[#FFF3A7]/40 to-[#D4AF37]/20 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(212,175,55,0.15),inset_0_0_15px_rgba(255,255,255,0.8)] pointer-events-none animate-bounce duration-[8s]" />
      <div className="absolute bottom-16 right-10 w-44 h-44 rounded-full bg-gradient-to-tr from-white/70 via-[#8B1E3F]/15 to-[#D4AF37]/20 backdrop-blur-lg border border-white/80 shadow-[0_15px_35px_rgba(139,30,63,0.15),inset_0_0_20px_rgba(255,255,255,0.9)] pointer-events-none animate-pulse duration-[6s]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14">
          <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#AA771C] uppercase block mb-2">
            Palatial Setting & Serenity
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F] drop-shadow-xs">
            The Royal Venue
          </h2>
          <SectionDivider type="mandala" />
        </div>

        {/* Details & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Guest Hospitality & Features (Glassmorphic Cards) */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <Building className="w-5 h-5 text-[#8B1E3F]" />
              <h3 className="font-cinzel text-2xl font-bold text-[#8B1E3F]">
                Guest Services & Hospitality
              </h3>
            </div>

            <div className="space-y-4">
              {VENUE_INFO.features.slice(0, 2).map((feature, idx) => (
                <div key={idx} className="pb-3 border-b border-[#D4AF37]/30 last:border-0">
                  <h4 className="font-cinzel text-base font-bold text-[#8B1E3F] mb-1">
                    {feature.title}
                  </h4>
                  <p className="font-poppins text-sm text-[#3A2E2A]/85 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>


          </div>

          {/* Location & Google Map Box */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#8B1E3F]" />
                <h3 className="font-cinzel text-2xl font-bold text-[#8B1E3F]">
                  Location & Venue Map
                </h3>
              </div>
              <span className="font-poppins text-xs font-semibold px-3 py-1 rounded-full bg-[#8B1E3F]/10 text-[#8B1E3F] border border-[#8B1E3F]/20">
                Lake Pichola, Udaipur
              </span>
            </div>

            {/* Glassmorphic Map Container with Screenshot-style Map Overlay */}
            <div className="relative w-full h-[400px] sm:h-[440px] rounded-3xl overflow-hidden p-2.5 bg-white/50 backdrop-blur-xl border-2 border-white/80 shadow-[0_20px_50px_rgba(139,30,63,0.15),inset_0_0_20px_rgba(255,255,255,0.9)] group">
              {/* Top-Left Floating "Open in Maps" Badge (Matching User's Screenshot) */}
              <div className="absolute top-5 left-5 z-20">
                <a
                  href="https://maps.google.com/?q=The+Leela+Palace+Udaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 text-[#1A73E8] hover:bg-white text-xs font-semibold font-poppins cursor-pointer"
                >
                  <span>Open in Maps</span>
                  <Navigation className="w-3.5 h-3.5 text-[#1A73E8]" />
                </a>
              </div>

              {/* Embedded Interactive Google Map centered on The Leela Palace Udaipur */}
              <div className="w-full h-full rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.324838634568!2d73.68019487602353!3d24.577983056525143!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56230f6a275%3A0x6b301a2fbd5b82d9!2sThe%20Leela%20Palace%20Udaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="The Leela Palace Udaipur Map Location"
                />
              </div>
            </div>



            {/* Tactile Glossy Aqua Silver Button */}
            <div className="text-center pt-2">
              <a
                href="https://maps.google.com/?q=The+Leela+Palace+Udaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-cinzel text-xs sm:text-sm font-bold tracking-widest text-[#FFF8EF] shadow-[0_12px_28px_rgba(139,30,63,0.35)] hover:shadow-[0_18px_35px_rgba(139,30,63,0.5),0_0_20px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/80 cursor-pointer relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(180deg, #A82848 0%, #8B1E3F 45%, #6B122E 50%, #8B1E3F 100%)',
                }}
              >
                {/* Top Gloss Highlight Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                <Navigation className="w-4 h-4 text-[#FFF3A7] transition-transform duration-300 group-hover:rotate-45" />
                <span>GET DIRECTIONS TO THE LEELA PALACE</span>
                <Compass className="w-4 h-4 text-[#FFF3A7]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
