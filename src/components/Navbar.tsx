import React, { useState } from "react";
import { Menu, X, HeartHandshake } from "lucide-react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import { HeritageImage } from "./HeritageImage";
import { prefetchPageAssets } from "../utils/prefetchAssets";
import { playTap } from "../utils/soundEngine";

export type PageId =
  | "home"
  | "leadership"
  | "programmes"
  | "partners"
  | "support"
  | "fund-us"
  | "gallery"
  | "contact";

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenDonate,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    restDelta: 0.001,
  });

  const primaryNavLinks: { id: PageId; label: string }[] = [
    { id: "leadership", label: "Lineage" },
    { id: "programmes", label: "Programmes" },
    { id: "partners", label: "Partners" },
    { id: "support", label: "GBV Support" },
    { id: "fund-us", label: "Donor Portal" },
  ];

  const mobileNavLinks: { id: PageId; label: string }[] = [
    { id: "home", label: "Overview" },
    { id: "leadership", label: "Royal Lineage" },
    { id: "programmes", label: "6 Flagship Programmes" },
    { id: "partners", label: "Strategic Partners" },
    { id: "support", label: "GBV Support Desk" },
    { id: "fund-us", label: "Donor Due Diligence" },
    { id: "gallery", label: "Archival Gallery" },
    { id: "contact", label: "Secretariat & Contact" },
  ];

  const handleLinkClick = (page: PageId) => {
    playTap();
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DDD0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single-line contract) */}
        <button
          type="button"
          onClick={() => handleLinkClick("home")}
          aria-label="Royal Sisterhood AK 1 to 4 Bloodline Home"
          className="flex items-center gap-3 text-left group whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27] rounded-md btn-tactile"
        >
          <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center p-0.5 border border-[#C59B27]/50 overflow-hidden shrink-0 transition-transform duration-200 ease-tactile group-hover:scale-105 group-hover:-rotate-2">
            <HeritageImage
              src="/drive_assets/royal_sisterhood_official_crest.jpg"
              alt="Royal Sisterhood AK 1 to 4 Official Crest"
              fallbackLabel="AK 1–4"
              loading="eager"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-cinzel font-bold text-base sm:text-lg text-[#4A1525] tracking-tight whitespace-nowrap shrink-0 group-hover:text-[#6D1530] transition-colors">
            Royal Sisterhood
          </span>
        </button>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700"
        >
          {primaryNavLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onMouseEnter={() => prefetchPageAssets(link.id)}
                onFocus={() => prefetchPageAssets(link.id)}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27] rounded-sm ${
                  isActive
                    ? "text-[#4A1525] font-semibold"
                    : "text-stone-700 hover:text-[#4A1525]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : "navActiveUnderline"}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C59B27]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenDonate}
            className="group hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#4A1525] hover:bg-[#340C18] text-[#FAF8F5] text-xs font-semibold tracking-wide rounded-md btn-tactile cursor-pointer border border-[#C59B27]/40 whitespace-nowrap shrink-0"
          >
            <HeartHandshake className="w-4 h-4 text-[#F3C969] transition-transform duration-200 ease-tactile group-hover:scale-110 group-hover:-rotate-6" />
            <span>Fund Our Mission</span>
          </button>

          <button
            type="button"
            onClick={onOpenDonate}
            className="sm:hidden px-3 py-1.5 bg-[#4A1525] text-white text-xs font-semibold rounded-md whitespace-nowrap shrink-0 cursor-pointer btn-tactile"
          >
            Fund Us
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-[#4A1525] rounded-md transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Scroll Reading Depth Progress Rail */}
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          style={{ scaleX }}
          className="h-[2px] bg-gradient-to-r from-[#8B1E3F] via-[#C59B27] to-[#F3C969] origin-left"
        />
      )}

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E5DDD0] px-4 pt-2 pb-5 space-y-1 shadow-lg">
          {mobileNavLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#4A1525] text-white font-semibold"
                    : "text-stone-800 hover:bg-stone-100"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-stone-200 mt-2">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#4A1525] text-white font-semibold rounded-md text-sm cursor-pointer btn-tactile"
            >
              <HeartHandshake className="w-4 h-4 text-[#F3C969]" />
              <span>Partner & Donate (Capitec EFT / CSI)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
