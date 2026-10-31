import React from "react";
import { motion } from "framer-motion";

interface BlogDetailBannerProps {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
}

export default function BlogDetailBanner({
  title,
  category,
  author,
  date,
  readTime,
  coverImage,
}: BlogDetailBannerProps) {
  return (
    <section className="relative isolate min-h-[50vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden py-20 md:py-24 bg-[#2A2421]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-95 contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10 pt-10"
      >
        {/* Category Label */}
        <span className="text-xs uppercase tracking-widest font-bold text-white/80 block mb-3">
          {category}
        </span>

        {/* Article Title */}
        <h1 className="font-serif-title text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-md max-w-3xl mx-auto">
          {title}
        </h1>

        <div className="w-16 h-[2px] bg-[#B21816] mx-auto mb-4"></div>

        {/* Article Meta */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/90 font-medium tracking-wide drop-shadow-xs">
          <span>By {author}</span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </motion.div>
    </section>
  );
}

