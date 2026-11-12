import React, { useState } from "react";
import { X, Download, FileText, CheckCircle2, ShieldCheck, Printer, Building2 } from "lucide-react";
import { ROYAL_ORGANIZATION, COMPLIANCE_FRAMEWORK, STRATEGIC_PARTNERS } from "../data/organizationData";

interface DonorPackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEft: () => void;
}

export const DonorPackModal: React.FC<DonorPackModalProps> = ({ isOpen, onClose, onOpenEft }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/markdown document download simulation
    const content = `
================================================================================
ROYAL SISTERHOOD AK 1 TO 4 BLOODLINE (NPC)
OFFICIAL DONOR DUE DILIGENCE & CSI INVESTMENT PACK (2025/2026)
================================================================================

LEGAL & INSTITUTIONAL PROFILE
--------------------------------------------------------------------------------
Organisation Name: Royal Sisterhood AK 1 to 4 Bloodline
CIPC Registration: K2025191780
Registered Address: 2445 5th Avenue, Mid Ennerdale, Johannesburg, Gauteng, 1830, South Africa
Patronage & Lineage: Under the Royal Blessing of King Adam Kok V
Founding Directors:
  - Princess Eva Cornelia Julius (Head of Royal Governance)
  - Princess Maggie Gibbs (Head of Community Welfare & Safe Havens)
  - Princess May Paulsen (Head of Economic Liberation & Youth Futures)

STRATEGIC IMPLEMENTATION PARTNERS
--------------------------------------------------------------------------------
1. Changing Life Ministries (Spiritual Restoration, Safe Haven Field Operations)
2. Future Coding Corp (Digital Literacy, Coding Labs, Youth Enablement)
3. Young Investments Holdings and Consulting (SMME Incubation, Enterprise Strategy)
4. RSBC Trading (Supply Chain, Bulk Humanitarian Logistics, Agri-Distribution)

GOVERNANCE & DUE DILIGENCE COMPLIANCE
--------------------------------------------------------------------------------
- CIPC Non-Profit Registration: K2025191780 (Active & Good Standing)
- SARS Tax Compliance: Tax PIN Clearance & Section 18A PBO Compliance Track
- POPIA Compliance: Protection of Personal Information Act compliant protocols
- Safeguarding & Anti-GBV: Board Resolution SG-2025 Zero-Tolerance Framework
- Financial Accountability: Ring-fenced programme accounts with dual authorization

OFFICIAL DISBURSEMENT BANKING PARTICULARS
--------------------------------------------------------------------------------
Bank: ${ROYAL_ORGANIZATION.bankingDetails.bankName}
Account Name: ${ROYAL_ORGANIZATION.bankingDetails.accountName}
Account Number: ${ROYAL_ORGANIZATION.bankingDetails.accountNumber}
Branch Code: ${ROYAL_ORGANIZATION.bankingDetails.branchCode}
SWIFT Code: ${ROYAL_ORGANIZATION.bankingDetails.swiftCode}
Payment Reference: DONOR-NAME-CSI

SECRETARIAT INQUIRIES
--------------------------------------------------------------------------------
Email: ${ROYAL_ORGANIZATION.contactEmail}
Phone: ${ROYAL_ORGANIZATION.secretariatPhone}
Emergency GBV Crisis Desk: 0800 428 428
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF8F5] rounded-xl shadow-2xl border border-[#C59B27]/40 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#4A1525] text-white flex items-start justify-between border-b border-[#C59B27]/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F3C969] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Institutional Pack · Reg: {ROYAL_ORGANIZATION.registrationNumber}</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold mt-1 text-white">
              Donor Due Diligence & CSI Dossier
            </h3>
            <p className="text-xs text-white/80 mt-0.5">
              Prepared for Corporate CSI Directors, NLC Grant Officers & Philanthropic Foundations
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#1F1F1F]">
          {/* Executive Overview & Registration Certificate */}
          <div className="p-4 bg-stone-100 rounded-lg border border-stone-200 flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-24 h-32 shrink-0 bg-white p-1 rounded border border-stone-300 shadow-sm overflow-hidden">
              <img
                src="/drive_assets/official_registration_certificate.jpg"
                alt="Official CIPC Company Registration Certificate"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="font-semibold text-[#4A1525] text-base mb-1">
                Institutional Mandate & CIPC Registration
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                The Royal Sisterhood AK 1 to 4 Bloodline (Reg: <strong>{ROYAL_ORGANIZATION.registrationNumber}</strong>) brings direct traditional authority, unmatched grassroots trust, and professional strategic execution to high-impact community transformation in South Africa. Headquartered in Mid Ennerdale, Johannesburg, the institution is officially governed by Founding Directors Princess Maggie Kok Gibbs, Princess May Kok Paulsen, and Princess Cornelia Kok Julius.
              </p>
            </div>
          </div>

          {/* Compliance Checklist */}
          <div>
            <h4 className="font-semibold text-stone-900 uppercase tracking-wider text-xs mb-3">
              Institutional Compliance & Governance Verification
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COMPLIANCE_FRAMEWORK.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded border border-stone-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 text-xs block">{item.title}</span>
                    <span className="text-[11px] font-mono text-[#B85D3B] font-medium block">{item.reference}</span>
                    <span className="text-[11px] text-stone-600 block mt-0.5 leading-tight">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Delivery Matrix */}
          <div>
            <h4 className="font-semibold text-stone-900 uppercase tracking-wider text-xs mb-3">
              Verified Co-Implementation Partners
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {STRATEGIC_PARTNERS.map((partner) => (
                <div key={partner.id} className="p-2.5 bg-stone-50 rounded border border-stone-200">
                  <div className="font-semibold text-[#4A1525]">{partner.name}</div>
                  <div className="text-[11px] text-[#B85D3B]">{partner.sector}</div>
                  <div className="text-[11px] text-stone-600 mt-1">{partner.mouStatus}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Banking Snapshot */}
          <div className="p-4 bg-[#FAF5EE] rounded-lg border border-[#C59B27]/40">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-semibold text-[#8B1E3F]">Designated Bank Account</span>
                <p className="font-bold text-stone-900 text-sm">{ROYAL_ORGANIZATION.bankingDetails.accountName}</p>
                <p className="text-xs text-stone-600">
                  {ROYAL_ORGANIZATION.bankingDetails.bankName} · Acc: {ROYAL_ORGANIZATION.bankingDetails.accountNumber} · Branch: {ROYAL_ORGANIZATION.bankingDetails.branchCode}
                </p>
              </div>
              <button
                onClick={onOpenEft}
                className="px-3 py-1.5 bg-[#4A1525] text-white text-xs font-semibold rounded hover:bg-[#340C18] transition-colors"
              >
                Copy Details
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-stone-500">
            {downloadSuccess ? (
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Dossier downloaded successfully
              </span>
            ) : (
              <span>Includes full constitution, audited budget tables, and partner MoUs</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-2 border border-stone-300 hover:bg-stone-200 rounded text-xs font-medium text-stone-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Brief</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-[#C59B27] hover:bg-[#A68220] text-stone-950 font-bold rounded text-xs flex items-center gap-1.5 shadow transition-colors cursor-pointer"
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
