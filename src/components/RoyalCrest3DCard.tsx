import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { RotateCcw } from "lucide-react";
import { HeritageImage } from "./HeritageImage";
import { playTap, playChime } from "../utils/soundEngine";

type PlaqueFinish = "plum" | "gold" | "ivory";

const FINISH_STYLES: Record<
  PlaqueFinish,
  {
    label: string;
    container: string;
    border: string;
    quoteText: string;
    divider: string;
    swatch: string;
  }
> = {
  plum: {
    label: "Imperial Plum",
    container: "bg-[#20050E]",
    border: "border-[#C59B27]/55",
    quoteText: "text-stone-200",
    divider: "border-[#C59B27]/25",
    swatch: "bg-[#4A1525] border-[#F3C969]",
  },
  gold: {
    label: "Heritage Gold",
    container: "bg-[#382608]",
    border: "border-[#F3C969]/75",
    quoteText: "text-amber-50",
    divider: "border-[#F3C969]/35",
    swatch: "bg-[#C59B27] border-amber-100",
  },
  ivory: {
    label: "Archival Ivory",
    container: "bg-[#F3EFE7] preserve-light",
    border: "border-[#C59B27]/70",
    quoteText: "text-stone-700 preserve-ink",
    divider: "border-[#C59B27]/40",
    swatch: "bg-[#FAF8F5] border-stone-400",
  },
};

export const RoyalCrest3DCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [finish, setFinish] = useState<PlaqueFinish>("plum");
  const [manualAngle, setManualAngle] = useState<number>(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 220,
    damping: 22,
  });

  // Counter-moving inner badge for layered 3D foreground depth
  const badgeX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 220,
    damping: 22,
  });
  const badgeY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-4, 4]), {
    stiffness: 220,
    damping: 22,
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || e.pointerType === "touch" || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    mouseX.set(manualAngle / 28);
    mouseY.set(0);
  };

  const handleAnglePreset = (angle: number) => {
    playTap();
    setManualAngle(angle);
    mouseX.set(angle / 28);
    mouseY.set(0);
  };

  const handleSelectFinish = (next: PlaqueFinish) => {
    playChime();
    setFinish(next);
  };

  const activeStyle = FINISH_STYLES[finish];

  return (
    <div style={{ perspective: 1000 }} className="w-full max-w-md">
      <motion.div
        ref={cardRef}
        onPointerEnter={() => setIsHovered(true)}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={
          shouldReduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        className={`relative w-full p-3.5 rounded-xl border shadow-2xl will-change-transform transition-colors duration-300 ${activeStyle.container} ${activeStyle.border}`}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -inset-px rounded-xl border transition-opacity duration-200 ${
            isHovered ? "border-[#F3C969]/70 opacity-100" : "border-transparent opacity-0"
          }`}
        />

        <div className="preserve-light relative aspect-square rounded-lg overflow-hidden bg-white flex items-center justify-center p-4 border border-[#C59B27]/30">
          <HeritageImage
            src="/drive_assets/royal_sisterhood_official_crest.jpg"
            alt="Official Royal Sisterhood AK 1 to 4 Emblem"
            fallbackLabel="Royal Sisterhood AK 1–4"
            loading="eager"
            className={`w-full h-full object-contain transition-transform duration-300 ease-tactile ${
              isHovered && !shouldReduceMotion ? "scale-[1.03]" : "scale-100"
            }`}
          />

          <motion.div
            style={shouldReduceMotion ? undefined : { x: badgeX, y: badgeY }}
            className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3.5 text-center"
          >
            <p className="font-cinzel text-xs text-[#F3C969] tracking-widest uppercase font-bold">
              Official Royal Sisterhood Seal
            </p>
            <p className="text-[11px] text-white/90 mt-0.5">
              AK 1 to 4 Bloodline · Koninglike Susterskap
            </p>
          </motion.div>
        </div>

        {/* Live 3D Inspector Bar: Plaque Finish + Tactile Rotation Presets */}
        <div className={`mt-3 pt-3 border-t ${activeStyle.divider} px-1.5 space-y-2.5`}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5" role="group" aria-label="Select crest frame finish">
              {(Object.keys(FINISH_STYLES) as PlaqueFinish[]).map((key) => {
                const isSelected = finish === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleSelectFinish(key)}
                    title={`Preview ${FINISH_STYLES[key].label} frame`}
                    aria-label={`Select ${FINISH_STYLES[key].label} finish`}
                    aria-pressed={isSelected}
                    className={`w-5 h-5 rounded-full border-2 transition-transform cursor-pointer ${
                      FINISH_STYLES[key].swatch
                    } ${isSelected ? "scale-110 ring-2 ring-[#F3C969]/70" : "opacity-75 hover:opacity-100"}`}
                  />
                );
              })}
              <span
                className={`text-[10px] font-medium ml-1 ${
                  finish === "ivory" ? "text-stone-700 preserve-ink" : "text-stone-300"
                }`}
              >
                {activeStyle.label}
              </span>
            </div>

            <div className="flex items-center gap-1" role="group" aria-label="Inspect crest 3D angle">
              {[-12, 0, 12].map((deg) => (
                <button
                  key={deg}
                  type="button"
                  onClick={() => handleAnglePreset(deg)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono tabular-nums cursor-pointer transition-colors ${
                    manualAngle === deg
                      ? "bg-[#C59B27] text-stone-950 font-bold"
                      : finish === "ivory"
                      ? "bg-stone-200 text-stone-700 hover:bg-stone-300"
                      : "bg-white/10 text-stone-200 hover:bg-white/20"
                  }`}
                >
                  {deg === 0 ? (
                    <span className="inline-flex items-center gap-0.5">
                      <RotateCcw className="w-2.5 h-2.5" />0°
                    </span>
                  ) : deg > 0 ? (
                    `+${deg}°`
                  ) : (
                    `${deg}°`
                  )}
                </button>
              ))}
            </div>
          </div>

          <p className={`italic text-xs font-playfair leading-relaxed text-center ${activeStyle.quoteText}`}>
            “Uniting sovereign heritage with practical, grassroots transformation for every South African family.”
          </p>
        </div>
      </motion.div>
    </div>
  );
};
