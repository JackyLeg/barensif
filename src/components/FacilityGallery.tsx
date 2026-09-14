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

      {/* Desktop 3-Card Carousel Display */}
      <div className="hidden md:flex relative max-w-6xl mx-auto py-8 items-center justify-center min-h-[480px] overflow-hidden">
        <div className="grid grid-cols-12 gap-6 items-center w-full max-w-5xl px-4">
          
          {/* 1. Left Card (Previous - 3 Cols) */}
          <div
            onClick={handlePrev}
            className={`col-span-3 cursor-pointer rounded-2xl overflow-hidden shadow-md bg-[#004A91] text-white opacity-50 scale-95 transition-all duration-700 ease-in-out hover:opacity-75 hover:scale-98 ${
              isSliding
                ? direction === "next"
                  ? "-translate-x-12 opacity-20"
                  : "translate-x-12 opacity-80 scale-100"
                : "translate-x-0"
            }`}
          >
            <div className="h-48 bg-slate-800 overflow-hidden">
              <img
                src={prevFacility.image}
                alt={prevFacility.title}
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
            <div className="p-4 bg-[#004A91]">
              <h4 className="font-bold text-base font-poppins mb-1 truncate text-white">
                {prevFacility.title}
              </h4>
              <p className="text-xs text-blue-100/80 line-clamp-2 leading-relaxed">
                {prevFacility.description}
              </p>
            </div>
          </div>

          {/* 2. Center Focused Card (Current Active - 6 Cols) */}
          <div
            className={`col-span-6 z-20 rounded-2xl overflow-hidden shadow-2xl bg-white border-2 border-[#0067C5]/30 transition-all duration-700 ease-in-out transform hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,103,197,0.25)] ${
              isSliding
                ? direction === "next"
                  ? "-translate-x-8 opacity-60 scale-95"
                  : "translate-x-8 opacity-60 scale-95"
                : "translate-x-0 opacity-100 scale-105"
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
              <h4 className="text-xl md:text-2xl font-extrabold font-poppins text-[#004A91] mb-2.5">
                {currentFacility.title}
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                {currentFacility.description}
              </p>
            </div>
          </div>

          {/* 3. Right Card (Next - 3 Cols) */}
          <div
            onClick={handleNext}
            className={`col-span-3 cursor-pointer rounded-2xl overflow-hidden shadow-md bg-[#004A91] text-white opacity-50 scale-95 transition-all duration-700 ease-in-out hover:opacity-75 hover:scale-98 ${
              isSliding
                ? direction === "next"
                  ? "-translate-x-12 opacity-80 scale-100"
                  : "translate-x-12 opacity-20"
                : "translate-x-0"
            }`}
          >
            <div className="h-48 bg-slate-800 overflow-hidden">
              <img
                src={nextFacility.image}
                alt={nextFacility.title}
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
            <div className="p-4 bg-[#004A91]">
              <h4 className="font-bold text-base font-poppins mb-1 truncate text-white">
                {nextFacility.title}
              </h4>
              <p className="text-xs text-blue-100/80 line-clamp-2 leading-relaxed">
                {nextFacility.description}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Single Card Display */}
      <div className="block md:hidden max-w-sm mx-auto my-4">
        <div
          className={`rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200 transition-all duration-500 ${
            isSliding ? "opacity-40 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <div className="h-60 bg-slate-900">
            <img
              src={currentFacility.image}
              alt={currentFacility.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-5 text-center bg-white">
            <h4 className="text-lg font-bold font-poppins text-[#004A91] mb-2">
              {currentFacility.title}
            </h4>
            <p className="text-slate-700 text-xs leading-relaxed font-medium">
              {currentFacility.description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Controls (Chevron Buttons & Dot Indicators) */}
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
