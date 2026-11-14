import React from "react";
import { MapPin, Mail, Phone, Crown } from "lucide-react";
import { ROYAL_ORGANIZATION, STRATEGIC_PARTNERS } from "../data/organizationData";
import { PageId } from "./Navbar";
import { HeritageImage } from "./HeritageImage";

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
    <footer className="bg-[#240711] text-stone-300 border-t border-[#C59B27]/40 text-xs">
      {/* Top Banner in Footer: Institutional Assurance */}
      <div className="border-b border-stone-800 bg-[#1D050D] py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#4A1525] border border-[#C59B27]/60 flex items-center justify-center shrink-0">
              <Crown className="w-5 h-5 text-[#F3C969]" />
            </div>
            <div>
              <h4 className="font-cinzel text-white text-sm font-bold">
                Royal Governance & Traditional Accountability
              </h4>
              <p className="text-xs text-stone-300 mt-0.5">
                Direct institutional mandate from the Griqua Royal House and the Royal Princesses of King Adam Kok V.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenConfidentialHelp}
              className="px-4 py-2 bg-[#8B1E3F] hover:bg-[#6D1530] text-white text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Emergency GBV Desk
            </button>
            <button
              type="button"
              onClick={onOpenDonate}
              className="px-4 py-2 bg-[#C59B27] hover:bg-[#B08920] text-stone-950 text-xs font-bold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Capitec EFT & CSI Grants
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Col 1 & 2: Brand & Legal */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center p-1 border border-[#C59B27]/50 overflow-hidden shrink-0">
              <HeritageImage
                src="/drive_assets/royal_sisterhood_official_crest.jpg"
                alt="Royal Sisterhood AK 1 to 4 Seal"
                fallbackLabel="AK 1–4"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-cinzel font-bold text-base text-white block leading-tight">
                Royal Sisterhood AK 1 to 4 Bloodline
              </span>
              <span className="text-xs font-mono text-[#F3C969] tabular-nums block mt-0.5">
                CIPC Reg: {ROYAL_ORGANIZATION.registrationNumber}
              </span>
            </div>
          </div>

          <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
            A South African non-profit institution founded by the Royal Princesses and sisters of King Adam Kok V—championing Griqua constitutional dignity, digital and enterprise empowerment, and frontline anti-GBV protection.
          </p>

          <div className="space-y-2 text-xs text-stone-300 pt-1">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
              <span>
                {ROYAL_ORGANIZATION.headquarters.address}, {ROYAL_ORGANIZATION.headquarters.city}, {ROYAL_ORGANIZATION.headquarters.province}, {ROYAL_ORGANIZATION.headquarters.postalCode}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C59B27] shrink-0" />
              <a
                href={`mailto:${ROYAL_ORGANIZATION.contactEmail}`}
                className="hover:text-white transition-colors underline"
              >
                {ROYAL_ORGANIZATION.contactEmail}
              </a>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
              <div className="space-y-1 tabular-nums">
                <a href="tel:0813027763" className="block hover:text-white transition-colors">
                  Princess Maggie Kok Gibbs: 081 302 7763
                </a>
                <a href="tel:0665862829" className="block hover:text-white transition-colors">
                  Princess Cornelia Eva Julius: 066 586 2829
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: Strategic Ecosystem */}
        <div className="space-y-3">
          <h5 className="font-cinzel font-bold text-xs tracking-wider text-[#F3C969]">
            Strategic Ecosystem
          </h5>
          <ul className="space-y-2.5 text-xs">
            {STRATEGIC_PARTNERS.map((partner) => (
              <li key={partner.id}>
                <button
                  type="button"
                  onClick={() => onNavigate("partners")}
                  className="text-left hover:text-[#F3C969] transition-colors cursor-pointer"
                >
                  <span className="block font-medium text-stone-100">{partner.name}</span>
                  <span className="block text-[11px] text-stone-400">{partner.badge}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Institutional Navigation */}
        <div className="space-y-3">
          <h5 className="font-cinzel font-bold text-xs tracking-wider text-[#F3C969]">
            Institutional Pages
          </h5>
          <ul className="space-y-2 text-xs">
            {[
              { id: "home" as PageId, label: "Institutional Overview" },
              { id: "leadership" as PageId, label: "Adam Kok I–V Lineage" },
              { id: "programmes" as PageId, label: "6 Flagship Programmes" },
              { id: "support" as PageId, label: "GBV Emergency & Safe Havens" },
              { id: "fund-us" as PageId, label: "CSI & Donor Due Diligence" },
              { id: "gallery" as PageId, label: "Royal & Community Media" },
              { id: "contact" as PageId, label: "Mid Ennerdale Secretariat" },
            ].map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(link.id)}
                  className="text-stone-300 hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 5: Treasury & Governance */}
        <div className="space-y-3">
          <h5 className="font-cinzel font-bold text-xs tracking-wider text-[#F3C969]">
            Treasury & Compliance
          </h5>
          <dl className="space-y-2.5 text-xs border-t border-stone-800 pt-2.5 divide-y divide-stone-800/80">
            <div className="pb-2">
              <dt className="font-semibold text-white">CIPC Registration</dt>
              <dd className="text-[11px] text-stone-400 tabular-nums mt-0.5">
                {ROYAL_ORGANIZATION.registrationNumber} ({ROYAL_ORGANIZATION.cipcCode})
              </dd>
            </div>
            <div className="pb-2">
              <dt className="font-semibold text-white">Capitec Bank Treasury</dt>
              <dd className="text-[11px] text-stone-400 tabular-nums mt-0.5">
                Acc {ROYAL_ORGANIZATION.bankingDetails.accountNumber} · Branch {ROYAL_ORGANIZATION.bankingDetails.branchCode}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Statutory Standards</dt>
              <dd className="text-[11px] text-stone-400 mt-0.5">
                POPIA Act 4 of 2013 · Board Anti-GBV Safeguarding
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800/80 bg-[#17030A] py-5 px-4 sm:px-6 text-[11px] text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © 2025–2026 Royal Sisterhood AK 1 to 4 Bloodline (NPC). All institutional rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>Mid Ennerdale, Johannesburg</span>
            <span aria-hidden="true">·</span>
            <span>Traditional Governance</span>
            <span aria-hidden="true">·</span>
            <span>CSI & Grant Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
