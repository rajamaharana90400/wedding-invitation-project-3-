import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/weddingData';
import { SectionDivider } from '../components/SectionDivider';
import { CircularGallery } from '../components/CircularGallery';
import { X, ZoomIn, LayoutGrid, Disc } from 'lucide-react';

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('3d');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Moments' },
    { id: 'pre-wedding', name: 'Pre Wedding' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'couple', name: 'Couple' },
    { id: 'family', name: 'Family' },
  ];

  const filteredImages =
    activeCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const circularGalleryItems = filteredImages.map((img) => ({
    image: img.url,
    text: img.title,
  }));

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

        {/* View Switcher & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full font-cinzel text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#8B1E3F] text-[#FFF8EF] shadow-md scale-105 ring-1 ring-[#D4AF37]'
                    : 'bg-[#FFF8EF] text-[#3A2E2A] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/20'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* View Mode Switcher Buttons */}
          <div className="flex items-center p-1 bg-[#FFF8EF] rounded-full border border-[#D4AF37]/60 shadow-xs">
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-full font-cinzel text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                viewMode === '3d'
                  ? 'bg-[#8B1E3F] text-[#FFF8EF] shadow-sm'
                  : 'text-[#3A2E2A] hover:text-[#8B1E3F]'
              }`}
            >
              <Disc className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>3D Showcase</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-full font-cinzel text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#8B1E3F] text-[#FFF8EF] shadow-sm'
                  : 'text-[#3A2E2A] hover:text-[#8B1E3F]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {/* 3D Circular WebGL Showcase View */}
        {viewMode === '3d' && (
          <div className="relative w-full h-[520px] sm:h-[600px] rounded-3xl bg-[#FFF8EF] border-2 border-[#D4AF37] p-2 sm:p-4 shadow-[0_20px_50px_rgba(139,30,63,0.15)] overflow-hidden transition-all duration-500">
            {/* Corner Gold Accent Frames */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none z-10" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none z-10" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none z-10" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none z-10" />

            {/* Hint Banner */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-[#8B1E3F]/90 text-[#FFF8EF] text-[11px] sm:text-xs font-poppins font-medium tracking-wide shadow-md border border-[#D4AF37]/60 backdrop-blur-xs flex items-center space-x-2 pointer-events-none">
              <span>✨</span>
              <span>Drag horizontally or scroll to rotate the 3D gallery</span>
            </div>

            {/* WebGL Canvas Component */}
            <CircularGallery
              items={circularGalleryItems}
              bend={3.2}
              textColor="#8B1E3F"
              borderRadius={0.06}
              font="bold 28px Cormorant Garamond"
              scrollSpeed={2.2}
              scrollEase={0.04}
              className="rounded-2xl"
            />
          </div>
        )}

        {/* Royal Photo Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="group cursor-pointer relative h-72 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 royal-shadow transition-all duration-500 hover:scale-[1.03] hover:border-[#8B1E3F]"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B1E3F]/80 via-[#8B1E3F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-[#FFF8EF]">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-cinzel text-base font-bold">{img.title}</h4>
                    <ZoomIn className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <p className="font-poppins text-xs opacity-90">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#FFF8EF] rounded-2xl border-2 border-[#D4AF37] p-4 sm:p-6 text-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#8B1E3F] text-[#FFF8EF] hover:bg-[#A82848] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] rounded-xl overflow-hidden mb-4 border border-[#D4AF37]">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <h3 className="font-cinzel text-xl font-bold text-[#8B1E3F] mb-1">
              {selectedImage.title}
            </h3>
            <p className="font-poppins text-xs text-[#3A2E2A]/80">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
