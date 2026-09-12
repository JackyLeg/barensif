import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = "",
  light = false,
}) => {
  return (
    <div className={`text-center my-8 md:my-12 ${className}`}>
      <div className="flex items-center justify-center gap-4 max-w-xl mx-auto px-4">
        {/* Left Decorative Line */}
        <div
          className={`h-[2px] flex-1 rounded-full ${
            light
              ? "bg-gradient-to-r from-transparent via-white/50 to-white"
              : "bg-gradient-to-r from-transparent via-[#006BCB]/40 to-[#006BCB]"
          }`}
        />

        {/* Title Badge */}
        <h2
          className={`text-xl md:text-3xl font-extrabold tracking-[0.2em] uppercase font-poppins px-3 ${
            light ? "text-white" : "text-[#004A91]"
          }`}
        >
          {title}
        </h2>

        {/* Right Decorative Line */}
        <div
          className={`h-[2px] flex-1 rounded-full ${
            light
              ? "bg-gradient-to-l from-transparent via-white/50 to-white"
              : "bg-gradient-to-l from-transparent via-[#006BCB]/40 to-[#006BCB]"
          }`}
        />
      </div>

      {/* Underline accent dot / short bar */}
      <div className="flex justify-center mt-2">
        <div
          className={`w-12 h-1 rounded-full ${
            light ? "bg-white/80" : "bg-[#006BCB]"
          }`}
        />
      </div>

      {subtitle && (
        <p
          className={`mt-3 text-sm md:text-base max-w-2xl mx-auto px-4 font-normal ${
            light ? "text-blue-100" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
