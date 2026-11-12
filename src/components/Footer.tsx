import React from "react";
import { ShieldCheck, MapPin, Mail, Phone, HeartHandshake, Crown, ExternalLink } from "lucide-react";
import { ROYAL_ORGANIZATION, STRATEGIC_PARTNERS } from "../data/organizationData";
import { PageId } from "./Navbar";

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
  onOpenConfidentialHelp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDonate,
  onOpenConfidentialHelp,
}) => {
  return (
    <footer className="bg-[#240711] text-stone-300 border-t-2 border-[#C59B27]/40 text-xs">
      {/* Top Banner in Footer: Institutional Assurance */}
      <div className="border-b border-stone-800 bg-[#1D050D] py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#4A1525] border border-[#C59B27] flex items-center justify-center shrink-0">
              <Crown className="w-5 h-5 text-[#C59B27]" />
            </div>
            <div>
              <h4 className="font-cinzel text-white text-sm font-bold">
                Royal Governance & Traditional Accountability
              </h4>
              <p className="text-[11px] text-stone-400">
                Operating with direct mandate from the Griqua Royal House and the Royal Princesses of King Adam Kok V.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConfidentialHelp}
              className="px-3.5 py-1.5 bg-[#8B1E3F] hover:bg-[#6D1530] text-white text-xs font-semibold rounded transition-colors"
            >
              Emergency GBV Desk
            </button>
            <button
              onClick={onOpenDonate}
              className="px-4 py-1.5 bg-[#C59B27] hover:bg-[#B08920] text-stone-950 text-xs font-bold rounded shadow transition-colors"
            >
              Corporate CSI / Grants
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Col 1 & 2: Brand & Legal */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center p-1 border border-[#C59B27]/50 overflow-hidden shrink-0">
              <img
                src="/drive_assets/royal_sisterhood_official_crest.jpg"
                alt="Royal Sisterhood AK 1 to 4 Seal"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-cinzel font-bold text-base text-white block leading-tight">
                Royal Sisterhood AK 1 to 4 Bloodline
              </span>
              <span className="text-[11px] font-mono text-[#F3C969] block">
                CIPC Reg: {ROYAL_ORGANIZATION.registrationNumber}
              </span>
            </div>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
            A premier South African non-profit institution founded by the Royal Princesses and sisters of King Adam Kok V. Championing the constitutional dignity of the Griqua nation, pioneering digital & agri-business empowerment for women, and delivering frontline emergency action against Gender-Based Violence.
          </p>

          <div className="space-y-1.5 text-xs text-stone-400 pt-1">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
              <span>
                {ROYAL_ORGANIZATION.headquarters.address}, {ROYAL_ORGANIZATION.headquarters.city}, {ROYAL_ORGANIZATION.headquarters.province}, {ROYAL_ORGANIZATION.headquarters.postalCode}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C59B27] shrink-0" />
              <a href={`mailto:${ROYAL_ORGANIZATION.contactEmail}`} className="hover:text-white transition-colors underline">
                {ROYAL_ORGANIZATION.contactEmail}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
              <span>{ROYAL_ORGANIZATION.secretariatPhone} (Secretariat)</span>
            </div>
          </div>
        </div>

        {/* Col 3: Strategic Ecosystem */}
        <div className="space-y-3">
          <h5 className="font-cinzel font-bold text-white text-xs uppercase tracking-widest text-[#F3C969]">
            Strategic Ecosystem
          </h5>
          <ul className="space-y-2 text-xs">
            {STRATEGIC_PARTNERS.map((partner) => (
              <li key={partner.id}>
                <button
                  onClick={() => onNavigate("partners")}
                  className="text-left hover:text-[#F3C969] transition-colors"
                >
                  <span className="block font-medium text-stone-200">{partner.name}</span>
                  <span className="block text-[10px] text-stone-500">{partner.badge}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Institutional Navigation */}
        <div className="space-y-3">
          <h5 className="font-cinzel font-bold text-white text-xs uppercase tracking-widest text-[#F3C969]">
            Institutional Pages
          </h5>
          <ul className="space-y-2 text-xs">
            {[
              { id: "home" as PageId, label: "Institutional Overview" },
              { id: "leadership" as PageId, label: "Adam Kok I–IV Lineage" },
              { id: "programmes" as PageId, label: "6 Flagship Programmes" },
              { id: "support" as PageId, label: "GBV Emergency & Safe Havens" },
              { id: "fund-us" as PageId, label: "CSI & Donor Due Diligence" },
              { id: "gallery" as PageId, label: "Royal & Community Media" },
              { id: "contact" as PageId, label: "Mid Ennerdale Secretariat" },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onNavigate(link.id)}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 5: Governance & Compliance */}
        <div className="space-y-3">
          <h5 className="font-cinzel font-bold text-white text-xs uppercase tracking-widest text-[#F3C969]">
            Compliance Badges
          </h5>
          <div className="space-y-2 text-xs">
            <div className="p-2 bg-[#2D0B16] rounded border border-stone-800">
              <span className="font-semibold text-white block">CIPC Reg: K2025191780</span>
              <span className="text-[10px] text-stone-400">Companies and Intellectual Property Commission</span>
            </div>
            <div className="p-2 bg-[#2D0B16] rounded border border-stone-800">
              <span className="font-semibold text-white block">POPIA Compliant</span>
              <span className="text-[10px] text-stone-400">Protection of Personal Information Act 4 of 2013</span>
            </div>
            <div className="p-2 bg-[#2D0B16] rounded border border-stone-800">
              <span className="font-semibold text-white block">Anti-GBV Safeguarding</span>
              <span className="text-[10px] text-stone-400">Standardized Survivor Protection Protocol</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800/80 bg-[#17030A] py-5 px-4 sm:px-6 text-[11px] text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © 2025–2026 Royal Sisterhood AK 1 to 4 Bloodline (NPC). All sovereign and institutional rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Mid Ennerdale, Johannesburg</span>
            <span>·</span>
            <span>Traditional Governance</span>
            <span>·</span>
            <span>B-BBEE / CSI Grant Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
