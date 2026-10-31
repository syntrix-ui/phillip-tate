import React from "react";
import { motion } from "framer-motion";

interface BookDetailBannerProps {
  title: string;
  subtitle: string;
  scenicBg?: string;
}

export default function BookDetailBanner({
  title,
  subtitle,
  scenicBg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=85&w=2200",
}: BookDetailBannerProps) {
  return (
    <section className="relative isolate min-h-[50vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden py-20 md:py-24 bg-[#2A2421]">
      {/* Background Image with Natural Warmth & Light (matching Contact / About Banner) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={scenicBg}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-95 contrast-[1.02]"
        />
        {/* Soft, Light Atmospheric Overlay - Not Heavy or Dark */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30"></div>
      </div>

      {/* Content Container (No Breadcrumbs) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10 pt-10"
      >
        {/* Book Main Title */}
        <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 leading-tight drop-shadow-md">
          {title}
        </h1>

        <div className="w-16 h-[2px] bg-[#B21816] mx-auto mb-4"></div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto font-sans leading-relaxed drop-shadow-xs">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}

