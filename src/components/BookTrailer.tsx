import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X, Film, Share2 } from "lucide-react";

export default function BookTrailer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="trailer" className="py-20 md:py-28 bg-[#F3ECE4]/50 border-t border-[#E8DFD8] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-radial from-[#B21816]/10 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B21816] block mb-2">
            Cinematic Preview
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2421] tracking-tight">
            THE OFFICIAL BOOK TRAILER
          </h2>
          <p className="text-sm sm:text-base text-[#655851] mt-3 leading-relaxed">
            Step into the atmosphere of Southampton's grandest estates. Catch a glimpse of the whispered scandals, the shattered glass, and the storm gathering on the horizon.
          </p>
        </div>

        {/* Video Thumbnail / Player Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative outer glow ring */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/10 aspect-video group">
            {!isPlaying ? (
              <>
                {/* High-res Hamptons estate cinematic background */}
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=85&w=1600"
                  alt="Silent Screams Hamptons Estate Trailer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />

                {/* Dark cinematic vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30"></div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative group/btn cursor-pointer flex items-center justify-center"
                    aria-label="Play Book Trailer"
                  >
                    {/* Pulsing ring animation */}
                    <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#B21816]/40 animate-ping"></span>
                    <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#B21816]/20"></span>
                    
                    {/* Solid play circle */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#B21816] group-hover/btn:bg-[#991412] text-white flex items-center justify-center shadow-xl group-hover/btn:scale-110 transition-all duration-300">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white ml-1" />
                    </div>
                  </button>

                  <p className="text-white text-xs sm:text-sm font-semibold uppercase tracking-widest mt-4 drop-shadow-md">
                    Click to Watch Preview
                  </p>
                  <span className="text-white/70 text-xs mt-1">Duration: 2:15 • 4K Cinematic Trailer</span>
                </div>

                {/* Corner tags */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-semibold">
                  <Film className="w-3.5 h-3.5 text-[#B21816]" />
                  <span>Official Trailer</span>
                </div>
              </>
            ) : (
              /* Video Embed Player View */
              <div className="w-full h-full bg-black relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Silent Screams from the Hamptons Official Book Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-3 right-3 bg-black/70 hover:bg-[#B21816] text-white p-2 rounded-full cursor-pointer transition-colors z-20"
                  title="Close Video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Under Trailer Quotes & Features */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#786C65] px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B21816]"></span>
              <span className="font-semibold text-[#2A2421]">Filmed on Location:</span>
              <span>Southampton & Sagaponack, NY</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Silent Screams from the Hamptons Trailer",
                      url: window.location.href,
                    });
                  } else {
                    alert("Trailer link copied to clipboard!");
                  }
                }}
                className="text-[#655851] hover:text-[#B21816] hover:bg-white text-xs cursor-pointer gap-1.5 h-8"
              >
                <Share2 className="w-3.5 h-3.5" />
                Share Trailer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
