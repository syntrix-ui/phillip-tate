import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PressReleaseProps {
  articleUrl?: string;
}

export default function PressRelease({
  articleUrl = "https://mcdowellnews.com/life-entertainment/local/events/article_c04fca73-27b9-4968-8a88-211559940265.html",
}: PressReleaseProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden text-white bg-[#1D3E2F]">
      {/* Background Floral / Greenery Image with Emerald Forest Tint */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1800"
          alt="Press Release Forest Atmosphere"
          className="w-full h-full object-cover object-center filter brightness-75 contrast-105"
        />
        {/* Deep emerald overlay */}
        <div className="absolute inset-0 bg-[#163527]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-emerald-300"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-emerald-300">
                Official Media Coverage
              </span>
              <span className="w-8 h-[1.5px] bg-emerald-300"></span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-white uppercase">
              PRESS RELEASE
            </h2>
            <div className="w-16 h-[2px] bg-[#B21816] mx-auto mt-2"></div>
          </div>

          {/* 3-Column Content Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Item 1: Real Author Portrait (Left) */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative w-48 sm:w-56 lg:w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/25 group">
                <img
                  src="/author.jpg"
                  alt="Author Philip Tate"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] font-semibold text-white/95 uppercase tracking-wider bg-black/50 px-2.5 py-1 rounded-sm backdrop-blur-xs">
                    Philip Tate
                  </span>
                </div>
              </div>
            </div>

            {/* Item 2: Real Book Cover (Center) */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative w-48 sm:w-56 lg:w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/25 group">
                <img
                  src="/book-thwarted-enemy-front.jpg"
                  alt="Thwarted Enemy Book Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] font-semibold text-white/95 uppercase tracking-wider bg-black/50 px-2.5 py-1 rounded-sm backdrop-blur-xs">
                    Thwarted Enemy
                  </span>
                </div>
              </div>
            </div>

            {/* Item 3: Press Release Article Excerpt (Right) */}
            <div className="lg:col-span-6 space-y-4 text-left bg-black/25 backdrop-blur-xs p-6 sm:p-7 rounded-2xl border border-white/15">
              <div className="inline-block bg-[#B21816] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm">
                The McDowell News Feature
              </div>

              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-white leading-tight tracking-wide">
                LOCAL AUTHOR & MINISTER PHILIP TATE HIGHLIGHTED IN REGIONAL SPOTLIGHT
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
                <p>
                  <strong className="text-white font-semibold">MARION, NC — </strong>
                  <em>The McDowell News</em> spotlights Marion’s own Philip Tate—celebrating his career as a local author, Methodist minister, independent insurance agent, former paramedic, and McDowell County Board of Education leader.
                </p>
                <p>
                  The feature covers his latest literary publications, historical storytelling, and regional book-signing events, highlighting his deep roots across the Catawba River Valley and the Blue Ridge foothills.
                </p>
                <p className="text-white/80 italic text-xs">
                  Read the complete event feature and local profile published by The McDowell News.
                </p>
              </div>

              {/* Action Button inside card */}
              <div className="pt-2">
                <a
                  href={articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="default"
                    className="bg-[#B21816] hover:bg-[#991412] text-white rounded-[10px] px-8 h-11 text-xs uppercase tracking-widest font-semibold shadow-xl cursor-pointer active:scale-95 transition-all"
                  >
                    READ FULL PRESS RELEASE
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
