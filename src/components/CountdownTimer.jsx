import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles, Heart } from 'lucide-react';

export const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days, icon: <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B1E3F]" />, tag: 'Journeys' },
    { label: 'Hours', value: timeLeft.hours, icon: <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B1E3F]" />, tag: 'Moments' },
    { label: 'Minutes', value: timeLeft.minutes, icon: <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B1E3F]" />, tag: 'Whispers' },
    { label: 'Seconds', value: timeLeft.seconds, icon: <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B1E3F] fill-[#8B1E3F]/30" />, tag: 'Heartbeats' },
  ];

  return (
    <div className="my-10 max-w-5xl mx-auto px-2">
      {/* Serially arranged horizontal row of 4 circular medallions */}
      <div className="grid grid-cols-4 gap-2 sm:gap-6 md:gap-8 justify-items-center items-center">
        {units.map((unit, index) => (
          <motion.div
            key={unit.label}
            className="group relative flex flex-col items-center cursor-pointer select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Outer Circular Medallion with Framer Motion hover & tap animations */}
            <motion.div
              className="relative w-20 h-20 xs:w-24 xs:h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full p-1.5 sm:p-2.5 bg-gradient-to-tr from-[#D4AF37] via-[#FFF3A7] to-[#8B1E3F] shadow-[0_10px_30px_rgba(139,30,63,0.18)] flex items-center justify-center"
              whileHover={{
                scale: 1.08,
                y: -6,
                boxShadow: "0 20px 40px rgba(139, 30, 63, 0.35), 0 0 30px rgba(212, 175, 55, 0.6)"
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              {/* Inner White Glass Circular Core */}
              <div className="w-full h-full rounded-full bg-gradient-to-b from-white via-[#FFFDF9] to-[#FFF5E8] border border-white/90 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                
                {/* Rotating Dotted Filigree Ring on Hover */}
                <motion.div
                  className="absolute inset-1 sm:inset-1.5 rounded-full border border-dashed border-[#D4AF37]/60 pointer-events-none"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Shimmer Light Reflection effect */}
                <div className="absolute -top-8 -left-8 w-16 h-16 sm:w-24 sm:h-24 bg-white/60 rounded-full blur-md group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                {/* Top Badge Icon */}
                <motion.div
                  className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#FFFBF5] border border-[#D4AF37]/70 flex items-center justify-center shadow-xs mb-0.5 sm:mb-1"
                  whileHover={{ scale: 1.25, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {unit.icon}
                </motion.div>

                {/* Number Digit */}
                <motion.div
                  className="font-cinzel text-xl xs:text-2xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F] drop-shadow-xs tracking-tight"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.div>

                {/* Subtext Tag */}
                <span className="font-cormorant italic text-[9px] xs:text-[10px] sm:text-xs font-bold text-[#AA771C] mt-0.5 hidden xs:block">
                  {unit.tag}
                </span>
              </div>
            </motion.div>

            {/* Bottom Floating Ribbon Pill */}
            <motion.div
              className="-mt-3 sm:-mt-4 relative z-10 px-3 py-0.5 sm:px-5 sm:py-1 rounded-full bg-gradient-to-r from-[#8B1E3F] via-[#A82848] to-[#8B1E3F] border border-[#FFF3A7]/60 shadow-md text-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-cinzel text-[9px] xs:text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.25em] text-[#FFF3A7] uppercase block whitespace-nowrap">
                {unit.label}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
