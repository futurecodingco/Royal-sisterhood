import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface KhoisanGeometricBackdropProps {
  targetRef: React.RefObject<HTMLElement | null>;
  variant?: "hero" | "banner";
}

export const KhoisanGeometricBackdrop: React.FC<KhoisanGeometricBackdropProps> = ({
  targetRef,
  variant = "hero",
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Differential speeds for true multi-layer spatial parallax (compositor-only transform)
  const backLayerY = useTransform(scrollYProgress, [0, 1], [0, variant === "hero" ? 90 : 48]);
  const midLayerY = useTransform(scrollYProgress, [0, 1], [0, variant === "hero" ? -55 : -30]);
  const emblemRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* Layer 1 (Deepest): Subtle Griqua Diamond Lattice moving slower than scroll */}
      <motion.div
        style={shouldReduceMotion ? undefined : { y: backLayerY }}
        className="absolute -inset-x-6 -top-16 -bottom-16 will-change-transform opacity-20"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`griqua-lattice-${variant}`}
              width="72"
              height="72"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="36,4 68,36 36,68 4,36"
                fill="none"
                stroke="#C59B27"
                strokeWidth="0.7"
                strokeOpacity="0.45"
              />
              <polygon
                points="36,18 54,36 36,54 18,36"
                fill="none"
                stroke="#F3C969"
                strokeWidth="0.6"
                strokeOpacity="0.35"
              />
              <circle cx="36" cy="36" r="1.8" fill="#C59B27" fillOpacity="0.55" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#griqua-lattice-${variant})`} />
        </svg>
      </motion.div>

      {/* Layer 2 (Midground): Radial Sun-Crest Compass Geometry moving at counter-speed */}
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                y: midLayerY,
                rotate: emblemRotate,
              }
        }
        className={`absolute ${
          variant === "hero"
            ? "-right-24 -top-24 w-[460px] h-[460px] sm:w-[580px] sm:h-[580px]"
            : "-right-16 -top-20 w-[340px] h-[340px]"
        } opacity-25 will-change-transform`}
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="200" cy="200" r="185" stroke="#C59B27" strokeWidth="0.8" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="145" stroke="#F3C969" strokeWidth="0.9" strokeOpacity="0.7" />
          <circle cx="200" cy="200" r="102" stroke="#C59B27" strokeWidth="0.7" strokeDasharray="2 4" />
          {/* 8-point Khoisan-Griqua cardinal diamond star */}
          <polygon
            points="200,24 222,178 376,200 222,222 200,376 178,222 24,200 178,178"
            stroke="#F3C969"
            strokeWidth="0.9"
            fill="#C59B27"
            fillOpacity="0.06"
          />
          <polygon
            points="200,72 254,146 328,200 254,254 200,328 146,254 72,200 146,146"
            stroke="#C59B27"
            strokeWidth="0.8"
          />
        </svg>
      </motion.div>

      {/* Layer 3 (Atmospheric Corner Motif on Bottom-Left) */}
      <div className="absolute bottom-0 left-0 w-72 h-24 opacity-20">
        <svg viewBox="0 0 280 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 95H280" stroke="#C59B27" strokeWidth="1" />
          <path d="M0 80L20 60L40 80L60 60L80 80L100 60L120 80L140 60L160 80" stroke="#F3C969" strokeWidth="1.2" />
          <path d="M0 64L20 44L40 64L60 44L80 64L100 44L120 64" stroke="#C59B27" strokeWidth="0.8" strokeOpacity="0.6" />
        </svg>
      </div>
    </div>
  );
};
