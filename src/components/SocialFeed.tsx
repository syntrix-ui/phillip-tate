import React from "react";
import { Heart, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

interface SocialPost {
  id: number;
  imageUrl: string;
  caption: string;
  likes: string;
  comments: string;
  tag: string;
  aspectRatio: string;
}

const allSocialPosts: SocialPost[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=700",
    caption: "Morning fog over the Blue Ridge peaks. The perfect stillness to outline the next chapter of mountain suspense.",
    likes: "428",
    comments: "34",
    tag: "#MountainWriting",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=700",
    caption: "Proof copies of Thwarted Enemy arrived from the press today. Nothing beats holding the finished pages.",
    likes: "894",
    comments: "92",
    tag: "#ThwartedEnemy",
    aspectRatio: "aspect-square",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80&w=700",
    caption: "Heading out into the Gulf Stream at sunrise. Singing Reels was born right here on the open water.",
    likes: "612",
    comments: "58",
    tag: "#SingingReels",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=700",
    caption: "Sun breaking through the pine ridge. Grateful for the gift of another day in Western North Carolina.",
    likes: "510",
    comments: "41",
    tag: "#BlueRidgeLife",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=700",
    caption: "The roar of Atlantic surf. Salt spray, sunburn, and the timeless thrill of outdoor adventure.",
    likes: "740",
    comments: "49",
    tag: "#OceanMemoir",
    aspectRatio: "aspect-square",
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=700",
    caption: "Notes, coffee, and historical archives on 1860s Asheville for A Breach of Trust. The history runs deep.",
    likes: "680",
    comments: "63",
    tag: "#CivilWarMystery",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=700",
    caption: "Casting lines along clear mountain rivers. Finding stories where the current runs pure.",
    likes: "375",
    comments: "29",
    tag: "#AnglerLife",
    aspectRatio: "aspect-square",
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=700",
    caption: "Evening quiet at Land Harbor. An author's favorite place to reflect, write, and recharge.",
    likes: "590",
    comments: "38",
    tag: "#LinvilleNC",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 9,
    imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=700",
    caption: "5:00 AM coffee and handwritten manuscript pages. Starting each day with quiet devotion to the story.",
    likes: "625",
    comments: "54",
    tag: "#WritersRoutine",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 10,
    imageUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=700",
    caption: "Deep in the hemlocks of Linville Gorge. High terrain that tests both courage and endurance.",
    likes: "780",
    comments: "61",
    tag: "#AppalachianTrail",
    aspectRatio: "aspect-square",
  },
  {
    id: 11,
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=700",
    caption: "Where coastal lowcountry marshes meet the sea. Secrets under the Spanish moss in Rizzoe's Landing.",
    likes: "830",
    comments: "72",
    tag: "#RizzoesLanding",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 12,
    imageUrl: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&q=80&w=700",
    caption: "Golden morning light on the woodland path. Every story begins with taking the first step.",
    likes: "495",
    comments: "33",
    tag: "#AuthorJourney",
    aspectRatio: "aspect-[4/5]",
  },
];

// Split posts into 4 balanced columns for bi-directional marquee
const col1 = [allSocialPosts[0], allSocialPosts[4], allSocialPosts[8]];
const col2 = [allSocialPosts[1], allSocialPosts[5], allSocialPosts[9]];
const col3 = [allSocialPosts[2], allSocialPosts[6], allSocialPosts[10]];
const col4 = [allSocialPosts[3], allSocialPosts[7], allSocialPosts[11]];

