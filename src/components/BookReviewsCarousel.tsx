import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { BookReview } from "@/data/books";

export interface Review {
  id: number;
  title: string;
  rating: number;
  content: string;
  reviewer: string;
  source: string;
}

const defaultReviews: Review[] = [
  {
    id: 1,
    title: "THWARTED ENEMY: PULSE-POUNDING SUSPENSE",
    rating: 5,
    content:
      "The tension starts on page one and doesn't let up. Philip Tate crafts an intricate, high-stakes countdown where every second counts. The clash between innocent youth and international intrigue feels both terrifyingly plausible and deeply human.",
    reviewer: "Elena Vance",
    source: "Verified Reader • Amazon Bestseller Review",
  },
  {
    id: 2,
    title: "RIZZOE'S LANDING: MASTERFUL SOUTHERN SUSPENSE",
    rating: 5,
    content:
      "Philip J. Tate has hit a home run with this gripping tale of bayou secrets, betrayal, and redemption. He paints the atmosphere with vivid, haunting prose that stays with you long after the final chapter. Easily one of the most compelling reads of the year.",
    reviewer: "Marcus Sterling",
    source: "Literary Digest Critic",
  },
  {
    id: 3,
    title: "A STORYTELLER WITH TRUE COMPASSION",
    rating: 5,
    content:
      "Tate's background in ministry and emergency paramedic service shines through in the emotional depth of his characters. Even in the midst of breathless action, there is a profound understanding of faith, duty, and the courage it takes to protect what matters most.",
    reviewer: "Clara Thornton",
    source: "Goodreads Top 100 Reviewer",
  },
  {
    id: 4,
    title: "THE COUNTDOWN IS RELENTLESS",
    rating: 5,
    content:
      "A masterpiece of pacing and tradecraft. Thwarted Enemy delivers everything thriller fans crave: smart plotting, high-stakes national defense, and characters you genuinely root for. Philip Tate is an author to watch.",
    reviewer: "David K. Holloway",
    source: "New York Suspense Gazette",
  },
  {
    id: 5,
    title: "ATMOSPHERIC AND UNFORGETTABLE",
    rating: 5,
    content:
      "Whether setting a story in the shadowy bayou or the corridors of power, Philip Tate writes with unmistakable conviction. His ability to weave moral weight with sheer entertainment is rare and commendable.",
    reviewer: "Sarah Jenkins-Ross",
    source: "Booklist Editorial Review",
  },
];

interface BookReviewsCarouselProps {
  reviews?: BookReview[] | Review[];
  sectionTitle?: string;
  sectionSubtitle?: string;
  sectionId?: string;
}

export default function BookReviewsCarousel({
  reviews = defaultReviews,
  sectionTitle = "BOOK REVIEWS",
  sectionSubtitle = "Reader Reflections",
  sectionId = "reviews",
}: BookReviewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeReviews = reviews && reviews.length > 0 ? reviews : defaultReviews;
  const total = activeReviews.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Generate 3 displayed reviews wrapped cyclically
  const displayedReviews = total <= 3
    ? activeReviews
    : [
        activeReviews[currentIndex % total],
        activeReviews[(currentIndex + 1) % total],
        activeReviews[(currentIndex + 2) % total],
      ];

  return (
    <section id={sectionId} className="bg-[#FAF7F3] text-[#2A2421] py-20 md:py-28 relative overflow-hidden border-t border-[#E8DFD8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B21816] block mb-2">
            {sectionSubtitle}
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2A2421] uppercase">
            {sectionTitle}
          </h2>
          <div className="w-16 h-[2px] bg-[#B21816] mx-auto mt-3"></div>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-out">
            {displayedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="bg-white border border-[#E8DFD8] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#B21816]/40 transition-all duration-300 flex flex-col justify-between space-y-4 text-left group"
              >
                <div className="space-y-3">
                  {/* Review Heading in Red/Crimson #B21816 */}
                  <h3 className="italic font-bold text-xs sm:text-sm tracking-wide text-[#B21816] uppercase leading-snug">
                    {review.title}
                  </h3>

                  {/* 5 Amber/Gold Stars */}
                  <div className="flex items-center gap-1 select-none">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Review Paragraph */}
                  <p className="text-xs sm:text-sm text-[#524640] leading-relaxed line-clamp-6">
                    {review.content}
                  </p>
                </div>

                {/* Reviewer Meta info */}
                <div className="pt-3 border-t border-[#E8DFD8] flex items-center justify-between text-[11px] text-[#786C65]">
                  <span className="font-semibold text-[#2A2421]">{review.reviewer}</span>
                  <span className="text-[10px] text-[#91857E]">{review.source.split("•")[0]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Arrow Controls (if more than 3 reviews) */}
          {total > 3 && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-[10px] bg-white border border-[#E8DFD8] hover:bg-[#B21816] hover:text-white hover:border-[#B21816] text-[#2A2421] flex items-center justify-center shadow-xs cursor-pointer transition-all active:scale-95"
                aria-label="Previous Reviews"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Pagination Dots (Matching Theme #B21816) */}
              <div className="flex items-center gap-2">
                {activeReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? "w-4 h-2.5 bg-[#B21816]"
                        : "w-2.5 h-2.5 bg-[#E8DFD8] hover:bg-[#B21816]/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-[10px] bg-white border border-[#E8DFD8] hover:bg-[#B21816] hover:text-white hover:border-[#B21816] text-[#2A2421] flex items-center justify-center shadow-xs cursor-pointer transition-all active:scale-95"
                aria-label="Next Reviews"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
