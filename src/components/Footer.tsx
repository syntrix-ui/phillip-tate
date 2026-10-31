import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  ShieldCheck,
} from "lucide-react";

interface FooterProps {
  authorName?: string;
  authorBioSnippet?: string;
  avatarUrl?: string;
}

export default function Footer({
  authorName = "Philip Tate",
  authorBioSnippet = "Author, Methodist Minister, and storyteller capturing readers with gripping suspense, mountain fiction, and tales of redemption.",
}: FooterProps) {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="relative bg-[#B21816] text-white pt-16 pb-10 overflow-hidden">
      {/* Subtle organic background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/20">
          {/* Col 1: Author branding & bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {authorName}
              </span>
              <span className="text-[11px] tracking-widest uppercase font-medium text-white/80 mt-1">
                Official Author Website
              </span>
            </div>

            <p className="text-sm text-white/85 leading-relaxed pr-4">
              {authorBioSnippet}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Media News Feature Link */}
              <a
                href="https://mcdowellnews.com/life-entertainment/local/events/article_c04fca73-27b9-4968-8a88-211559940265.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors text-white"
                aria-label="The McDowell News Feature"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              {/* Twitter / X SVG */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors text-white"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Goodreads / BookOpen icon */}
              <a
                href="https://www.goodreads.com/search?q=Philip+Tate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors text-white"
                aria-label="Goodreads"
                title="Goodreads Profile"
              >
                <BookOpen className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white/90">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About the Author
                </a>
              </li>
              <li>
                <a href="/media" className="hover:text-white transition-colors">
                  Media Kit & Videos
                </a>
              </li>
              <li>
                <a href="/#books" className="hover:text-white transition-colors">
                  Featured Novels
                </a>
              </li>
              <li>
                <a href="/#reviews" className="hover:text-white transition-colors">
                  Reader Reviews
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-white transition-colors">
                  Blogs & Articles
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Books Directory (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white/90">
              Books by Philip
            </h4>
            <ul className="space-y-2 text-xs text-white/85">
              <li>
                <a href="/books/thwarted-enemy" className="hover:text-white hover:underline transition-colors block">
                  Thwarted Enemy
                </a>
              </li>
              <li>
                <a href="/books/rizzoes-landing" className="hover:text-white hover:underline transition-colors block">
                  Rizzoe's Landing
                </a>
              </li>
              <li>
                <a href="/books/singing-reels" className="hover:text-white hover:underline transition-colors block">
                  Singing Reels: Sunburn
                </a>
              </li>
              <li>
                <a href="/books/breach-of-trust" className="hover:text-white hover:underline transition-colors block">
                  A Breach of Trust
                </a>
              </li>
              <li>
                <a href="/books/china-naval-ambitions" className="hover:text-white hover:underline transition-colors block">
                  China's Naval Ambitions
                </a>
              </li>
              <li>
                <a href="/books/alcohol-recovery" className="hover:text-white hover:underline transition-colors block">
                  Alcohol: How to Give It Up
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter / Reader Club (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white/90">
              Join the VIP Readers Club
            </h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Get free book preview chapters, secret bonus epilogues, and upcoming release dates straight to your inbox.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-white/20 border border-white/30 text-white text-xs space-y-1 animate-in fade-in duration-300">
                <p className="font-bold flex items-center gap-1.5 text-sm">
                  ✓ Welcome to the Club!
                </p>
                <p className="text-white/85 text-[11px]">
                  Thank you for subscribing. Your exclusive preview chapters and release updates are on their way.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="space-y-2 pt-1"
              >
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address..."
                    required
                    className="bg-white/15 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white rounded-lg text-xs h-10"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    size="sm"
                    className="bg-white text-[#B21816] hover:bg-[#F3ECE4] font-semibold text-xs uppercase tracking-wider px-5 h-10 rounded-[10px] cursor-pointer shrink-0 shadow-xs"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-[10px] text-white/60 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> No spam. Unsubscribe anytime with 1-click.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/75 gap-3">
          <p>© {new Date().getFullYear()} {authorName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="/contact" className="hover:text-white transition-colors">
              Contact Literary Agent
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
