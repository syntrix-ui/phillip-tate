import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  authorName?: string;
  authorSubtitle?: string;
  avatarUrl?: string;
}

export default function Header({
  authorName = "Philip Tate",
  authorSubtitle = "Author • Minister • Storyteller",
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Books", href: "#books" },
    { label: "Trailer", href: "#trailer" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FCFAF7]/90 backdrop-blur-md shadow-xs border-b border-[#E8DFD8]/80 py-3"
          : "bg-[#FCFAF7]/60 backdrop-blur-xs py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Author identity (Text Only, No Image) */}
          <a href="#" className="flex flex-col group py-1">
            <span className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-[#2A2421] group-hover:text-[#B21816] transition-colors leading-none">
              {authorName}
            </span>
            <span className="text-[10px] tracking-widest uppercase font-medium text-[#786C65] mt-1">
              {authorSubtitle}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-[#2A2421]/80 hover:text-[#B21816] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B21816] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="default"
              size="sm"
              className="bg-[#B21816] hover:bg-[#991412] text-white shadow-xs cursor-pointer text-xs uppercase tracking-wider font-semibold px-5 h-9 rounded-full transition-transform active:scale-95"
            >
              Order Book
            </Button>
          </div>

          {/* Mobile menu hamburger toggle button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#2A2421] hover:bg-[#F3ECE4] rounded-lg cursor-pointer"
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
          <div className="px-5 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm uppercase tracking-wider font-semibold text-[#2A2421] hover:text-[#B21816] border-b border-[#E8DFD8]/40"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                variant="default"
                className="w-full bg-[#B21816] hover:bg-[#991412] text-white shadow-xs text-xs uppercase tracking-wider font-semibold py-2.5 rounded-full flex items-center justify-center"
              >
                Order Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

