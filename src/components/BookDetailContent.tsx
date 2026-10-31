import React from "react";
import type { Book } from "@/data/books";
import BookReviewsCarousel from "@/components/BookReviewsCarousel";
import { motion } from "framer-motion";

interface BookDetailContentProps {
  book: Book;
  otherBooks: Book[];
}

export default function BookDetailContent({
  book,
  otherBooks,
}: BookDetailContentProps) {
  return (
    <div className="bg-[#FCFAF7] text-[#2A2421]">
      {/* SECTION 1: BOOK OVERVIEW (HOOK & 3D COVER) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Title, Hook & Buy Now Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2A2421] uppercase leading-tight">
                {book.title}
              </h2>
            </div>

            <div className="w-16 h-[2.5px] bg-[#B21816]"></div>

            {/* Hook Paragraphs */}
            <div className="space-y-4 text-[#4A3E39] text-base sm:text-lg leading-relaxed font-sans">
              {book.hookParagraphs.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "font-serif text-xl sm:text-2xl text-[#2A2421] italic leading-snug" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Buy Now Button (Text Only, rounded-[10px], NO Icons) */}
            <div className="pt-4">
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#B21816] hover:bg-[#991412] text-white text-xs uppercase tracking-widest font-bold px-9 py-4 rounded-[10px] shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                Buy Now
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Book Cover Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Subtle ambient back glow */}
              <div className="absolute -inset-4 bg-[#B21816]/15 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>

              {/* Book Container with perspective & authentic shadow */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white p-2">
                <img
                  src={book.coverImage}
                  alt={`${book.title} Cover`}
                  className="w-full h-auto object-cover rounded-xl shadow-inner transform transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ATMOSPHERIC NARRATIVE & DEEP SYNOPSIS */}
      <section className="py-16 md:py-24 bg-[#F5EFE9]/60 border-y border-[#E8DFD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Scenic Atmosphere Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 h-[380px] sm:h-[450px]">
                <img
                  src={book.scenicImage}
                  alt={`${book.title} Atmosphere Setting`}
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Right Column: Deeper Narrative & Second Buy Now Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6 order-1 lg:order-2"
            >
              <h3 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2421] leading-snug">
                {book.narrativeTitle}
              </h3>

              <div className="w-14 h-[2px] bg-[#B21816]"></div>

              <div className="space-y-4 text-[#4A3E39] text-base leading-relaxed">
                {book.narrativeParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Second Buy Now Button (Text Only, rounded-[10px], NO Icons) */}
              <div className="pt-3">
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#B21816] hover:bg-[#991412] text-white text-xs uppercase tracking-widest font-bold px-9 py-4 rounded-[10px] shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  Buy Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BOOK REVIEWS CAROUSEL (TAILORED TO THIS BOOK'S DETAILS) */}
      <BookReviewsCarousel
        reviews={book.reviews}
        sectionTitle="BOOK REVIEWS"
        sectionSubtitle={`${book.shortTitle} REFLECTIONS`}
        sectionId="reviews"
      />

      {/* SECTION 4: EXPLORE MORE BOOKS BY PHILIP TATE */}
      <section className="py-16 bg-[#F8F4EE] border-t border-[#E8DFD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-[#B21816] block mb-1">
              Complete Library
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-[#2A2421] uppercase">
              More Books by Philip Tate
            </h3>
            <div className="w-12 h-[2px] bg-[#B21816] mx-auto mt-3"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8"
          >
            {otherBooks.map((other) => (
              <a
                key={other.slug}
                href={`/books/${other.slug}`}
                className="group flex flex-col items-center text-center p-3 rounded-xl hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-full aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow bg-white mb-3">
                  <img
                    src={other.coverImage}
                    alt={other.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-serif-title text-xs sm:text-sm font-bold text-[#2A2421] group-hover:text-[#B21816] line-clamp-2 uppercase transition-colors">
                  {other.shortTitle}
                </h4>
                <span className="text-[10px] uppercase tracking-wider text-[#8C827A] mt-1">
                  {other.genre.split(" ")[0]}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

