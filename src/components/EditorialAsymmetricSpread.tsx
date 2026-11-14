import React from "react";
import { ArrowRight, Crown } from "lucide-react";
import { HeritageImage } from "./HeritageImage";
import { PageId } from "./Navbar";

interface EditorialAsymmetricSpreadProps {
  onNavigate: (page: PageId) => void;
}

export const EditorialAsymmetricSpread: React.FC<EditorialAsymmetricSpreadProps> = ({
  onNavigate,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-0">
        {/* Left Asymmetric Photographic Canvas (7 Cols) */}
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-[#C59B27]/45 shadow-xl bg-[#1D050D] group">
          <div className="aspect-[16/11] overflow-hidden">
            <HeritageImage
              src="/drive_assets/king_adam_kok_v_and_princesses.jpg"
              alt="His Majesty King Adam Kok V seated with the Royal Princesses"
              fallbackLabel="His Majesty King Adam Kok V & Royal Council"
              className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-tactile"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#18040A]/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center justify-between gap-2 text-xs text-white/90">
            <span className="font-cinzel font-semibold text-[#F3C969]">
              Royal Mandate · Mid Ennerdale & National Councils
            </span>
            <span className="font-mono text-[11px] tabular-nums text-stone-200">
              Adam Kok I (1710) → King Adam Kok V
            </span>
          </div>
        </div>

        {/* Right Overlapping Editorial Manifesto Panel (6 Cols, overlaps 1 Col left on desktop) */}
        <div className="lg:col-span-6 lg:-ml-12 relative z-10 bg-white rounded-2xl border border-[#C59B27]/50 p-7 sm:p-10 shadow-2xl space-y-5">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B1E3F]">
              <Crown className="w-4 h-4 text-[#C59B27]" />
              <span>Living Constitutional Covenant</span>
            </div>
            <span className="font-cinzel text-xs font-bold text-[#C59B27] tabular-nums">
              EST. 1710 LINEAGE
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A1525] leading-tight text-balance">
            Sovereign Authority Rooted in Grassroots Servitude
          </h2>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            <span className="float-left font-cinzel text-4xl font-extrabold text-[#4A1525] leading-none mr-3 mt-1">
              F
            </span>
            ounded under the blessing of His Majesty King Adam Kok V by his three royal sisters, the Royal Sisterhood translates over three centuries of Griqua constitutional solidarity into measurable protection for women, youth digital literacy, and community food sovereignty.
          </p>

          <blockquote className="py-3 border-y border-[#C59B27]/35 font-playfair italic text-sm text-stone-800 leading-relaxed">
            “Our bloodline is not a title of detachment; it is an ancestral covenant of servitude to our women, our youth, and the sacred soil of our people.”
          </blockquote>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-4 text-xs tabular-nums">
              <div>
                <span className="font-cinzel text-lg font-bold text-[#4A1525] block">5</span>
                <span className="text-[11px] text-stone-500">Generations of Adam Kok</span>
              </div>
              <div className="h-7 w-px bg-stone-200" aria-hidden="true" />
              <div>
                <span className="font-cinzel text-lg font-bold text-[#4A1525] block">9 / 9</span>
                <span className="text-[11px] text-stone-500">Provinces Convened</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate("leadership")}
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-semibold rounded-md btn-tactile cursor-pointer whitespace-nowrap"
            >
              <span>Read Full Chronicle</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F3C969] transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
