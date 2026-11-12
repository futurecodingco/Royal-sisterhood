import React from "react";
import { Crown, Shield, HeartHandshake, ArrowRight, Sparkles, CheckCircle2, ChevronRight, Award, MapPin } from "lucide-react";
import { ROYAL_ORGANIZATION, ROYAL_PRINCESSES, FLAGSHIP_PROGRAMMES, STRATEGIC_PARTNERS } from "../data/organizationData";
import { PageId } from "../components/Navbar";

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
  onOpenDonorPack: () => void;
  onSelectProgramme: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenDonate,
  onOpenDonorPack,
  onSelectProgramme,
}) => {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#340B18] via-[#4A1525] to-[#2D0B16] text-white pt-12 pb-20 border-b border-[#C59B27]/30">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 bg-heritage-pattern opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Sovereign Kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-[#C59B27]/40 text-xs font-semibold text-[#F3C969] tracking-wider uppercase">
                <Crown className="w-3.5 h-3.5 text-[#F3C969]" />
                <span>Under the Royal Lineage of King Adam Kok V</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight">
                Uniting the Royal Houses of the Griqua. Transforming Communities.{" "}
                <span className="text-[#F3C969] italic font-playfair block mt-1">
                  Protecting Women Across South Africa.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl font-light">
                Led by the Royal Princesses and sisters of King Adam Kok V—driving national cultural reconciliation, women’s economic liberation, and systemic grassroots action against Gender-Based Violence from our headquarters in Mid Ennerdale, Johannesburg.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenDonate}
                  className="px-6 py-3.5 bg-[#C59B27] hover:bg-[#B08920] text-stone-950 font-bold text-xs uppercase tracking-wider rounded shadow-xl flex items-center gap-2 transition-all cursor-pointer"
                >
                  <HeartHandshake className="w-4 h-4 text-stone-950" />
                  <span>Partner & Fund Our Mission</span>
                </button>

                <button
                  onClick={onOpenDonorPack}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs uppercase tracking-wider rounded backdrop-blur-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Download CSI Donor Pack</span>
                  <ArrowRight className="w-4 h-4 text-[#F3C969]" />
                </button>
              </div>

              {/* Registration and Trust line */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-300">
                <span className="font-mono text-[#F3C969]">Reg: {ROYAL_ORGANIZATION.registrationNumber}</span>
                <span>·</span>
                <span>Mid Ennerdale, Johannesburg</span>
                <span>·</span>
                <span className="text-amber-200 font-medium">B-BBEE & Section 18A Compliant Pipeline</span>
              </div>
            </div>

            {/* Right Media Lockup (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C59B27]/40 via-[#8B1E3F]/40 to-[#C59B27]/40 rounded-2xl blur-sm" />
                
                <div className="relative bg-[#20050E] p-3 rounded-2xl border-2 border-[#C59B27]/60 shadow-2xl overflow-hidden">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-white flex items-center justify-center p-3">
                    <img
                      src="/drive_assets/royal_sisterhood_official_crest.jpg"
                      alt="Official Royal Sisterhood Emblem"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-center">
                      <p className="font-cinzel text-xs text-[#F3C969] tracking-widest uppercase font-bold">
                        Official Royal Sisterhood Seal
                      </p>
                      <p className="text-[10px] text-white/90">
                        AK 1 to 4 Bloodline · Koninglike Susterskap
                      </p>
                    </div>
                  </div>

                  {/* Micro quote banner */}
                  <div className="mt-3 p-3 bg-[#380E1B] rounded-lg border border-[#C59B27]/30 text-center">
                    <p className="italic text-xs text-stone-200 font-serif">
                      "Uniting sovereign heritage with practical, grassroots transformation for every South African family."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Impact Metric Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-xl shadow-xl border border-stone-200 p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
          <div className="pt-2 lg:pt-0">
            <span className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#4A1525] block tabular-nums">
              9 / 9
            </span>
            <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider mt-1 block">
              Provinces Targeted
            </span>
            <p className="text-[11px] text-stone-600 mt-0.5">National Griqua Imbizo reach</p>
          </div>

          <div className="pt-4 lg:pt-0">
            <span className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#4A1525] block tabular-nums">
              6
            </span>
            <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider mt-1 block">
              Flagship Programmes
            </span>
            <p className="text-[11px] text-stone-600 mt-0.5">From GBV safe havens to coding</p>
          </div>

          <div className="pt-4 lg:pt-0">
            <span className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#4A1525] block tabular-nums">
              4
            </span>
            <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider mt-1 block">
              Strategic Partners
            </span>
            <p className="text-[11px] text-stone-600 mt-0.5">Ministries, Tech, Enterprise & Trade</p>
          </div>

          <div className="pt-4 lg:pt-0">
            <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#8B1E3F] block leading-tight">
              Direct Royal
            </span>
            <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider mt-1 block">
              House Stewardship
            </span>
            <p className="text-[11px] text-stone-600 mt-0.5">Founding Royal Princesses</p>
          </div>
        </div>
      </section>

      {/* Core Institutional Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8B1E3F]">
            Our Institutional Foundation
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A1525]">
            Bridging Historic Royal Sovereignty With Grassroots Delivery
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            The Royal Sisterhood operates at the intersection of traditional community trust and modern corporate-grade execution, addressing South Africa’s deepest societal challenges through three unyielding pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FAF5EE] border border-[#C59B27]/40 flex items-center justify-center text-[#4A1525] mb-5">
                <Crown className="w-6 h-6 text-[#C59B27]" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#4A1525] mb-2">
                Traditional Unification & Heritage
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Reconvening the dispersed Royal Houses of the Griqua across South Africa through the National Imbizo. Preserving the historical treaties, lineage chronicles, and indigenous cultural identity of Adam Kok I through IV.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#8B1E3F]">
              <span>National Imbizo Council</span>
              <button
                onClick={() => onNavigate("leadership")}
                className="flex items-center gap-1 hover:text-[#4A1525]"
              >
                <span>Read Lineage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FBEFF2] border border-[#8B1E3F]/30 flex items-center justify-center text-[#8B1E3F] mb-5">
                <Shield className="w-6 h-6 text-[#8B1E3F]" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#4A1525] mb-2">
                Safe Havens & Frontline Anti-GBV
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Direct, survivor-led emergency safe housing, rapid trauma counseling referrals, and court accompaniment for women and children in high-risk peri-urban communities such as Mid Ennerdale and Eldorado Park.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#8B1E3F]">
              <span>24/7 Rapid Response Network</span>
              <button
                onClick={() => onNavigate("support")}
                className="flex items-center gap-1 hover:text-[#4A1525]"
              >
                <span>Emergency Help</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FAF5EE] border border-[#C59B27]/40 flex items-center justify-center text-[#B85D3B] mb-5">
                <Sparkles className="w-6 h-6 text-[#B85D3B]" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#4A1525] mb-2">
                Digital & Economic Liberation
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Breaking generational poverty through future-ready technical education with Future Coding Corp, agricultural cooperatives with RSBC Trading, and micro-business incubation with Young Investments.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#8B1E3F]">
              <span>Tech & Agri Hubs</span>
              <button
                onClick={() => onNavigate("programmes")}
                className="flex items-center gap-1 hover:text-[#4A1525]"
              >
                <span>View Hubs</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Programmes Spotlight */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#8B1E3F]">
                Execution In Action
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525] mt-1">
                6 National Flagship Initiatives
              </h2>
              <p className="text-xs text-stone-600 max-w-xl mt-1">
                Structured for scalable Corporate Social Investment (CSI), donor co-funding, and measurable social return on investment.
              </p>
            </div>

            <button
              onClick={() => onNavigate("programmes")}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#4A1525] text-white text-xs font-semibold rounded hover:bg-[#340C18] transition-colors self-start md:self-auto cursor-pointer"
            >
              <span>Explore All 6 Programmes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Featured Programme Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLAGSHIP_PROGRAMMES.slice(0, 3).map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {prog.image ? (
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#4A1525] text-white text-[11px] font-mono font-bold rounded">
                        Initiative {prog.number}
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 bg-[#4A1525]/10 flex items-center justify-center p-6 border-b border-stone-200">
                      <div className="text-center">
                        <span className="font-mono text-xs font-bold text-[#8B1E3F]">
                          PROGRAMME {prog.number}
                        </span>
                        <h4 className="font-cinzel text-base font-bold text-[#4A1525] mt-1">
                          {prog.title}
                        </h4>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <span className="text-[11px] font-semibold text-[#B85D3B] uppercase tracking-wider block mb-1">
                      Lead: {prog.leadPartner}
                    </span>
                    <h3 className="font-cinzel text-base font-bold text-stone-900 group-hover:text-[#4A1525] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-3 mt-2 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="p-2.5 bg-stone-50 rounded border border-stone-200 flex items-center justify-between text-xs mb-3">
                    <span className="text-stone-500">Annual Budget:</span>
                    <span className="font-bold text-[#4A1525]">{prog.fundingNeedZAR}</span>
                  </div>
                  <button
                    onClick={() => onSelectProgramme(prog.id)}
                    className="w-full py-2 bg-stone-100 hover:bg-[#4A1525] hover:text-white text-stone-800 text-xs font-semibold rounded border border-stone-300 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Founding Royal Princesses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8B1E3F]">
            Executive Governance
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A1525]">
            The Founding Royal Princesses
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Sisters of King Adam Kok V and direct descendants of the Adam Kok I to IV bloodline, steering the organisation with sovereign integrity, community accountability, and modern institutional rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROYAL_PRINCESSES.map((princess) => (
            <div
              key={princess.id}
              className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full bg-[#FAF5EE] border-2 border-[#C59B27] overflow-hidden shadow-md shrink-0">
                    <img
                      src={princess.portrait}
                      alt={princess.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#B85D3B] uppercase tracking-wider block font-semibold">
                      {princess.title}
                    </span>
                    <h3 className="font-cinzel text-base font-bold text-[#4A1525]">
                      {princess.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-stone-700">
                      {princess.role}
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-[#8B1E3F] font-medium mb-3">
                  {princess.royalRelation}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                  {princess.bio}
                </p>

                <blockquote className="mt-4 p-3 bg-stone-50 rounded border-l-2 border-[#C59B27] text-[11px] italic text-stone-700">
                  "{princess.quote}"
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100">
                <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1.5">
                  Core Portfolio
                </span>
                <ul className="space-y-1">
                  {princess.focusAreas.slice(0, 3).map((area, idx) => (
                    <li key={idx} className="text-[11px] text-stone-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate("leadership")}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-[#4A1525] text-xs font-bold rounded border border-stone-300 transition-colors"
          >
            <span>Explore Full Royal Lineage (Adam Kok I to V)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Authentic Royal Evidence & Photographic Showcase from Google Drive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border-2 border-[#C59B27]/40 p-8 shadow-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#8B1E3F]">
                Institutional Proof & Heritage Records
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525] mt-1">
                Royal Archives & Living Lineage
              </h2>
              <p className="text-xs text-stone-600 max-w-xl mt-1">
                Verified documentary photographs, official state registration certificate, and unbroken genealogical records under His Majesty King Adam Kok V.
              </p>
            </div>
            <button
              onClick={() => onNavigate("gallery")}
              className="text-xs font-bold text-[#8B1E3F] hover:text-[#4A1525] flex items-center gap-1"
            >
              <span>View Full 15-Item Media Gallery</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1: King and Princesses */}
            <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden bg-black/5 relative">
                <img
                  src="/drive_assets/king_adam_kok_v_and_princesses.jpg"
                  alt="His Majesty King Adam Kok V & Royal Princesses"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-mono uppercase text-[#8B1E3F] font-bold block mb-1">
                  Royal Council
                </span>
                <h4 className="font-cinzel text-xs font-bold text-stone-900">
                  His Majesty King Adam Kok V
                </h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                  Seated with the traditional royal scepter alongside the Royal Princesses.
                </p>
              </div>
            </div>

            {/* Item 2: The Three Princesses Standing */}
            <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden bg-black/5 relative">
                <img
                  src="/drive_assets/three_princesses_full_standing.jpg"
                  alt="The Three Royal Princesses in Traditional Attire"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-mono uppercase text-[#8B1E3F] font-bold block mb-1">
                  Executive Vanguard
                </span>
                <h4 className="font-cinzel text-xs font-bold text-stone-900">
                  The Three Royal Sisters
                </h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                  Princess Cornelia Julius, Princess May Paulsen, and Princess Maggie Gibbs in traditional attire.
                </p>
              </div>
            </div>

            {/* Item 3: Official Registration Certificate */}
            <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden bg-black/5 relative">
                <img
                  src="/drive_assets/official_registration_certificate.jpg"
                  alt="Official CIPC Registration Certificate"
                  className="w-full h-full object-contain p-2 bg-[#FAF8F5] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-mono uppercase text-[#8B1E3F] font-bold block mb-1">
                  Statutory Registration
                </span>
                <h4 className="font-cinzel text-xs font-bold text-stone-900">
                  CIPC Certificate 2025/191780/07
                </h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                  Official incorporation details signed by all three Founding Director Princesses.
                </p>
              </div>
            </div>

            {/* Item 4: Lineage Tree */}
            <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden bg-black/5 relative">
                <img
                  src="/drive_assets/adam_kok_genealogical_tree.jpg"
                  alt="Adam Kok I to V Lineage Tree"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-mono uppercase text-[#8B1E3F] font-bold block mb-1">
                  Historical Lineage
                </span>
                <h4 className="font-cinzel text-xs font-bold text-stone-900">
                  Genealogical Succession
                </h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                  Historical chronicle from Kaptein Adam Kok I (1710) to King Adam Kok V.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Implementation Partners Strip */}
      <section className="bg-[#2D0B16] text-white py-14 border-y border-[#C59B27]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#F3C969]">
              Co-Implementation Coalition
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Official Strategic Partners
            </h2>
            <p className="text-xs text-stone-300">
              Formally bound by strategic MoUs to deliver holistic community transformation, digital education, enterprise incubation, and supply chain logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGIC_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="p-5 bg-white/5 rounded-xl border border-white/10 hover:border-[#C59B27]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-[#F3C969] uppercase font-semibold">
                      {partner.badge}
                    </span>
                    <Award className="w-4 h-4 text-[#C59B27]" />
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#F3C969] transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                    {partner.focus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <span className="text-[10px] text-stone-400 block mb-2">{partner.mouStatus}</span>
                  <button
                    onClick={() => onNavigate("partners")}
                    className="text-xs text-[#F3C969] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>View Joint Initiatives</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-stone-300">
              Interested in joining our national implementation coalition?
            </span>
            <button
              onClick={() => onNavigate("partners")}
              className="px-4 py-2 bg-[#C59B27] hover:bg-[#A68220] text-stone-950 font-bold rounded text-xs transition-colors"
            >
              Become a Strategic Partner
            </button>
          </div>
        </div>
      </section>

      {/* Donor Due Diligence & Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 bg-white rounded-2xl border-2 border-[#C59B27]/40 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 rounded text-xs font-semibold text-stone-700">
              <Shield className="w-3.5 h-3.5 text-[#8B1E3F]" />
              <span>Due Diligence Ready for CSI, NLC & International Foundations</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525]">
              Partner With Us to Deliver Verified, Systemic Impact
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We provide ring-fenced bank accounts, quarterly audited impact reporting, Section 18A tax-deductible donor certification pathways, and direct community co-branding. Support an entire flagship programme or adopt a specific household garden cohort.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenDonate}
                className="px-6 py-3 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors cursor-pointer"
              >
                Donate / Fund a Cohort
              </button>
              <button
                onClick={onOpenDonorPack}
                className="px-5 py-3 border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-semibold rounded transition-colors cursor-pointer"
              >
                Download Donor Dossier (PDF)
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 p-5 bg-[#FAF5EE] rounded-xl border border-[#C59B27]/30 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#4A1525]">
              Quick Verification
            </h4>
            <div className="text-xs space-y-1.5 text-stone-700">
              <p><strong>Entity:</strong> Royal Sisterhood AK 1 to 4 Bloodline</p>
              <p><strong>CIPC Registration:</strong> K2025191780</p>
              <p><strong>Physical Hub:</strong> 2445 5th Ave, Mid Ennerdale</p>
              <p><strong>Province:</strong> Gauteng, South Africa (1830)</p>
              <p><strong>Audited Controls:</strong> Dual-signatory project accounts</p>
            </div>
            <div className="pt-2 border-t border-stone-200 text-center">
              <button
                onClick={() => onNavigate("fund-us")}
                className="text-xs font-bold text-[#8B1E3F] hover:underline"
              >
                Visit Full Due Diligence Portal →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
