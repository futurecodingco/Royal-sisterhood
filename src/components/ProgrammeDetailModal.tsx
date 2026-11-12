import React from "react";
import { X, CheckCircle, MapPin, Users, HeartHandshake, ShieldCheck, Banknote } from "lucide-react";
import { FlagshipProgramme } from "../data/organizationData";

interface ProgrammeDetailModalProps {
  programme: FlagshipProgramme | null;
  onClose: () => void;
  onSponsor: (programme: FlagshipProgramme) => void;
}

export const ProgrammeDetailModal: React.FC<ProgrammeDetailModalProps> = ({
  programme,
  onClose,
  onSponsor,
}) => {
  if (!programme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-xl shadow-2xl border border-[#C59B27]/40 flex flex-col overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-[#4A1525] text-white flex items-start justify-between border-b border-[#C59B27]/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F3C969] uppercase tracking-wider">
              <span>Flagship Initiative {programme.number}</span>
              <span>·</span>
              <span>Lead Partner: {programme.leadPartner}</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold mt-1 text-white">
              {programme.title}
            </h3>
            <p className="text-xs text-white/80 mt-1 max-w-xl">
              {programme.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#1F1F1F]">
          {/* Optional banner image */}
          {programme.image && (
            <div className="rounded-lg overflow-hidden h-52 w-full relative border border-stone-200">
              <img
                src={programme.image}
                alt={programme.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white/90 font-medium">
                  {programme.title} · Field Operations
                </span>
              </div>
            </div>
          )}

          {/* Impact Metrics strip */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-[#FAF5EE] rounded-lg border border-[#C59B27]/30 text-center">
            {programme.impactMetrics.map((metric, idx) => (
              <div key={idx}>
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#4A1525] block tabular-nums">
                  {metric.value}
                </span>
                <span className="text-[11px] text-stone-600 uppercase font-semibold tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h4 className="font-semibold text-stone-900 uppercase tracking-wider text-xs mb-1.5">
              Programme Overview & Strategic Mandate
            </h4>
            <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
              {programme.description}
            </p>
          </div>

          {/* Key Objectives */}
          <div>
            <h4 className="font-semibold text-stone-900 uppercase tracking-wider text-xs mb-2">
              Measurable Deliverables & Operational Scope
            </h4>
            <ul className="space-y-2">
              {programme.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <CheckCircle className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scope & Beneficiaries Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-stone-100 rounded-lg border border-stone-200 text-xs">
            <div className="flex items-start gap-2">
              <Users className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-stone-900 block">Target Beneficiaries</span>
                <span className="text-stone-600">{programme.targetBeneficiaries}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-stone-900 block">Geographic Footprint</span>
                <span className="text-stone-600">{programme.provinces}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Banknote className="w-4 h-4 text-emerald-700" />
            <span className="text-xs text-stone-600">Annual Programme Budget:</span>
            <span className="text-sm font-bold text-stone-900">{programme.fundingNeedZAR}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSponsor(programme);
              }}
              className="px-5 py-2.5 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-bold uppercase tracking-wider rounded flex items-center gap-1.5 shadow transition-colors cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4 text-[#F3C969]" />
              <span>Sponsor This Programme</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
