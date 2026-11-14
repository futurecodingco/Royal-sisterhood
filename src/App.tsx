/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Navbar, PageId } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { QuickExitButton } from "./components/QuickExitButton";
import { ExperienceBar } from "./components/ExperienceBar";
import { RadialCrownTransition } from "./components/RadialCrownTransition";
import { RoyalPreloader } from "./components/RoyalPreloader";
import { DonorPackModal } from "./components/DonorPackModal";
import { EftBankingModal } from "./components/EftBankingModal";
import { ConfidentialHelpModal } from "./components/ConfidentialHelpModal";
import { BecomePartnerModal } from "./components/BecomePartnerModal";
import { ProgrammeDetailModal } from "./components/ProgrammeDetailModal";
import { HomePage } from "./pages/HomePage";
import { LeadershipPage } from "./pages/LeadershipPage";
import { ProgrammesPage } from "./pages/ProgrammesPage";
import { PartnersPage } from "./pages/PartnersPage";
import { SupportPage } from "./pages/SupportPage";
import { FundUsPage } from "./pages/FundUsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { FlagshipProgramme, FLAGSHIP_PROGRAMMES } from "./data/organizationData";
import { useAtmosphere } from "./hooks/useAtmosphere";
import { prefetchCoreIdle } from "./utils/prefetchAssets";
import { playChime } from "./utils/soundEngine";

