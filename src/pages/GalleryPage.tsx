import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data/organizationData";
import { Camera, X, ZoomIn, Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

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

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

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

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#340B18] via-[#4A1525] to-[#2D0B16] text-white py-16 px-4 sm:px-6 border-b border-[#C59B27]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-heritage-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-[#F3C969] text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Documentary Photographic Archives</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Royal Gatherings & Grassroots Impact
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-3xl leading-relaxed font-light">
            Visual testimony of the Royal Sisterhood AK 1 to 4 Bloodline across South Africa: traditional royal councils, women in coding bootcamps, community agricultural hubs, and dignity parcel outreaches.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Category Pills */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 border-b border-stone-200 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#4A1525] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:text-stone-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3 py-1.5 bg-white/90 text-stone-900 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View High-Res</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#4A1525]/90 text-white text-[10px] font-mono uppercase tracking-wider rounded">
                  {item.category}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-cinzel text-base font-bold text-stone-900 group-hover:text-[#4A1525] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {item.caption}
                </p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Archive {item.date}</span>
                  </span>
                  <span className="text-[#8B1E3F] font-semibold">Inspect Record</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#1A040B] rounded-xl overflow-hidden border border-[#C59B27]/40 shadow-2xl">
            {/* Lightbox Header */}
            <div className="p-4 bg-[#2D0B16] text-white flex items-center justify-between border-b border-[#C59B27]/30">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F3C969]">
                <Tag className="w-3.5 h-3.5" />
                <span>{filteredItems[activeLightboxIndex].category}</span>
                <span>·</span>
                <span>{activeLightboxIndex + 1} of {filteredItems.length}</span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-1 text-white/70 hover:text-white rounded hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Image Stage */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px] max-h-[60vh]">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="w-full h-full object-contain"
              />

              {/* Navigation arrows */}
              <button
                onClick={prevLightbox}
                className="absolute left-3 p-2 rounded-full bg-black/60 text-white hover:bg-[#4A1525] transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextLightbox}
                className="absolute right-3 p-2 rounded-full bg-black/60 text-white hover:bg-[#4A1525] transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Caption Box */}
            <div className="p-6 bg-[#240711] text-stone-200 space-y-2 border-t border-[#C59B27]/30">
              <h3 className="font-cinzel text-lg font-bold text-white">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed max-w-3xl">
                {filteredItems[activeLightboxIndex].caption}
              </p>
              <div className="pt-2 text-[11px] text-stone-500 font-mono">
                Official Royal Sisterhood AK 1 to 4 Bloodline Historical Archive
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
