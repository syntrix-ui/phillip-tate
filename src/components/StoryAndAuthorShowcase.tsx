import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function StoryAndAuthorShowcase() {
  return (
    <div className="bg-[#F5EFEB] text-[#2A2421] pt-20 md:pt-28 pb-0 relative">
      {/* Subtle background ambient grain / texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2A2421_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 md:space-y-24">
        {/* ========================================================
            PART 1: THE "WELCOME" SECTION
            ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Real Books by Philip Tate (Dual Book Presentation) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md h-[360px] sm:h-[420px] flex items-center justify-center">
              {/* Book 1: Thwarted Enemy */}
              <div className="absolute left-2 sm:left-4 top-6 w-44 sm:w-52 aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-white/60 -rotate-6 hover:rotate-0 hover:z-20 transition-all duration-300 ring-1 ring-black/10">
                <img
                  src="/book-thwarted-enemy-front.jpg"
                  alt="Thwarted Enemy by Philip Tate"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Book 2: Rizzoe's Landing */}
              <div className="absolute right-2 sm:right-4 top-2 w-44 sm:w-52 aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-white/60 rotate-6 hover:rotate-0 hover:z-20 transition-all duration-300 ring-1 ring-black/10">
                <img
                  src="/book-rizzoes-landing-front.jpg"
                  alt="Rizzoe's Landing by Philip J. Tate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Literary Welcome Copy */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2A2421]">
              WELCOME
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-[#524640] leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p className="font-serif-title text-lg sm:text-xl text-[#2A2421] font-semibold italic">
                From the Blue Ridge foothills to the bayou and beyond.
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#786C65] font-semibold">
                Mountain Tales • High-Stakes Thrillers • Suspense & Redemption
              </p>
              <p>
                My name is <strong className="text-[#2A2421] font-bold">Philip Tate</strong>. Over a life shaped by the woodlands and rivers of Western North Carolina, service as a Navy ROTC Midshipman at UNC Chapel Hill, decades in EMS paramedic service, and nine years in pastoral ministry, storytelling has always been my calling.
              </p>
              <p>
                From the countdown of national defense in <em>Thwarted Enemy</em> to the shadowy secrets of <em>Rizzoe's Landing</em>, I write books of all kinds—fiction, adventure novellas, children's stories, and classic whodunits.
              </p>
              <p className="font-serif-title text-xl sm:text-2xl font-bold text-[#B21816] pt-1">
                Welcome to my literary journey.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            PART 2: "FROM THE AUTHOR" CARD
            ======================================================== */}
        <section className="space-y-6">
          {/* Centered Section Title */}
          <div className="text-center">
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-[#2A2421] uppercase">
              FROM THE AUTHOR
            </h2>
            <div className="w-16 h-[2px] bg-[#B21816] mx-auto mt-3"></div>
          </div>

          {/* Horizontal Author Feature Card */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-[#E8DFD8] bg-[#FAF8F5]">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Left Column: Real Author Photo */}
              <div className="md:col-span-5 relative min-h-[320px] md:min-h-full">
                <img
                  src="/author.jpg"
                  alt="Author Philip Tate"
                  className="w-full h-full object-cover object-top"
                />
                <div className="hidden md:block absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-[#FAF8F5]"></div>
              </div>

              {/* Right Column: Author Text Content */}
              <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4 bg-[#FAF8F5]">
                <div className="space-y-3">
                  <h3 className="font-serif-title text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#2A2421]">
                    PHILIP TATE
                  </h3>

                  <div className="space-y-2.5 text-xs sm:text-sm text-[#524640] leading-relaxed">
                    <p>
                      Born in Atlanta, Georgia, Philip Tate lived in Sandy Springs before his family moved to Marion, NC in the foothills of the Blue Ridge Mountains 45 miles east of Asheville. He grew up in the countryside of the Catawba River Valley whose waters feed Lake James.
                    </p>
                    <p>
                      An alumnus of UNC Chapel Hill—where he was exposed to literary arts, law, geology, history, politics, and Navy ROTC as a Midshipman—Philip joined the family insurance business and served in the Red Cross, EMS paramedic service, and hospital and school boards.
                    </p>
                    <p>
                      Now in his 9th year as a Methodist Minister, Philip writes mountain tales of fiction, serious defense thrillers, children's books, adventure novellas, and whodunits.
                    </p>
                  </div>
                </div>

                {/* Card Button in #B21816 */}
                <div className="pt-2">
                  <Button
                    variant="default"
                    className="bg-[#B21816] hover:bg-[#991412] text-white rounded-lg px-7 h-10 text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-xs active:scale-95 transition-all"
                  >
                    LEARN MORE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            PART 3: OVERLAPPING TRAILER IMAGE CARD
            Sitting directly on the border between upper & lower section!
            ======================================================== */}
        <div className="relative -mb-32 sm:-mb-40 md:-mb-48 z-20 flex justify-center pt-4">
          <div className="relative w-full max-w-3xl aspect-[16/10] sm:aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/10 group bg-black">
            {/* Hamptons Chateau / Mansion Visual */}
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=85&w=1600"
              alt="Hamptons Chateau Preview"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Dark aesthetic backdrop overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

            {/* Center Red Circular Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#B21816]/30 animate-ping"></span>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#B21816] text-white flex items-center justify-center shadow-2xl ring-4 ring-white/30 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
