"use client";

import React, { useState } from "react";
import { facilities } from "@/data/facilities";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const FacilityGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));
  };

  const getFacility = (offset: number) => {
    const index = (currentIndex + offset + facilities.length) % facilities.length;
    return facilities[index];
  };

  const prevFacility = getFacility(-1);
  const currentFacility = facilities[currentIndex];
  const nextFacility = getFacility(1);

  return (
    <div className="py-8">
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-extrabold font-poppins text-slate-900 mb-8">
        Ruangan dan Fasilitas
      </h3>

      {/* Card Stacking Carousel */}
      <div className="relative max-w-5xl mx-auto py-6 flex items-center justify-center min-h-[460px] overflow-hidden">
        {/* Left Background Card (Previous) */}
        <div
          onClick={handlePrev}
          className="hidden sm:block absolute left-0 md:left-4 w-[280px] md:w-[320px] rounded-2xl overflow-hidden shadow-md bg-[#004A91] text-white opacity-60 scale-90 -translate-x-8 z-0 cursor-pointer transition-all duration-500 hover:opacity-80"
        >
          <div className="h-56 bg-slate-800">
            <img
              src={prevFacility.image}
              alt={prevFacility.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-[#004A91]">
            <h4 className="font-bold text-lg font-poppins mb-1 truncate">
              {prevFacility.title}
            </h4>
            <p className="text-xs text-blue-100 line-clamp-3 leading-relaxed">
              {prevFacility.description}
            </p>
          </div>
        </div>

        {/* Center Main Focused Card */}
        <div className="relative z-20 w-full max-w-[340px] sm:max-w-[380px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 transition-all duration-500 hover:shadow-2xl">
          <div className="h-64 sm:h-72 bg-slate-900">
            <img
              src={currentFacility.image}
              alt={currentFacility.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 text-center bg-white">
            <h4 className="text-xl md:text-2xl font-bold font-poppins text-[#004A91] mb-3">
              {currentFacility.title}
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">
              {currentFacility.description}
            </p>
          </div>
        </div>

        {/* Right Background Card (Next) */}
        <div
          onClick={handleNext}
          className="hidden sm:block absolute right-0 md:right-4 w-[280px] md:w-[320px] rounded-2xl overflow-hidden shadow-md bg-[#004A91] text-white opacity-60 scale-90 translate-x-8 z-0 cursor-pointer transition-all duration-500 hover:opacity-80"
        >
          <div className="h-56 bg-slate-800">
            <img
              src={nextFacility.image}
              alt={nextFacility.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-[#004A91]">
            <h4 className="font-bold text-lg font-poppins mb-1 truncate">
              {nextFacility.title}
            </h4>
            <p className="text-xs text-blue-100 line-clamp-3 leading-relaxed">
              {nextFacility.description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-[#0067C5] hover:bg-[#004A91] text-white shadow-md transition-all hover:scale-110 active:scale-95"
          aria-label="Previous Facility"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2">
          {facilities.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-[#0067C5]"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-[#0067C5] hover:bg-[#004A91] text-white shadow-md transition-all hover:scale-110 active:scale-95"
          aria-label="Next Facility"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
