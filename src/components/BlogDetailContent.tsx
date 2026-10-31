import React from "react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blogs";

interface BlogDetailContentProps {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
}

export default function BlogDetailContent({
  blog,
  relatedBlogs,
}: BlogDetailContentProps) {
  return (
    <>
      {/* Editorial Article Body */}
      <article className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lead Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="pb-10 border-b border-[#E8DFD8] mb-10"
        >
          <p className="font-serif text-xl sm:text-2xl text-[#2A2421] italic leading-relaxed">
            "{blog.content.lead}"
          </p>
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-12">
          {blog.content.sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2A2421] tracking-tight">
                {section.heading}
              </h2>
              <div className="w-12 h-[2px] bg-[#B21816]"></div>
              <div className="space-y-4 text-base sm:text-lg text-[#4A3E39] leading-relaxed font-sans">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Quotation Callout */}
          {blog.content.quote && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="my-10 p-6 sm:p-8 bg-[#FAF7F3] border-l-4 border-[#B21816] rounded-r-2xl shadow-xs"
            >
              <blockquote className="font-serif text-lg sm:text-xl text-[#2A2421] italic leading-relaxed">
                "{blog.content.quote}"
              </blockquote>
              <div className="mt-3 text-xs uppercase tracking-wider font-bold text-[#B21816]">
                — Philip Tate
              </div>
            </motion.div>
          )}

          {/* Key Takeaway Box */}
          {blog.content.takeaway && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-7 bg-[#F4EFEA] border border-[#DFD5CB] rounded-2xl"
            >
              <span className="text-xs uppercase tracking-widest font-bold text-[#B21816] block mb-1">
                Key Takeaway
              </span>
              <p className="text-sm sm:text-base text-[#2A2421] font-semibold leading-relaxed">
                {blog.content.takeaway}
              </p>
            </motion.div>
          )}
        </div>

        {/* Author Bio Snippet Card */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 pt-10 border-t border-[#E8DFD8] flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-[#FAF7F3] p-8 rounded-2xl"
        >
          <img
            src="/author.jpg"
            alt="Philip Tate"
            className="w-20 h-20 rounded-full object-cover shadow-md shrink-0 border-2 border-[#B21816]/30"
          />
          <div className="text-center sm:text-left space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#B21816]">
              About the Author
            </span>
            <h4 className="font-serif-title text-xl font-bold text-[#2A2421]">
              Philip Tate
            </h4>
            <p className="text-xs sm:text-sm text-[#524640] leading-relaxed">
              Philip Tate is an ordained Methodist minister, former emergency paramedic, and author of bestselling thrillers and outdoor memoirs including <em>Thwarted Enemy</em>, <em>Rizzoe's Landing</em>, and <em>Singing Reels</em>. He writes from Linville and Marion, North Carolina.
            </p>
            <div className="pt-2">
              <a
                href="/about"
                className="inline-block text-xs uppercase font-bold tracking-wider text-[#B21816] hover:underline"
              >
                Read Full Biography
              </a>
            </div>
          </div>
        </motion.div>

        {/* Back to All Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <a
            href="/blogs"
            className="inline-flex items-center justify-center bg-[#B21816] hover:bg-[#991412] text-white text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded-[10px] shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            View All Articles
          </a>
        </motion.div>
      </article>

      {/* Related Articles Section */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-[#FAF7F3] border-t border-[#E8DFD8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-10"
            >
              <span className="text-xs uppercase tracking-widest font-bold text-[#B21816] block mb-1">
                Keep Reading
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-[#2A2421] uppercase">
                Related Articles
              </h3>
              <div className="w-12 h-[2px] bg-[#B21816] mx-auto mt-3"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((rel, idx) => (
                <motion.article
                  key={rel.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.65,
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-white border border-[#E8DFD8] rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <a href={`/blogs/${rel.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#B21816] text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full">
                        {rel.category}
                      </span>
                    </div>
                  </a>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] font-semibold text-[#8C827A] uppercase tracking-wider">
                        <span>{rel.date}</span>
                        <span>•</span>
                        <span>{rel.readTime}</span>
                      </div>
                      <a href={`/blogs/${rel.slug}`}>
                        <h4 className="font-serif-title text-base font-bold text-[#2A2421] group-hover:text-[#B21816] transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                      </a>
                      <p className="text-xs text-[#524640] line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F0EAE3]">
                      <a
                        href={`/blogs/${rel.slug}`}
                        className="block w-full text-center bg-[#FCFAF7] hover:bg-[#B21816] text-[#2A2421] hover:text-white border border-[#E0D5CB] hover:border-[#B21816] text-[11px] uppercase tracking-wider font-bold py-2.5 rounded-[10px] transition-colors"
                      >
                        Read Article
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

