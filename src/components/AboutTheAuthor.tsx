import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutTheAuthor() {
  return (
    <section id="about" className="bg-white text-[#2A2421] pt-48 sm:pt-60 md:pt-72 lg:pt-80 pb-20 md:pb-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Blue Ridge / Scenic Foothills Atmosphere */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-[16/11] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD8] group">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200"
                alt="Blue Ridge Mountains Foothills"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right Column: In-depth Philip Tate Biography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-5 text-center lg:text-left"
          >
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2A2421]">
              ABOUT THE AUTHOR
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#524640] leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p className="font-serif-title text-base sm:text-lg text-[#2A2421] font-semibold italic">
                From the Blue Ridge foothills to a life of service, ministry, and storytelling.
              </p>
              <p>
                Born in Atlanta, Georgia, Philip Tate lived in Sandy Springs just outside Atlanta until age five, when his family moved to Marion, NC in the foothills of the Blue Ridge Mountains 45 miles east of Asheville. Philip grew up in the countryside of the Catawba River Valley whose waters feed Lake James, hunting and fishing these woodlands and waters, participating in Boy Scouting, and high school.
              </p>
              <p>
                He then attended UNC Chapel Hill where he was exposed to the literary arts, law, geology, history, politics, and Navy ROTC as a Midshipman. Upon graduation, he joined the family insurance business and became, in his mid years, involved in the Red Cross, EMS, and paramedic service, as well as serving on Hospital, School, and Church Boards.
              </p>
              <p>
                Later in his career, he was called and became a Methodist Minister and is now in his 9th year. Philip loves writing books of all kinds: mountain tales of fiction, serious defense thrillers, children's books, adventure novellas, and whodunits.
              </p>
              <p>
                Philip lives between Marion and Land Harbor in Linville with his beloved wife Kay. In his leisure, he enjoys trout fishing, golf, tennis, pickleball, photography, amateur geology, amateur bluegrass guitar, and Ham Radio.
              </p>
            </div>

            {/* CTA Button in #B21816 (Clean without icons) */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <a href="/about">
                <Button
                  variant="default"
                  className="bg-[#B21816] hover:bg-[#991412] text-white rounded-[10px] px-8 h-11 text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-md active:scale-95 transition-all"
                >
                  LEARN MORE
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
