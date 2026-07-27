import React, { useState } from 'react';
import { WEDDING_EVENTS } from '../data/weddingData';
import { SectionDivider } from '../components/SectionDivider';
import Carousel from '../components/Carousel';
import { Calendar, Clock, MapPin, Sparkles, X, LayoutGrid, Sliders } from 'lucide-react';

export const WeddingEventsSection = () => {
  const [selectedEventMap, setSelectedEventMap] = useState(null);
  const [viewMode, setViewMode] = useState('carousel');

  // Map wedding events data for Carousel
  const carouselItems = WEDDING_EVENTS.map((evt) => ({
    id: evt.id,
    title: evt.title,
    description: evt.description,
    hindiTitle: evt.hindiTitle,
    date: evt.date,
    time: evt.time,
    venue: evt.venue,
    address: evt.address,
    image: evt.image,
    dressCode: evt.dressCode,
    dressColorPalette: evt.dressColorPalette,
    mapUrl: evt.mapUrl,
    rawEvt: evt
  }));

  // Render function for custom card content inside Carousel
  const renderEventCard = (item) => {
    const evt = item.rawEvt || item;
    return (
      <div className="w-full h-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-white/95 via-[#FFF8EF]/90 to-white/95">
        <div>
          {/* Header Image */}
          <div className="relative h-44 sm:h-48 w-full overflow-hidden">
            <img
              src={evt.image}
              alt={evt.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B1E3F]/90 via-[#8B1E3F]/30 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <span className="font-cinzel text-[10px] font-bold text-[#FFF3A7] uppercase tracking-widest block">
                {evt.hindiTitle}
              </span>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold leading-tight">
                {evt.title}
              </h3>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-4 sm:p-5 space-y-3">
            <div className="space-y-1.5 font-poppins text-xs text-[#3A2E2A]">
              <div className="flex items-center space-x-2 text-[#8B1E3F] font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{evt.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-[#3A2E2A]/80">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{evt.time}</span>
              </div>
              <div className="flex items-start space-x-2 text-[#3A2E2A]/80">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{evt.venue}</span>
              </div>
            </div>

            <p className="font-poppins text-[11px] sm:text-xs text-[#3A2E2A]/85 leading-relaxed line-clamp-3">
              {evt.description}
            </p>

            {/* Dress code colors */}
            <div className="pt-2 border-t border-[#D4AF37]/30 flex items-center justify-between">
              <span className="font-cinzel text-[10px] font-bold text-[#AA771C] uppercase">
                {evt.dressCode}
              </span>
              <div className="flex items-center space-x-1.5">
                {evt.dressColorPalette?.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-4 h-4 rounded-full border border-white/80 shadow-xs"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View Map Action */}
        <div className="p-4 pt-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedEventMap(evt);
            }}
            className="w-full py-2 rounded-full bg-gradient-to-r from-[#8B1E3F] to-[#A82848] text-white font-cinzel text-[11px] font-bold tracking-wider shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            <MapPin className="w-3 h-3 text-[#FFF3A7]" />
            <span>VIEW VENUE MAP</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="events" className="py-24 px-4 bg-gradient-to-b from-[#FDF8F2] via-[#FFF8EF] to-[#FDF8F2] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-10 right-8 w-40 h-40 rounded-full bg-gradient-to-br from-white/80 via-[#FFF3A7]/30 to-[#D4AF37]/20 backdrop-blur-md border border-white/70 shadow-[0_10px_30px_rgba(212,175,55,0.15)] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute bottom-12 left-10 w-48 h-48 rounded-full bg-gradient-to-tr from-white/70 via-[#8B1E3F]/15 to-[#D4AF37]/20 backdrop-blur-lg border border-white/80 shadow-[0_15px_35px_rgba(139,30,63,0.12)] pointer-events-none animate-bounce duration-[9s]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-[#D4AF37]/40 shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#AA771C] uppercase">
              Celestial Celebrations
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F] drop-shadow-xs">
            Wedding Ceremonies
          </h2>
          <SectionDivider type="mandala" />
        </div>

        {/* View Mode Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-full bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-[0_10px_25px_rgba(139,30,63,0.08)] inline-flex space-x-1">
            <button
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-2 rounded-full font-cinzel text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer flex items-center space-x-2 ${
                viewMode === 'carousel'
                  ? 'bg-gradient-to-r from-[#8B1E3F] to-[#A82848] text-white shadow-[0_4px_15px_rgba(139,30,63,0.3)]'
                  : 'text-[#3A2E2A]/80 hover:text-[#8B1E3F]'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>3D Carousel</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-full font-cinzel text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer flex items-center space-x-2 ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-[#8B1E3F] to-[#A82848] text-white shadow-[0_4px_15px_rgba(139,30,63,0.3)]'
                  : 'text-[#3A2E2A]/80 hover:text-[#8B1E3F]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {/* Display Carousel or Grid */}
        {viewMode === 'carousel' ? (
          <div className="flex flex-col items-center justify-center">
            {/* React Bits Carousel Component */}
            <div className="w-full flex justify-center items-center py-4">
              <div className="hidden lg:block">
                <Carousel
                  items={carouselItems}
                  baseWidth={380}
                  autoplay={true}
                  autoplayDelay={3500}
                  pauseOnHover={true}
                  loop={true}
                  renderCustomContent={renderEventCard}
                />
              </div>
              <div className="hidden sm:block lg:hidden">
                <Carousel
                  items={carouselItems}
                  baseWidth={340}
                  autoplay={true}
                  autoplayDelay={3500}
                  pauseOnHover={true}
                  loop={true}
                  renderCustomContent={renderEventCard}
                />
              </div>
              <div className="block sm:hidden">
                <Carousel
                  items={carouselItems}
                  baseWidth={300}
                  autoplay={true}
                  autoplayDelay={3500}
                  pauseOnHover={true}
                  loop={true}
                  renderCustomContent={renderEventCard}
                />
              </div>
            </div>
            <p className="font-poppins text-xs text-[#AA771C] font-semibold mt-4 text-center opacity-80 flex items-center space-x-1.5">
              <span>Drag or swipe left/right to browse ceremonies</span>
            </p>
          </div>
        ) : (
          /* Grid View Fallback */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WEDDING_EVENTS.map((evt) => (
              <div
                key={evt.id}
                className="group relative rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-[0_12px_30px_rgba(139,30,63,0.08),inset_0_0_20px_rgba(255,255,255,0.9)] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(139,30,63,0.18)] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8B1E3F]/90 via-[#8B1E3F]/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="font-cinzel text-xs font-semibold text-[#FFF3A7] block tracking-widest uppercase">
                        {evt.hindiTitle}
                      </span>
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold">
                        {evt.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2 font-poppins text-xs text-[#3A2E2A]">
                      <div className="flex items-center space-x-2 text-[#8B1E3F] font-semibold">
                        <Calendar className="w-4 h-4 text-[#D4AF37]" />
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#3A2E2A]/80">
                        <Clock className="w-4 h-4 text-[#D4AF37]" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-start space-x-2 text-[#3A2E2A]/80">
                        <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{evt.venue}</span>
                      </div>
                    </div>

                    <p className="font-poppins text-xs text-[#3A2E2A]/80 leading-relaxed">
                      {evt.description}
                    </p>

                    <div className="pt-3 border-t border-[#D4AF37]/30 flex items-center justify-between">
                      <span className="font-cinzel text-[11px] font-bold text-[#AA771C] uppercase">
                        Dress Code: {evt.dressCode}
                      </span>
                      <div className="flex items-center space-x-1.5">
                        {evt.dressColorPalette.map((color, idx) => (
                          <span
                            key={idx}
                            className="w-4 h-4 rounded-full border border-white/80 shadow-xs"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => setSelectedEventMap(evt)}
                    className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#8B1E3F] to-[#A82848] text-white font-cinzel text-xs font-bold tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#FFF3A7]" />
                    <span>VIEW VENUE MAP</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Venue Map Modal */}
      {selectedEventMap && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white/95 backdrop-blur-2xl rounded-3xl border-2 border-white/80 shadow-[0_25px_60px_rgba(139,30,63,0.3)] p-6 sm:p-8">
            <button
              onClick={() => setSelectedEventMap(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#8B1E3F]/10 text-[#8B1E3F] hover:bg-[#8B1E3F] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#8B1E3F] mb-1">
              {selectedEventMap.title}
            </h3>
            <p className="font-poppins text-xs text-[#AA771C] font-semibold mb-4">
              {selectedEventMap.venue} • {selectedEventMap.address}
            </p>

            <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#D4AF37]/50 mb-6 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.324838634568!2d73.68019487602353!3d24.577983056525143!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56230f6a275%3A0x6b301a2fbd5b82d9!2sThe%20Leela%20Palace%20Udaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Venue Map"
              />
            </div>

            <div className="flex justify-end">
              <a
                href={selectedEventMap.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8B1E3F] to-[#A82848] text-white font-cinzel text-xs font-bold tracking-widest shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                OPEN IN GOOGLE MAPS ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
