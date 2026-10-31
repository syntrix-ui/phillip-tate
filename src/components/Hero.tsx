import React from "react";
import { Button } from "@/components/ui/button";
import { Star, Award } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  genreBadge?: string;
  description?: string;
  bgImageUrl?: string;
  bookCoverUrl?: string;
}

export default function Hero({
  title = "THWARTED ENEMY",
  subtitle = "THE CHOSEN'S ATONEMENT",
  genreBadge = "National Suspense & High-Stakes Thriller",
  description = "The countdown has begun. A nation's fate hangs in the balance as an innocent boy finds himself at the center of a deadly plot. In this gripping thriller by Philip Tate, innocence clashes with terror and every second counts.",
  bgImageUrl = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=85&w=2200",
  bookCoverUrl = "/book-thwarted-enemy-front.jpg",
}: HeroProps) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Background with warm aesthetic overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={bgImageUrl}
          alt="Hamptons Manor Atmosphere"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.02] scale-105 animate-in fade-in duration-1000"
        />
        {/* Soft warm gradient masks - not dark, but refined editorial glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7] via-[#FCFAF7]/65 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF7]/90 via-[#FCFAF7]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[#F3ECE4]/25 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Main Title */}
            <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#2A2421] leading-[1.08] mb-4">
              {title}
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1.5px] bg-[#B21816]"></span>
              <p className="font-serif-title italic text-lg sm:text-xl md:text-2xl text-[#B21816] tracking-wide font-medium">
                {subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#655851] max-w-xl leading-relaxed mb-8">
              {description}
            </p>

            {/* Dual CTA Buttons (Clean without icons) */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="https://www.amazon.com/s?k=Thwarted+Enemy+Philip+Tate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="bg-[#B21816] hover:bg-[#991412] text-white shadow-md hover:shadow-lg cursor-pointer text-xs uppercase tracking-widest font-semibold px-8 h-12 rounded-[10px] transition-all active:scale-95"
                >
                  Buy Now
                </Button>
              </a>

              <a
                href="https://mcdowellnews.com/life-entertainment/local/events/article_c04fca73-27b9-4968-8a88-211559940265.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#B21816] text-[#B21816] hover:bg-[#B21816]/10 bg-[#FCFAF7]/70 backdrop-blur-sm shadow-xs cursor-pointer text-xs uppercase tracking-widest font-semibold px-8 h-12 rounded-[10px] transition-all active:scale-95"
                >
                  Press Release
                </Button>
              </a>
            </div>

            {/* Social proof & Rating highlights */}
            <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-[#E8DFD8]/80 w-full max-w-lg">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#2A2421] ml-1">4.9 / 5.0</span>
                <span className="text-xs text-[#786C65]">(Goodreads)</span>
              </div>

              <div className="h-4 w-px bg-[#E8DFD8] hidden sm:block"></div>

              <div className="flex items-center gap-1.5 text-xs text-[#655851]">
                <Award className="w-4 h-4 text-[#B21816]" />
                <span className="font-medium">#1 Literary Release</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Book Presentation & Artistic Still */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Soft decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#B21816]/20 via-[#EBF0EC]/40 to-[#F3ECE4]/60 rounded-3xl blur-2xl -z-10"></div>

              {/* Book showcase card */}
              <div className="relative rounded-2xl p-6 sm:p-7 bg-[#FCFAF7]/90 backdrop-blur-md border border-[#E8DFD8] shadow-xl hover:shadow-2xl transition-all duration-300">
                <a
                  href="/books/thwarted-enemy"
                  className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10 group block cursor-pointer"
                  title="View Thwarted Enemy Details"
                >
                  <img
                    src={bookCoverUrl}
                    alt="Book Cover Mockup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle spine glare overlay */}
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/30 via-white/10 to-transparent pointer-events-none"></div>
                </a>

                {/* Bottom mini-banner on the card */}
                <div className="mt-4 pt-4 border-t border-[#E8DFD8] flex items-center justify-between text-xs text-[#786C65]">
                  <span>Available on:</span>
                  <div className="flex items-center gap-2 font-semibold text-[#2A2421]">
                    <a
                      href="https://www.amazon.com/s?k=Thwarted+Enemy+Philip+Tate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-0.5 rounded-sm bg-[#F3ECE4] hover:bg-[#B21816] hover:text-white transition-colors text-[11px]"
                    >
                      Amazon
                    </a>
                    <a
                      href="https://www.audible.com/search?keywords=Philip+Tate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-0.5 rounded-sm bg-[#F3ECE4] hover:bg-[#B21816] hover:text-white transition-colors text-[11px]"
                    >
                      Audible
                    </a>
                    <a
                      href="https://www.barnesandnoble.com/s/Philip%20Tate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-0.5 rounded-sm bg-[#F3ECE4] hover:bg-[#B21816] hover:text-white transition-colors text-[11px]"
                    >
                      Barnes & Noble
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

