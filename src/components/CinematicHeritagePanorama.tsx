import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import { FLAGSHIP_PROGRAMMES } from "../data/organizationData";
import { HeritageImage } from "./HeritageImage";
import { PageId } from "./Navbar";

interface PanoramaChapter {
  id: string;
  chapter: string;
  kicker: string;
  title: string;
  caption: string;
  image: string;
  targetPage: PageId;
  actionLabel: string;
}

const PANORAMA_CHAPTERS: PanoramaChapter[] = [
  {
    id: "king-council",
    chapter: "01",
    kicker: "Royal Stewardship",
    title: "His Majesty King Adam Kok V & The Royal Council",
    caption:
      "Seated with the carved paramount scepter alongside his sisters, the Founding Royal Princesses, uniting Griqua royal houses across all nine provinces.",
    image: "/drive_assets/king_adam_kok_v_and_princesses.jpg",
    targetPage: "leadership",
    actionLabel: "Explore Royal Lineage",
  },
  {
    id: "princesses-vanguard",
    chapter: "02",
    kicker: "Founding Directors",
    title: "The Three Royal Sisters in Ceremonial Attire",
    caption:
      "Princess Cornelia Eva Julius, Princess May Kok Paulsen, and Princess Maggie Kok Gibbs steering community welfare, education, and statutory governance from Mid Ennerdale.",
    image: "/drive_assets/three_princesses_full_standing.jpg",
    targetPage: "leadership",
    actionLabel: "Meet the Directors",
  },
  {
    id: "digital-hub",
    chapter: "03",
    kicker: "Future Coding Corp Alliance",
    title: "Women’s Digital Literacy & Software Laboratory",
    caption:
      "Equipping young Griqua women and youth with 12-week accredited software development, web design, and enterprise skills for economic independence.",
    image: FLAGSHIP_PROGRAMMES[3]?.image || "/drive_assets/royal_delegation_assembly.jpg",
    targetPage: "programmes",
    actionLabel: "View Tech & Agri Hub",
  },
  {
    id: "dignity-drive",
    chapter: "04",
    kicker: "RSBC Trading & Community Matriarchs",
    title: "Peri-Urban Food Sovereignty & Dignity Outreaches",
    caption:
      "Delivering over 14,500 nutritious meals monthly, household agro-ecology gardens, and schoolgirl sanitary dignity kits across vulnerable communities.",
    image: FLAGSHIP_PROGRAMMES[4]?.image || "/drive_assets/griqua_royal_imbizo_1794486836205.jpg",
    targetPage: "fund-us",
    actionLabel: "Sponsor This Drive",
  },
];

interface CinematicHeritagePanoramaProps {
  onNavigate: (page: PageId) => void;
}

export const CinematicHeritagePanorama: React.FC<CinematicHeritagePanoramaProps> = ({
  onNavigate,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax vertical translation on the active high-res photo frame
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const active = PANORAMA_CHAPTERS[activeIndex];

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-[#20050E] rounded-2xl border border-[#C59B27]/45 overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left: Parallax High-Impact Photographic Viewport (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[430px] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <motion.div
                  style={shouldReduceMotion ? undefined : { y: imageY }}
                  className="w-full h-[114%] -top-[7%] relative will-change-transform"
                >
                  <HeritageImage
                    src={active.image}
                    alt={active.title}
                    fallbackLabel={active.title}
                    loading="eager"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Measured Contrast Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#17030A]/90 via-[#17030A]/30 to-transparent pointer-events-none" />

            {/* Foreground Floating Caption Layer */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-[#F3C969]">
                <span className="font-mono tabular-nums">Chapter {active.chapter}</span>
                <span aria-hidden="true">·</span>
                <span>{active.kicker}</span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white text-balance">
                {active.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 max-w-xl leading-relaxed">
                {active.caption}
              </p>
            </div>
          </div>

          {/* Right: Interactive Chapter Selector Rail (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#2A0914] text-white border-t lg:border-t-0 lg:border-l border-[#C59B27]/25">
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#F3C969]">
                  Living Heritage Spotlight
                </span>
                <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
                  Royal Authority in Action
                </h2>
              </div>

              <div className="divide-y divide-white/10 border-y border-white/10">
                {PANORAMA_CHAPTERS.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-left py-3.5 px-3 rounded-md transition-colors flex items-center justify-between gap-3 cursor-pointer group ${
                        isActive ? "bg-white/10" : "hover:bg-white/5"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-[11px]">
                          <span
                            className={`font-mono font-bold tabular-nums ${
                              isActive ? "text-[#F3C969]" : "text-stone-400"
                            }`}
                          >
                            {item.chapter}
                          </span>
                          <span className={isActive ? "text-[#F3C969]" : "text-stone-400"}>
                            {item.kicker}
                          </span>
                        </div>
                        <span
                          className={`block font-cinzel text-xs sm:text-sm font-semibold mt-0.5 truncate ${
                            isActive ? "text-white" : "text-stone-300 group-hover:text-white"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ease-tactile ${
                          isActive
                            ? "text-[#F3C969] translate-x-0.5"
                            : "text-stone-500 group-hover:translate-x-1 group-hover:text-stone-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-5 flex items-center justify-between gap-3">
              <span className="text-[11px] text-stone-300">
                Verified photographic testimony
              </span>
              <button
                type="button"
                onClick={() => onNavigate(active.targetPage)}
                className="group inline-flex items-center gap-1.5 px-4 py-2 bg-[#C59B27] hover:bg-[#B08920] text-stone-950 text-xs font-bold rounded-md btn-tactile cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>{active.actionLabel}</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
