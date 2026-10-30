import React from "react";
import { Button } from "@/components/ui/button";

export default function PressRelease() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden text-white bg-[#224A38]">
      {/* Background Floral / Greenery Image with Emerald Tint */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1800"
          alt="Press Release Floral Greenery Background"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />
        {/* Deep forest emerald tint overlay matching reference screenshot */}
        <div className="absolute inset-0 bg-[#1D4534]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-white uppercase">
            PRESS RELEASE
          </h2>
          <div className="w-16 h-[2px] bg-white/60 mx-auto mt-3"></div>
        </div>

        {/* 3-Column Content Box matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Item 1: Real Author Portrait (Left) */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-48 sm:w-56 lg:w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/30 group">
              <img
                src="/author.jpg"
                alt="Author Philip Tate"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Item 2: Real Book Cover (Center) */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-48 sm:w-56 lg:w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/30 group">
              <img
                src="/book-thwarted-enemy-front.jpg"
                alt="Thwarted Enemy by Philip Tate Book Cover"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Item 3: Press Release Article Excerpt (Right) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <h3 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-wide">
              'WOW, WHY ISN'T ANYONE TALKING ABOUT THIS'
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
              <p className="font-medium text-white">
                <strong className="text-white font-bold">MARION, NC</strong> — Local author and Methodist Minister Philip Tate announced the nationwide release of his pulse-pounding new thriller, <em className="text-amber-200">"Thwarted Enemy: The Chosen's Atonement,"</em> now available across all major book retailers.
              </p>
              <p>
                In <em>Thwarted Enemy</em>, Tate thrusts readers into a harrowing countdown where a nation's destiny hangs by a thread. An innocent boy is trapped at the heart of an unseen conspiracy, while intelligence operatives scramble against the clock to avert catastrophe.
              </p>
              <p>
                Drawing on decades of public service, emergency EMS response, and deep moral conviction, Philip Tate delivers a story that combines white-knuckle suspense with profound emotional resonance and spiritual depth.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Centered Button (Clean without icons) */}
        <div className="mt-12 flex justify-center">
          <Button
            variant="default"
            className="bg-[#B21816] hover:bg-[#991412] text-white rounded-lg px-9 h-11 text-xs uppercase tracking-widest font-semibold shadow-xl cursor-pointer active:scale-95 transition-all"
          >
            VIEW FULL ARTICLE
          </Button>
        </div>
      </div>
    </section>
  );
}

