import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { motion } from "framer-motion";

interface VideoItem {
  id: string;
  title: string;
  badge: string;
  videoSrc: string;
  poster: string;
  description: string;
}

const mediaVideos: VideoItem[] = [
  {
    id: "thwarted-01",
    title: "Thwarted Enemy — Book Trailer I",
    badge: "Official Book Preview",
    videoSrc: "/videos/Philip Tate Thwarted Enemy Book 01 Video.mp4",
    poster: "/poster_thwarted_01.jpg",
    description:
      "The countdown has begun. An innocent boy is thrust into the center of an international conspiracy across the Blue Ridge Mountains.",
  },
  {
    id: "thwarted-02",
    title: "Thwarted Enemy — Book Trailer II",
    badge: "Tactical Suspense Climax",
    videoSrc: "/videos/Philip Tate Thwarted Enemy Book 02 Video.mp4",
    poster: "/poster_thwarted_02.jpg",
    description:
      "A nation's fate hangs in the balance as frontline intelligence officers race against time to prevent catastrophic disaster.",
  },
  {
    id: "china-naval",
    title: "China's Global Naval Ambitions",
    badge: "Geopolitics & Defense",
    videoSrc: "/videos/Philip Tate China's Global Naval Ambitions Video.mp4",
    poster: "/poster_china_naval.jpg",
    description:
      "A deep examination of maritime doctrine, modern naval power dynamics, and the geopolitical currents shaping global balance.",
  },
  {
    id: "silverthrone",
    title: "Silverthrone & Appalachian Lore",
    badge: "Mountain Adventure",
    videoSrc: "/videos/Philip Tate Silverthrone Video.mp4",
    poster: "/poster_silverthrone.jpg",
    description:
      "Mountain tales of wilderness endurance, local legend, and the enduring human spirit in the rugged Appalachian highlands.",
  },
];

