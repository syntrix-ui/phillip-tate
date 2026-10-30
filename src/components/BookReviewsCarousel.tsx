import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  title: string;
  rating: number;
  content: string;
  reviewer: string;
  source: string;
}

const reviews: Review[] = [
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

export default function BookReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = reviews.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex - 2 : prev - 1));
  };

  return (
    <section id="reviews" className="bg-[#FAF7F3] text-[#2A2421] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B21816] block mb-2">
            Reader Reflections
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2A2421] uppercase">
            BOOK REVIEWS
          </h2>
          <div className="w-16 h-[2px] bg-[#B21816] mx-auto mt-3"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-out">
            {reviews.slice(currentIndex, currentIndex + 3).concat(
              currentIndex + 3 > reviews.length
                ? reviews.slice(0, (currentIndex + 3) % reviews.length)
                : []
            ).map((review) => (
              <div
                key={review.id}
                className="bg-white border border-[#E8DFD8] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#B21816]/40 transition-all duration-300 flex flex-col justify-between space-y-4 text-left group"
              >
                <div className="space-y-3">
                  {/* Review Heading in Red/Crimson #B21816 */}
                  <h3 className="italic font-bold text-xs sm:text-sm tracking-wide text-[#B21816] uppercase leading-snug">
                    {review.title}
                  </h3>

                  {/* 5 Amber/Gold Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
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

          {/* Carousel Arrow Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white border border-[#E8DFD8] hover:bg-[#B21816] hover:text-white hover:border-[#B21816] text-[#2A2421] flex items-center justify-center shadow-xs cursor-pointer transition-all active:scale-95"
              aria-label="Previous Reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots (Matching Theme #B21816) */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((idx) => (
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
              className="w-10 h-10 rounded-full bg-white border border-[#E8DFD8] hover:bg-[#B21816] hover:text-white hover:border-[#B21816] text-[#2A2421] flex items-center justify-center shadow-xs cursor-pointer transition-all active:scale-95"
              aria-label="Next Reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
