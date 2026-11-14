import React, { useState } from "react";
import { ShieldCheck, Download, CheckCircle2, FileText, Copy, Check } from "lucide-react";
import { ROYAL_ORGANIZATION, COMPLIANCE_FRAMEWORK, FlagshipProgramme } from "../data/organizationData";
import { HeritageImage } from "../components/HeritageImage";
import { KhoisanDivider } from "../components/KhoisanDivider";
import { PageHeroBanner } from "../components/PageHeroBanner";
import { CSIImpactSimulator } from "../components/CSIImpactSimulator";

interface FundUsPageProps {
  onOpenEft: (amount?: number, programme?: FlagshipProgramme) => void;
  onOpenDonorPack: () => void;
}

export const FundUsPage: React.FC<FundUsPageProps> = ({ onOpenEft, onOpenDonorPack }) => {
  const [selectedTier, setSelectedTier] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>("5000");
  const [copiedAccount, setCopiedAccount] = useState(false);

  const sponsorshipTiers = [
    {
      amount: 350,
      title: "Monthly Dignity & Hygiene Pack",
      impact: "Supplies sanitary care, toiletries, and nutrition for 1 schoolgirl or vulnerable mother.",
    },
    {
      amount: 2500,
      title: "Digital Coding & Tech Bursary",
      impact: "Funds a 12-week accredited coding bootcamp with Future Coding Corp for 1 young woman.",
    },
    {
      amount: 5000,
      title: "Safe Haven Crisis Care Month",
      impact: "Provides 30 days of emergency shelter, psycho-social rehabilitation, and legal support for a GBV survivor.",
    },
    {
      amount: 25000,
      title: "Household Agro-Garden Cluster",
      impact: "Installs rainwater harvesting tanks, irrigation, and seeds for 10 community household food gardens.",
    },
    {
      amount: 100000,
      title: "Corporate CSI Programme Anchor",
      impact: "Adopts an entire provincial training cohort with dedicated co-branding and quarterly social audits.",
    },
  ];

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(ROYAL_ORGANIZATION.bankingDetails.accountNumber);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  return (
    <div className="space-y-16 pb-20">
      <PageHeroBanner
        kickerIcon={<ShieldCheck className="w-4 h-4 shrink-0" />}
        kickerText="Donor Due Diligence & Institutional Portal"
        title="Invest in Sovereign Grassroots Transformation"
        subtitle="Prepared for Corporate Social Investment (CSI) directors, the National Lotteries Commission (NLC), ESG committees, and international philanthropic foundations requiring verifiable accountability."
      />

      {/* Official Registration & Due Diligence Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl border border-[#C59B27]/45 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8B1E3F] block">
                Institutional Registration & Physical Domicile
              </span>
              <h2 className="font-cinzel text-2xl font-bold text-[#4A1525]">
                {ROYAL_ORGANIZATION.name}
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs text-stone-700 pt-2 border-t border-stone-200">
                <div>
                  <dt className="text-stone-500 font-medium">CIPC Registration</dt>
                  <dd className="font-mono font-semibold text-stone-900 tabular-nums mt-0.5">
                    {ROYAL_ORGANIZATION.registrationNumber} ({ROYAL_ORGANIZATION.cipcCode})
                  </dd>
                </div>
                <div>
                  <dt className="text-stone-500 font-medium">Institution Type</dt>
                  <dd className="font-semibold text-stone-900 mt-0.5">{ROYAL_ORGANIZATION.type}</dd>
                </div>
                <div>
                  <dt className="text-stone-500 font-medium">Physical Domicile</dt>
                  <dd className="font-semibold text-stone-900 mt-0.5">
                    {ROYAL_ORGANIZATION.headquarters.address}, Mid Ennerdale, Johannesburg, 1830
                  </dd>
                </div>
                <div>
                  <dt className="text-stone-500 font-medium">Royal Patronage</dt>
                  <dd className="font-semibold text-stone-900 mt-0.5">
                    His Majesty King Adam Kok V & Founding Princesses
                  </dd>
                </div>
                <div className="sm:col-span-2 p-3.5 bg-[#F3EFE7] rounded-lg border border-[#C59B27]/35 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <dt className="text-[11px] font-semibold text-[#8B1E3F]">
                      Official Capitec Bank Account
                    </dt>
                    <dd className="font-mono text-xs sm:text-sm font-bold text-[#4A1525] tabular-nums mt-0.5">
                      {ROYAL_ORGANIZATION.bankingDetails.bankName} · Acc: {ROYAL_ORGANIZATION.bankingDetails.accountNumber} · Branch: {ROYAL_ORGANIZATION.bankingDetails.branchCode} · SWIFT: {ROYAL_ORGANIZATION.bankingDetails.swiftCode}
                    </dd>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAccount}
                    className="px-3 py-1.5 bg-white hover:bg-stone-50 border border-stone-300 rounded-md text-xs font-semibold text-stone-800 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    {copiedAccount ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAccount ? "Account Copied" : "Copy Account No."}</span>
                  </button>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-4 p-5 bg-[#F3EFE7] rounded-xl border border-[#C59B27]/35 text-center space-y-3">
              <div className="preserve-light w-24 h-32 mx-auto rounded-md overflow-hidden border border-stone-300 bg-white p-1">
                <HeritageImage
                  src="/drive_assets/official_registration_certificate.jpg"
                  alt="Official CIPC Registration Certificate"
                  fallbackLabel="CIPC 2025/191780/07"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="font-cinzel font-bold text-sm text-[#4A1525]">
                Verified CIPC Registration
              </h4>
              <p className="text-[11px] text-stone-600 leading-relaxed tabular-nums">
                Reg: {ROYAL_ORGANIZATION.registrationNumber} · Signed by Princess Maggie Kok Gibbs, Princess May Kok Paulsen, and Princess Cornelia Eva Julius.
              </p>
              <button
                type="button"
                onClick={onOpenDonorPack}
                className="w-full py-2.5 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#F3C969]" />
                <span>Download Full Donor Dossier</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Framework */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#8B1E3F]">
            Governance Integrity
          </span>
          <h2 className="font-cinzel text-2xl font-bold text-[#4A1525]">
            Compliance & Fiduciary Standards
          </h2>
          <KhoisanDivider className="max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPLIANCE_FRAMEWORK.map((item, idx) => (
            <div key={idx} className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-cinzel font-bold text-sm text-[#4A1525]">{item.title}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              </div>
              <span className="font-mono text-xs text-[#B85D3B] font-semibold block tabular-nums">
                {item.reference}
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">{item.description}</p>
              <div className="pt-2 border-t border-stone-100 text-[11px] text-emerald-800 font-semibold">
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Pack Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 bg-[#F3EFE7] rounded-xl border border-[#E5DDD0] space-y-6">
          <div className="max-w-2xl">
            <h3 className="font-cinzel text-xl font-bold text-[#4A1525]">
              Grant Briefings & Institutional Memoranda
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Inspect or download compiled briefing packs prepared for corporate CSI committees and grant boards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Organisational Profile Brief",
                meta: "Compiled Dossier · Verified",
                desc: "Full history of Adam Kok I–IV, royal governance mandate, founding directors, and Mid Ennerdale office.",
              },
              {
                title: "CSI & Grant Budget Schedule",
                meta: "6 Programmes · Multi-Year",
                desc: "Line-item funding requirements, KPI milestones, and B-BBEE Socio-Economic Development (SED) alignment.",
              },
              {
                title: "Partner Ecosystem MoU Summary",
                meta: "4 Anchor Partners · 2025–2028",
                desc: "Scopes of Changing Life Ministries, Future Coding Corp, Young Investments, and RSBC Trading.",
              },
            ].map((doc, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-lg border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <FileText className="w-5 h-5 text-[#8B1E3F]" />
                    <span className="text-[11px] font-mono text-stone-500 tabular-nums">{doc.meta}</span>
                  </div>
                  <h4 className="font-cinzel text-sm font-bold text-stone-900">{doc.title}</h4>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">{doc.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={onOpenDonorPack}
                  className="mt-4 w-full py-2 bg-stone-100 hover:bg-[#4A1525] hover:text-white text-stone-800 text-xs font-semibold rounded-md border border-stone-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Inspect & Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Impact Simulator Sandbox */}
      <CSIImpactSimulator
        onProceedToEft={(prog, amt) => onOpenEft(amt, prog)}
      />

      {/* Sponsorship Tiers & Interactive Contribution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#8B1E3F]">
            Direct Impact Sponsorship
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525]">
            Choose a Sponsorship Package
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Select an impact tier or enter a custom contribution to open Capitec Bank EFT instructions and generate a donor reference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.amount}
              className={`p-5 rounded-xl border transition-shadow flex flex-col justify-between cursor-pointer ${
                selectedTier === tier.amount
                  ? "bg-white border-[#4A1525] ring-2 ring-[#4A1525] shadow-md"
                  : "bg-white border-stone-200 hover:border-stone-400 shadow-sm"
              }`}
              onClick={() => setSelectedTier(tier.amount)}
            >
              <div>
                <span className="text-[11px] font-medium text-[#8B1E3F] block">
                  ZAR Impact Tier
                </span>
                <div className="font-cinzel text-2xl font-bold text-[#4A1525] mt-1 tabular-nums">
                  R {tier.amount.toLocaleString()}
                </div>
                <h4 className="font-semibold text-xs text-stone-900 mt-2">{tier.title}</h4>
                <p className="text-[11px] text-stone-600 mt-2 leading-relaxed">{tier.impact}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEft(tier.amount);
                  }}
                  className={`w-full py-2 rounded-md text-xs font-semibold transition-colors cursor-pointer tabular-nums ${
                    selectedTier === tier.amount
                      ? "bg-[#4A1525] text-white"
                      : "bg-stone-100 text-stone-800 hover:bg-[#4A1525] hover:text-white"
                  }`}
                >
                  Sponsor R {tier.amount.toLocaleString()}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Corporate Amount */}
        <div className="mt-8 p-6 bg-white rounded-xl border border-stone-200 max-w-xl mx-auto flex flex-col sm:flex-row items-end gap-4 shadow-sm">
          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Custom Corporate Grant / CSI Amount (ZAR)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 font-semibold text-stone-500">R</span>
              <input
                type="number"
                min="50"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full pl-8 pr-4 py-2 border border-stone-300 rounded-md font-semibold text-sm tabular-nums"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenEft(parseInt(customAmount, 10) || 5000)}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#C59B27] hover:bg-[#B08920] text-stone-950 font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer whitespace-nowrap"
          >
            Proceed to Capitec EFT
          </button>
        </div>
      </section>
    </div>
  );
};
