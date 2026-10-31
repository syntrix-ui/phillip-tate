import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { booksData } from "@/data/books";

interface HeaderProps {
  authorName?: string;
  authorSubtitle?: string;
}

export default function Header({
  authorName = "Philip Tate",
  authorSubtitle = "Author • Minister • Storyteller",
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [booksDropdownOpen, setBooksDropdownOpen] = useState(false);
  const [mobileBooksOpen, setMobileBooksOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setBooksDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setBooksDropdownOpen(false);
    }, 180);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FCFAF7]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD8]/80 py-3"
          : "bg-[#FCFAF7]/85 backdrop-blur-xs py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Author identity (Text Only, No Image) */}
          <a href="/" className="flex flex-col group py-1">
            <span className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-[#2A2421] group-hover:text-[#B21816] transition-colors leading-none">
              {authorName}
            </span>
            <span className="text-[10px] tracking-widest uppercase font-medium text-[#786C65] mt-1">
              {authorSubtitle}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            <a
              href="/"
              className="text-xs uppercase tracking-widest font-medium text-[#2A2421]/80 hover:text-[#B21816] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B21816] hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-xs uppercase tracking-widest font-medium text-[#2A2421]/80 hover:text-[#B21816] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B21816] hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </a>

            <a
              href="/media"
              className="text-xs uppercase tracking-widest font-medium text-[#2A2421]/80 hover:text-[#B21816] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B21816] hover:after:w-full after:transition-all after:duration-300"
            >
              Media
            </a>

            {/* BOOKS WITH SUBMENU DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setBooksDropdownOpen(!booksDropdownOpen)}
                className={`text-xs uppercase tracking-widest font-medium transition-colors relative py-1 flex items-center gap-1 cursor-pointer ${
                  booksDropdownOpen
                    ? "text-[#B21816]"
                    : "text-[#2A2421]/80 hover:text-[#B21816]"
                }`}
                aria-expanded={booksDropdownOpen}
              >
                <span>Books</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    booksDropdownOpen ? "rotate-180 text-[#B21816]" : "text-[#786C65]"
                  }`}
                />
              </button>

              {/* Dropdown Menu Panel (Exact match to reference style) */}
              {booksDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-[#E8DFD8] py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  role="menu"
                >
                  <div className="px-3 py-1.5 border-b border-[#E8DFD8]/60 mb-1">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C827A]">
                      Select a Book
                    </span>
                  </div>
                  {booksData.map((book) => (
                    <a
                      key={book.slug}
                      href={`/books/${book.slug}`}
                      className="block px-3.5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#2A2421] hover:text-[#B21816] hover:bg-[#F7F2EC] rounded-lg transition-colors mx-1"
                      role="menuitem"
                    >
                      <div className="flex items-center justify-between">
                        <span>{book.shortTitle}</span>
                        <span className="text-[9px] font-normal lowercase tracking-normal text-[#8C827A] capitalize">
                          {book.genre.split(" ")[0]}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/blogs"
              className="text-xs uppercase tracking-widest font-medium text-[#2A2421]/80 hover:text-[#B21816] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B21816] hover:after:w-full after:transition-all after:duration-300"
            >
              Blogs
            </a>

            <a
              href="/contact"
              className="text-xs uppercase tracking-widest font-medium text-[#2A2421]/80 hover:text-[#B21816] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B21816] hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Button (Order Book) */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="/#books">
              <Button
                variant="default"
                size="sm"
                className="bg-[#B21816] hover:bg-[#991412] text-white shadow-xs cursor-pointer text-xs uppercase tracking-wider font-semibold px-5 h-9 rounded-[10px] transition-transform active:scale-95"
              >
                Order Book
              </Button>
            </a>
          </div>

          {/* Mobile menu hamburger toggle button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#2A2421] hover:bg-[#F3ECE4] rounded-[10px] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCFAF7]/98 backdrop-blur-xl border-b border-[#E8DFD8] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 pt-3 pb-6 space-y-2">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm uppercase tracking-wider font-semibold text-[#2A2421] hover:text-[#B21816] border-b border-[#E8DFD8]/40"
            >
              Home
            </a>

            <a
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm uppercase tracking-wider font-semibold text-[#2A2421] hover:text-[#B21816] border-b border-[#E8DFD8]/40"
            >
              About
            </a>

            <a
              href="/media"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm uppercase tracking-wider font-semibold text-[#2A2421] hover:text-[#B21816] border-b border-[#E8DFD8]/40"
            >
              Media
            </a>

            {/* Mobile Books Accordion */}
            <div className="border-b border-[#E8DFD8]/40 py-2">
              <button
                type="button"
                onClick={() => setMobileBooksOpen(!mobileBooksOpen)}
                className="w-full flex items-center justify-between text-sm uppercase tracking-wider font-semibold text-[#2A2421] hover:text-[#B21816]"
              >
                <span>Books</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileBooksOpen ? "rotate-180 text-[#B21816]" : ""
                  }`}
                />
              </button>

              {mobileBooksOpen && (
                <div className="pl-3 pt-2 space-y-1.5 mt-1 border-l-2 border-[#B21816]/30">
                  {booksData.map((book) => (
                    <a
                      key={book.slug}
                      href={`/books/${book.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs uppercase tracking-wide font-medium text-[#2A2421]/90 hover:text-[#B21816]"
                    >
                      {book.shortTitle}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm uppercase tracking-wider font-semibold text-[#2A2421] hover:text-[#B21816] border-b border-[#E8DFD8]/40"
            >
              Blogs
            </a>

            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm uppercase tracking-wider font-semibold text-[#2A2421] hover:text-[#B21816] border-b border-[#E8DFD8]/40"
            >
              Contact
            </a>

            <div className="pt-3">
              <a href="/#books" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="default"
                  className="w-full bg-[#B21816] hover:bg-[#991412] text-white shadow-xs text-xs uppercase tracking-wider font-semibold py-2.5 rounded-[10px] flex items-center justify-center"
                >
                  Order Book Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
