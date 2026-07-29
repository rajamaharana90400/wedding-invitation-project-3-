import React, { useState, useEffect } from 'react';
import openingVideo from '../assets/0728.mp4';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // keep minimal fade behavior if needed; progress visuals removed
    const timer = setTimeout(() => {
      // fallback: auto-complete after 3.5s if video doesn't end
      setIsFading(true);
      setTimeout(() => onComplete(), 1000);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A] transition-opacity duration-1000 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={openingVideo}
        autoPlay
        muted
        playsInline
        onEnded={() => {
          setIsFading(true);
          setTimeout(() => onComplete(), 1000);
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Title removed per request */}

        {/* Loading progress visuals removed to simplify startup */}
      </div>
    </div>
  );
};
