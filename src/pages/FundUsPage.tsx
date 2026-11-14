import React, { useState } from "react";
import { ShieldCheck, Download, CheckCircle2, Building, HeartHandshake, QrCode, FileText, ArrowRight, Award, Lock } from "lucide-react";
import { ROYAL_ORGANIZATION, COMPLIANCE_FRAMEWORK, STRATEGIC_PARTNERS } from "../data/organizationData";

interface FundUsPageProps {
  onOpenEft: (amount?: number) => void;
  onOpenDonorPack: () => void;
}

export const FundUsPage: React.FC<FundUsPageProps> = ({ onOpenEft, onOpenDonorPack }) => {
  const [selectedTier, setSelectedTier] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>("5000");

  const sponsorshipTiers = [
    {
      amount: 350,
      title: "Monthly Dignity & Hygiene Pack",
      impact: "Supplies sanitary care, toiletries, and nutrition for 1 schoolgirl or vulnerable mother.",
      programme: "Programme 05: Rural & Peri-Urban Food Security & Dignity",
    },
    {
      amount: 2500,
      title: "Digital Coding & Tech Bursary",
      impact: "Funds a 12-week accredited coding bootcamp with Future Coding Corp for 1 young woman.",
      programme: "Programme 04: Women’s Economic, Digital & Agri-Business Hub",
    },
    {
      amount: 5000,
      title: "Safe Haven Crisis Care Month",
      impact: "Provides 30 days of emergency shelter, psycho-social rehabilitation, and legal support for a GBV survivor.",
      programme: "Programme 03: Safe Haven & GBV Rapid Response Network",
    },
    {
      amount: 25000,
      title: "Household Agro-Garden Cluster",
      impact: "Installs rainwater harvesting tanks, irrigation, and seeds for 10 community household food gardens.",
      programme: "Programme 05: Food Security with RSBC Trading",
    },
    {
      amount: 100000,
      title: "Corporate CSI Programme Anchor",
      impact: "Adopts an entire provincial training cohort with dedicated co-branding and quarterly social audits.",
      programme: "All Flagship Initiatives (B-BBEE SED / ESD Compliant)",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#340B18] via-[#4A1525] to-[#2D0B16] text-white py-16 px-4 sm:px-6 border-b border-[#C59B27]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-heritage-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-[#F3C969] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Donor Due Diligence & Institutional Portal</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Invest in Sovereign Grassroots Transformation
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-3xl leading-relaxed font-light">
            Built specifically for Corporate Social Investment (CSI) directors, the National Lotteries Commission (NLC), ESG committees, and international philanthropic foundations requiring verifiable accountability.
          </p>
        </div>
      </section>

      {/* Official Registration & Due Diligence Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border-2 border-[#C59B27]/40 p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono uppercase font-bold text-[#8B1E3F]">
                Institutional Registration & Physical Domicile
              </span>
              <h2 className="font-cinzel text-2xl font-bold text-[#4A1525]">
                {ROYAL_ORGANIZATION.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                <p><strong>CIPC Registration:</strong> {ROYAL_ORGANIZATION.registrationNumber}</p>
                <p><strong>Institution Type:</strong> {ROYAL_ORGANIZATION.type}</p>
                <p><strong>Physical Address:</strong> {ROYAL_ORGANIZATION.headquarters.address}</p>
                <p><strong>Domicile:</strong> Mid Ennerdale, Johannesburg, Gauteng (1830)</p>
                <p><strong>Royal Patronage:</strong> King Adam Kok V & Founding Princesses</p>
                <p><strong>Bank Account:</strong> {ROYAL_ORGANIZATION.bankingDetails.bankName} · Acc: {ROYAL_ORGANIZATION.bankingDetails.accountNumber} · Branch: {ROYAL_ORGANIZATION.bankingDetails.branchCode}</p>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 bg-[#FAF5EE] rounded-xl border border-[#C59B27]/40 text-center space-y-3">
              <div className="w-24 h-32 mx-auto rounded-lg overflow-hidden border border-stone-300 shadow-sm bg-white p-1">
                <img
                  src="/drive_assets/official_registration_certificate.jpg"
                  alt="Official CIPC Certificate"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="font-cinzel font-bold text-sm text-[#4A1525]">
                Verified CIPC Registration
              </h4>
              <p className="text-[11px] text-stone-600">
                Reg: {ROYAL_ORGANIZATION.registrationNumber} · Signed by Princess Maggie Gibbs, Princess May Paulsen, and Princess Cornelia Julius.
              </p>
              <button
                onClick={onOpenDonorPack}
                className="w-full py-2.5 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#F3C969]" />
                <span>Download Full Donor Dossier</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Framework Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8B1E3F]">
            Governance Integrity
          </span>
          <h2 className="font-cinzel text-2xl font-bold text-[#4A1525]">
            Compliance & Fiduciary Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPLIANCE_FRAMEWORK.map((item, idx) => (
            <div key={idx} className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-cinzel font-bold text-sm text-[#4A1525]">{item.title}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="font-mono text-xs text-[#B85D3B] font-semibold block">{item.reference}</span>
              <p className="text-xs text-stone-600 leading-relaxed">{item.description}</p>
              <div className="pt-2 text-[10px] text-emerald-800 font-semibold uppercase tracking-wider">
                Status: {item.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Pack Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 bg-stone-100 rounded-2xl border border-stone-200 space-y-6">
          <div className="max-w-2xl">
            <h3 className="font-cinzel text-xl font-bold text-[#4A1525]">
              Downloadable Grant Documents & Memoranda
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Click any document below to inspect or download verified briefing papers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Organisational Profile (PDF)",
                size: "2.4 MB · Verified",
                desc: "Full history of Adam Kok I–IV, royal constitution, directors, and Mid Ennerdale infrastructure.",
              },
              {
                title: "CSI & Grant Proposal Deck",
                size: "4.1 MB · Multi-Year",
                desc: "Line-item budgets, KPI milestones, and B-BBEE Scorecard Socio-Economic Development (SED) alignment.",
              },
              {
                title: "Partner Ecosystem Brief",
                size: "1.8 MB · Active MoUs",
                desc: "Scopes of Changing Life Ministries, Future Coding Corp, Young Investments, and RSBC Trading.",
              },
            ].map((doc, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <FileText className="w-5 h-5 text-[#8B1E3F]" />
                    <span className="text-[10px] font-mono text-stone-500">{doc.size}</span>
                  </div>
                  <h4 className="font-cinzel text-sm font-bold text-stone-900">{doc.title}</h4>
                  <p className="text-xs text-stone-600 mt-1">{doc.desc}</p>
                </div>
                <button
                  onClick={onOpenDonorPack}
                  className="mt-4 w-full py-2 bg-stone-100 hover:bg-[#4A1525] hover:text-white text-stone-800 text-xs font-semibold rounded border border-stone-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Inspect & Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers & Interactive Contribution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8B1E3F]">
            Direct Impact Sponsorship
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525]">
            Choose a Sponsorship Package
          </h2>
          <p className="text-xs text-stone-600">
            Select an impact tier or enter a bespoke corporate contribution. All payments process directly to our verified institutional treasury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.amount}
              className={`p-5 rounded-xl border transition-all flex flex-col justify-between cursor-pointer ${
                selectedTier === tier.amount
                  ? "bg-white border-2 border-[#4A1525] shadow-lg scale-102"
                  : "bg-white border-stone-200 hover:border-stone-400 shadow-sm"
              }`}
              onClick={() => setSelectedTier(tier.amount)}
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#8B1E3F] block">
                  ZAR Tier
                </span>
                <div className="font-cinzel text-2xl font-bold text-[#4A1525] mt-1 tabular-nums">
                  R {tier.amount.toLocaleString()}
                </div>
                <h4 className="font-semibold text-xs text-stone-900 mt-2">{tier.title}</h4>
                <p className="text-[11px] text-stone-600 mt-2 leading-relaxed">{tier.impact}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEft(tier.amount);
                  }}
                  className={`w-full py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    selectedTier === tier.amount
                      ? "bg-[#4A1525] text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-[#4A1525] hover:text-white"
                  }`}
                >
                  Sponsor R {tier.amount.toLocaleString()}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Corporate Amount */}
        <div className="mt-8 p-6 bg-white rounded-xl border border-stone-200 max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Custom Corporate Grant / CSI Amount (ZAR)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 font-bold text-stone-500">R</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full pl-8 pr-4 py-2 border border-stone-300 rounded font-semibold text-sm"
              />
            </div>
          </div>
          <button
            onClick={() => onOpenEft(parseInt(customAmount, 10) || 5000)}
            className="w-full sm:w-auto px-6 py-2.5 mt-5 sm:mt-0 bg-[#C59B27] hover:bg-[#A68220] text-stone-950 font-bold text-xs uppercase tracking-wider rounded shadow transition-colors"
          >
            Disburse Funds
          </button>
        </div>
      </section>
    </div>
  );
};
