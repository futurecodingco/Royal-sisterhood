import React, { useState } from "react";
import { FLAGSHIP_PROGRAMMES, FlagshipProgramme } from "../data/organizationData";
import { CheckCircle2, HeartHandshake, Eye, MapPin, Users, Banknote, Sparkles, Filter } from "lucide-react";
import { PageId } from "../components/Navbar";

interface ProgrammesPageProps {
  onSelectProgramme: (programme: FlagshipProgramme) => void;
  onOpenDonate: (programme?: FlagshipProgramme) => void;
}

export const ProgrammesPage: React.FC<ProgrammesPageProps> = ({
  onSelectProgramme,
  onOpenDonate,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredProgrammes = FLAGSHIP_PROGRAMMES.filter((prog) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "heritage" && (prog.id === "griqua-royal-imbizo" || prog.id === "heritage-youth-archive")) return true;
    if (selectedFilter === "gbv" && (prog.id === "gbv-safe-haven-network" || prog.id === "spiritual-healing-mentorship")) return true;
    if (selectedFilter === "economic" && (prog.id === "women-economic-tech-hub" || prog.id === "food-security-dignity-drive")) return true;
    return true;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#340B18] via-[#4A1525] to-[#2D0B16] text-white py-16 px-4 sm:px-6 border-b border-[#C59B27]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-heritage-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-[#F3C969] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>National Transformation Blueprint</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            6 Flagship Initiatives for South Africa
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-3xl leading-relaxed font-light">
            Designed for scale, measurable beneficiary outcomes, and corporate CSI investment. Each initiative combines royal traditional authority with the specialized execution of our accredited strategic partners.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                selectedFilter === "all"
                  ? "bg-white text-[#4A1525] shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              All Programmes (6)
            </button>
            <button
              onClick={() => setSelectedFilter("heritage")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                selectedFilter === "heritage"
                  ? "bg-white text-[#4A1525] shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Heritage & Royal Imbizo
            </button>
            <button
              onClick={() => setSelectedFilter("gbv")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                selectedFilter === "gbv"
                  ? "bg-white text-[#4A1525] shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Safe Havens & GBV
            </button>
            <button
              onClick={() => setSelectedFilter("economic")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                selectedFilter === "economic"
                  ? "bg-white text-[#4A1525] shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Digital, Agri & Food Security
            </button>
          </div>

          <div className="text-xs text-stone-500">
            Showing <strong className="text-stone-800">{filteredProgrammes.length}</strong> verified flagship programmes
          </div>
        </div>

        {/* Programme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProgrammes.map((programme) => (
            <div
              key={programme.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image slot */}
                {programme.image ? (
                  <div className="h-52 overflow-hidden relative border-b border-stone-200">
                    <img
                      src={programme.image}
                      alt={programme.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#4A1525] text-white text-xs font-mono font-bold rounded shadow">
                      Programme {programme.number}
                    </div>
                  </div>
                ) : (
                  <div className="h-52 bg-gradient-to-br from-[#4A1525]/15 via-[#FAF5EE] to-[#8B1E3F]/10 flex flex-col justify-center p-6 border-b border-stone-200 relative">
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#4A1525] text-white text-xs font-mono font-bold rounded">
                      Programme {programme.number}
                    </div>
                    <span className="text-[11px] font-mono text-[#8B1E3F] uppercase font-bold tracking-wider">
                      Flagship Delivery
                    </span>
                    <h3 className="font-cinzel text-lg font-bold text-[#4A1525] mt-1">
                      {programme.title}
                    </h3>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold text-[#B85D3B] uppercase tracking-wider block">
                      Lead Partner: {programme.leadPartner}
                    </span>
                    <h3 className="font-cinzel text-base font-bold text-stone-900 group-hover:text-[#4A1525] transition-colors mt-1">
                      {programme.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-1 italic">
                      {programme.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {programme.description}
                  </p>

                  {/* Impact metrics chips */}
                  <div className="grid grid-cols-3 gap-1.5 p-2 bg-stone-50 rounded border border-stone-200 text-center">
                    {programme.impactMetrics.map((metric, mIdx) => (
                      <div key={mIdx}>
                        <span className="font-cinzel text-xs sm:text-sm font-bold text-[#4A1525] block tabular-nums">
                          {metric.value}
                        </span>
                        <span className="text-[9px] uppercase text-stone-500 font-semibold block truncate">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Geographic & Beneficiary info */}
                  <div className="space-y-1 text-[11px] text-stone-600 pt-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">{programme.provinces}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">{programme.targetBeneficiaries}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 pb-6 pt-3 border-t border-stone-100 bg-stone-50/50 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Annual Requirement:</span>
                  <span className="font-bold text-[#4A1525] font-mono">{programme.fundingNeedZAR}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectProgramme(programme)}
                    className="py-2 px-3 bg-white hover:bg-stone-100 text-stone-800 text-xs font-semibold rounded border border-stone-300 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Deep Dive</span>
                  </button>

                  <button
                    onClick={() => onOpenDonate(programme)}
                    className="py-2 px-3 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-bold rounded transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <HeartHandshake className="w-3.5 h-3.5 text-[#F3C969]" />
                    <span>Sponsor</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CSI Co-Funding Framework Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 bg-[#FAF5EE] rounded-2xl border-2 border-[#C59B27]/40 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-[#8B1E3F]">
                Institutional Grant Architecture
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#4A1525]">
                Customized CSI & NLC Co-Funding Proposals
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                Whether your organization seeks to fund a specific province, sponsor a 50-student tech cohort with Future Coding Corp, or support our 24/7 GBV crisis shelter with Changing Life Ministries, our secretariat provides tailored proposals with line-item budgets and B-BBEE scorecard optimization.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onOpenDonate()}
                className="w-full py-3 bg-[#4A1525] hover:bg-[#340C18] text-white font-bold text-xs uppercase tracking-wider rounded text-center transition-colors shadow"
              >
                Request Custom CSI Proposal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
