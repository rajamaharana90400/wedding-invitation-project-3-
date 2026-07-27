import React from 'react';
import { GALLERY_IMAGES } from '../data/weddingData';
import { SectionDivider } from '../components/SectionDivider';
import DomeGallery from '../components/DomeGallery';

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-[#FDF8F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#AA771C] uppercase block mb-2">
            Capturing Royal Moments
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F]">
            Photo Gallery
          </h2>
          <SectionDivider type="vine" />
        </div>

        {/* 3D Dome Showcase View */}
        <div className="relative w-full h-[520px] sm:h-[600px] rounded-3xl bg-[#FFF8EF] border-2 border-[#D4AF37] shadow-[0_20px_50px_rgba(139,30,63,0.15)] overflow-hidden transition-all duration-500">
            {/* Hint Banner */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-[#8B1E3F]/90 text-[#FFF8EF] text-[11px] sm:text-xs font-poppins font-medium tracking-wide shadow-md border border-[#D4AF37]/60 backdrop-blur-xs flex items-center space-x-2 pointer-events-none">
              <span>✨</span>
              <span>Drag around to explore the immersive dome gallery</span>
            </div>

            <DomeGallery
              images={GALLERY_IMAGES.map(img => ({ src: img.url, alt: img.title }))}
              grayscale={false}
              overlayBlurColor="#FFF8EF"
            />
          </div>
      </div>
    </section>
  );
};
