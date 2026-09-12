"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// Trisakti Header Logo Component
const TrisaktiHeaderLogo: React.FC = () => (
  <div className="flex items-center gap-3">
    <svg viewBox="0 0 100 100" fill="none" className="w-9 h-9 text-white">
      {/* Central Flame / Spear */}
      <path
        d="M50 8 C48 20 44 32 38 42 C44 42 47 45 50 52 C53 45 56 42 62 42 C56 32 52 20 50 8 Z"
        fill="currentColor"
      />
      {/* Left Wing */}
      <path
        d="M50 52 C42 44 28 35 15 42 C24 54 36 62 46 64 C42 58 44 54 50 52 Z"
        fill="currentColor"
      />
      {/* Right Wing */}
      <path
        d="M50 52 C58 44 72 35 85 42 C76 54 64 62 54 64 C58 58 56 54 50 52 Z"
        fill="currentColor"
      />
      {/* Lower Base */}
      <path
        d="M50 62 C40 65 24 66 18 76 C32 80 44 78 50 72 C56 78 68 80 82 76 C76 66 60 65 50 62 Z"
        fill="currentColor"
      />
      <path
        d="M30 80 C40 84 60 84 70 80 C64 88 36 88 30 80 Z"
        fill="currentColor"
      />
    </svg>
    <span className="text-[10px] md:text-xs font-black font-poppins text-white tracking-[0.15em] uppercase leading-tight">
      UNIVERSITAS<br />TRISAKTI
    </span>
  </div>
);

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "GALERY", href: "#gallery" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 pt-4 px-4 pb-2 bg-transparent">
      <div className="max-w-6xl mx-auto bg-[#0067C5] rounded-full shadow-lg px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center">
          <TrisaktiHeaderLogo />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-poppins font-bold text-sm tracking-[0.2em] hover:opacity-80 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Hamburger Icon */}
        <div className="flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white focus:outline-none hover:opacity-80 transition-opacity"
            aria-label="Menu Toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl bg-[#0067C5] text-white p-6 shadow-xl border border-white/20">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-[0.2em] font-poppins py-2 border-b border-white/10 hover:bg-white/10 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
