import React from "react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blogs";

interface BlogsGridProps {
  blogs: BlogPost[];
}

export default function BlogsGrid({ blogs }: BlogsGridProps) {
  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-xs uppercase tracking-widest font-bold text-[#B21816] block mb-2">
          Latest Dispatches
        </span>
        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-[#2A2421] uppercase">
          Stories Behind The Pages
        </h2>
        <div className="w-14 h-[2px] bg-[#B21816] mx-auto mt-3"></div>
      </motion.div>

      {/* 9 Articles Grid (3x3 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {blogs.map((blog, idx) => (
          <motion.article
            key={blog.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.65,
              delay: (idx % 3) * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col bg-white border border-[#E8DFD8] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group"
          >
            {/* Blog Cover Image with Category Badge */}
            <a href={`/blogs/${blog.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-[#2A2421]/10">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#B21816] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md">
                  {blog.category}
                </span>
              </div>
            </a>

            {/* Blog Content Summary */}
            <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                {/* Date & Reading Time */}
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#8C827A] uppercase tracking-wider">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                {/* Article Title */}
                <a href={`/blogs/${blog.slug}`}>
                  <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#2A2421] group-hover:text-[#B21816] transition-colors leading-snug">
                    {blog.title}
                  </h3>
                </a>

                <div className="w-10 h-[1.5px] bg-[#B21816]/40"></div>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#524640] line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              {/* Action Link: Read Article (No icons, rounded-[10px]) */}
              <div className="pt-4 border-t border-[#F0EAE3]">
                <a
                  href={`/blogs/${blog.slug}`}
                  className="block w-full text-center bg-[#FCFAF7] hover:bg-[#B21816] text-[#2A2421] hover:text-white border border-[#E0D5CB] hover:border-[#B21816] text-xs uppercase tracking-wider font-bold py-3 rounded-[10px] shadow-xs hover:shadow-md transition-all active:scale-95"
                >
                  Read Article
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

