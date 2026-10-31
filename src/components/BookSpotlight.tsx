import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BookSpotlight() {
  return (
    <section id="books" className="relative py-24 md:py-32 overflow-hidden text-white">
      {/* Background: Lush Green Garden Foliage with Atmospheric Lighting */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=85&w=2000"
          alt="Hamptons Estate Garden Foliage"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105 scale-105"
        />

        {/* Cinematic dark garden vignette overlays for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Literary Hook Copy & Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[11px] uppercase tracking-widest font-semibold">
              Featured Novel of Suspense & Redemption
            </div> */}

            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              RIZZOE'S LANDING
            </h2>
            <p className="font-serif-title italic text-amber-200 text-lg sm:text-xl">
              "Some truths should stay buried. Some ties can never be broken."
            </p>

            <div className="space-y-4 text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-sans">
              <p>
                At the edge of civilization, where the past lingers and secrets refuse to stay buried, lies Rizzoes' Landing—a place as mysterious as it is unforgiving.
              </p>
              <p>
                When a series of unsettling events begins to unravel the quiet life of a small, tightly knit community, long-hidden truths emerge from the shadows. Relationships are tested, loyalties questioned, and the line between right and wrong becomes dangerously blurred.
              </p>
              <p>
                In this gripping tale of suspense, betrayal, and redemption, Philip J. Tate delivers a compelling narrative that captures the fragile balance between past and present, and the cost of uncovering the truth.
              </p>
            </div>

            {/* CTA Button in #B21816 (Clean without icons) */}
            <div className="pt-2">
              <a href="/books/rizzoes-landing">
                <Button
                  variant="default"
                  className="bg-[#B21816] hover:bg-[#991412] text-white rounded-[10px] px-8 h-11 text-xs uppercase tracking-widest font-semibold shadow-lg cursor-pointer active:scale-95 transition-all"
                >
                  LEARN MORE
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Featured Real Book Cover Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm group">
              {/* Soft ambient backlight glow */}
              <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl blur-2xl -z-10 group-hover:bg-amber-500/20 transition-all"></div>

              {/* Tilted 3D Book Mockup with Real Book Cover */}
              <a
                href="/books/rizzoes-landing"
                className="block relative aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20 ring-1 ring-black/40 transform rotate-2 group-hover:rotate-0 transition-transform duration-500 cursor-pointer"
                title="View Rizzoe's Landing Details"
              >
                <img
                  src="/book-rizzoes-landing-front.jpg"
                  alt="Rizzoe's Landing Real Book Cover"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
