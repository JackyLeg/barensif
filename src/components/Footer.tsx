"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

// Social Media Custom SVG Icons
const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 12 5 12 5s6.256 0 7.812.418zM9.75 15.02l5.75-3.02-5.75-3.02v6.04z" clipRule="evenodd" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0067C5] text-white font-sans border-t border-blue-400/30">
      {/* Main Footer Container matching exact 4-column layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: Logo & Social Media */}
          <div className="lg:col-span-3 flex flex-col items-start pr-2">
            {/* Trisakti Logo & Name */}
            <div className="flex flex-col items-start mb-6">
              <img
                src="/Universitas-Trisakti-Logo.png"
                alt="Universitas Trisakti Logo"
                className="w-24 md:w-28 h-auto object-contain mb-3 drop-shadow-md brightness-0 invert"
              />
              {/* <h3 className="font-poppins font-black text-lg tracking-[0.2em] text-white uppercase leading-tight">
                UNIVERSITAS
              </h3>
              <h3 className="font-poppins font-black text-lg tracking-[0.2em] text-white uppercase leading-tight">
                TRISAKTI
              </h3> */}
            </div>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Universitas Trisakti"
                className="w-10 h-10 rounded-full bg-white text-[#0067C5] hover:bg-blue-50 transition-transform hover:scale-110 flex items-center justify-center shadow-md"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Universitas Trisakti"
                className="w-10 h-10 rounded-full bg-white text-[#0067C5] hover:bg-blue-50 transition-transform hover:scale-110 flex items-center justify-center shadow-md"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter Universitas Trisakti"
                className="w-10 h-10 rounded-full bg-white text-[#0067C5] hover:bg-blue-50 transition-transform hover:scale-110 flex items-center justify-center shadow-md"
              >
                <XIcon className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Universitas Trisakti"
                className="w-10 h-10 rounded-full bg-white text-[#0067C5] hover:bg-blue-50 transition-transform hover:scale-110 flex items-center justify-center shadow-md"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Hubungi Kami */}
          <div className="lg:col-span-3 text-sm leading-relaxed">
            <h4 className="font-poppins font-bold text-base text-white mb-4">
              Hubungi Kami
            </h4>

            <div className="space-y-3 text-blue-50 font-normal">
              <p>
                JL. Kyai Tapa No. 1 Grogol Jakarta Barat, Indonesia
              </p>

              <p>Phone: (62-21) 566 3232</p>

              <div>
                <p>Whatsapp: (+62) 882 194 856 74</p>
                <p className="pl-20">(+62) 877 707 077 03</p>
              </div>

              <p>Fax: (62-21) 564 4270</p>

              <p>
                Email:{" "}
                <a
                  href="mailto:humas@trisakti.ac.id"
                  className="hover:underline font-medium text-white"
                >
                  humas@trisakti.ac.id
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Tentang Trisakti */}
          <div className="lg:col-span-3 text-sm">
            <h4 className="font-poppins font-bold text-base text-white mb-4">
              Tentang Trisakti
            </h4>

            <ul className="space-y-2.5 text-blue-50 font-normal">
              <li>
                <a href="#about" className="hover:underline hover:text-white transition-colors">
                  Sejarah Singkat
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline hover:text-white transition-colors">
                  Struktur Organisasi
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline hover:text-white transition-colors">
                  Visi dan Misi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors">
                  Senat Universitas
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors">
                  Penerimaan Mahasiswa Baru
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Fakultas */}
          <div className="lg:col-span-3 text-sm">
            <h4 className="font-poppins font-bold text-base text-white mb-4">
              Fakultas
            </h4>

            <ul className="space-y-2 text-blue-50 font-normal">
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors">
                  Fakultas Hukum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors">
                  Fakultas Ekonomi dan Bisnis
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors">
                  Fakultas Kedokteran
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors">
                  Fakultas Kedokteran Gigi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors">
                  Fakultas Teknik Sipil dan Perencanaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors">
                  Fakultas Teknologi Industri
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors">
                  Fakultas Teknologi Kebumian dan Energi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors">
                  Fakultas Arsitektur Lanskap dan Teknik Lingkungan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors">
                  Fakultas Seni Rupa dan Desain
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & back to top bar */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-100 font-light">
          <p>
            &copy; {new Date().getFullYear()} Universitas Trisakti & Biro Administrasi Perencanaan & Sistem Informasi (BARENSIF).
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-full border border-white/20 transition-all font-medium"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
