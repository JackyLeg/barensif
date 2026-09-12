"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ShieldCheck, ChevronRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "GALLERY", href: "#gallery" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-3 md:pt-5">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#004A91]/95 backdrop-blur-md shadow-lg shadow-blue-950/20 py-2.5 px-6 border border-white/10"
            : "bg-[#006BCB] shadow-md py-3 px-6 md:px-8"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3 text-white group focus:outline-none"
          >
            {/* Trisakti Logo Badge */}
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-[#006BCB] flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
              <span className="font-poppins tracking-tighter text-[#004A91] text-xs font-black">
                USAKTI
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-poppins font-black tracking-wider text-base md:text-lg leading-none text-white">
                TRISAKTI
              </span>
              <span className="text-[10px] md:text-xs text-blue-100 font-medium tracking-widest uppercase">
                BARENSIF
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white font-poppins text-xs tracking-widest font-semibold hover:scale-105 transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-white text-[#004A91] hover:bg-blue-50 text-xs font-bold font-poppins px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-1.5"
            >
              <span>Hubungi Kami</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl bg-[#004A91] text-white p-5 border border-white/10 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider font-poppins py-2 px-3 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-blue-200" />
              </a>
            ))}
            <hr className="border-white/15 my-1" />
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white text-[#004A91] text-center font-bold text-sm py-2.5 rounded-xl shadow-md"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
