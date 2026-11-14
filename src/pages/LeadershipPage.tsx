import React, { useState } from "react";
import { Crown, Shield, Landmark, Scroll, CheckCircle2, Award, ArrowRight, BookOpen } from "lucide-react";
import { LINEAGE_LEADERS, ROYAL_PRINCESSES, ROYAL_ORGANIZATION } from "../data/organizationData";
import { PageId } from "../components/Navbar";

interface LeadershipPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigate, onOpenDonate }) => {
  const [selectedLeaderIndex, setSelectedLeaderIndex] = useState(0);
  const activeLeader = LINEAGE_LEADERS[selectedLeaderIndex];

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#340B18] via-[#4A1525] to-[#2D0B16] text-white py-16 px-4 sm:px-6 border-b border-[#C59B27]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-heritage-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-[#F3C969] text-xs font-semibold uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5" />
            <span>Griqua Royal House & Lineage Authority</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            The Adam Kok I to V Bloodline & Royal Governance
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-3xl leading-relaxed font-light">
            Tracing over two and a half centuries of sovereign Griqua leadership, territorial statesmanship, and unbroken communal stewardship—now channeled by the Royal Princesses into transformative community upliftment across South Africa.
          </p>
        </div>
      </section>

      {/* The Adam Kok Lineage Interactive Tribute */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8B1E3F]">
            Historical Continuity
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525]">
            The Ancestral Lineage (1710 – Present)
          </h2>
          <p className="text-xs text-stone-600">
            Click through the generations of paramount Griqua Kapteins leading up to His Majesty King Adam Kok V and the Royal Princesses.
          </p>
        </div>

        {/* Interactive Timeline Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 border-b border-stone-200 no-scrollbar">
          {LINEAGE_LEADERS.map((leader, idx) => (
            <button
              key={leader.name}
              onClick={() => setSelectedLeaderIndex(idx)}
              className={`px-4 py-3 rounded-t-lg font-cinzel text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 border-t-2 ${
                selectedLeaderIndex === idx
                  ? "bg-white text-[#4A1525] border-[#C59B27] shadow-sm -mb-px"
                  : "bg-stone-100 text-stone-600 hover:text-stone-900 border-transparent"
              }`}
            >
              <Crown className={`w-3.5 h-3.5 ${selectedLeaderIndex === idx ? "text-[#C59B27]" : "text-stone-400"}`} />
              <span>{leader.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Leader Showcase Card */}
        <div className="bg-white rounded-b-xl rounded-tr-xl border border-stone-200 p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#FAF5EE] text-[#8B1E3F] text-xs font-mono font-bold rounded border border-[#C59B27]/40">
                  Historical Era: {activeLeader.era}
                </span>
                <span className="text-xs text-stone-500 font-medium">Sovereign Griqua Paramount Leader</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525]">
                {activeLeader.name}
              </h3>

              <div className="space-y-3 text-stone-700 text-sm leading-relaxed">
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-stone-900 mb-1">
                    Historical Statesmanship & Era
                  </h4>
                  <p>{activeLeader.historicalSignificance}</p>
                </div>

                <div className="p-4 bg-[#FAF5EE] rounded-lg border border-[#C59B27]/30">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#8B1E3F] mb-1">
                    Enduring Legacy Contribution
                  </h4>
                  <p className="text-xs text-stone-800">{activeLeader.legacyContribution}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 bg-stone-50 rounded-xl border border-stone-200 text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#4A1525] flex items-center justify-center text-[#C59B27] border-2 border-[#C59B27] shadow-inner">
                <Crown className="w-10 h-10 text-[#C59B27]" />
              </div>
              <div>
                <h4 className="font-cinzel text-base font-bold text-stone-900">
                  Custodianship of Kokstad & Philippolis
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  The Griqua royal bloodline represents one of South Africa's most storied struggles for indigenous autonomy and constitutional self-determination.
                </p>
              </div>
              <div className="pt-2 border-t border-stone-200">
                <span className="text-[11px] font-mono text-[#8B1E3F] block">
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
          <span className="text-xs uppercase tracking-widest font-bold text-[#8B1E3F]">
            Executive Leadership
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A1525]">
            The Founding Royal Princesses
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            The sisters of King Adam Kok V bring centuries of ancestral authority combined with modern management, legal compliance, and community devotion to the Royal Sisterhood AK 1 to 4 Bloodline.
          </p>
        </div>

        <div className="space-y-12">
          {ROYAL_PRINCESSES.map((princess, idx) => (
            <div
              key={princess.id}
              className={`bg-white rounded-2xl border border-stone-200 p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Profile Bio */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-[#4A1525] text-[#F3C969] text-[11px] font-mono font-bold rounded">
                    Founding Director
                  </span>
                  <span className="text-xs text-[#8B1E3F] font-semibold">
                    {princess.royalRelation}
                  </span>
                </div>

                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525]">
                  {princess.name}
                </h3>
                <p className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                  {princess.role}
                </p>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pt-2">
                  {princess.bio}
                </p>

                {/* Quote Box */}
                <div className="p-4 bg-[#FAF5EE] rounded-lg border-l-4 border-[#C59B27]">
                  <p className="italic text-xs text-stone-800 font-serif">
                    "{princess.quote}"
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-stone-900 uppercase tracking-wider block mb-2">
                    Executive Portfolios & Initiatives
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {princess.focusAreas.map((area, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-xs text-stone-700 bg-stone-50 p-2 rounded border border-stone-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Portrait Lockup */}
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-stone-50 rounded-xl border border-stone-200">
                <div className="w-44 h-44 rounded-full bg-white border-4 border-[#C59B27] flex items-center justify-center mb-4 shadow-lg overflow-hidden">
                  <img
                    src={princess.portrait}
                    alt={princess.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="font-cinzel text-base font-bold text-[#4A1525]">
                  {princess.name}
                </h4>
                <p className="text-[11px] text-stone-500 font-medium mt-0.5">
                  Direct Descendant of Adam Kok I–IV
                </p>
                <div className="mt-3 pt-3 border-t border-stone-200 w-full text-xs text-stone-600 space-y-1">
                  <span className="font-semibold text-[#8B1E3F]">Founding Director</span>
                  <span className="block text-[11px] text-stone-500">Royal Sisterhood AK 1 to 4 Bloodline</span>
                  {princess.phone && (
                    <a
                      href={`tel:${princess.phone.replace(/\s+/g, "")}`}
                      className="inline-block mt-1 font-mono text-xs font-semibold text-[#4A1525] hover:underline"
                    >
                      Tel: {princess.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Royal Family & Genealogical Chart Visual Showcase */}
        <div className="mt-16 bg-[#FAF5EE] rounded-2xl border-2 border-[#C59B27]/40 p-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8B1E3F]">
              Archival Evidence & Family Trees
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-[#4A1525]">
              Documented Historical Lineage & Living Descendants
            </h3>
            <p className="text-xs text-stone-600">
              Preserved genealogical succession chart by Patekile Holomisa and family branch documentation from the Royal House archives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* The Historical Tree Document */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
              <div className="p-3 bg-[#4A1525] text-white flex items-center justify-between text-xs">
                <span className="font-cinzel font-bold text-[#F3C969]">Adam Kok I to V Genealogical Chronicle</span>
                <span className="text-[10px] text-stone-300">Historical Source</span>
              </div>
              <div className="aspect-[16/9] overflow-hidden bg-black/5">
                <img
                  src="/drive_assets/adam_kok_genealogical_tree.jpg"
                  alt="Adam Kok I to V Genealogical Succession Chart"
                  className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-xs text-stone-700 bg-stone-50 border-t border-stone-200">
                <p className="font-semibold text-stone-900 mb-1">Unbroken Succession (1710 – Present)</p>
                <p className="text-[11px] leading-relaxed">
                  Tracing Kaptein Adam Kok I (Adam Eta), Adam Kok II, Adam Kok III, Adam Kok IV (Adam Adei Kok 1889-1978), to reigning King Adam Kok V (born 1954) and his royal sisters: Maggie, May, and Cornelia.
                </p>
              </div>
            </div>

            {/* The Living Custodians & Royal Sisters */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
              <div className="p-3 bg-[#4A1525] text-white flex items-center justify-between text-xs">
                <span className="font-cinzel font-bold text-[#F3C969]">The Royal Matriarchs & Bloodline Custodians</span>
                <span className="text-[10px] text-stone-300">Living Generations</span>
              </div>
              <div className="aspect-[16/9] overflow-hidden bg-black/5">
                <img
                  src="/drive_assets/bloodline_custodians_families.jpg"
                  alt="Bloodline Custodians & Living Descendants"
                  className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-xs text-stone-700 bg-stone-50 border-t border-stone-200">
                <p className="font-semibold text-stone-900 mb-1">Direct Familial Continuity</p>
                <p className="text-[11px] leading-relaxed">
                  Generations of royal custodians: Princess Maggie Gibbs, Princess May Paulsen, Princess Cornelia Julius and their children continuing the Griqua legacy in Mid Ennerdale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Governance Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 bg-white rounded-2xl border-2 border-[#C59B27]/40 shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 rounded text-xs font-semibold text-stone-700">
            <Landmark className="w-4 h-4 text-[#4A1525]" />
            <span>Institutional Accountability & Traditional Authority</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525]">
            The Royal Governance Statement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-sm">
                1. Unmatched Grassroots Trust & Legitimacy
              </h3>
              <p>
                In South Africa’s peri-urban and rural communities, traditional royal houses possess an authority that statutory institutions often struggle to match. The Adam Kok royal lineage represents sacred communal trust, moral accountability, and deep familial bonds that transcend political cycles.
              </p>
              <h3 className="font-bold text-stone-900 text-sm">
                2. Constitutional Alignment & Co-Existence
              </h3>
              <p>
                The Royal Sisterhood operates in full harmony with Chapter 12 of the Constitution of the Republic of South Africa, recognizing the role of traditional leadership while adhering strictly to modern statutory non-profit corporate governance under CIPC Registration K2025191780.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-sm">
                3. Direct Accountability to Beneficiaries
              </h3>
              <p>
                Every programme executed by the Sisterhood—whether a GBV safe house activation with Changing Life Ministries or a coding laboratory with Future Coding Corp—is held to rigorous social auditing standards. Funds are ring-fenced, and quarterly impact reports are delivered to donors and community councils alike.
              </p>
              <h3 className="font-bold text-stone-900 text-sm">
                4. Matriarchal Guardianship
              </h3>
              <p>
                By positioning the Royal Princesses as executive directors, the institution ensures that South African women, mothers, and young girls hold the primary veto and leadership power over all community development allocations.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-stone-600">
              For diplomatic, traditional council, or constitutional inquiries:
            </span>
            <button
              onClick={() => onNavigate("contact")}
              className="px-5 py-2.5 bg-[#4A1525] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#340C18] transition-colors"
            >
              Contact Royal Secretariat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
