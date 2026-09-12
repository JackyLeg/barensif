import React from "react";
import { ArrowDown, Server, Cpu, Database, ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920')",
        }}
      >
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003B75]/90 via-[#004A91]/85 to-[#006BCB]/90 backdrop-blur-[2px]" />
      </div>

      {/* Decorative Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
        {/* Glassmorphic Badge Container */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8 shadow-xl">
          <div className="w-8 h-8 rounded-full bg-white text-[#004A91] flex items-center justify-center font-bold text-xs font-poppins shadow-md">
            USAKTI
          </div>
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase font-poppins text-blue-100">
            Universitas Trisakti Jakarta
          </span>
        </div>

        {/* Main Title - BARENSIF */}
        <h1 className="font-poppins font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-white drop-shadow-lg mb-4">
          BARENSIF
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-poppins text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6">
          Biro Administrasi Perencanaan dan Sistem Informasi
        </h2>

        <p className="text-sm md:text-base text-blue-200/90 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Mewujudkan tata kelola perencanaan strategis dan infrastruktur teknologi informasi berstandar unggul untuk mendukung transformasi digital Universitas Trisakti.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#about"
            className="w-full sm:w-auto bg-white text-[#004A91] hover:bg-blue-50 font-poppins font-bold text-sm px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <span>Tentang Barensif</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#gallery"
            className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm font-poppins font-semibold text-sm px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
          >
            <span>Struktur & Fasilitas</span>
          </a>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 md:p-6 shadow-2xl">
          <div className="flex flex-col items-center justify-center p-2 border-r border-white/10">
            <div className="flex items-center gap-2 text-blue-200 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-2xl md:text-3xl font-bold font-poppins text-white">9+</span>
            </div>
            <span className="text-xs text-blue-100 font-medium">Tim Ahli IT</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 border-r border-white/10">
            <div className="flex items-center gap-2 text-blue-200 mb-1">
              <Server className="w-4 h-4" />
              <span className="text-2xl md:text-3xl font-bold font-poppins text-white">99.9%</span>
            </div>
            <span className="text-xs text-blue-100 font-medium">Uptime Server</span>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center p-2">
            <div className="flex items-center gap-2 text-blue-200 mb-1">
              <Database className="w-4 h-4" />
              <span className="text-2xl md:text-3xl font-bold font-poppins text-white">100%</span>
            </div>
            <span className="text-xs text-blue-100 font-medium">Layanan Digital</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 animate-bounce flex flex-col items-center gap-1 cursor-pointer">
        <a href="#about" aria-label="Scroll to About">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
