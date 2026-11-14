import React, { useState } from "react";
import { PhoneCall, Shield, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import { EMERGENCY_HELPLINES } from "../data/organizationData";

interface EmergencyBannerProps {
  onOpenConfidentialHelp: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenConfidentialHelp }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#2D0B16] text-[#FAF8F5] border-b border-[#C59B27]/30 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Emergency Helpline Readout */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          <Shield className="w-3.5 h-3.5 text-[#F3C969] shrink-0" />
          <span className="font-medium text-amber-200">
            SA GBV Crisis Line:
          </span>
          <a
            href="tel:0800428428"
            className="font-semibold tabular-nums underline decoration-[#C59B27] underline-offset-2 hover:text-[#F3C969] transition-colors whitespace-nowrap shrink-0"
          >
            0800 428 428
          </a>
          <span className="hidden md:inline text-stone-400" aria-hidden="true">·</span>
          <span className="hidden md:inline text-stone-200 whitespace-nowrap">
            SAPS Emergency:{" "}
            <a href="tel:10111" className="font-semibold tabular-nums hover:text-white underline">
              10111
            </a>
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 ml-auto">
          <button
            type="button"
            onClick={onOpenConfidentialHelp}
            className="px-3 py-1 text-xs font-semibold bg-[#B85D3B] hover:bg-[#9B4B2E] text-white rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Confidential Help
          </button>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            className="flex items-center gap-1 text-xs text-stone-200 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>All Helplines</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expanded directory */}
      {isExpanded && (
        <div className="bg-[#1C060E] border-t border-[#4A1525] px-4 sm:px-6 py-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {EMERGENCY_HELPLINES.map((line, idx) => (
              <div
                key={idx}
                className="p-3 bg-[#2B0A16]/70 rounded-lg border border-[#C59B27]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] text-amber-200/90 font-medium">
                    <span>{line.type}</span>
                    <span className="text-stone-400">{line.hours}</span>
                  </div>
                  <h4 className="font-semibold text-white mt-1 text-sm">{line.name}</h4>
                  <p className="text-[11px] text-stone-300 mt-0.5">{line.alt}</p>
                </div>
                <a
                  href={`tel:${line.phone.replace(/\s+/g, "")}`}
                  className="mt-3 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#8B1E3F] hover:bg-[#6D1530] text-white font-semibold rounded-md text-xs tabular-nums transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call {line.phone}</span>
                </a>
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto mt-3 pt-2.5 border-t border-stone-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-300">
            <p className="flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Browsing safety: clear browser history if accessing this portal on a shared device.</span>
            </p>
            <button
              type="button"
              onClick={() => window.location.replace("https://www.google.co.za")}
              className="text-amber-300 underline hover:text-amber-100 cursor-pointer"
            >
              Exit to Google immediately
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
