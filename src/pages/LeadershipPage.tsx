import React, { useState } from "react";
import { Crown, Landmark, CheckCircle2, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { LINEAGE_LEADERS, ROYAL_PRINCESSES } from "../data/organizationData";
import { PageId } from "../components/Navbar";
import { HeritageImage } from "../components/HeritageImage";
import { KhoisanDivider } from "../components/KhoisanDivider";
import { PageHeroBanner } from "../components/PageHeroBanner";

interface LeadershipPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigate, onOpenDonate }) => {
  const [selectedLeaderIndex, setSelectedLeaderIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeLeader = LINEAGE_LEADERS[selectedLeaderIndex];

  return (
    <div className="space-y-16 pb-20">
      <PageHeroBanner
        kickerIcon={<Crown className="w-4 h-4 shrink-0" />}
        kickerText="Griqua Royal House & Lineage Authority"
        title="The Adam Kok I to V Bloodline & Royal Governance"
        subtitle="Tracing over two and a half centuries of sovereign Griqua leadership, territorial statesmanship, and unbroken communal stewardship—now channeled by the Royal Princesses into transformative community upliftment across South Africa."
      />

      {/* The Adam Kok Lineage Interactive Tribute */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#8B1E3F]">
            Historical Continuity
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525] text-balance">
            The Ancestral Lineage (1710 – Present)
          </h2>
          <KhoisanDivider className="max-w-xs mx-auto" />
          <p className="text-xs sm:text-sm text-stone-600">
            Select each generation of paramount Griqua Kapteins leading to His Majesty King Adam Kok V and the Royal Princesses.
          </p>
        </div>

        {/* Interactive Timeline Tabs */}
        <div
          role="tablist"
          aria-label="Adam Kok Lineage Generations"
          className="flex overflow-x-auto gap-2 pb-3 border-b border-stone-200 no-scrollbar"
        >
          {LINEAGE_LEADERS.map((leader, idx) => {
            const isSelected = selectedLeaderIndex === idx;
            return (
              <button
                key={leader.name}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedLeaderIndex(idx)}
                className={`relative px-4 py-2.5 rounded-md font-cinzel text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 border btn-tactile ${
                  isSelected
                    ? "text-white border-[#4A1525]"
                    : "bg-white text-stone-700 hover:text-[#4A1525] border-stone-200"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : "lineageTabHighlight"}
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    aria-hidden="true"
                    className="absolute inset-0 rounded-md bg-[#4A1525]"
                  />
                )}
                <Crown
                  className={`relative z-10 w-3.5 h-3.5 ${
                    isSelected ? "text-[#F3C969]" : "text-stone-400"
                  }`}
                />
                <span className="relative z-10">{leader.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Leader Showcase Card */}
        <div className="mt-6 bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                <span className="font-mono font-semibold text-[#8B1E3F] tabular-nums">
                  {activeLeader.era}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-stone-600">Sovereign Griqua Paramount Leader</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525]">
                {activeLeader.name}
              </h3>

              <div className="space-y-4 text-stone-700 text-sm leading-relaxed max-w-prose">
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-stone-900 mb-1">
                    Historical Statesmanship & Era
                  </h4>
                  <p>{activeLeader.historicalSignificance}</p>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#8B1E3F] mb-1">
                    Enduring Legacy Contribution
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-800">{activeLeader.legacyContribution}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 bg-[#F3EFE7] rounded-xl border border-[#C59B27]/35 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#4A1525] flex items-center justify-center border border-[#C59B27]">
                <Crown className="w-8 h-8 text-[#F3C969]" />
              </div>
              <div>
                <h4 className="font-cinzel text-base font-bold text-stone-900">
                  Custodianship of Kokstad & Philippolis
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  The Griqua royal bloodline represents one of South Africa’s most storied traditions of indigenous autonomy and constitutional self-determination.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-300/70">
                <span className="text-[11px] font-medium text-[#8B1E3F] block">
                  Preserved in the Royal Archives
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Founding Royal Princesses Executive Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#8B1E3F]">
            Executive Leadership
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A1525] text-balance">
            The Founding Royal Princesses
          </h2>
          <KhoisanDivider className="max-w-xs mx-auto" />
          <p className="text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
            The sisters of King Adam Kok V bring centuries of ancestral authority combined with modern governance, statutory compliance, and community devotion to the Royal Sisterhood AK 1 to 4 Bloodline.
          </p>
        </div>

        <div className="space-y-10">
          {ROYAL_PRINCESSES.map((princess, idx) => (
            <div
              key={princess.id}
              className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Profile Bio */}
              <div className={`lg:col-span-8 space-y-4 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-[#4A1525]">Founding Director</span>
                  <span aria-hidden="true" className="text-stone-400">·</span>
                  <span className="text-[#8B1E3F] font-medium">{princess.royalRelation}</span>
                </div>

                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525]">
                  {princess.name}
                </h3>
                <p className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  {princess.role}
                </p>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-prose pt-1">
                  {princess.bio}
                </p>

                {/* Museum-Editorial Pull Quote */}
                <blockquote className="py-3 border-y border-[#C59B27]/35">
                  <p className="italic text-sm text-stone-800 font-playfair leading-relaxed">
                    “{princess.quote}”
                  </p>
                </blockquote>

                {/* Focus Areas */}
                <div className="pt-1">
                  <span className="text-xs font-semibold text-stone-900 uppercase tracking-wider block mb-2.5">
                    Executive Portfolios & Initiatives
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {princess.focusAreas.map((area, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-center gap-2 text-xs text-stone-700 py-1.5 border-b border-stone-100"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Portrait Lockup */}
              <div
                className={`lg:col-span-4 flex flex-col items-center text-center p-6 bg-[#F3EFE7] rounded-xl border border-[#C59B27]/35 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="w-44 h-44 rounded-full bg-white border-4 border-[#C59B27] flex items-center justify-center mb-4 shadow-md overflow-hidden">
                  <HeritageImage
                    src={princess.portrait}
                    alt={princess.name}
                    fallbackLabel={princess.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h4 className="font-cinzel text-base font-bold text-[#4A1525]">
                  {princess.name}
                </h4>
                <p className="text-[11px] text-stone-600 font-medium mt-0.5">
                  Direct Descendant of Adam Kok I–IV
                </p>
                <div className="mt-3 pt-3 border-t border-stone-300/70 w-full text-xs text-stone-700 space-y-1.5">
                  <span className="font-semibold text-[#8B1E3F] block">Founding Director</span>
                  <span className="block text-[11px] text-stone-500">
                    Royal Sisterhood AK 1 to 4 Bloodline
                  </span>
                  {princess.phone && (
                    <a
                      href={`tel:${princess.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center justify-center gap-1.5 mt-1 font-mono text-xs font-semibold text-[#4A1525] hover:underline tabular-nums"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{princess.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Royal Family & Genealogical Chart Visual Showcase */}
        <div className="mt-16 bg-[#F3EFE7] rounded-xl border border-[#C59B27]/40 p-6 sm:p-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8B1E3F]">
              Archival Evidence & Family Trees
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-[#4A1525] text-balance">
              Documented Historical Lineage & Living Descendants
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Preserved genealogical succession chart by Patekile Holomisa and family branch documentation from the Royal House archives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white rounded-lg border border-stone-200 overflow-hidden shadow-sm flex flex-col">
              <div className="px-4 py-3 bg-[#4A1525] text-white flex items-center justify-between text-xs">
                <span className="font-cinzel font-bold text-[#F3C969]">
                  Adam Kok I to V Genealogical Chronicle
                </span>
                <span className="text-[11px] text-stone-300">Historical Source</span>
              </div>
              <div className="aspect-[16/9] overflow-hidden bg-stone-50">
                <HeritageImage
                  src="/drive_assets/adam_kok_genealogical_tree.jpg"
                  alt="Adam Kok I to V Genealogical Succession Chart"
                  fallbackLabel="Adam Kok I–V Lineage Chart"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="p-4 text-xs text-stone-700 bg-white border-t border-stone-200 flex-1">
                <p className="font-semibold text-stone-900 mb-1">
                  Unbroken Succession (1710 – Present)
                </p>
                <p className="text-[11px] leading-relaxed tabular-nums">
                  Tracing Kaptein Adam Kok I (Adam Eta), Adam Kok II, Adam Kok III, Adam Kok IV (Adam Adei Kok 1889–1978), to reigning King Adam Kok V (born 1954) and his royal sisters: Maggie, May, and Cornelia.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-stone-200 overflow-hidden shadow-sm flex flex-col">
              <div className="px-4 py-3 bg-[#4A1525] text-white flex items-center justify-between text-xs">
                <span className="font-cinzel font-bold text-[#F3C969]">
                  The Royal Matriarchs & Bloodline Custodians
                </span>
                <span className="text-[11px] text-stone-300">Living Generations</span>
              </div>
              <div className="aspect-[16/9] overflow-hidden bg-stone-50">
                <HeritageImage
                  src="/drive_assets/bloodline_custodians_families.jpg"
                  alt="Bloodline Custodians & Living Descendants"
                  fallbackLabel="Bloodline Custodians"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="p-4 text-xs text-stone-700 bg-white border-t border-stone-200 flex-1">
                <p className="font-semibold text-stone-900 mb-1">Direct Familial Continuity</p>
                <p className="text-[11px] leading-relaxed">
                  Generations of royal custodians: Princess Maggie Kok Gibbs, Princess May Kok Paulsen, Princess Cornelia Eva Julius, and their children continuing the Griqua legacy in Mid Ennerdale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Governance Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 bg-white rounded-xl border border-[#C59B27]/40 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8B1E3F]">
            <Landmark className="w-4 h-4 shrink-0" />
            <span>Institutional Accountability & Traditional Authority</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525] text-balance">
            The Royal Governance Statement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-4">
              <h3 className="font-semibold text-stone-900 text-sm">
                01. Grassroots Trust & Communal Legitimacy
              </h3>
              <p>
                In South Africa’s peri-urban and rural communities, traditional royal houses hold deep ancestral legitimacy. The Adam Kok royal lineage represents sacred communal trust, moral accountability, and enduring familial bonds across political cycles.
              </p>
              <h3 className="font-semibold text-stone-900 text-sm">
                02. Constitutional Alignment & Statutory Standing
              </h3>
              <p>
                The Royal Sisterhood operates in harmony with Chapter 12 of the Constitution of the Republic of South Africa, uniting traditional leadership with statutory corporate governance under CIPC Registration 2025/191780/07 (K2025191780).
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-stone-900 text-sm">
                03. Direct Accountability to Donors & Beneficiaries
              </h3>
              <p>
                Every programme executed—whether a GBV safe house activation with Changing Life Ministries or a coding laboratory with Future Coding Corp—is governed by ring-fenced treasury controls and quarterly impact reporting.
              </p>
              <h3 className="font-semibold text-stone-900 text-sm">
                04. Matriarchal Guardianship
              </h3>
              <p>
                By positioning the Royal Princesses as founding executive directors, the institution ensures that South African women, mothers, and young girls hold direct leadership authority over community development allocations.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-stone-600">
              For diplomatic, traditional council, or constitutional inquiries:
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenDonate}
                className="px-4 py-2.5 border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-semibold rounded-md transition-colors cursor-pointer"
              >
                Support Royal Initiatives
              </button>
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="px-5 py-2.5 bg-[#4A1525] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#340C18] transition-colors cursor-pointer"
              >
                Contact Royal Secretariat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
