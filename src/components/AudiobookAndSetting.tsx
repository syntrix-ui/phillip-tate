import React from "react";
import { Button } from "@/components/ui/button";
import { Headphones, BookOpen, Compass, ExternalLink, ArrowRight } from "lucide-react";

export default function AudiobookAndSetting() {
  return (
    <div>
      {/* 1. Full-Width Audiobook Announcement Ribbon Banner */}
      <section className="bg-[#B21816] text-white py-6 sm:py-8 shadow-md relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            {/* Left title with headphones icon */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-wide uppercase font-serif-title">
                  Audiobook Available Now!
                </h3>
                <p className="text-xs text-white/80">
                  Narrated by award-winning voice talent • Unabridged Edition (9 hrs 42 mins)
                </p>
              </div>
            </div>

            {/* Right: Retailer Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <a
                href="#"
                className="px-4 py-2 rounded-full bg-white text-[#B21816] hover:bg-[#F3ECE4] text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5"
              >
                <span>Audible</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/40 flex items-center gap-1.5"
              >
                <span>Amazon</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/40 flex items-center gap-1.5"
              >
                <span>Apple Books</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Story Setting & Mood Teaser (Alternating Split Row) */}
      <section className="py-20 md:py-28 bg-[#FCFAF7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Atmospheric Sunset Beach Pathway Photo */}
            <div className="lg:col-span-6">
              <div className="relative group">
                {/* Decorative border frame */}
                <div className="absolute -inset-2.5 bg-[#E8DFD8] rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 -z-10"></div>
                
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200"
                    alt="Hamptons Coastline at Sunset"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Location badge on photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-semibold text-amber-200">
                        The Setting
                      </p>
                      <p className="font-serif-title text-base sm:text-lg font-bold">
                        Southampton Dunes & Shoreline
                      </p>
                    </div>
                    <Compass className="w-5 h-5 text-amber-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Setting Narrative & Intrigue */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B21816]">
                <Compass className="w-4 h-4" />
                <span>Atmosphere & Setting</span>
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2421] leading-tight">
                A PLACE OF MAJESTIC BEAUTY AND DEADLY SECRETS
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#655851] leading-relaxed">
                <p>
                  The Hamptons are famed for their sunlit beaches, private tennis courts, and multi-million-dollar compounds. But as autumn chills the summer air, the opulent facades begin to fracture.
                </p>
                <p>
                  In this masterfully woven setting, every glass of champagne has a hidden purpose, every charity gala masks a cutthroat business deal, and the ocean mist conceals footsteps that should never have returned.
                </p>
                <p className="italic font-serif-title text-lg text-[#2A2421]">
                  "Some debts are never forgiven in high society. They are simply collected when least expected."
                </p>
              </div>

              <div className="pt-2">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-[#B21816] hover:bg-[#991412] text-white rounded-full px-7 h-11 text-xs uppercase tracking-widest font-semibold gap-2 shadow-xs cursor-pointer active:scale-95 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  Explore The Book Universe
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

