import React from "react";
import { STRATEGIC_PARTNERS, StrategicPartner } from "../data/organizationData";
import { Handshake, Award, CheckCircle2, Building, ShieldCheck, ArrowRight, FileCheck, Layers } from "lucide-react";

interface PartnersPageProps {
  onOpenBecomePartner: () => void;
  onOpenDonate: () => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({
  onOpenBecomePartner,
  onOpenDonate,
}) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#340B18] via-[#4A1525] to-[#2D0B16] text-white py-16 px-4 sm:px-6 border-b border-[#C59B27]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-heritage-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-[#F3C969] text-xs font-semibold uppercase tracking-wider">
            <Handshake className="w-3.5 h-3.5" />
            <span>National Implementation Ecosystem</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Strategic Partners & Co-Delivery Coalition
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-3xl leading-relaxed font-light">
            We don't work in isolation. Royal Sisterhood AK 1 to 4 Bloodline unites traditional authority with premier technical, spiritual, economic, and supply chain partners to guarantee professional, nationwide delivery across South Africa.
          </p>
        </div>
      </section>

      {/* 4 Official Partners Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8B1E3F]">
            Accredited Implementation Consortium
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525]">
            Our Four Strategic Anchors
          </h2>
          <p className="text-xs text-stone-600">
            Each partner holds a dedicated portfolio governed by formal Memoranda of Understanding (MoU) with the Royal House.
          </p>
        </div>

        <div className="space-y-10">
          {STRATEGIC_PARTNERS.map((partner, idx) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Partner Info (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-[#4A1525] text-[#F3C969] text-xs font-mono font-bold rounded">
                      {partner.badge}
                    </span>
                    <span className="text-xs font-bold text-[#B85D3B] uppercase tracking-wider">
                      {partner.sector}
                    </span>
                    <span className="text-xs text-stone-400">·</span>
                    <span className="text-xs text-stone-500 font-mono">{partner.mouStatus}</span>
                  </div>

                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525]">
                    {partner.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-stone-800">
                    {partner.focus}
                  </p>

                  <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-[#8B1E3F] mb-1">
                      Institutional Scope of Collaboration
                    </h4>
                    <p>{partner.collaborationScope}</p>
                  </div>

                  {/* Key Joint Initiatives */}
                  <div>
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-stone-900 mb-2">
                      Key Joint Programmes & Workstreams
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {partner.keyInitiatives.map((init, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2 p-2 bg-stone-50/80 rounded border border-stone-100 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                          <span>{init}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Deliverables Snapshot (4 cols) */}
                <div className="lg:col-span-4 p-6 bg-[#FAF5EE] rounded-xl border border-[#C59B27]/40 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#4A1525] uppercase tracking-wider">
                    <Award className="w-4 h-4 text-[#C59B27]" />
                    <span>Verified Deliverables</span>
                  </div>

                  <ul className="space-y-2.5">
                    {partner.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="text-xs text-stone-800 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E3F] shrink-0 mt-1.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-stone-200">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
                      <FileCheck className="w-4 h-4 text-emerald-600" />
                      <span>Formal MoU Executed</span>
                    </div>
                    <p className="text-[11px] text-stone-600 mt-0.5">
                      Audited operational reporting in place
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Joint Intervention Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8B1E3F] uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Consortium Capability Mapping</span>
          </div>

          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#4A1525]">
            The National Co-Delivery Matrix
          </h3>
          <p className="text-xs text-stone-600 max-w-2xl">
            How our partners collaborate across the value chain—from frontline crisis intervention to sustainable commercial inclusion.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-stone-300 bg-stone-100 text-stone-700 uppercase font-semibold">
                  <th className="py-3 px-4">Intervention Stage</th>
                  <th className="py-3 px-4">Lead Organization</th>
                  <th className="py-3 px-4">Operational Output</th>
                  <th className="py-3 px-4">Target Community Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#4A1525]">1. Emergency Crisis & Safe Havens</td>
                  <td className="py-3.5 px-4 font-medium">Changing Life Ministries & Royal Secretariat</td>
                  <td className="py-3.5 px-4">24/7 Rapid Response, Crisis Sheltering, Court Escort</td>
                  <td className="py-3.5 px-4">Zero survivors turned away; immediate trauma reduction</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#4A1525]">2. Digital Enablement & Coding</td>
                  <td className="py-3.5 px-4 font-medium">Future Coding Corp</td>
                  <td className="py-3.5 px-4">12-Week Coding Bootcamps, Tech Laboratories</td>
                  <td className="py-3.5 px-4">Accredited graduates placed into digital careers</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#4A1525]">3. Enterprise Incubation & ESD</td>
                  <td className="py-3.5 px-4 font-medium">Young Investments Holdings and Consulting</td>
                  <td className="py-3.5 px-4">Financial Literacy, SMME Compliance, Seed Strategy</td>
                  <td className="py-3.5 px-4">Bankable female-led micro-enterprises</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#4A1525]">4. Food Sovereignty & Trade</td>
                  <td className="py-3.5 px-4 font-medium">RSBC Trading</td>
                  <td className="py-3.5 px-4">Cold-Chain Distribution, Agri-Input Procurement</td>
                  <td className="py-3.5 px-4">14,500 monthly meals; bulk dignity kits supplied</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#4A1525]">5. Sovereign Traditional Oversight</td>
                  <td className="py-3.5 px-4 font-medium">Royal Sisterhood AK 1 to 4 Bloodline</td>
                  <td className="py-3.5 px-4">National Imbizo Assemblies, Civic Legitimacy</td>
                  <td className="py-3.5 px-4">9 Provinces unified under customary peace</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Become a Strategic Partner CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#340B18] via-[#4A1525] to-[#340B18] rounded-2xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-[#F3C969]">
              Expand the Coalition
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Join the Sovereign Implementation Ecosystem
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              We welcome corporate CSI divisions, academic institutes, international donor funds, and regional cooperatives aligned with women's empowerment and anti-GBV action.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBecomePartner}
              className="px-6 py-3.5 bg-[#C59B27] hover:bg-[#B08920] text-stone-950 font-bold text-xs uppercase tracking-wider rounded shadow-lg transition-colors cursor-pointer"
            >
              Apply to Join Coalition
            </button>
            <button
              onClick={onOpenDonate}
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              Fund a Joint Initiative
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
