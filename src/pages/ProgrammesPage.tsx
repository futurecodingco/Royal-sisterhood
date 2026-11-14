import React, { useState } from "react";
import { FLAGSHIP_PROGRAMMES, FlagshipProgramme } from "../data/organizationData";
import { HeartHandshake, Eye, MapPin, Users, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { HeritageImage } from "../components/HeritageImage";
import { PageHeroBanner } from "../components/PageHeroBanner";

interface ProgrammesPageProps {
  onSelectProgramme: (programme: FlagshipProgramme) => void;
  onOpenDonate: (programme?: FlagshipProgramme) => void;
}

export const ProgrammesPage: React.FC<ProgrammesPageProps> = ({
  onSelectProgramme,
  onOpenDonate,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredProgrammes = FLAGSHIP_PROGRAMMES.filter((prog) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "heritage") {
      return prog.id === "griqua-royal-imbizo" || prog.id === "heritage-youth-archive";
    }
    if (selectedFilter === "gbv") {
      return prog.id === "gbv-safe-haven-network" || prog.id === "spiritual-healing-mentorship";
    }
    if (selectedFilter === "economic") {
      return prog.id === "women-economic-tech-hub" || prog.id === "food-security-dignity-drive";
    }
    return true;
  });

  const filterTabs = [
    { id: "all", label: "All Programmes (6)" },
    { id: "heritage", label: "Heritage & Royal Imbizo" },
    { id: "gbv", label: "Safe Havens & GBV" },
    { id: "economic", label: "Digital, Agri & Food Security" },
  ];

  return (
    <div className="space-y-16 pb-20">
      <PageHeroBanner
        kickerIcon={<Sparkles className="w-4 h-4 shrink-0" />}
        kickerText="National Transformation Blueprint"
        title="6 Flagship Initiatives for South Africa"
        subtitle="Designed for provincial scale, measurable beneficiary outcomes, and corporate CSI investment. Each initiative combines royal traditional authority with the specialized execution of our accredited strategic partners."
      />

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg border border-stone-200">
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected ? "text-[#4A1525]" : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId={shouldReduceMotion ? undefined : "programmeFilterIndicator"}
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      aria-hidden="true"
                      className="absolute inset-0 bg-white rounded-md shadow-sm"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-stone-600 tabular-nums">
            Showing <strong className="text-stone-900">{filteredProgrammes.length}</strong> flagship programmes
          </div>
        </div>

        {/* Programme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProgrammes.map((programme) => (
            <div
              key={programme.id}
              className="bg-white rounded-xl border border-stone-200 hover:border-[#C59B27]/60 overflow-hidden shadow-sm hover:shadow-md card-interactive flex flex-col justify-between group"
            >
              <div>
                {programme.image ? (
                  <div className="h-52 overflow-hidden relative border-b border-stone-200">
                    <HeritageImage
                      src={programme.image}
                      alt={programme.title}
                      fallbackLabel={programme.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-52 bg-gradient-to-br from-[#4A1525]/10 via-[#FAF8F5] to-[#8B1E3F]/10 flex flex-col justify-center p-6 border-b border-stone-200">
                    <span className="font-mono text-xs text-[#8B1E3F] font-semibold tabular-nums">
                      Programme {programme.number}
                    </span>
                    <h3 className="font-cinzel text-lg font-bold text-[#4A1525] mt-1">
                      {programme.title}
                    </h3>
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-[#B85D3B]">
                      <span className="font-mono font-semibold text-[#8B1E3F] tabular-nums">
                        Programme {programme.number}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{programme.leadPartner}</span>
                    </div>
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

                  {/* Hairline-divided Impact Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-stone-200 text-center divide-x divide-stone-200">
                    {programme.impactMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="px-1">
                        <span className="font-cinzel text-xs sm:text-sm font-bold text-[#4A1525] block tabular-nums">
                          {metric.value}
                        </span>
                        <span className="text-[10px] text-stone-500 font-medium block truncate mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5 text-[11px] text-stone-600">
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
              <div className="px-6 pb-6 pt-4 border-t border-stone-100 bg-[#FAF8F5]">
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => onSelectProgramme(programme)}
                    className="py-2 px-3 bg-white hover:bg-stone-100 text-stone-800 text-xs font-semibold rounded-md border border-stone-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Deep Dive</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenDonate(programme)}
                    className="py-2 px-3 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
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
        <div className="p-8 bg-[#F3EFE7] rounded-xl border border-[#C59B27]/40 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8B1E3F]">
                Institutional Grant Architecture
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#4A1525] text-balance">
                Customized CSI & NLC Co-Funding Proposals
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-2xl">
                Whether your organization seeks to fund a specific province, sponsor a 50-student tech cohort with Future Coding Corp, or support our 24/7 GBV crisis shelter with Changing Life Ministries, our secretariat provides tailored proposals with line-item budgets.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="w-full sm:w-auto px-6 py-3 bg-[#4A1525] hover:bg-[#340C18] text-white font-semibold text-xs uppercase tracking-wider rounded-md text-center transition-colors cursor-pointer whitespace-nowrap"
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
