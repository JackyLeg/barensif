import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="py-6 px-4">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-lg relative min-h-[380px] md:min-h-[460px] flex items-center bg-[#004A91]">
        {/* Background Image on Right Side */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920')",
          }}
        >
          {/* Blue Gradient Mask from Left to Right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#004A91] via-[#004A91]/90 to-transparent" />
        </div>

        {/* Content Container (Left Aligned) */}
        <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-xl text-white">
          {/* Trisakti Logo & Name */}
          <div className="flex flex-col items-start mb-6">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              className="w-20 h-20 md:w-24 md:h-24 text-white drop-shadow-md mb-2"
            >
              <path
                d="M50 8 C48 20 44 32 38 42 C44 42 47 45 50 52 C53 45 56 42 62 42 C56 32 52 20 50 8 Z"
                fill="currentColor"
              />
              <path
                d="M50 52 C42 44 28 35 15 42 C24 54 36 62 46 64 C42 58 44 54 50 52 Z"
                fill="currentColor"
              />
              <path
                d="M50 52 C58 44 72 35 85 42 C76 54 64 62 54 64 C58 58 56 54 50 52 Z"
                fill="currentColor"
              />
              <path
                d="M50 62 C40 65 24 66 18 76 C32 80 44 78 50 72 C56 78 68 80 82 76 C76 66 60 65 50 62 Z"
                fill="currentColor"
              />
              <path
                d="M30 80 C40 84 60 84 70 80 C64 88 36 88 30 80 Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-poppins font-black text-sm md:text-base tracking-[0.25em] text-white uppercase">
              UNIVERSITAS TRISAKTI
            </span>
          </div>

          {/* Main Title BARENSIF */}
          <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl tracking-[0.3em] text-white mb-4 uppercase">
            BARENSIF
          </h1>

          {/* Subtitle */}
          <p className="font-poppins font-semibold text-base sm:text-lg md:text-xl text-white/90 leading-snug">
            Biro Administrasi Perencanaan<br />
            dan Sistem Informasi Universitas<br />
            Trisakti
          </p>
        </div>
      </div>
    </section>
  );
};
