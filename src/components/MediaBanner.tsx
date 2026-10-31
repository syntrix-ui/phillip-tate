import React from "react";
import { motion } from "framer-motion";

interface MediaBannerProps {
  title?: string;
  subtitle?: string;
  bgImageUrl?: string;
}

export default function MediaBanner({
  title = "MEDIA KIT",
  subtitle = "Official Video Trailers, Author Insights, Frontline Features & Press Resources",
  bgImageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=85&w=2200",
}: MediaBannerProps) {
  return (
    <section className="relative isolate min-h-[50vh] md:min-h-[55vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Scenic Image with Refined Editorial Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={bgImageUrl}
          alt="Blue Ridge Mountain Vista"
          className="w-full h-full object-cover object-center filter brightness-[0.90] contrast-[1.05] scale-105"
        />
        {/* Warm editorial gradient masks - no dark harshness */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7] via-[#FCFAF7]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF7]/90 via-[#FCFAF7]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[#2A2421]/20 mix-blend-multiply"></div>
      </div>

      {/* Banner Content (Framed cleanly without frosted badge container) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >

          <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2A2421] leading-tight">
            {title}
          </h1>

          <div className="w-16 h-[2px] bg-[#B21816] mx-auto my-2"></div>

          <p className="text-sm sm:text-base md:text-lg text-[#524640] max-w-2xl mx-auto leading-relaxed font-sans">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

