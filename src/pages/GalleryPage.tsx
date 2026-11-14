import React, { useEffect, useState } from "react";
import { GALLERY_ITEMS } from "../data/organizationData";
import { Camera, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { HeritageImage } from "../components/HeritageImage";
import { PageHeroBanner } from "../components/PageHeroBanner";

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    "All",
    "Royal Heritage",
    "Royal Leadership",
    "Genealogy & Lineage",
    "Governance & Compliance",
    "Historical Archives",
    "Digital & Youth Hub",
    "Community Welfare",
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  useEffect(() => {
    if (activeLightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <div className="space-y-16 pb-20">
      <PageHeroBanner
        kickerIcon={<Camera className="w-4 h-4 shrink-0" />}
        kickerText="Documentary Photographic Archives"
        title="Royal Gatherings & Grassroots Impact"
        subtitle="Visual testimony of the Royal Sisterhood AK 1 to 4 Bloodline across South Africa: traditional royal councils, official CIPC governance records, women in coding bootcamps, and dignity outreaches."
      />

      {/* Gallery Filter & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Category Filter Buttons */}
        <div className="flex overflow-x-auto gap-1.5 pb-4 mb-8 border-b border-stone-200 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveLightboxIndex(null);
                }}
                className={`relative px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer border ${
                  isSelected
                    ? "text-white border-[#4A1525]"
                    : "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : "galleryCategoryIndicator"}
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#4A1525] rounded-md"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openLightbox(idx)}
              className="group text-left bg-white rounded-xl border border-stone-200 hover:border-[#C59B27]/60 overflow-hidden shadow-sm hover:shadow-md card-interactive cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 border-b border-stone-200">
                <HeritageImage
                  src={item.image}
                  alt={item.title}
                  fallbackLabel={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 bg-white/95 text-stone-900 rounded-md text-xs font-semibold flex items-center gap-1.5 shadow">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Inspect Record</span>
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-medium text-[#8B1E3F] mb-1">
                    <span>{item.category}</span>
                    <span aria-hidden="true" className="text-stone-400">·</span>
                    <span className="text-stone-500 tabular-nums">{item.date}</span>
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-stone-900 group-hover:text-[#4A1525] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-3 mt-1.5 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="tabular-nums">Record 0{idx + 1}</span>
                  <span className="text-[#8B1E3F] font-semibold">Open Lightbox →</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={filteredItems[activeLightboxIndex].title}
        >
          <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#1A040B] rounded-xl overflow-hidden border border-[#C59B27]/40 shadow-2xl">
            <div className="p-4 bg-[#2D0B16] text-white flex items-center justify-between border-b border-[#C59B27]/30">
              <div className="flex items-center gap-2 text-xs font-medium text-[#F3C969] tabular-nums">
                <span>{filteredItems[activeLightboxIndex].category}</span>
                <span aria-hidden="true">·</span>
                <span>
                  {activeLightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="p-1.5 text-white/80 hover:text-white rounded-md hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[340px] max-h-[60vh]">
              <HeritageImage
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                fallbackLabel={filteredItems[activeLightboxIndex].title}
                className="w-full h-full object-contain"
              />

              <button
                type="button"
                onClick={prevLightbox}
                className="absolute left-3 p-2.5 rounded-full bg-black/65 text-white hover:bg-[#4A1525] transition-colors cursor-pointer"
                aria-label="Previous archive image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextLightbox}
                className="absolute right-3 p-2.5 rounded-full bg-black/65 text-white hover:bg-[#4A1525] transition-colors cursor-pointer"
                aria-label="Next archive image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-[#240711] text-stone-200 space-y-2 border-t border-[#C59B27]/30">
              <h3 className="font-cinzel text-lg font-bold text-white">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-3xl">
                {filteredItems[activeLightboxIndex].caption}
              </p>
              <div className="pt-2 text-[11px] text-stone-400">
                Official Royal Sisterhood AK 1 to 4 Bloodline Historical Archive
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
