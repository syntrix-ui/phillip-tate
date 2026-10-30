import React from "react";
import { Button } from "@/components/ui/button";

export default function LifeOfCreativity() {
  return (
    <section className="bg-white text-[#2A2421] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, 3 Paragraphs, Button */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2A2421] leading-tight">
              A LIFE OF FAITH, SERVICE, AND CREATIVITY
            </h2>

            <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#524640] leading-relaxed font-sans">
              <p>
                From the quiet waters of Lake James and the Blue Ridge woodlands to nine dedicated years as a Methodist Minister, Philip Tate's life has always been rooted in community, faith, and the human spirit.
              </p>
              <p>
                His decades serving with the Red Cross, emergency EMS and paramedic crews, alongside work on hospital, school, and church boards, provided an intimate look at ordinary people facing extraordinary trials—experiences that breathe vivid truth and emotional resonance into every page he writes.
              </p>
              <p>
                Whether he is casting for mountain trout, playing bluegrass guitar on his porch in Linville, or operating amateur ham radio, Philip brings that same deep curiosity and warmth into his storytelling.
              </p>
            </div>

            {/* CTA Button in #B21816 (Clean without icons) */}
            <div className="pt-2">
              <Button
                variant="default"
                className="bg-[#B21816] hover:bg-[#991412] text-white rounded-lg px-8 h-11 text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-md active:scale-95 transition-all"
              >
                LEARN MORE
              </Button>
            </div>
          </div>

          {/* Right Column: Cozy Mountain Lake Porch with Sunrise Glow */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD8] group">
              <img
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1200"
                alt="A tranquil morning cabin porch overlooking a misty mountain lake at sunrise"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
