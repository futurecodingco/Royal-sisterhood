import React from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

interface KineticHeadlineProps {
  primaryLine: string;
  accentLine: string;
}

export const KineticHeadline: React.FC<KineticHeadlineProps> = ({
  primaryLine,
  accentLine,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);

  const primaryShift = useSpring(useTransform(pointerX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 180,
    damping: 26,
  });
  const accentShift = useSpring(useTransform(pointerX, [-0.5, 0.5], [8, -8]), {
    stiffness: 180,
    damping: 26,
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLHeadingElement>) => {
    if (shouldReduceMotion || e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
  };

  return (
    <h1
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="font-cinzel text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold leading-[1.12] text-white tracking-tight text-balance select-text"
    >
      <motion.span
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={shouldReduceMotion ? undefined : { x: primaryShift }}
        className="block will-change-transform"
      >
        {primaryLine}
      </motion.span>
      <motion.span
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        style={shouldReduceMotion ? undefined : { x: accentShift }}
        className="text-[#F3C969] italic font-playfair font-semibold block mt-2 will-change-transform"
      >
        {accentLine}
      </motion.span>
    </h1>
  );
};
