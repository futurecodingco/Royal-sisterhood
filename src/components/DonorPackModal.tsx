import React, { useState } from "react";
import { X, Download, CheckCircle2, ShieldCheck, Printer } from "lucide-react";
import {
  ROYAL_ORGANIZATION,
  COMPLIANCE_FRAMEWORK,
  STRATEGIC_PARTNERS,
  FLAGSHIP_PROGRAMMES,
} from "../data/organizationData";
import { HeritageImage } from "./HeritageImage";

interface DonorPackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEft: () => void;
}

export const DonorPackModal: React.FC<DonorPackModalProps> = ({ isOpen, onClose, onOpenEft }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    const programmeLines = FLAGSHIP_PROGRAMMES.map(
      (p) => `${p.number}. ${p.title} — Lead: ${p.leadPartner}`
    ).join("\n");

    const content = `
================================================================================
ROYAL SISTERHOOD AK 1 TO 4 BLOODLINE (NPC)
OFFICIAL DONOR DUE DILIGENCE & CSI INVESTMENT PACK (2025/2026)
================================================================================

LEGAL & INSTITUTIONAL PROFILE
--------------------------------------------------------------------------------
Organisation Name: ${ROYAL_ORGANIZATION.name}
CIPC Registration: ${ROYAL_ORGANIZATION.registrationNumber} (${ROYAL_ORGANIZATION.cipcCode})
Registered Address: ${ROYAL_ORGANIZATION.headquarters.address}, ${ROYAL_ORGANIZATION.headquarters.city}, ${ROYAL_ORGANIZATION.headquarters.province}, ${ROYAL_ORGANIZATION.headquarters.postalCode}, ${ROYAL_ORGANIZATION.headquarters.country}
Patronage & Lineage: ${ROYAL_ORGANIZATION.patronage}
Founding Directors:
  - Princess Cornelia Eva Julius (Head of Royal Governance) — Tel: 066 586 2829
  - Princess Maggie Kok Gibbs (Head of Community Welfare & Safe Havens) — Tel: 081 302 7763
  - Princess May Kok Paulsen (Head of Economic Liberation & Youth Futures)

6 NATIONAL FLAGSHIP PROGRAMMES
--------------------------------------------------------------------------------
${programmeLines}

STRATEGIC IMPLEMENTATION PARTNERS
--------------------------------------------------------------------------------
1. Changing Life Ministries (Spiritual Restoration, Safe Haven Field Operations)
2. Future Coding Corp (Digital Literacy, Coding Labs, Youth Enablement)
3. Young Investments Holdings and Consulting (SMME Incubation, Enterprise Strategy)
4. RSBC Trading (Supply Chain, Bulk Humanitarian Logistics, Agri-Distribution)

GOVERNANCE & DUE DILIGENCE COMPLIANCE
--------------------------------------------------------------------------------
- CIPC Non-Profit Registration: ${ROYAL_ORGANIZATION.registrationNumber} (${ROYAL_ORGANIZATION.cipcCode})
- SARS Tax Compliance: Tax PIN Clearance & Section 18A PBO Compliance Track
- POPIA Compliance: Protection of Personal Information Act 4 of 2013
- Safeguarding & Anti-GBV: Board Resolution SG-2025 Zero-Tolerance Framework
- Financial Accountability: Ring-fenced programme accounts with dual authorization

OFFICIAL CAPITEC BANK DISBURSEMENT PARTICULARS
--------------------------------------------------------------------------------
Bank: ${ROYAL_ORGANIZATION.bankingDetails.bankName}
Account Name: ${ROYAL_ORGANIZATION.bankingDetails.accountName}
Account Type: ${ROYAL_ORGANIZATION.bankingDetails.accountType}
Account Number: ${ROYAL_ORGANIZATION.bankingDetails.accountNumber}
Branch Code: ${ROYAL_ORGANIZATION.bankingDetails.branchCode}
SWIFT Code: ${ROYAL_ORGANIZATION.bankingDetails.swiftCode}
Payment Reference: DONOR-NAME-AK14

SECRETARIAT INQUIRIES
--------------------------------------------------------------------------------
Email: ${ROYAL_ORGANIZATION.contactEmail}
Telephone: ${ROYAL_ORGANIZATION.secretariatPhone}
Emergency GBV Crisis Desk: ${ROYAL_ORGANIZATION.emergencyCrisisLine}
================================================================================
`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Royal_Sisterhood_AK1to4_Donor_Due_Diligence_Pack.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donor-pack-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF8F5] rounded-xl shadow-2xl border border-[#C59B27]/40 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#4A1525] text-white flex items-start justify-between border-b border-[#C59B27]/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#F3C969] tabular-nums">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Official Institutional Pack · Reg {ROYAL_ORGANIZATION.registrationNumber}</span>
            </div>
            <h3 id="donor-pack-title" className="font-cinzel text-xl sm:text-2xl font-bold mt-1 text-white">
              Donor Due Diligence & CSI Dossier
            </h3>
            <p className="text-xs text-stone-200 mt-0.5">
              Prepared for Corporate CSI Directors, NLC Grant Officers & Philanthropic Foundations
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close donor dossier modal"
            className="p-1.5 text-white/80 hover:text-white rounded-md hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#1F1F1F]">
          {/* Executive Overview & Registration Certificate */}
          <div className="p-4 bg-[#F3EFE7] rounded-lg border border-stone-200 flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-24 h-32 shrink-0 bg-white p-1 rounded border border-stone-300 overflow-hidden">
              <HeritageImage
                src="/drive_assets/official_registration_certificate.jpg"
                alt="Official CIPC Company Registration Certificate"
                fallbackLabel="CIPC 2025/191780/07"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="font-cinzel font-bold text-[#4A1525] text-base mb-1">
                Institutional Mandate & CIPC Registration
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                The Royal Sisterhood AK 1 to 4 Bloodline (Reg:{" "}
                <strong className="tabular-nums">{ROYAL_ORGANIZATION.registrationNumber}</strong>) brings direct traditional authority, grassroots community trust, and accountable execution to social transformation across South Africa. Headquartered in Mid Ennerdale, Johannesburg, the institution is governed by Founding Directors{" "}
                <strong>Princess Maggie Kok Gibbs</strong>,{" "}
                <strong>Princess May Kok Paulsen</strong>, and{" "}
                <strong>Princess Cornelia Eva Julius</strong>.
              </p>
            </div>
          </div>

          {/* Compliance Checklist */}
          <div>
            <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider mb-3">
              Institutional Compliance & Governance Verification
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COMPLIANCE_FRAMEWORK.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-lg border border-stone-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 text-xs block">{item.title}</span>
                    <span className="text-[11px] font-mono text-[#B85D3B] font-medium block tabular-nums">
                      {item.reference}
                    </span>
                    <span className="text-[11px] text-stone-600 block mt-0.5 leading-snug">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Delivery Matrix */}
          <div>
            <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider mb-3">
              Verified Co-Implementation Partners
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {STRATEGIC_PARTNERS.map((partner) => (
                <div key={partner.id} className="p-3 bg-white rounded-lg border border-stone-200">
                  <div className="font-semibold text-[#4A1525]">{partner.name}</div>
                  <div className="text-[11px] text-[#B85D3B]">{partner.sector}</div>
                  <div className="text-[11px] text-stone-600 mt-1">{partner.mouStatus}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Banking Snapshot */}
          <div className="p-4 bg-[#F3EFE7] rounded-lg border border-[#C59B27]/40">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-[#8B1E3F] block">
                  Official Capitec Bank Account
                </span>
                <p className="font-bold text-stone-900 text-sm">
                  {ROYAL_ORGANIZATION.bankingDetails.accountName}
                </p>
                <p className="text-xs text-stone-700 tabular-nums mt-0.5">
                  {ROYAL_ORGANIZATION.bankingDetails.bankName} · Acc:{" "}
                  <span className="font-mono font-semibold">{ROYAL_ORGANIZATION.bankingDetails.accountNumber}</span> · Branch:{" "}
                  <span className="font-mono font-semibold">{ROYAL_ORGANIZATION.bankingDetails.branchCode}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenEft}
                className="px-4 py-2 bg-[#4A1525] text-white text-xs font-semibold rounded-md hover:bg-[#340C18] transition-colors cursor-pointer whitespace-nowrap"
              >
                Open EFT & Copy
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-stone-600">
            {downloadSuccess ? (
              <span className="text-emerald-800 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Dossier downloaded successfully
              </span>
            ) : (
              <span>Includes CIPC details, 6 flagship programmes, compliance & Capitec banking</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-3.5 py-2 border border-stone-300 bg-white hover:bg-stone-50 rounded-md text-xs font-medium text-stone-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Brief</span>
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="px-4 py-2 bg-[#C59B27] hover:bg-[#B08920] text-stone-950 font-bold rounded-md text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Pack</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
