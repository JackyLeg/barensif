import React from "react";
import { ArrowUp, Globe, Shield, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#003B75] text-white pt-16 pb-8 border-t border-blue-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-[#004A91] flex items-center justify-center font-bold text-xs font-poppins shadow-md">
                USAKTI
              </div>
              <div>
                <h4 className="font-poppins font-black text-xl tracking-wider text-white">
                  TRISAKTI
                </h4>
                <p className="text-xs text-blue-200 tracking-widest uppercase font-medium">
                  BARENSIF
                </p>
              </div>
            </div>

            <p className="text-xs md:text-sm text-blue-100/80 leading-relaxed max-w-md font-light">
              Biro Administrasi Perencanaan dan Sistem Informasi (BARENSIF) Universitas Trisakti bertanggung jawab mengelola perencanaan strategis dan ekosistem infrastruktur TI terpadu kampus.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-blue-200">
              <Globe className="w-4 h-4 text-blue-300" />
              <a
                href="https://trisakti.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                www.trisakti.ac.id
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-poppins font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Navigasi Halaman
            </h5>
            <ul className="space-y-2.5 text-xs text-blue-100/90 font-medium">
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>&rsaquo;</span> Tentang Barensif
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>&rsaquo;</span> Visi & Misi
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>&rsaquo;</span> Data Pegawai
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>&rsaquo;</span> Ruangan & Fasilitas
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>&rsaquo;</span> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Info Column */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-poppins font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Universitas Trisakti
            </h5>
            <p className="text-xs text-blue-100/80 leading-relaxed font-light">
              Kampus A: Jl. Kyai Tapa No.1, Grogol, Jakarta Barat 11440. <br />
              Dikelola oleh Biro Administrasi Perencanaan & Sistem Informasi untuk pelayanan akademis yang transparan dan akuntabel.
            </p>

            <div className="pt-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/15 transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Kembali ke Atas</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-blue-200/80">
          <p>
            &copy; {new Date().getFullYear()} BARENSIF - Universitas Trisakti. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-blue-300">
            <span>Sistem Informasi Terpadu Universitas Trisakti</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
