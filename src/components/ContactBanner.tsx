import React from "react";
import { motion } from "framer-motion";

export default function ContactBanner() {
  return (
    <section className="relative isolate min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden py-20 md:py-24 bg-[#2A2421]">
      {/* Background Image with Natural Warmth & Light */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=85&w=2200"
          alt="Blue Ridge Mountains Scenic Horizon"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-[1.02]"
        />
        {/* Soft, Light Atmospheric Overlay - Not Heavy or Dark */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10 pt-10"
      >
        {/* Main Title */}
        <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-md">
          GET IN TOUCH
        </h1>

        <div className="w-16 h-[2px] bg-[#B21816] mx-auto mb-6"></div>

        {/* Subtitle / Lead Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto font-sans leading-relaxed drop-shadow-xs">
          For literary inquiries, speaking engagements, book discussions, or notes from readers, Philip Tate and his team would love to hear from you.
        </p>
      </motion.div>
    </section>
  );
}
