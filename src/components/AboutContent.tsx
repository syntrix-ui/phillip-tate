import React from "react";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <section className="py-16 md:py-24 bg-[#FCFAF7] text-[#2A2421]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Extensive Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Main Greeting / Title */}
            <div>
              <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2A2421] uppercase leading-tight">
                MY NAME IS PHILIP TATE.
              </h2>
              <div className="w-14 h-[2px] bg-[#B21816] mt-4 mb-6"></div>
            </div>

            {/* Narrative Body matching reference typography */}
            <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#524640] leading-relaxed font-sans">
              <p>
                Born in Atlanta, Georgia, I lived in Sandy Springs just outside Atlanta until the age of five, when my family moved to Marion, North Carolina, in the foothills of the Blue Ridge Mountains—forty-five miles east of Asheville.
              </p>

              <p className="font-semibold text-[#2A2421]">
                Growing up in the countryside of the Catawba River Valley, whose pristine waters feed Lake James, instilled in me an enduring love for the natural world.
              </p>

              <p>
                I grew up hunting and fishing these woodlands and waters, participating in Boy Scouting, and engaging in all aspects of high school life. Those early mountain years formed the backdrop of everything that followed—teaching me patience, observation, and respect for community roots.
              </p>

              <p>
                I later attended the University of North Carolina at Chapel Hill (UNC Chapel Hill), where I was deeply exposed to the literary arts, law, geology, history, politics, and naval discipline as a Midshipman in Navy ROTC. Those collegiate years broadened my perspective and sparked an insatiable curiosity about how human decisions, governance, and high-stakes events collide.
              </p>

              <p className="font-semibold text-[#2A2421]">
                A life defined by service, crisis response, and civic dedication.
              </p>

              <p>
                Upon graduation, I joined our family insurance business. As the years progressed, my focus naturally expanded into community protection and emergency response. I became actively involved with the American Red Cross and emergency medical services as an EMS paramedic—serving on front lines where life and vulnerability meet. Over the decades, I also served the public trust on regional Hospital Boards, School Boards, and Church Boards.
              </p>

              <p>
                Later in my career, I answered a higher calling and became a Methodist Minister, a sacred responsibility in which I am now proud to be in my ninth year. Pastoral ministry has given me a rare vantage point into the human heart: the power of grace, the necessity of forgiveness, and the resilience of ordinary people walking through profound trials.
              </p>

              <p className="font-semibold text-[#2A2421]">
                Storytelling: From mountain tales to national suspense thrillers.
              </p>

              <p>
                I love writing books of all kinds. My work spans gripping national defense thrillers like <em className="text-[#2A2421] font-medium">Thwarted Enemy: The Chosen's Atonement</em>, atmospheric Southern suspense like <em className="text-[#2A2421] font-medium">Rizzoe's Landing: A Tale of the Bayou</em>, authentic mountain fiction, children’s books, adventure novellas, and classic whodunits. In every story, I strive to weave authenticity, moral weight, and pulse-pounding entertainment.
              </p>

              <p>
                Today, I live between Marion and Land Harbor in Linville, North Carolina, with my beloved wife, Kay. In my leisure time, I enjoy trout fishing in mountain streams, golf, tennis, pickleball, photography, amateur geology, amateur bluegrass guitar, and operating Ham Radio to converse with friends across the globe.
              </p>

              <p className="font-serif-title text-base sm:text-lg text-[#B21816] font-bold pt-2 italic">
                Thank you for being here.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Author Portrait (Matching Reference Layout) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:sticky lg:top-28"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-[#E8DFD8] group bg-white">
              <img
                src="/Staircase Portraits of a Grandfather.png"
                alt="Author Philip Tate"
                className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