export default function MediaKitContent() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const handleScrollToVideos = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("media-videos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FCFAF7] text-[#2A2421] py-12 md:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* ========================================================
            TOP QUOTE CALLOUT BOX (Exact reference match)
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#FAF7F3] border border-[#E8DFD8] rounded-2xl p-6 sm:p-8 md:p-10 text-center shadow-xs"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <blockquote className="font-serif-title text-base sm:text-lg md:text-xl text-[#2A2421] font-medium leading-relaxed italic">
              “There comes a moment when a story no longer belongs only to the person who wrote it... It begins to belong to the conversations it sparks, the readers it reaches, and the impact it leaves.”
            </blockquote>
            <div className="w-12 h-[1.5px] bg-[#B21816] mx-auto"></div>
            <p className="text-xs sm:text-sm text-[#786C65] font-sans italic max-w-2xl mx-auto">
              A curated collection of broadcast discussions, cinematic book trailers, frontline reflections, and press resources exploring the literary works and public service of Philip Tate.
            </p>
          </div>
        </motion.div>

        {/* ========================================================
            VIDEO SHOWCASE GRID (Reference match: top row 2 + bottom row 2)
            ======================================================== */}
        <section id="media-videos" className="space-y-8 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-2"
          >
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B21816]">
              Broadcast & Video Features
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#2A2421]">
              FEATURED MEDIA & BOOK TRAILERS
            </h2>
            <div className="w-14 h-[2px] bg-[#B21816] mx-auto mt-2"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {mediaVideos.map((video, idx) => {
              const isPlaying = activeVideoId === video.id;

              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-white rounded-2xl border border-[#E8DFD8] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Video Player / Thumbnail Area */}
                  <div className="relative aspect-video w-full bg-black overflow-hidden group">
                    {isPlaying ? (
                      <div className="relative w-full h-full bg-black flex items-center justify-center">
                        <video
                          src={video.videoSrc}
                          controls
                          autoPlay
                          playsInline
                          className="w-full h-full object-contain"
                        />
                        <button
                          type="button"
                          onClick={() => setActiveVideoId(null)}
                          className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/80 hover:bg-[#B21816] text-white flex items-center justify-center cursor-pointer transition-colors shadow-lg"
                          aria-label="Close Video"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setActiveVideoId(video.id)}
                        className="w-full h-full block text-left cursor-pointer relative"
                        aria-label={`Play ${video.title}`}
                      >
                        <img
                          src={video.poster}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors"></div>

                        {/* Top Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-[#B21816] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-xs">
                            {video.badge}
                          </span>
                        </div>

                        {/* Centered Red Play Trigger */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#B21816] text-white flex items-center justify-center shadow-xl ring-4 ring-white/30 group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-0.5" />
                          </div>
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 bg-white">
                    <div>
                      <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#2A2421] leading-snug">
                        {video.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#655851] leading-relaxed mt-2">
                        {video.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#F0EBE6] flex items-center justify-between text-xs">
                      <span className="text-[11px] font-semibold text-[#B21816] uppercase tracking-wider">
                        High-Definition Broadcast
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveVideoId(isPlaying ? null : video.id)}
                        className="text-[11px] font-semibold uppercase tracking-wider text-[#2A2421] hover:text-[#B21816] transition-colors cursor-pointer"
                      >
                        {isPlaying ? "Close Player" : "Watch Video"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            ROW 1: ABOUT THE NOVEL / THWARTED ENEMY (Ref match: About Memoir)
            ======================================================== */}
        <section className="pt-6 border-t border-[#E8DFD8]/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-5 text-left"
            >
              <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#2A2421]">
                ABOUT THE NOVEL
              </h2>

              <div className="space-y-3.5 text-xs sm:text-sm md:text-base text-[#524640] leading-relaxed font-sans">
                <p>
                  In the shadow of North Carolina's rugged mountain peaks, an unyielding adversary stirs. When quiet mountain trails become the staging ground for an international conspiracy, an innocent boy finds himself trapped at the center of an intricate, deadly countdown.
                </p>
                <p>
                  Philip Tate draws on decades of frontline public safety service, emergency medical response, and pastoral insight to craft <em>Thwarted Enemy: The Chosen's Atonement</em>—a thriller rich in tactical authenticity, relentless tension, and moral conviction.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.amazon.com/s?k=Thwarted+Enemy+Philip+Tate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="default"
                    className="bg-[#B21816] hover:bg-[#991412] text-white rounded-[10px] px-8 h-12 text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-md active:scale-95 transition-all"
                  >
                    VIEW THE BOOK ON AMAZON
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Book Cover Presentation */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <a
                href="/books/thwarted-enemy"
                className="relative w-56 sm:w-64 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-[#E8DFD8] ring-1 ring-black/10 group cursor-pointer block"
                title="View Thwarted Enemy"
              >
                <img
                  src="/book-thwarted-enemy-front.jpg"
                  alt="Thwarted Enemy by Philip Tate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/30 via-white/10 to-transparent pointer-events-none"></div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            ROW 2: AUTHOR ARTICLE / LITERARY FEATURE (Ref match)
            ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="pt-6 border-t border-[#E8DFD8]/80 space-y-5 text-left"
        >
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#2A2421]">
            PHILIP TATE'S HIGH-STAKES STORYTELLING & TACTICAL DEPTH
          </h2>

          <div className="space-y-3.5 text-xs sm:text-sm md:text-base text-[#524640] leading-relaxed font-sans max-w-4xl">
            <p>
              In his gripping suspense novels and geopolitical explorations, Philip Tate merges the lived experience of frontline public service with meticulous research into military doctrine, emergency crisis command, and human resilience.
            </p>
            <p>
              Having trained as a Navy ROTC Midshipman at UNC Chapel Hill and served through decades of emergency medical calls, Tate builds high-stakes scenes with authentic pacing and psychological truth. His characters confront impossible odds with unshakeable moral purpose, reflecting the deep convictions formed across his life and ministry in Western North Carolina.
            </p>
          </div>

          <div className="pt-2">
            <a href="/blogs/crafting-authenticity-in-mountain-suspense">
              <Button
                variant="default"
                className="bg-[#B21816] hover:bg-[#991412] text-white rounded-[10px] px-8 h-12 text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-md active:scale-95 transition-all"
              >
                READ FULL ARTICLE
              </Button>
            </a>
          </div>
        </motion.section>

        {/* ========================================================
            ROW 3: TELEVISION & BROADCAST WORK (Ref match)
            ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="pt-6 border-t border-[#E8DFD8]/80 space-y-5 text-left"
        >
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#2A2421]">
            PUBLIC SERVICE, EMS & BROADCAST WORK
          </h2>

          <div className="space-y-3 text-xs sm:text-sm md:text-base text-[#524640] leading-relaxed font-sans max-w-4xl">
            <p>
              For more than forty years, Philip Tate has been an active voice in regional public service, hospital and school board governance, and community crisis leadership.
            </p>
            <p className="italic text-[#2A2421] font-serif-title">
              Frontline Emergency Medical Service & American Red Cross Leadership:
            </p>
            <p>
              Tate's service across Western North Carolina includes decades of active volunteer ambulance duty and crisis response, providing firsthand understanding of high-stakes trauma, composure under fire, and community survival.
            </p>
            <p className="italic text-[#2A2421] font-serif-title">
              Pastoral Counseling & Media Discussions:
            </p>
            <p>
              Now in his ninth year in pastoral ministry, Philip frequently contributes to media broadcasts, community seminars, and author roundtables exploring the balance between moral courage, wilderness heritage, and literary creativity.
            </p>
          </div>

          <div className="pt-2">
            <Button
              type="button"
              onClick={handleScrollToVideos}
              variant="default"
              className="bg-[#B21816] hover:bg-[#991412] text-white rounded-[10px] px-8 h-12 text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-md active:scale-95 transition-all"
            >
              VIEW MEDIA HIGHLIGHTS
            </Button>
          </div>
        </motion.section>

        {/* ========================================================
            ROW 4: SPEAKING ENGAGEMENTS & ADVOCACY (Ref match)
            ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="pt-6 border-t border-[#E8DFD8]/80 space-y-5 text-left"
        >
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#2A2421]">
            SPEAKING ENGAGEMENTS & ADVOCACY
          </h2>

          <div className="space-y-3.5 text-xs sm:text-sm md:text-base text-[#524640] leading-relaxed font-sans max-w-4xl">
            <p>
              Philip Tate welcomes invitations to address author events, book clubs, civic organizations, veteran associations, and academic panels. His talks combine gripping narrative pacing with heartfelt lessons from decades on the front lines of emergency service and community leadership.
            </p>
            <p>
              Topics include: The Craft of Tactical Espionage Fiction, Crisis Leadership and Frontline Decision-Making, Appalachian Solitude and Conservation, and Navigating Ethical Dilemmas in High-Stakes Environments.
            </p>
          </div>

          <div className="pt-2">
            <a href="/contact">
              <Button
                variant="default"
                className="bg-[#B21816] hover:bg-[#991412] text-white rounded-[10px] px-8 h-12 text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-md active:scale-95 transition-all"
              >
                BOOK AN INTERVIEW OR SPEAKING ENGAGEMENT
              </Button>
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

