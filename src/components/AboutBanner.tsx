import React from "react";
import { motion } from "framer-motion";

export default function AboutBanner() {
  return (
    <section className="relative isolate min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden py-20 md:py-24 bg-[#2A2421]">
      {/* Background Image with Natural Warmth & Light */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=85&w=2200"
          alt="Lush Estate Garden Landscape"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-[1.02]"
        />
        {/* Soft, Light Atmospheric Overlay matching Contact Banner */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Content Container (No Breadcrumbs) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10 pt-10"
      >
        {/* Main Title */}
        <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-md">
          ABOUT THE AUTHOR
        </h1>

        <div className="w-16 h-[2px] bg-[#B21816] mx-auto mb-6"></div>

        {/* Subtitle / Lead Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto font-sans leading-relaxed drop-shadow-xs">
          From the Blue Ridge foothills to decades of public service, pastoral ministry, and pulse-pounding suspense storytelling.
        </p>
      </motion.div>
    </section>
  );
}
