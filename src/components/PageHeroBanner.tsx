import React, { useRef } from "react";
import { KhoisanGeometricBackdrop } from "./KhoisanGeometricBackdrop";

interface PageHeroBannerProps {
  kickerIcon: React.ReactNode;
  kickerText: string;
  title: string;
  subtitle: string;
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  kickerIcon,
  kickerText,
  title,
  subtitle,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#340B18] via-[#4A1525] to-[#2D0B16] text-white py-16 px-4 sm:px-6 border-b border-[#C59B27]/30 relative overflow-hidden"
    >
      <KhoisanGeometricBackdrop targetRef={sectionRef} variant="banner" />
      <div className="relative max-w-7xl mx-auto space-y-4">
        <div className="flex items-center gap-2 text-[#F3C969] text-xs font-semibold tracking-wide">
          {kickerIcon}
          <span>{kickerText}</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-stone-100 max-w-3xl leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
