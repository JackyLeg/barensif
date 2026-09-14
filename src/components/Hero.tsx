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
            <img
              src="/Universitas-Trisakti-Logo.png"
              alt="Universitas Trisakti Logo"
              className="w-20 h-auto md:w-24 object-contain mb-3 drop-shadow-md brightness-0 invert"
            />
            {/* <span className="font-poppins font-black text-sm md:text-base tracking-[0.25em] text-white uppercase">
              UNIVERSITAS TRISAKTI
            </span> */}
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
