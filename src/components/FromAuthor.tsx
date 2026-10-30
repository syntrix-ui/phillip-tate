import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Feather, ArrowRight } from "lucide-react";

export default function FromAuthor() {
  return (
    <section id="author" className="py-20 md:py-28 bg-[#FCFAF7] relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#EBF0EC]/70 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#F3ECE4]/80 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B21816] block mb-2">
            A Personal Note
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2421] tracking-tight">
            FROM THE AUTHOR
          </h2>
          <div className="w-16 h-[2px] bg-[#B21816] mx-auto mt-4"></div>
        </div>

        {/* Featured Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-[#F5EFEB]/90 border border-[#E8DFD8] shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Real Author Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-[#B21816]/20 group">
                  <img
                    src="/author.jpg"
                    alt="Author Phillip Tate"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Author Name Tag on image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/50 shadow-md">
                    <p className="font-serif-title text-base sm:text-lg font-bold text-[#2A2421] leading-none">
                      Phillip Tate
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-[#786C65] font-semibold mt-1">
                      Author of Silent Screams
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Author Letter & Story Message */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-[#B21816]">
                <Feather className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  Words from Phillip Tate
                </span>
              </div>

              <h3 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2421] leading-snug">
                "Writing is the art of giving voice to what high society tries hardest to conceal."
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#655851] leading-relaxed">
                <p>
                  Dear Reader, welcome to the world of <em className="text-[#2A2421] font-medium">Silent Screams from the Hamptons</em>. When I first began drafting this narrative, I was fascinated by the stark contrast between public grandeur and private desperation in the coastal estates of the wealthy elite.
                </p>
                <p>
                  Behind gated driveways and gilded ballroom doors lies a relentless current of ambition, buried secrets, and the simmering thirst for retribution. In Jacqueline, I wanted to craft a protagonist who is neither purely victim nor saint—a fierce strategist fighting to reclaim her rightful dignity in an unforgiving world.
                </p>
                <p>
                  I hope these pages transport you, intrigue you, and leave you questioning what truth really costs.
                </p>
              </div>

              {/* Author Signature & CTA */}
              <div className="pt-4 border-t border-[#E8DFD8] flex flex-wrap items-center justify-between gap-6">
                <div>
                  <span className="font-signature text-3xl sm:text-4xl text-[#B21816] block leading-none">
                    Phillip Tate
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#786C65] font-semibold">
                    New York, USA
                  </span>
                </div>

                <Button
                  variant="default"
                  className="bg-[#B21816] hover:bg-[#991412] text-white rounded-full px-6 h-10 text-xs uppercase tracking-widest font-semibold gap-2 shadow-xs cursor-pointer active:scale-95 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Full Bio
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
