import React, { useRef } from "react";
import {
  Crown,
  Shield,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Award,
  Phone,
} from "lucide-react";
import {
  ROYAL_ORGANIZATION,
  ROYAL_PRINCESSES,
  FLAGSHIP_PROGRAMMES,
  STRATEGIC_PARTNERS,
  GALLERY_ITEMS,
  FlagshipProgramme,
} from "../data/organizationData";
import { PageId } from "../components/Navbar";
import { HeritageImage } from "../components/HeritageImage";
import { KhoisanDivider } from "../components/KhoisanDivider";
import { KhoisanGeometricBackdrop } from "../components/KhoisanGeometricBackdrop";
import { RoyalCrest3DCard } from "../components/RoyalCrest3DCard";
import { CinematicHeritagePanorama } from "../components/CinematicHeritagePanorama";
import { KineticHeadline } from "../components/KineticHeadline";
import { PersonalizedJourneyBar } from "../components/PersonalizedJourneyBar";
import { EditorialAsymmetricSpread } from "../components/EditorialAsymmetricSpread";
import { CSIImpactSimulator } from "../components/CSIImpactSimulator";

interface HomePageProps {
  greeting: string;
  onNavigate: (page: PageId) => void;
  onOpenDonate: (programme?: FlagshipProgramme, amount?: number) => void;
  onOpenDonorPack: () => void;
  onSelectProgramme: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  greeting,
  onNavigate,
  onOpenDonate,
  onOpenDonorPack,
  onSelectProgramme,
}) => {
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <div className="space-y-20 pb-20">
      {/* Multi-Layered Parallax Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-b from-[#340B18] via-[#4A1525] to-[#2D0B16] text-white pt-14 pb-24 border-b border-[#C59B27]/35"
      >
        <KhoisanGeometricBackdrop targetRef={heroRef} variant="hero" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F3C969] tracking-wide">
                <Crown className="w-4 h-4 shrink-0" />
                <span>Under the Royal Lineage of His Majesty King Adam Kok V</span>
              </div>

              <KineticHeadline
                primaryLine="Uniting the Royal Houses of the Griqua. Transforming Communities."
                accentLine="Protecting Women Across South Africa."
              />

              <p className="text-base sm:text-lg text-stone-100 leading-relaxed max-w-2xl font-normal tracking-[0.01em]">
                Led by the Royal Princesses and sisters of King Adam Kok V—driving national cultural reconciliation, women’s economic liberation, and systemic grassroots action against Gender-Based Violence from our headquarters in Mid Ennerdale, Johannesburg.
              </p>

              {/* Action Buttons with tactile micro-interactions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenDonate()}
                  className="group px-6 py-3.5 bg-[#C59B27] hover:bg-[#B08920] text-stone-950 font-bold text-xs uppercase tracking-wider rounded-md shadow-lg flex items-center gap-2 btn-tactile cursor-pointer whitespace-nowrap shrink-0"
                >
                  <HeartHandshake className="w-4 h-4 text-stone-950 transition-transform duration-200 ease-tactile group-hover:scale-110 group-hover:-rotate-6" />
                  <span>Partner & Fund Our Mission</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenDonorPack}
                  className="group px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs uppercase tracking-wider rounded-md btn-tactile cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Download CSI Donor Pack</span>
                  <ArrowRight className="w-4 h-4 text-[#F3C969] transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
                </button>
              </div>

              {/* Clean Unboxed Institutional Trust Line */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-stone-200 border-t border-white/15">
                <span className="font-mono text-[#F3C969] tabular-nums">
                  CIPC Reg: {ROYAL_ORGANIZATION.registrationNumber}
                </span>
                <span aria-hidden="true">·</span>
                <span>Mid Ennerdale, Johannesburg</span>
                <span aria-hidden="true">·</span>
                <span>Capitec Treasury Verified</span>
              </div>
            </div>

            {/* Right Interactive 3D Depth Crest Lockup (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <RoyalCrest3DCard />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Impact Metric Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-xl shadow-lg border border-stone-200 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
          <div className="pt-2 lg:pt-0">
            <span className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#4A1525] block tabular-nums">
              9 / 9
            </span>
            <span className="text-xs font-semibold text-stone-600 mt-1 block">
              Provinces Targeted
            </span>
            <p className="text-[11px] text-stone-500 mt-0.5">National Griqua Imbizo reach</p>
          </div>

          <div className="pt-4 lg:pt-0">
            <span className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#4A1525] block tabular-nums">
              6
            </span>
            <span className="text-xs font-semibold text-stone-600 mt-1 block">
              Flagship Programmes
            </span>
            <p className="text-[11px] text-stone-500 mt-0.5">GBV safe havens to coding labs</p>
          </div>

          <div className="pt-4 lg:pt-0">
            <span className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#4A1525] block tabular-nums">
              4
            </span>
            <span className="text-xs font-semibold text-stone-600 mt-1 block">
              Strategic Partners
            </span>
            <p className="text-[11px] text-stone-500 mt-0.5">Ministries, Tech, Enterprise & Trade</p>
          </div>

          <div className="pt-4 lg:pt-0">
            <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#8B1E3F] block leading-tight">
              Direct Royal
            </span>
            <span className="text-xs font-semibold text-stone-600 mt-1 block">
              House Stewardship
            </span>
            <p className="text-[11px] text-stone-500 mt-0.5">Founding Royal Princesses</p>
          </div>
        </div>
      </section>

      {/* Personalized Visitor Journey Guide (Time & Role Aware) */}
      <PersonalizedJourneyBar
        greeting={greeting}
        onNavigate={onNavigate}
        onOpenDonate={() => onOpenDonate()}
        onOpenDonorPack={onOpenDonorPack}
      />

      {/* Asymmetric Overlapping Editorial Spread */}
      <EditorialAsymmetricSpread onNavigate={onNavigate} />

      {/* Core Institutional Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold text-[#8B1E3F] tracking-wider uppercase">
            Institutional Foundation
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A1525] text-balance">
            Bridging Historic Royal Sovereignty With Grassroots Delivery
          </h2>
          <KhoisanDivider className="max-w-xs mx-auto" />
          <p className="text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
            The Royal Sisterhood operates at the intersection of traditional community trust and modern corporate-grade execution, addressing South Africa’s deepest societal challenges through three unyielding pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 bg-white rounded-xl border border-stone-200 hover:border-[#C59B27]/60 shadow-sm hover:shadow-md card-interactive flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-[#F3EFE7] border border-[#C59B27]/40 flex items-center justify-center mb-5 transition-transform duration-200 ease-tactile group-hover:scale-105 group-hover:-rotate-3">
                <Crown className="w-5 h-5 text-[#4A1525]" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#4A1525] mb-2">
                Traditional Unification & Heritage
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Reconvening the dispersed Royal Houses of the Griqua across South Africa through the National Imbizo, preserving the historical treaties and lineage chronicles of Adam Kok I through IV.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#8B1E3F]">
              <span>National Imbizo Council</span>
              <button
                type="button"
                onClick={() => onNavigate("leadership")}
                className="inline-flex items-center gap-1 hover:text-[#4A1525] cursor-pointer"
              >
                <span>Read Lineage</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="group p-8 bg-white rounded-xl border border-stone-200 hover:border-[#8B1E3F]/50 shadow-sm hover:shadow-md card-interactive flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-[#FBEFF2] border border-[#8B1E3F]/30 flex items-center justify-center mb-5 transition-transform duration-200 ease-tactile group-hover:scale-105 group-hover:-rotate-3">
                <Shield className="w-5 h-5 text-[#8B1E3F]" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#4A1525] mb-2">
                Safe Havens & Frontline Anti-GBV
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Direct, survivor-led emergency safe housing, rapid trauma counseling referrals, and court accompaniment for women and children in high-risk communities such as Mid Ennerdale and Eldorado Park.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#8B1E3F]">
              <span>24/7 Rapid Response Network</span>
              <button
                type="button"
                onClick={() => onNavigate("support")}
                className="inline-flex items-center gap-1 hover:text-[#4A1525] cursor-pointer"
              >
                <span>Emergency Help</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="group p-8 bg-white rounded-xl border border-stone-200 hover:border-[#C59B27]/60 shadow-sm hover:shadow-md card-interactive flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-[#F3EFE7] border border-[#C59B27]/40 flex items-center justify-center mb-5 transition-transform duration-200 ease-tactile group-hover:scale-105 group-hover:rotate-3">
                <Sparkles className="w-5 h-5 text-[#B85D3B]" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#4A1525] mb-2">
                Digital & Economic Liberation
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Breaking generational poverty through technical coding bootcamps with Future Coding Corp, agricultural cooperatives with RSBC Trading, and enterprise incubation with Young Investments.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#8B1E3F]">
              <span>Tech & Agri Hubs</span>
              <button
                type="button"
                onClick={() => onNavigate("programmes")}
                className="inline-flex items-center gap-1 hover:text-[#4A1525] cursor-pointer"
              >
                <span>View Hubs</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Interactive Parallax Heritage Panorama */}
      <CinematicHeritagePanorama onNavigate={onNavigate} />

      {/* Flagship Programmes Spotlight */}
      <section className="bg-[#F3EFE7] py-16 border-y border-[#E5DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8B1E3F]">
                Execution In Action
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525] mt-1 text-balance">
                6 National Flagship Initiatives
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl mt-1.5">
                Structured for scalable Corporate Social Investment (CSI), donor co-funding, and measurable social return on investment.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate("programmes")}
              className="group inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#4A1525] text-white text-xs font-semibold rounded-md hover:bg-[#340C18] btn-tactile self-start md:self-auto cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Explore All 6 Programmes</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLAGSHIP_PROGRAMMES.slice(0, 3).map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-xl border border-stone-200 hover:border-[#C59B27]/55 overflow-hidden shadow-sm hover:shadow-md card-interactive flex flex-col justify-between group"
              >
                <div>
                  {prog.image ? (
                    <div className="h-48 overflow-hidden relative border-b border-stone-200">
                      <HeritageImage
                        src={prog.image}
                        alt={prog.title}
                        fallbackLabel={prog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-tactile"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-[#4A1525]/10 via-[#FAF8F5] to-[#8B1E3F]/10 flex items-center justify-center p-6 border-b border-stone-200">
                      <div className="text-center">
                        <span className="font-mono text-xs font-semibold text-[#8B1E3F] tabular-nums">
                          Programme {prog.number}
                        </span>
                        <h4 className="font-cinzel text-base font-bold text-[#4A1525] mt-1">
                          {prog.title}
                        </h4>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-[#B85D3B] mb-1.5">
                      <span className="font-mono font-semibold text-[#8B1E3F] tabular-nums">
                        Initiative {prog.number}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{prog.leadPartner}</span>
                    </div>
                    <h3 className="font-cinzel text-base font-bold text-stone-900 group-hover:text-[#4A1525] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-3 mt-2 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onSelectProgramme(prog.id)}
                    className="w-full py-2.5 bg-stone-100 group-hover:bg-[#4A1525] group-hover:text-white text-stone-800 text-xs font-semibold rounded-md border border-stone-300 group-hover:border-[#4A1525] btn-tactile flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sponsorship & Beneficiary Impact Simulator */}
      <CSIImpactSimulator
        onProceedToEft={(prog, amt) => onOpenDonate(prog, amt)}
      />

      {/* The Founding Royal Princesses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#8B1E3F]">
            Executive Governance
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A1525] text-balance">
            The Founding Royal Princesses
          </h2>
          <KhoisanDivider className="max-w-xs mx-auto" />
          <p className="text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Sisters of King Adam Kok V and direct descendants of the Adam Kok I to IV bloodline, steering the organisation with sovereign integrity, community accountability, and modern institutional governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROYAL_PRINCESSES.map((princess) => (
            <div
              key={princess.id}
              className="group bg-white rounded-xl border border-stone-200 hover:border-[#C59B27]/60 p-6 shadow-sm hover:shadow-md card-interactive flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full bg-[#FAF8F5] border-2 border-[#C59B27] overflow-hidden shadow-sm shrink-0 transition-transform duration-200 ease-tactile group-hover:scale-105">
                    <HeritageImage
                      src={princess.portrait}
                      alt={princess.name}
                      fallbackLabel={princess.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-medium text-[#B85D3B] block">
                      {princess.title}
                    </span>
                    <h3 className="font-cinzel text-base font-bold text-[#4A1525] leading-snug">
                      {princess.name}
                    </h3>
                    <p className="text-[11px] font-medium text-stone-600 mt-0.5">
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

                <blockquote className="mt-4 py-3 border-y border-[#C59B27]/35 text-xs font-playfair italic text-stone-800 leading-relaxed">
                  “{princess.quote}”
                </blockquote>
              </div>

              <div className="mt-5 pt-4 space-y-3">
                <div>
                  <span className="text-[11px] uppercase font-semibold tracking-wider text-stone-500 block mb-1.5">
                    Core Portfolio
                  </span>
                  <ul className="space-y-1">
                    {princess.focusAreas.slice(0, 3).map((area, idx) => (
                      <li key={idx} className="text-[11px] text-stone-700 flex items-baseline gap-2">
                        <span className="text-[#C59B27] font-bold" aria-hidden="true">—</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {princess.phone && (
                  <div className="pt-3 border-t border-stone-100">
                    <a
                      href={`tel:${princess.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A1525] hover:underline tabular-nums"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#8B1E3F]" />
                      <span>Direct Office: {princess.phone}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => onNavigate("leadership")}
            className="group inline-flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-stone-100 text-[#4A1525] text-xs font-semibold rounded-md border border-stone-300 btn-tactile cursor-pointer"
          >
            <span>Explore Full Royal Lineage (Adam Kok I to V)</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Authentic Royal Evidence & Photographic Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl border border-[#C59B27]/40 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8B1E3F]">
                Institutional Proof & Heritage Records
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525] mt-1 text-balance">
                Royal Archives & Living Lineage
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl mt-1">
                Verified documentary photographs, official CIPC registration certificate, and unbroken genealogical records under His Majesty King Adam Kok V.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate("gallery")}
              className="group text-xs font-semibold text-[#8B1E3F] hover:text-[#4A1525] inline-flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0 tabular-nums"
            >
              <span>View Full {GALLERY_ITEMS.length}-Item Media Gallery</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF8F5] rounded-lg border border-stone-200 hover:border-[#C59B27]/55 overflow-hidden group card-interactive">
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <HeritageImage
                  src="/drive_assets/king_adam_kok_v_and_princesses.jpg"
                  alt="His Majesty King Adam Kok V & Royal Princesses"
                  fallbackLabel="King Adam Kok V"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-tactile"
                />
              </div>
              <div className="p-4">
                <span className="text-[11px] font-medium text-[#8B1E3F] block mb-1">
                  Royal Council
                </span>
                <h4 className="font-cinzel text-xs font-bold text-stone-900">
                  His Majesty King Adam Kok V
                </h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                  Seated with the traditional royal scepter alongside his sisters, the Royal Princesses.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] rounded-lg border border-stone-200 hover:border-[#C59B27]/55 overflow-hidden group card-interactive">
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <HeritageImage
                  src="/drive_assets/three_princesses_full_standing.jpg"
                  alt="The Three Royal Princesses in Ceremonial Attire"
                  fallbackLabel="The Founding Royal Princesses"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-tactile"
                />
              </div>
              <div className="p-4">
                <span className="text-[11px] font-medium text-[#8B1E3F] block mb-1">
                  Executive Vanguard
                </span>
                <h4 className="font-cinzel text-xs font-bold text-stone-900">
                  The Three Royal Sisters
                </h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                  Princess Cornelia Eva Julius, Princess May Kok Paulsen, and Princess Maggie Kok Gibbs.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] rounded-lg border border-stone-200 hover:border-[#C59B27]/55 overflow-hidden group card-interactive">
              <div className="preserve-light aspect-[4/3] overflow-hidden bg-white">
                <HeritageImage
                  src="/drive_assets/official_registration_certificate.jpg"
                  alt="Official CIPC Registration Certificate 2025/191780/07"
                  fallbackLabel="CIPC 2025/191780/07"
                  className="w-full h-full object-contain p-2 bg-white group-hover:scale-105 transition-transform duration-500 ease-tactile"
                />
              </div>
              <div className="p-4">
                <span className="text-[11px] font-medium text-[#8B1E3F] block mb-1">
                  Statutory Registration
                </span>
                <h4 className="font-cinzel text-xs font-bold text-stone-900 tabular-nums">
                  CIPC Certificate 2025/191780/07
                </h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                  Official incorporation record signed by all three Founding Director Princesses.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] rounded-lg border border-stone-200 hover:border-[#C59B27]/55 overflow-hidden group card-interactive">
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <HeritageImage
                  src="/drive_assets/adam_kok_genealogical_tree.jpg"
                  alt="Adam Kok I to V Genealogical Succession Chart"
                  fallbackLabel="Adam Kok I–V Tree"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-tactile"
                />
              </div>
              <div className="p-4">
                <span className="text-[11px] font-medium text-[#8B1E3F] block mb-1">
                  Historical Lineage
                </span>
                <h4 className="font-cinzel text-xs font-bold text-stone-900">
                  Genealogical Succession
                </h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed tabular-nums">
                  Historical chronicle from Kaptein Adam Kok I (1710) to King Adam Kok V.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Implementation Partners Strip */}
      <section className="bg-[#2D0B16] text-white py-16 border-y border-[#C59B27]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#F3C969]">
              Co-Implementation Coalition
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white text-balance">
              Official Strategic Partners
            </h2>
            <KhoisanDivider tone="dark" className="max-w-xs mx-auto" />
            <p className="text-xs sm:text-sm text-stone-200">
              Formally bound by strategic MoUs to deliver holistic community transformation, digital education, enterprise incubation, and supply chain logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGIC_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="p-5 bg-white/5 rounded-lg border border-white/15 hover:border-[#C59B27]/60 card-interactive flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-medium text-[#F3C969]">
                      {partner.badge}
                    </span>
                    <Award className="w-4 h-4 text-[#C59B27] shrink-0 transition-transform duration-200 ease-tactile group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#F3C969] transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-stone-300 mt-1.5 line-clamp-2 leading-relaxed">
                    {partner.focus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/15">
                  <span className="text-[11px] text-stone-400 block mb-2 tabular-nums">
                    {partner.mouStatus}
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate("partners")}
                    className="text-xs text-[#F3C969] hover:underline inline-flex items-center gap-1 font-semibold cursor-pointer"
                  >
                    <span>View Joint Initiatives</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-stone-200">
              Interested in joining our national implementation coalition?
            </span>
            <button
              type="button"
              onClick={() => onNavigate("partners")}
              className="px-4 py-2.5 bg-[#C59B27] hover:bg-[#B08920] text-stone-950 font-bold rounded-md text-xs btn-tactile cursor-pointer whitespace-nowrap"
            >
              Become a Strategic Partner
            </button>
          </div>
        </div>
      </section>

      {/* Donor Due Diligence & Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 bg-white rounded-xl border border-[#C59B27]/45 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8B1E3F]">
              <Shield className="w-4 h-4 shrink-0" />
              <span>Due Diligence Ready for CSI, NLC & International Foundations</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525] text-balance">
              Partner With Us to Deliver Verified, Systemic Impact
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
              We operate dedicated Capitec Bank treasury oversight, quarterly impact reporting, Section 18A donor certification pipelines, and direct community co-branding. Sponsor an entire flagship programme or adopt a household food garden cluster.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="px-5 py-3 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-semibold uppercase tracking-wider rounded-md btn-tactile cursor-pointer whitespace-nowrap"
              >
                Capitec EFT & Sponsor Cohort
              </button>
              <button
                type="button"
                onClick={onOpenDonorPack}
                className="px-5 py-3 border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-semibold rounded-md btn-tactile cursor-pointer whitespace-nowrap"
              >
                Download Donor Dossier
              </button>
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="px-4 py-3 text-xs font-semibold text-[#8B1E3F] hover:text-[#4A1525] underline underline-offset-4 cursor-pointer whitespace-nowrap"
              >
                Contact Secretariat
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 p-5 bg-[#F3EFE7] rounded-lg border border-[#C59B27]/35 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#4A1525]">
              Institutional Verification
            </h4>
            <dl className="text-xs space-y-2 text-stone-700 divide-y divide-stone-300/60">
              <div className="pt-1 flex justify-between gap-2">
                <dt className="text-stone-500">CIPC Reg</dt>
                <dd className="font-mono font-semibold text-stone-900 tabular-nums">
                  {ROYAL_ORGANIZATION.registrationNumber}
                </dd>
              </div>
              <div className="pt-2 flex justify-between gap-2">
                <dt className="text-stone-500">Bank</dt>
                <dd className="font-semibold text-stone-900">Capitec Bank SA</dd>
              </div>
              <div className="pt-2 flex justify-between gap-2">
                <dt className="text-stone-500">Account No.</dt>
                <dd className="font-mono font-semibold text-[#4A1525] tabular-nums">
                  {ROYAL_ORGANIZATION.bankingDetails.accountNumber}
                </dd>
              </div>
              <div className="pt-2 flex justify-between gap-2">
                <dt className="text-stone-500">Branch Code</dt>
                <dd className="font-mono font-semibold text-stone-900 tabular-nums">
                  {ROYAL_ORGANIZATION.bankingDetails.branchCode}
                </dd>
              </div>
              <div className="pt-2 flex justify-between gap-2">
                <dt className="text-stone-500">Office</dt>
                <dd className="font-medium text-stone-900 text-right">
                  2445 5th Ave, Mid Ennerdale
                </dd>
              </div>
            </dl>
            <div className="pt-2 border-t border-stone-300 text-center">
              <button
                type="button"
                onClick={() => onNavigate("fund-us")}
                className="text-xs font-semibold text-[#8B1E3F] hover:text-[#4A1525] hover:underline cursor-pointer"
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
