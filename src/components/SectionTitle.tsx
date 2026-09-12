import React from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  className = "",
}) => {
  return (
    <div className={`my-12 md:my-16 text-center ${className}`}>
      <div className="flex items-center justify-center gap-6 max-w-6xl mx-auto px-4">
        {/* Left Solid Blue Line */}
        <div className="h-[2px] flex-1 bg-[#0067C5]" />

        {/* Center Title */}
        <div className="relative pb-2">
          <h2 className="text-3xl md:text-5xl font-black font-poppins text-[#0067C5] tracking-[0.25em] uppercase">
            {title}
          </h2>

          {/* Underline below title */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0067C5] rounded-full mx-auto w-3/4" />
        </div>

        {/* Right Solid Blue Line */}
        <div className="h-[2px] flex-1 bg-[#0067C5]" />
      </div>
    </div>
  );
};
