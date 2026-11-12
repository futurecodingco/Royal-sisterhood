import React, { useState } from "react";
import { Menu, X, Crown, HeartHandshake } from "lucide-react";

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

  const navLinks: { id: PageId; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "leadership", label: "Royal Lineage" },
    { id: "programmes", label: "Programmes" },
    { id: "partners", label: "Strategic Partners" },
    { id: "support", label: "GBV Support" },
    { id: "fund-us", label: "Donor Due Diligence" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Secretariat" },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleLinkClick("home")}
          className="flex items-center gap-3 text-left focus:outline-none group whitespace-nowrap shrink-0 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center p-1 shadow-md border border-[#C59B27]/40 group-hover:scale-105 transition-transform overflow-hidden">
            <img
              src="/drive_assets/royal_sisterhood_official_crest.jpg"
              alt="Royal Sisterhood AK 1 to 4 Official Emblem"
              className="w-full h-full object-contain"
              onError={(e) => {
                // fallback
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <Crown className="w-6 h-6 text-[#C59B27] hidden" />
          </div>
          <div>
            <span className="block font-cinzel font-bold text-lg text-[#4A1525] tracking-tight leading-none">
              Royal Sisterhood
            </span>
            <span className="block text-[11px] font-sans uppercase tracking-widest text-[#B85D3B] font-semibold mt-1">
              AK 1 to 4 Bloodline
            </span>
          </div>
        </button>

        {/* Zone 2: Single-line Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-stone-700">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
                  isActive
                    ? "text-[#4A1525] font-semibold border-b-2 border-[#C59B27]"
                    : "hover:text-[#4A1525]"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenDonate}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#4A1525] hover:bg-[#340C18] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded shadow-sm hover:shadow-md transition-all cursor-pointer border border-[#C59B27]/40 whitespace-nowrap shrink-0"
          >
            <HeartHandshake className="w-4 h-4 text-[#C59B27]" />
            <span>Fund Our Mission</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={onOpenDonate}
            className="sm:hidden px-3 py-1.5 bg-[#4A1525] text-white text-xs font-semibold rounded"
          >
            Fund Us
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-[#4A1525] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF8F5] border-b border-[#E8E1D5] px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#4A1525] text-white font-semibold"
                    : "text-stone-800 hover:bg-stone-100"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-stone-200 mt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#4A1525] text-white font-semibold rounded text-sm shadow"
            >
              <HeartHandshake className="w-4 h-4 text-[#C59B27]" />
              <span>Partner & Donate (CSI / Grants)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