const PAGE_TITLES: Record<PageId, string> = {
  home: "Royal Sisterhood AK 1 to 4 Bloodline | Griqua Royal House",
  leadership: "Royal Lineage & Founding Princesses | Royal Sisterhood AK 1–4",
  programmes: "6 National Flagship Programmes | Royal Sisterhood AK 1–4",
  partners: "Strategic Coalition Partners | Royal Sisterhood AK 1–4",
  support: "GBV Emergency & Safe Haven Support | Royal Sisterhood AK 1–4",
  "fund-us": "Donor Due Diligence & CSI Portal | Royal Sisterhood AK 1–4",
  gallery: "Royal Archives & Community Media | Royal Sisterhood AK 1–4",
  contact: "Mid Ennerdale Executive Secretariat | Royal Sisterhood AK 1–4",
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [isCrownActive, setIsCrownActive] = useState(false);
  const [transitionKey, setTransitionKey] = useState(0);
  const [isDonorPackOpen, setIsDonorPackOpen] = useState(false);
  const [isEftOpen, setIsEftOpen] = useState(false);
  const [eftDefaultAmount, setEftDefaultAmount] = useState<number | undefined>(undefined);
  const [eftDefaultProgramme, setEftDefaultProgramme] = useState<string | undefined>(undefined);
  const [isConfidentialHelpOpen, setIsConfidentialHelpOpen] = useState(false);
  const [isBecomePartnerOpen, setIsBecomePartnerOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState<FlagshipProgramme | null>(null);

  const swapTimerRef = useRef<number | null>(null);
  const endTimerRef = useRef<number | null>(null);

  const shouldReduceMotion = useReducedMotion();
  const { greeting, atmosphere, toggleAtmosphere } = useAtmosphere();

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as PageId;
      const validPages: PageId[] = [
        "home",
        "leadership",
        "programmes",
        "partners",
        "support",
        "fund-us",
        "gallery",
        "contact",
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage("home");
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      if (swapTimerRef.current) window.clearTimeout(swapTimerRef.current);
      if (endTimerRef.current) window.clearTimeout(endTimerRef.current);
    };
  }, []);

  // Warm-cache secondary page photography silently when idle
  useEffect(() => {
    prefetchCoreIdle();
  }, []);

  // Sync document title per active page
  useEffect(() => {
    document.title = PAGE_TITLES[currentPage];
  }, [currentPage]);

  const commitPageSwitch = (page: PageId) => {
    setCurrentPage(page);
    if (page === "home") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handleNavigate = (page: PageId) => {
    if (page === currentPage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (swapTimerRef.current) window.clearTimeout(swapTimerRef.current);
    if (endTimerRef.current) window.clearTimeout(endTimerRef.current);

    if (shouldReduceMotion) {
      commitPageSwitch(page);
      return;
    }

    playChime();
    setTransitionKey((prev) => prev + 1);
    setIsCrownActive(true);

    // Swap active route behind the centered velvet veil right as the seam ignites (0.44s)
    swapTimerRef.current = window.setTimeout(() => {
      commitPageSwitch(page);
    }, 440);

    // Clear crown overlay after the silky regal settle finishes (1.40s)
    endTimerRef.current = window.setTimeout(() => {
      setIsCrownActive(false);
    }, 1400);
  };

  const handleOpenDonate = (programme?: FlagshipProgramme, amount?: number) => {
    setEftDefaultAmount(amount);
    setEftDefaultProgramme(programme ? `Programme ${programme.number}: ${programme.title}` : undefined);
    setIsEftOpen(true);
  };

  const handleSelectProgrammeById = (id: string) => {
    const prog = FLAGSHIP_PROGRAMMES.find((p) => p.id === id);
    if (prog) {
      setSelectedProgramme(prog);
    }
  };

  return (
    <div
      id="app-shell"
      className={`min-h-screen flex flex-col font-sans selection:bg-[#4A1525] selection:text-[#F3C969] transition-colors duration-300 ${
        atmosphere === "velvet" ? "theme-velvet" : "bg-[#FAF8F5] text-[#1F1F1F]"
      }`}
    >
      {/* Bespoke Entrance Load-Up Screen */}
      <RoyalPreloader />

      {/* 1. Top Bar Navigation (Strict 3-zone contract) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDonate={() => handleOpenDonate()}
      />

      {/* Bespoke Center-Out Radial Crown Unfold Overlay */}
      <RadialCrownTransition
        isActive={isCrownActive}
        transitionKey={transitionKey}
      />

      {/* 3. Main Multi-Page Views with Center-Out Radial Iris Reveal */}
      <main className="flex-1 relative">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentPage}
            initial={
              shouldReduceMotion || transitionKey === 0
                ? false
                : {
                    clipPath: "circle(4% at 50% 45%)",
                    opacity: 0.2,
                    scale: 1.015,
                    y: 14,
                  }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    clipPath: "circle(160% at 50% 45%)",
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }
            }
            exit={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, transition: { duration: 0.14 } }
            }
            transition={{
              duration: transitionKey === 0 ? 0.01 : 0.88,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {currentPage === "home" && (
              <HomePage
                greeting={greeting}
                onNavigate={handleNavigate}
                onOpenDonate={(prog, amt) => handleOpenDonate(prog, amt)}
                onOpenDonorPack={() => setIsDonorPackOpen(true)}
                onSelectProgramme={handleSelectProgrammeById}
              />
            )}

            {currentPage === "leadership" && (
              <LeadershipPage
                onNavigate={handleNavigate}
                onOpenDonate={() => handleOpenDonate()}
              />
            )}

            {currentPage === "programmes" && (
              <ProgrammesPage
                onSelectProgramme={(prog) => setSelectedProgramme(prog)}
                onOpenDonate={(prog) => handleOpenDonate(prog)}
              />
            )}

            {currentPage === "partners" && (
              <PartnersPage
                onOpenBecomePartner={() => setIsBecomePartnerOpen(true)}
                onOpenDonate={() => handleOpenDonate()}
              />
            )}

            {currentPage === "support" && <SupportPage />}

            {currentPage === "fund-us" && (
              <FundUsPage
                onOpenEft={(amt, prog) => handleOpenDonate(prog, amt)}
                onOpenDonorPack={() => setIsDonorPackOpen(true)}
              />
            )}

            {currentPage === "gallery" && <GalleryPage />}

            {currentPage === "contact" && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDonate={() => handleOpenDonate()}
        onOpenConfidentialHelp={() => setIsConfidentialHelpOpen(true)}
      />

      {/* 5. Unobtrusive Bottom-Left Atmosphere & Audio Controls */}
      <ExperienceBar
        atmosphere={atmosphere}
        onToggleAtmosphere={toggleAtmosphere}
      />

      {/* 6. Persistent Floating Quick Exit Safety Button (GBV survivor protection) */}
      <QuickExitButton />

      {/* 7. Interactive Modals */}
      <DonorPackModal
        isOpen={isDonorPackOpen}
        onClose={() => setIsDonorPackOpen(false)}
        onOpenEft={() => {
          setIsDonorPackOpen(false);
          handleOpenDonate();
        }}
      />

      <EftBankingModal
        isOpen={isEftOpen}
        onClose={() => setIsEftOpen(false)}
        defaultAmount={eftDefaultAmount}
        defaultProgramme={eftDefaultProgramme}
      />

      <ConfidentialHelpModal
        isOpen={isConfidentialHelpOpen}
        onClose={() => setIsConfidentialHelpOpen(false)}
      />

      <BecomePartnerModal
        isOpen={isBecomePartnerOpen}
        onClose={() => setIsBecomePartnerOpen(false)}
      />

      <ProgrammeDetailModal
        programme={selectedProgramme}
        onClose={() => setSelectedProgramme(null)}
        onSponsor={(prog) => handleOpenDonate(prog)}
      />
    </div>
  );
}
