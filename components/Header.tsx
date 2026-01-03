"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calculator } from "lucide-react";
import CTAButton from "./ui/button1";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "glass-dark shadow-elegant py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-4 group">
            <div className="w-15 h-15  bg-white rounded-xl flex items-center justify-center shadow-gold transition-transform duration-300 group-hover:scale-105">
              <img src="/tariqdesign.png" alt="LacleoJury Logo" className="w-20 h-20 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                LacleoJury
              </span>
              <span className="text-[10px] text-white/60 tracking-elegant uppercase font-medium">
                Legal Advisory
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
             <CTAButton></CTAButton>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-8 border-t border-white/10 mt-4 animate-fade-in bg-black">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white text-semibold hover:text-white hover:bg-white/5 transition-colors duration-300 py-3 px-4 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <CTAButton></CTAButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;