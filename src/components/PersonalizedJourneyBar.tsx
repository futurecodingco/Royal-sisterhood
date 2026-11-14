import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Briefcase,
  Shield,
  Laptop,
  Crown,
  ArrowRight,
  Clock,
} from "lucide-react";
import { PageId } from "./Navbar";
import { playChime } from "../utils/soundEngine";

export type JourneyId = "csi" | "gbv" | "youth" | "heritage";

interface JourneyConfig {
  id: JourneyId;
  label: string;
  shortDesc: string;
  icon: React.ReactNode;
  headline: string;
  recommendation: string;
  primaryCtaLabel: string;
  primaryAction: "donate" | "donor-pack" | PageId;
  secondaryCtaLabel: string;
  secondaryPage: PageId;
}

const JOURNEY_OPTIONS: JourneyConfig[] = [
  {
    id: "csi",
    label: "CSI & Grant Funder",
    shortDesc: "Corporate sponsorship, CIPC due diligence & Capitec EFT",
    icon: <Briefcase className="w-4 h-4 shrink-0" />,
    headline: "Verified Due Diligence & B-BBEE SED Alignment Ready",
    recommendation:
      "Inspect our CIPC statutory dossier (2025/191780/07), model tangible beneficiary outcomes in our Community Impact Simulator below, or initiate a ring-fenced Capitec Bank EFT transfer.",
    primaryCtaLabel: "Download CSI Donor Pack",
    primaryAction: "donor-pack",
    secondaryCtaLabel: "Open Full Donor Portal",
    secondaryPage: "fund-us",
  },
  {
    id: "gbv",
    label: "Urgent GBV Support",
    shortDesc: "24/7 rapid crisis response, safe shelter & confidential intake",
    icon: <Shield className="w-4 h-4 shrink-0" />,
    headline: "Immediate, Confidential Protection — You Are Not Alone",
    recommendation:
      "Reach Princess Maggie Kok Gibbs (081 302 7763) or Princess Cornelia Eva Julius (066 586 2829), connect toll-free with the National GBV Command Centre (0800 428 428), or submit a private safe-haven intake.",
    primaryCtaLabel: "Open 24/7 Safe Haven Desk",
    primaryAction: "support",
    secondaryCtaLabel: "Direct Office Contacts",
    secondaryPage: "contact",
  },
  {
    id: "youth",
    label: "Youth, Coding & Enterprise",
    shortDesc: "Future Coding Corp labs & SMME incubation cohorts",
    icon: <Laptop className="w-4 h-4 shrink-0" />,
    headline: "Equipping Women & Youth With 21st-Century Liberation",
    recommendation:
      "Explore our 12-week coding laboratories with Future Coding Corp, cooperative agricultural supply chains with RSBC Trading, and women-led SMME scaling with Young Investments.",
    primaryCtaLabel: "Explore 6 Flagship Hubs",
    primaryAction: "programmes",
    secondaryCtaLabel: "Meet Coalition Partners",
    secondaryPage: "partners",
  },
  {
    id: "heritage",
    label: "Royal Lineage & Imbizo",
    shortDesc: "Adam Kok I–V succession, royal houses & national archives",
    icon: <Crown className="w-4 h-4 shrink-0" />,
    headline: "Three Centuries of Griqua Sovereignty & Matriarchal Service",
    recommendation:
      "Trace the unbroken royal bloodline from Kaptein Adam Kok I (1710) to His Majesty King Adam Kok V, meet the three Founding Princesses, and browse our verified archival gallery.",
    primaryCtaLabel: "Explore Royal Lineage",
    primaryAction: "leadership",
    secondaryCtaLabel: "View Media Archives",
    secondaryPage: "gallery",
  },
];

interface PersonalizedJourneyBarProps {
  greeting: string;
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
  onOpenDonorPack: () => void;
}

export const PersonalizedJourneyBar: React.FC<PersonalizedJourneyBarProps> = ({
  greeting,
  onNavigate,
  onOpenDonate,
  onOpenDonorPack,
}) => {
  const [selectedJourney, setSelectedJourney] = useState<JourneyId>("csi");
  const shouldReduceMotion = useReducedMotion();

  const active =
    JOURNEY_OPTIONS.find((item) => item.id === selectedJourney) || JOURNEY_OPTIONS[0];

  const handleSelect = (id: JourneyId) => {
    playChime();
    setSelectedJourney(id);
  };

  const handlePrimaryClick = () => {
    if (active.primaryAction === "donate") {
      onOpenDonate();
    } else if (active.primaryAction === "donor-pack") {
      onOpenDonorPack();
    } else {
      onNavigate(active.primaryAction);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl border border-[#C59B27]/45 shadow-sm overflow-hidden">
        {/* Top Question Prompt */}
        <div className="p-6 sm:p-8 border-b border-stone-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B1E3F]">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>{greeting} from Mid Ennerdale · Tailored Portal Guide</span>
            </div>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#4A1525] mt-1">
              How Can the Royal Sisterhood Assist You Today?
            </h2>
          </div>

          {/* 4 Single-Row Journey Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5">
            {JOURNEY_OPTIONS.map((option) => {
              const isSelected = option.id === selectedJourney;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelect(option.id)}
                  aria-pressed={isSelected}
                  className={`relative text-left px-3.5 py-2.5 rounded-lg border transition-colors cursor-pointer btn-tactile flex items-center gap-2.5 ${
                    isSelected
                      ? "bg-[#4A1525] text-white border-[#4A1525] shadow-sm"
                      : "bg-[#FAF8F5] text-stone-800 border-stone-200 hover:border-[#C59B27]/70"
                  }`}
                >
                  <span className={isSelected ? "text-[#F3C969]" : "text-[#8B1E3F]"}>
                    {option.icon}
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs font-semibold truncate">
                      {option.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Personalized Recommendation Strip */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:px-8 sm:py-6 bg-[#F3EFE7] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B85D3B] block">
                Recommended Pathway · {active.label}
              </span>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#4A1525]">
                {active.headline}
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {active.recommendation}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handlePrimaryClick}
                className="group px-5 py-2.5 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-semibold rounded-md btn-tactile cursor-pointer flex items-center gap-2 whitespace-nowrap"
              >
                <span>{active.primaryCtaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F3C969] transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate(active.secondaryPage)}
                className="px-4 py-2.5 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 text-xs font-semibold rounded-md btn-tactile cursor-pointer whitespace-nowrap"
              >
                {active.secondaryCtaLabel}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
