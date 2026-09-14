"use client";

import React, { useState } from "react";
import { facilities } from "@/data/facilities";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const FacilityGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const handleNext = () => {
    if (isSliding) return;
    setDirection("next");
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));
      setIsSliding(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isSliding) return;
    setDirection("prev");
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
      setIsSliding(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isSliding || index === currentIndex) return;
    setDirection(index > currentIndex ? "next" : "prev");
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsSliding(false);
    }, 300);
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

      {/* Stacked 3D Card Carousel */}
      <div className="relative max-w-5xl mx-auto py-8 flex items-center justify-center min-h-[480px] sm:min-h-[520px] overflow-hidden px-4">
        
        {/* 1. Left Stacked Card (Previous - Behind Left) */}
        <div
          onClick={handlePrev}
          className={`hidden sm:block absolute left-2 md:left-12 lg:left-20 w-[300px] md:w-[350px] rounded-2xl overflow-hidden shadow-xl bg-[#004A91] text-white opacity-70 scale-90 -translate-x-6 sm:-translate-x-12 z-10 cursor-pointer transition-all duration-700 ease-in-out hover:opacity-90 hover:scale-95 ${
            isSliding
              ? direction === "next"
                ? "-translate-x-20 opacity-30 scale-85"
                : "translate-x-0 opacity-100 scale-100 z-30"
              : ""
          }`}
        >
          <div className="h-56 md:h-64 bg-slate-800 overflow-hidden">
            <img
              src={prevFacility.image}
              alt={prevFacility.title}
              className="w-full h-full object-cover grayscale-[0.1]"
            />
          </div>
          <div className="p-4 bg-[#004A91]">
            <h4 className="font-bold text-base md:text-lg font-poppins mb-1 truncate text-white">
              {prevFacility.title}
            </h4>
            <p className="text-xs text-blue-100 line-clamp-2 leading-relaxed">
              {prevFacility.description}
            </p>
          </div>
        </div>

        {/* 2. Center Main Focused Card (Front Layer) */}
        <div
          className={`relative z-30 w-full max-w-[340px] sm:max-w-[400px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,103,197,0.3)] ${
            isSliding
              ? direction === "next"
                ? "-translate-x-12 opacity-70 scale-90"
                : "translate-x-12 opacity-70 scale-90"
              : "scale-100 opacity-100"
          }`}
        >
          <div className="h-64 sm:h-72 bg-slate-900 overflow-hidden relative group">
            <img
              src={currentFacility.image}
              alt={currentFacility.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </div>

          <div className="p-6 text-center bg-white">
            <h4 className="text-xl md:text-2xl font-extrabold font-poppins text-[#004A91] mb-3">
              {currentFacility.title}
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed font-semibold">
              {currentFacility.description}
            </p>
          </div>
        </div>

        {/* 3. Right Stacked Card (Next - Behind Right) */}
        <div
          onClick={handleNext}
          className={`hidden sm:block absolute right-2 md:right-12 lg:right-20 w-[300px] md:w-[350px] rounded-2xl overflow-hidden shadow-xl bg-[#004A91] text-white opacity-70 scale-90 translate-x-6 sm:translate-x-12 z-10 cursor-pointer transition-all duration-700 ease-in-out hover:opacity-90 hover:scale-95 ${
            isSliding
              ? direction === "next"
                ? "translate-x-0 opacity-100 scale-100 z-30"
                : "translate-x-20 opacity-30 scale-85"
              : ""
          }`}
        >
          <div className="h-56 md:h-64 bg-slate-800 overflow-hidden">
            <img
              src={nextFacility.image}
              alt={nextFacility.title}
              className="w-full h-full object-cover grayscale-[0.1]"
            />
          </div>
          <div className="p-4 bg-[#004A91]">
            <h4 className="font-bold text-base md:text-lg font-poppins mb-1 truncate text-white">
              {nextFacility.title}
            </h4>
            <p className="text-xs text-blue-100 line-clamp-2 leading-relaxed">
              {nextFacility.description}
            </p>
          </div>
        </div>

      </div>

      {/* Navigation Buttons (Chevrons & Dots) */}
      <div className="flex items-center justify-center gap-5 mt-6">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-[#0067C5] hover:bg-[#004A91] text-white shadow-md transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Previous Facility"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2">
          {facilities.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
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
          className="p-3 rounded-full bg-[#0067C5] hover:bg-[#004A91] text-white shadow-md transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Next Facility"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
