import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight, Crown } from "lucide-react";
import { HeritageImage } from "./HeritageImage";
import { playChime, playTap } from "../utils/soundEngine";

interface RoyalPreloaderProps {
  onComplete?: () => void;
}

type PreloaderPhase = "loading" | "dissolving" | "veil-exit" | "done";

const LUXURIOUS_EASE = [0.22, 1, 0.36, 1] as const;

const HERITAGE_CHRONICLES = [
  "Honouring the Unbroken Lineage of Kaptein Adam Kok I to IV · Est. 1710",
  "Convening Griqua Royal Houses & Protecting Women Across All Nine Provinces",
  "Mid Ennerdale Executive Secretariat · Sovereign Grassroots Stewardship",
];

/**
 * 10-Second Royal Entrance Load-Up Sequence for Royal Sisterhood AK 1 to 4 Bloodline
 * - 0.0s – 8.2s: Rotating Khoisan-Griqua compass geometry, breathing crest halo,
 *   3-chapter heritage chronicle rotation, and steady golden progress rail
 * - 8.2s – 10.0s: Staggered dissolution (Controls -> Typography -> Seal -> Rings -> Velvet Veil)
 * - Instant "Enter Portal" skip control + full prefers-reduced-motion compliance
 */
export const RoyalPreloader: React.FC<RoyalPreloaderProps> = ({ onComplete }) => {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<PreloaderPhase>(() =>
    shouldReduceMotion ? "done" : "loading"
  );
  const [progress, setProgress] = useState<number>(0);
  const timersRef = useRef<number[]>([]);
  const rafRef = useRef<number>(0);

  const clearScheduled = () => {
    cancelAnimationFrame(rafRef.current);
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  const triggerSlowDissolve = (fromSkip = false) => {
    clearScheduled();
    setProgress(100);
    setPhase("dissolving");

    const veilDelay = fromSkip ? 220 : 520;
    const doneDelay = fromSkip ? 950 : 1650;

    const t1 = window.setTimeout(() => {
      setPhase("veil-exit");
    }, veilDelay);

    const t2 = window.setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, doneDelay);

    timersRef.current.push(t1, t2);
  };

  useEffect(() => {
    if (shouldReduceMotion) {
      setPhase("done");
      onComplete?.();
      return;
    }

    // Warm up critical above-the-fold images immediately during entrance
    const criticalAssets = [
      "/drive_assets/royal_sisterhood_official_crest.jpg",
      "/drive_assets/king_adam_kok_v_and_princesses.jpg",
      "/drive_assets/three_princesses_full_standing.jpg",
    ];
    criticalAssets.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const start = performance.now();
    // 8.2s active load + ~1.8s staggered fade & velvet veil reveal = ~10.0s total
    const loadDuration = 8200;

    const tick = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(1, elapsed / loadDuration);
      // Balanced quadratic deceleration so percentage advances smoothly across all 8.2s
      const eased = 1 - Math.pow(1 - ratio, 2);
      setProgress(Math.round(eased * 100));

      if (ratio < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    const dissolveTimer = window.setTimeout(() => {
      playChime();
      triggerSlowDissolve(false);
    }, loadDuration + 180);

    timersRef.current.push(dissolveTimer);

    return () => {
      clearScheduled();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReduceMotion]);

  const handleSkip = () => {
    if (phase !== "loading") return;
    playTap();
    triggerSlowDissolve(true);
  };

  const chronicleIndex = progress < 34 ? 0 : progress < 68 ? 1 : 2;
  const isDissolving = phase === "dissolving" || phase === "veil-exit";
  const isMounted = phase !== "done";

  return (
    <AnimatePresence>
      {isMounted && (
        <motion.div
          key="royal-preloader-curtain"
          role="dialog"
          aria-modal={phase === "loading"}
          aria-label="Loading Royal Sisterhood AK 1 to 4 Bloodline Portal"
          initial={{ opacity: 1 }}
          animate={{
            opacity: phase === "veil-exit" ? 0 : 1,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.15,
            ease: LUXURIOUS_EASE,
          }}
          className={`fixed inset-0 z-[49] flex flex-col items-center justify-center px-6 overflow-hidden select-none ${
            phase === "loading" ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Base Velvet Atmosphere Canopy */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 1 }}
            animate={{
              opacity: phase === "veil-exit" ? 0 : isDissolving ? 0.86 : 1,
            }}
            transition={{
              duration: phase === "veil-exit" ? 1.15 : 0.7,
              ease: LUXURIOUS_EASE,
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,#461224_0%,#250712_54%,#0F0206_100%)]"
          />

          {/* Soft Breathing Golden Ambient Bloom */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0.25, scale: 0.88 }}
            animate={
              isDissolving
                ? { opacity: 0, scale: 1.45 }
                : { opacity: [0.3, 0.55, 0.35, 0.55], scale: [0.95, 1.05, 0.98, 1.04] }
            }
            transition={{
              duration: isDissolving ? 1.25 : 8.5,
              ease: isDissolving ? LUXURIOUS_EASE : "easeInOut",
            }}
            className="absolute w-[440px] h-[440px] sm:w-[600px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(243,201,105,0.24)_0%,transparent_68%)] blur-2xl pointer-events-none"
          />

          {/* Continuous Counter-Rotating Khoisan-Griqua Compass Rings */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <motion.svg
              viewBox="0 0 500 500"
              initial={{ rotate: 0, scale: 0.9, opacity: 0 }}
              animate={
                isDissolving
                  ? { rotate: 112, scale: 1.18, opacity: 0 }
                  : { rotate: 88, scale: 1, opacity: 0.28 }
              }
              transition={{
                duration: isDissolving ? 1.0 : 9.5,
                ease: isDissolving ? LUXURIOUS_EASE : "linear",
              }}
              className="w-[460px] h-[460px] sm:w-[640px] sm:h-[640px] will-change-transform"
              fill="none"
            >
              <circle
                cx="250"
                cy="250"
                r="236"
                stroke="#C59B27"
                strokeWidth="0.9"
                strokeDasharray="3 8"
              />
              <circle
                cx="250"
                cy="250"
                r="196"
                stroke="#F3C969"
                strokeWidth="0.8"
                strokeOpacity="0.65"
              />
              <polygon
                points="250,24 274,226 476,250 274,274 250,476 226,274 24,250 226,226"
                stroke="#F3C969"
                strokeWidth="0.85"
                strokeOpacity="0.5"
              />
            </motion.svg>

            <motion.svg
              viewBox="0 0 400 400"
              initial={{ rotate: 0, scale: 0.85, opacity: 0 }}
              animate={
                isDissolving
                  ? { rotate: -92, scale: 1.15, opacity: 0 }
                  : { rotate: -70, scale: 1, opacity: 0.22 }
              }
              transition={{
                duration: isDissolving ? 0.95 : 9.5,
                ease: isDissolving ? LUXURIOUS_EASE : "linear",
              }}
              className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] will-change-transform"
              fill="none"
            >
              <circle
                cx="200"
                cy="200"
                r="168"
                stroke="#C59B27"
                strokeWidth="1"
                strokeDasharray="1 5"
              />
              <polygon
                points="200,36 258,142 364,200 258,258 200,364 142,258 36,200 142,142"
                stroke="#C59B27"
                strokeWidth="0.9"
              />
            </motion.svg>
          </div>

          {/* Centerpiece Royal Medallion & Staggered Fade Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-xl space-y-6 text-white">
            {/* Seal Medallion */}
            <motion.div
              initial={{ scale: 0.74, opacity: 0 }}
              animate={
                isDissolving
                  ? { scale: 1.07, opacity: 0, y: -8 }
                  : { scale: 1, opacity: 1, y: 0 }
              }
              transition={{
                duration: isDissolving ? 0.85 : 0.95,
                delay: isDissolving ? 0.18 : 0,
                ease: LUXURIOUS_EASE,
              }}
              className="relative will-change-transform"
            >
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0.2, scale: 0.92 }}
                animate={
                  isDissolving
                    ? { opacity: 0, scale: 1.25 }
                    : { opacity: [0.3, 0.7, 0.35, 0.68], scale: [0.96, 1.06, 0.98, 1.05] }
                }
                transition={{
                  duration: isDissolving ? 0.75 : 8.2,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(243,201,105,0.42)_0%,transparent_70%)] blur-md pointer-events-none"
              />

              <div className="preserve-light relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white p-3 border-2 border-[#F3C969] shadow-[0_20px_50px_rgba(0,0,0,0.65)] ring-4 ring-[#C59B27]/25 overflow-hidden flex items-center justify-center">
                <HeritageImage
                  src="/drive_assets/royal_sisterhood_official_crest.jpg"
                  alt="Official Royal Sisterhood AK 1 to 4 Crest"
                  fallbackLabel="AK 1–4"
                  loading="eager"
                  className="w-full h-full object-contain"
                />

                {/* Dual Metallic Sheen Sweeps Across 8s Hold */}
                <motion.div
                  aria-hidden="true"
                  initial={{ x: "-130%" }}
                  animate={{ x: ["-130%", "145%", "-130%", "145%"] }}
                  transition={{
                    duration: 7.5,
                    times: [0, 0.22, 0.55, 0.78],
                    ease: LUXURIOUS_EASE,
                  }}
                  className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/55 to-transparent skew-x-[-20deg] pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Cormorant Garamond Typography + Rotating Heritage Chronicles */}
            <motion.div
              animate={
                isDissolving
                  ? { opacity: 0, y: -12 }
                  : { opacity: 1, y: 0 }
              }
              transition={{
                duration: 0.68,
                delay: isDissolving ? 0.1 : 0,
                ease: LUXURIOUS_EASE,
              }}
              className="space-y-3 will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: LUXURIOUS_EASE }}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase text-[#F3C969]"
              >
                <Crown className="w-3.5 h-3.5" />
                <span>House of His Majesty King Adam Kok V</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.32, ease: LUXURIOUS_EASE }}
                className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white"
              >
                Royal Sisterhood
                <span className="block font-playfair italic font-semibold text-xl sm:text-2xl text-[#F3C969] mt-1">
                  AK 1 to 4 Bloodline · Koninglike Susterskap
                </span>
              </motion.h1>

              <div className="min-h-[2.25rem] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={chronicleIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.45, ease: LUXURIOUS_EASE }}
                    className="text-xs sm:text-sm text-stone-200 tracking-wide max-w-md"
                  >
                    {HERITAGE_CHRONICLES[chronicleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Golden Filigree Progress Rail & Enter Action */}
            <motion.div
              animate={
                isDissolving
                  ? { opacity: 0, y: 10 }
                  : { opacity: 1, y: 0 }
              }
              transition={{
                duration: 0.48,
                ease: LUXURIOUS_EASE,
              }}
              className="w-full max-w-xs flex flex-col items-center space-y-5 pt-1 will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4 }}
                className="w-full space-y-2"
              >
                <div className="h-[3px] w-full bg-white/15 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-[#8B1E3F] via-[#C59B27] to-[#FFF2B8] transition-[width] duration-100 ease-out rounded-full"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-stone-300 font-mono tabular-nums">
                  <span>Sovereign Heritage · Mid Ennerdale</span>
                  <span className="text-[#F3C969] font-semibold">{progress}%</span>
                </div>
              </motion.div>

              <motion.button
                type="button"
                onClick={handleSkip}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#F3C969] hover:text-white border border-[#C59B27]/40 hover:border-[#F3C969] rounded-md bg-white/5 hover:bg-white/10 transition-colors cursor-pointer btn-tactile"
              >
                <span>Enter Portal</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
