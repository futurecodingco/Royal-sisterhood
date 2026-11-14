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

/**
 * Bespoke Entrance Load-Up Experience for Royal Sisterhood AK 1 to 4 Bloodline
 * Features a slow, multi-stage fading sequence that gracefully reveals the live Home page:
 * 1. Sovereign Emergence: Crest medallion, rotating Khoisan-Griqua compass rings & progress reach 100%
 * 2. Staggered Element Dissolution: Progress bar -> Typography -> Seal Medallion -> Compass Rings
 * 3. Silky Backdrop Veil Fade: Velvet canopy & warm central glow slowly feather away over 1.25s
 *    with pointer-events released early so the emerging Home page is immediately interactive
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

    const veilDelay = fromSkip ? 260 : 620;
    const doneDelay = fromSkip ? 1050 : 1850;

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
    const loadDuration = 1950;

    const tick = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(1, elapsed / loadDuration);
      // Ultra-smooth quintic deceleration
      const eased = 1 - Math.pow(1 - ratio, 4);
      setProgress(Math.round(eased * 100));

      if (ratio < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    const dissolveTimer = window.setTimeout(() => {
      playChime();
      triggerSlowDissolve(false);
    }, loadDuration + 260);

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
            duration: 1.25,
            ease: LUXURIOUS_EASE,
          }}
          className={`fixed inset-0 z-[49] flex flex-col items-center justify-center px-6 overflow-hidden select-none ${
            phase === "loading" ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Base Velvet Atmosphere Canopy (fades slowly with soft blur release) */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 1 }}
            animate={{
              opacity: phase === "veil-exit" ? 0 : isDissolving ? 0.86 : 1,
            }}
            transition={{
              duration: phase === "veil-exit" ? 1.25 : 0.75,
              ease: LUXURIOUS_EASE,
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,#461224_0%,#250712_54%,#0F0206_100%)]"
          />

          {/* Soft Radiant Gold Bloom that lingers gently before dissipating */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0.25, scale: 0.88 }}
            animate={
              isDissolving
                ? { opacity: 0, scale: 1.45 }
                : { opacity: 0.45, scale: 1.02 }
            }
            transition={{
              duration: isDissolving ? 1.35 : 1.8,
              ease: LUXURIOUS_EASE,
            }}
            className="absolute w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] rounded-full bg-[radial-gradient(circle,rgba(243,201,105,0.22)_0%,transparent_68%)] blur-2xl pointer-events-none"
          />

          {/* Stage 1 & 2: Counter-Rotating Khoisan-Griqua Compass Rings */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <motion.svg
              viewBox="0 0 500 500"
              initial={{ rotate: 0, scale: 0.9, opacity: 0 }}
              animate={
                isDissolving
                  ? { rotate: 46, scale: 1.18, opacity: 0 }
                  : { rotate: 28, scale: 1, opacity: 0.28 }
              }
              transition={{
                duration: isDissolving ? 1.05 : 2.5,
                ease: LUXURIOUS_EASE,
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
                  ? { rotate: -38, scale: 1.15, opacity: 0 }
                  : { rotate: -22, scale: 1, opacity: 0.22 }
              }
              transition={{
                duration: isDissolving ? 0.95 : 2.5,
                ease: LUXURIOUS_EASE,
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
            {/* Step 3 of Dissolution: Crest Medallion dissolves last among foreground items */}
            <motion.div
              initial={{ scale: 0.74, opacity: 0 }}
              animate={
                isDissolving
                  ? { scale: 1.07, opacity: 0, y: -8 }
                  : { scale: 1, opacity: 1, y: 0 }
              }
              transition={{
                duration: isDissolving ? 0.88 : 0.85,
                delay: isDissolving ? 0.18 : 0,
                ease: LUXURIOUS_EASE,
              }}
              className="relative will-change-transform"
            >
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0.2, scale: 0.9 }}
                animate={
                  isDissolving
                    ? { opacity: 0, scale: 1.25 }
                    : { opacity: [0.25, 0.65, 0.38], scale: [0.95, 1.06, 1] }
                }
                transition={{ duration: isDissolving ? 0.8 : 2.2, ease: "easeInOut" }}
                className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(243,201,105,0.4)_0%,transparent_70%)] blur-md pointer-events-none"
              />

              <div className="preserve-light relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white p-3 border-2 border-[#F3C969] shadow-[0_20px_50px_rgba(0,0,0,0.65)] ring-4 ring-[#C59B27]/25 overflow-hidden flex items-center justify-center">
                <HeritageImage
                  src="/drive_assets/royal_sisterhood_official_crest.jpg"
                  alt="Official Royal Sisterhood AK 1 to 4 Crest"
                  fallbackLabel="AK 1–4"
                  loading="eager"
                  className="w-full h-full object-contain"
                />

                {/* Specular Metallic Sheen Sweep */}
                <motion.div
                  aria-hidden="true"
                  initial={{ x: "-130%" }}
                  animate={{ x: "145%" }}
                  transition={{ duration: 1.15, delay: 0.35, ease: LUXURIOUS_EASE }}
                  className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/55 to-transparent skew-x-[-20deg] pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Step 2 of Dissolution: Typography feathers gracefully upward */}
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
              className="space-y-2.5 will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18, ease: LUXURIOUS_EASE }}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase text-[#F3C969]"
              >
                <Crown className="w-3.5 h-3.5" />
                <span>House of His Majesty King Adam Kok V</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.28, ease: LUXURIOUS_EASE }}
                className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white"
              >
                Royal Sisterhood
                <span className="block font-playfair italic font-semibold text-xl sm:text-2xl text-[#F3C969] mt-1">
                  AK 1 to 4 Bloodline · Koninglike Susterskap
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.44 }}
                className="text-xs text-stone-300 tracking-wide"
              >
                Mid Ennerdale, Johannesburg · Sovereign Heritage & Community Transformation
              </motion.p>
            </motion.div>

            {/* Step 1 of Dissolution: Progress Rail & Skip Button dissolve first */}
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
              className="w-full max-w-xs flex flex-col items-center space-y-5 pt-2 will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.38 }}
                className="w-full space-y-2"
              >
                <div className="h-[3px] w-full bg-white/15 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-[#8B1E3F] via-[#C59B27] to-[#FFF2B8] transition-[width] duration-75 ease-out rounded-full"
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
                transition={{ duration: 0.5, delay: 0.48 }}
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