function PostCard({ post, profileUrl }: { post: SocialPost; profileUrl: string }) {
  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden bg-white border border-[#E8DFD8] shadow-xs hover:shadow-xl transition-all duration-300 mb-4 sm:mb-5"
    >
      <div className={`relative w-full ${post.aspectRatio} overflow-hidden bg-[#2A2421]/10`}>
        <img
          src={post.imageUrl}
          alt={post.caption}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover Dark Glass Overlay with Caption & Like Counter */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-wider uppercase font-bold text-white/90 bg-[#B21816] px-2.5 py-0.5 rounded-full">
              {post.tag}
            </span>
            <InstagramIcon className="w-4 h-4 text-white" />
          </div>

          <div>
            <p className="text-xs text-white/95 line-clamp-3 leading-relaxed mb-3 font-sans">
              {post.caption}
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-white/90">
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                {post.likes}
              </span>
              <span className="flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                {post.comments}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Bottom Meta Bar */}
      <div className="p-3 bg-white flex items-center justify-between text-[11px] text-[#786C65] border-t border-[#F0EAE3]">
        <span className="font-semibold text-[#2A2421] truncate max-w-[140px] sm:max-w-[170px]">
          {post.caption}
        </span>
        <span className="text-[10px] text-[#B21816] font-bold tracking-wider shrink-0 uppercase group-hover:underline">
          View
        </span>
      </div>
    </a>
  );
}

interface SocialFeedProps {
  handle?: string;
  profileUrl?: string;
}

export default function SocialFeed({
  handle = "@philiptateauthor",
  profileUrl = "https://mcdowellnews.com/life-entertainment/local/events/article_c04fca73-27b9-4968-8a88-211559940265.html",
}: SocialFeedProps) {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F3] border-t border-[#E8DFD8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFD8] shadow-xs mb-3">
            <InstagramIcon className="w-3.5 h-3.5 text-[#B21816]" />
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#2A2421]">
              Live Social Feed
            </span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2A2421] uppercase">
            FOLLOW THE JOURNEY
          </h2>
          <div className="w-16 h-[2px] bg-[#B21816] mx-auto mt-3 mb-4"></div>

          <p className="text-sm sm:text-base text-[#524640] leading-relaxed">
            Behind-the-scenes glimpses from the Blue Ridge mountains, open ocean angling, and latest novel dispatches.
          </p>

          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-xs font-bold tracking-wider uppercase text-[#B21816] hover:underline"
          >
            {handle}
          </a>
        </motion.div>

        {/* Bi-Directional Vertical Marquee Container with Subtle Top and Bottom Fade */}
        <div className="relative marquee-pause h-[560px] sm:h-[620px] md:h-[660px] overflow-hidden rounded-3xl [mask-image:linear-gradient(to_bottom,transparent_0%,black_6%,black_94%,transparent_100%)]">
          {/* Top Fade Gradient Overlay (Light & Delicate) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-[#FAF7F3]/85 via-[#FAF7F3]/35 to-transparent z-20"></div>

          {/* Bottom Fade Gradient Overlay (Light & Delicate) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 sm:h-20 bg-gradient-to-t from-[#FAF7F3]/85 via-[#FAF7F3]/35 to-transparent z-20"></div>

          {/* 4 Multi-Directional Columns Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 h-full">
            {/* Column 1: Moves UP */}
            <div className="overflow-hidden">
              <div className="animate-marquee-up flex flex-col">
                {[...col1, ...col1].map((post, idx) => (
                  <PostCard key={`col1-${post.id}-${idx}`} post={post} profileUrl={profileUrl} />
                ))}
              </div>
            </div>

            {/* Column 2: Moves DOWN */}
            <div className="overflow-hidden">
              <div className="animate-marquee-down flex flex-col">
                {[...col2, ...col2].map((post, idx) => (
                  <PostCard key={`col2-${post.id}-${idx}`} post={post} profileUrl={profileUrl} />
                ))}
              </div>
            </div>

            {/* Column 3: Moves UP (hidden on mobile, visible on md+) */}
            <div className="hidden md:block overflow-hidden">
              <div className="animate-marquee-up-alt flex flex-col">
                {[...col3, ...col3].map((post, idx) => (
                  <PostCard key={`col3-${post.id}-${idx}`} post={post} profileUrl={profileUrl} />
                ))}
              </div>
            </div>

            {/* Column 4: Moves DOWN (hidden on md, visible on lg+) */}
            <div className="hidden lg:block overflow-hidden">
              <div className="animate-marquee-down-alt flex flex-col">
                {[...col4, ...col4].map((post, idx) => (
                  <PostCard key={`col4-${post.id}-${idx}`} post={post} profileUrl={profileUrl} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button: Clean news redirect (No icons inside button, exact rounded-[10px]) */}
        <div className="text-center mt-10 md:mt-12">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#B21816] hover:bg-[#991412] text-white text-xs uppercase tracking-widest font-bold px-9 py-4 rounded-[10px] shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            Read Press & Media Coverage
          </a>
        </div>
      </div>
    </section>
  );
}
