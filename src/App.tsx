/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar, PageId } from "./components/Navbar";
import { EmergencyBanner } from "./components/EmergencyBanner";
import { Footer } from "./components/Footer";
import { QuickExitButton } from "./components/QuickExitButton";
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

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [isDonorPackOpen, setIsDonorPackOpen] = useState(false);
  const [isEftOpen, setIsEftOpen] = useState(false);
  const [eftDefaultAmount, setEftDefaultAmount] = useState<number | undefined>(undefined);
  const [isConfidentialHelpOpen, setIsConfidentialHelpOpen] = useState(false);
  const [isBecomePartnerOpen, setIsBecomePartnerOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState<FlagshipProgramme | null>(null);

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
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === "home" ? "" : page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenDonate = (programme?: FlagshipProgramme, amount?: number) => {
    if (amount) {
      setEftDefaultAmount(amount);
    } else {
      setEftDefaultAmount(undefined);
    }
    setIsEftOpen(true);
  };

  const handleSelectProgrammeById = (id: string) => {
    const prog = FLAGSHIP_PROGRAMMES.find((p) => p.id === id);
    if (prog) {
      setSelectedProgramme(prog);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1F1F] flex flex-col font-sans selection:bg-[#4A1525] selection:text-[#F3C969]">
      {/* 1. Emergency Helpline Strip */}
      <EmergencyBanner onOpenConfidentialHelp={() => setIsConfidentialHelpOpen(true)} />

      {/* 2. Top Bar Navigation (Strict 3-zone contract) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDonate={() => handleOpenDonate()}
      />

      {/* 3. Main Multi-Page Views */}
      <main className="flex-1">
        {currentPage === "home" && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenDonate={() => handleOpenDonate()}
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
            onOpenEft={(amt) => handleOpenDonate(undefined, amt)}
            onOpenDonorPack={() => setIsDonorPackOpen(true)}
          />
        )}

        {currentPage === "gallery" && <GalleryPage />}

        {currentPage === "contact" && <ContactPage />}
      </main>

      {/* 4. Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDonate={() => handleOpenDonate()}
        onOpenConfidentialHelp={() => setIsConfidentialHelpOpen(true)}
      />

      {/* 5. Persistent Floating Quick Exit Safety Button (GBV survivor protection) */}
      <QuickExitButton />

      {/* 6. Interactive Modals */}
      <DonorPackModal
        isOpen={isDonorPackOpen}
        onClose={() => setIsDonorPackOpen(false)}
        onOpenEft={() => {
          setIsDonorPackOpen(false);
          setIsEftOpen(true);
        }}
      />

      <EftBankingModal
        isOpen={isEftOpen}
        onClose={() => setIsEftOpen(false)}
        defaultAmount={eftDefaultAmount}
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
