import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface RadialCrownTransitionProps {
  isActive: boolean;
  transitionKey: number;
}

/**
 * High-Craft Realistic Center-Out Radial Crown Unfold (~1.4s silky cadence)
 * - 0.00s - 0.44s: Velvet atmosphere veil softly deepens while sculpted metallic-gold
 *   crown & seal rises into crisp center focus
 * - 0.24s - 0.58s: Diagonal specular sheen sweeps the beveled gold arches & faceted rubies;
 *   central seam glints before unlatching
 * - 0.48s - 1.26s: Hinged 3D crown wings part smoothly outward with rotateY depth & shadows
 *   as dual concentric gold filigree halos bloom open
 * - 1.18s - 1.42s: Outer crown wings dissolve cleanly as the revealed page settles
 */
export const RadialCrownTransition: React.FC<RadialCrownTransitionProps> = ({
  isActive,
  transitionKey,
}) => {
  const renderSculptedHalf = (side: "left" | "right") => {
    const gradGold = `${side}Gold-${transitionKey}`;
    const gradGoldDark = `${side}GoldDark-${transitionKey}`;
    const gradGoldRim = `${side}GoldRim-${transitionKey}`;
    const gradVelvet = `${side}Velvet-${transitionKey}`;
    const gradRuby = `${side}Ruby-${transitionKey}`;
    const clipId = `${side}Clip-${transitionKey}`;

    return (
      <svg
        viewBox="0 0 280 280"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Multi-stop 3D cast gold */}
          <linearGradient id={gradGold} x1="15%" y1="5%" x2="85%" y2="95%">
            <stop offset="0%" stopColor="#FFF7D6" />
            <stop offset="22%" stopColor="#F5D06B" />
            <stop offset="52%" stopColor="#C89B28" />
            <stop offset="78%" stopColor="#946D12" />
            <stop offset="100%" stopColor="#E6BA4C" />
          </linearGradient>

          {/* Recessed antique bronze-gold shadow bevel */}
          <linearGradient id={gradGoldDark} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A67C18" />
            <stop offset="50%" stopColor="#5C4107" />
            <stop offset="100%" stopColor="#8E6710" />
          </linearGradient>

          {/* Razor highlight rim */}
          <linearGradient id={gradGoldRim} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFBE6" />
            <stop offset="45%" stopColor="#F3C969" />
            <stop offset="100%" stopColor="#7C590C" />
          </linearGradient>

          {/* Deep crushed royal velvet cap & medallion */}
          <radialGradient id={gradVelvet} cx="46%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#6D1933" />
            <stop offset="55%" stopColor="#3B0B1B" />
            <stop offset="100%" stopColor="#17030A" />
          </radialGradient>

          {/* Faceted crimson ruby cabochon */}
          <radialGradient id={gradRuby} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FF9BB0" />
            <stop offset="25%" stopColor="#BE1E45" />
            <stop offset="75%" stopColor="#6B0A23" />
            <stop offset="100%" stopColor="#2B020C" />
          </radialGradient>

          <clipPath id={clipId}>
            {side === "left" ? (
              <rect x="-20" y="-20" width="160" height="320" />
            ) : (
              <rect x="140" y="-20" width="160" height="320" />
            )}
          </clipPath>
        </defs>

        <g clipPath={`url(#${clipId})`}>
          {/* Outer Sculpted Medallion Rim */}
          <circle
            cx="140"
            cy="140"
            r="122"
            fill={`url(#${gradVelvet})`}
            stroke={`url(#${gradGold})`}
            strokeWidth="4.5"
          />
          {/* Inner Bevel Groove */}
          <circle
            cx="140"
            cy="140"
            r="116"
            fill="none"
            stroke={`url(#${gradGoldDark})`}
            strokeWidth="1.5"
          />
          {/* Engraved Royal Compass Tick Ring */}
          <circle
            cx="140"
            cy="140"
            r="107"
            fill="none"
            stroke="#F3C969"
            strokeWidth="1"
            strokeOpacity="0.55"
            strokeDasharray="2 5"
          />
          <circle
            cx="140"
            cy="140"
            r="100"
            fill="none"
            stroke="#C59B27"
            strokeWidth="0.65"
            strokeOpacity="0.4"
          />

          {/* Velvet Cap Cushion Behind Crown Arches */}
          <path
            d="M74 166 C74 118, 102 96, 140 96 C178 96, 206 118, 206 166 Z"
            fill={`url(#${gradVelvet})`}
            stroke={`url(#${gradGoldDark})`}
            strokeWidth="1"
          />

          {/* Recessed Rear Crown Arches (for authentic 3D depth) */}
          <path
            d="M70 166 L58 106 L94 128 L114 82 L140 112 L166 82 L186 128 L222 106 L210 166 Z"
            fill={`url(#${gradGoldDark})`}
            transform="translate(0, 3)"
          />

          {/* Main Sculpted Sovereign Crown Body */}
          <path
            d="M68 166 L54 102 L92 126 L112 76 L140 108 L168 76 L188 126 L226 102 L212 166 Z"
            fill={`url(#${gradGold})`}
            stroke={`url(#${gradGoldRim})`}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />

          {/* Center Sovereign Cross-Orb Spire */}
          <path
            d="M140 52 L144 64 L154 68 L144 72 L140 84 L136 72 L126 68 L136 64 Z"
            fill={`url(#${gradGold})`}
            stroke="#FFF8DC"
            strokeWidth="0.9"
          />
          <circle cx="140" cy="96" r="6.5" fill={`url(#${gradGold})`} stroke="#FFF8DC" strokeWidth="0.9" />

          {/* Engraved Inner Filigree Ribbing on Crown Points */}
          <path
            d="M78 158 L69 116 L96 135 L113 92 L140 120 L167 92 L184 135 L211 116 L202 158"
            fill="none"
            stroke={`url(#${gradGoldDark})`}
            strokeWidth="1.4"
            strokeOpacity="0.65"
            strokeLinejoin="round"
          />

          {/* Heavy Beveled Crown Circlet Base */}
          <rect
            x="66"
            y="168"
            width="148"
            height="19"
            rx="4"
            fill={`url(#${gradGoldDark})`}
            transform="translate(0, 2)"
          />
          <rect
            x="66"
            y="167"
            width="148"
            height="18"
            rx="4"
            fill={`url(#${gradGold})`}
            stroke={`url(#${gradGoldRim})`}
            strokeWidth="1.4"
          />
          <line x1="74" y1="171" x2="206" y2="171" stroke="#FFF7D6" strokeWidth="0.8" strokeOpacity="0.7" />

          {/* Lower Royal Motto Ribbon Arc */}
          <path
            d="M84 196 Q140 212 196 196"
            fill="none"
            stroke={`url(#${gradGold})`}
            strokeWidth="1.4"
            strokeOpacity="0.85"
          />

          {/* Pearl Spire Finials with Specular Catchlights */}
          {[
            { cx: 54, cy: 97, r: 4.5 },
            { cx: 112, cy: 70, r: 5 },
            { cx: 168, cy: 70, r: 5 },
            { cx: 226, cy: 97, r: 4.5 },
          ].map((pearl, idx) => (
            <g key={idx}>
              <circle
                cx={pearl.cx}
                cy={pearl.cy}
                r={pearl.r}
                fill="#FDF8EA"
                stroke="#C59B27"
                strokeWidth="1"
              />
              <circle
                cx={pearl.cx - 1.3}
                cy={pearl.cy - 1.3}
                r={pearl.r * 0.36}
                fill="#FFFFFF"
              />
            </g>
          ))}

          {/* Faceted Ruby Gemstones Seated on the Circlet */}
          {[88, 114, 140, 166, 192].map((gx, idx) => {
            const isCenter = gx === 140;
            const r = isCenter ? 5.2 : 3.8;
            return (
              <g key={idx}>
                <circle
                  cx={gx}
                  cy={176}
                  r={r + 1.4}
                  fill={`url(#${gradGoldDark})`}
                />
                <circle cx={gx} cy={176} r={r} fill={`url(#${gradRuby})`} />
                <ellipse
                  cx={gx - r * 0.32}
                  cy={176 - r * 0.32}
                  rx={r * 0.34}
                  ry={r * 0.22}
                  fill="#FFFFFF"
                  fillOpacity="0.85"
                />
              </g>
            );
          })}

          {/* Crisp Split Seam Edge Highlight */}
          <line
            x1="140"
            y1="18"
            x2="140"
            y2="262"
            stroke="#FFF5CC"
            strokeWidth="0.9"
            strokeOpacity="0.45"
          />
        </g>
      </svg>
    );
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key={transitionKey}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center overflow-hidden"
        >
          {/* Step 1: Soft Royal Velvet Veil with Atmospheric Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.72, 0.65, 0.28, 0] }}
            transition={{
              duration: 1.38,
              times: [0, 0.26, 0.45, 0.78, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,11,22,0.88)_0%,rgba(17,3,8,0.94)_100%)] backdrop-blur-[4px]"
          />

          {/* Step 3: Dual Concentric Expanding Radial Iris Halos */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{
              scale: [0.2, 0.52, 2.2, 3.8],
              opacity: [0, 0.85, 0.48, 0],
            }}
            transition={{
              duration: 1.38,
              times: [0, 0.28, 0.72, 1],
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-[#F3C969]/75 shadow-[0_0_90px_rgba(243,201,105,0.35),inset_0_0_40px_rgba(243,201,105,0.2)]"
          />

          <motion.div
            initial={{ scale: 0.16, opacity: 0 }}
            animate={{
              scale: [0.16, 0.42, 1.85, 3.2],
              opacity: [0, 0.6, 0.35, 0],
            }}
            transition={{
              duration: 1.38,
              times: [0, 0.3, 0.76, 1],
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-[#C59B27]/55 border-dashed"
          />

          {/* 3D Perspective Stage for Two-Part Hinged Sovereign Seal */}
          <div
            style={{ perspective: 1400 }}
            className="relative w-60 h-60 sm:w-72 sm:h-72 flex items-center justify-center"
          >
            {/* Left Hinged Crown Wing */}
            <motion.div
              initial={{ scale: 0.68, x: 0, rotateZ: 0, rotateY: 0, opacity: 0 }}
              animate={{
                scale: [0.68, 1.0, 1.04, 1.26, 1.48],
                x: [0, 0, -10, -240, -420],
                rotateZ: [0, 0, -1.5, -7, -11],
                rotateY: [0, 0, 4, 24, 34],
                opacity: [0, 1, 1, 0.85, 0],
              }}
              transition={{
                duration: 1.38,
                times: [0, 0.25, 0.38, 0.78, 1],
                ease: [0.19, 1, 0.22, 1],
              }}
              style={{
                filter: "drop-shadow(0 28px 42px rgba(0, 0, 0, 0.72))",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 will-change-transform"
            >
              {renderSculptedHalf("left")}
            </motion.div>

            {/* Right Hinged Crown Wing */}
            <motion.div
              initial={{ scale: 0.68, x: 0, rotateZ: 0, rotateY: 0, opacity: 0 }}
              animate={{
                scale: [0.68, 1.0, 1.04, 1.26, 1.48],
                x: [0, 0, 10, 240, 420],
                rotateZ: [0, 0, 1.5, 7, 11],
                rotateY: [0, 0, -4, -24, -34],
                opacity: [0, 1, 1, 0.85, 0],
              }}
              transition={{
                duration: 1.38,
                times: [0, 0.25, 0.38, 0.78, 1],
                ease: [0.19, 1, 0.22, 1],
              }}
              style={{
                filter: "drop-shadow(0 28px 42px rgba(0, 0, 0, 0.72))",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 will-change-transform"
            >
              {renderSculptedHalf("right")}
            </motion.div>

            {/* Step 2: Realistic Specular Metallic Sweep Across Gold Surfaces */}
            <motion.div
              initial={{ x: "-140%", opacity: 0 }}
              animate={{ x: ["-140%", "150%"], opacity: [0, 0.95, 0] }}
              transition={{
                duration: 0.44,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-y-4 w-20 bg-gradient-to-r from-transparent via-[#FFFBE6]/75 to-transparent skew-x-[-24deg] mix-blend-screen pointer-events-none"
            />

            {/* Step 2b: Fine Luminous Seam Ignition Right at Split Moment */}
            <motion.div
              initial={{ scaleY: 0.2, opacity: 0 }}
              animate={{
                scaleY: [0.2, 1.05, 1.2],
                opacity: [0, 0.95, 0],
              }}
              transition={{
                duration: 0.38,
                delay: 0.34,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-y-6 w-[2px] bg-gradient-to-b from-transparent via-[#FFF9DC] to-transparent shadow-[0_0_18px_rgba(255,245,204,0.9)] pointer-events-none"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
