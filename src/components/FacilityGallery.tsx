"use client";

import React, { useState } from "react";
import { facilities } from "@/data/facilities";
import { ChevronLeft, ChevronRight, MonitorCheck, Sparkles, Layers } from "lucide-react";

export const FacilityGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));
  };

  const currentFacility = facilities[currentIndex];

  return (
    <div className="pt-8">
      {/* Subheader Title */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 text-[#004A91] font-bold text-xs font-poppins mb-3">
          <Layers className="w-4 h-4 text-[#006BCB]" />
          <span>Fasilitas & Sarana IT</span>
        </div>

        <h3 className="text-2xl md:text-4xl font-extrabold font-poppins text-slate-900">
          RUANGAN DAN FASILITAS
        </h3>

        <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto mt-2">
          Eksplorasi sarana pendukung dan infrastruktur teknologi informasi BARENSIF Universitas Trisakti.
        </p>
      </div>

      {/* Main Interactive Carousel Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-100 relative overflow-hidden">
        {/* Decorative Background Glow */}
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Image Stack Preview Display */}
          <div className="lg:col-span-7 relative group">
            {/* Card Stacking Effect Background Frames */}
            <div className="absolute top-3 -left-3 right-3 bottom-0 bg-blue-100/70 rounded-3xl -rotate-2 border border-blue-200/50 transition-transform group-hover:-rotate-3" />
            <div className="absolute top-2 left-2 -right-2 bottom-0 bg-blue-900/10 rounded-3xl rotate-1 border border-blue-300/30 transition-transform group-hover:rotate-2" />

            {/* Active Main Card Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-slate-900 z-10 border border-slate-100">
              <img
                src={currentFacility.image}
                alt={currentFacility.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 bg-[#004A91]/90 backdrop-blur-md text-white text-xs font-bold font-poppins px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>
                  Fasilitas {currentIndex + 1} / {facilities.length}
                </span>
              </div>

              {/* Bottom Quick Title on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h5 className="font-poppins font-bold text-lg md:text-xl drop-shadow-md">
                  {currentFacility.title}
                </h5>
              </div>
            </div>

            {/* Floating Navigation Controls on Image */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 z-20 flex justify-between pointer-events-none">
              <button
                onClick={handlePrev}
                className="pointer-events-auto w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#004A91] shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 focus:outline-none"
                aria-label="Previous Facility"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="pointer-events-auto w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#004A91] shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 focus:outline-none"
                aria-label="Next Facility"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Column: Facility Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-bold font-poppins text-[#006BCB] uppercase tracking-wider block mb-1">
                {currentFacility.subtitle}
              </span>

              <h4 className="text-2xl md:text-3xl font-extrabold font-poppins text-slate-900 mb-4 leading-snug">
                {currentFacility.title}
              </h4>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                {currentFacility.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-2.5 mb-8">
                <span className="text-xs font-bold font-poppins text-slate-400 uppercase tracking-wider block mb-2">
                  Fitur & Spesifikasi Utama:
                </span>
                {currentFacility.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700 font-medium">
                    <MonitorCheck className="w-4 h-4 text-[#006BCB] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots & Buttons Bar */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {facilities.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 bg-[#006BCB]"
                        : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Go to facility ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Text Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#006BCB] transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#006BCB] transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
