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
        {/* Left: Emergency Alert indicator */}
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#8B1E3F] text-amber-200">
            <Shield className="w-3 h-3" />
          </span>
          <span className="font-semibold text-amber-200 uppercase tracking-wider text-[11px]">
            South Africa GBV Crisis Line:
          </span>
          <a
            href="tel:0800428428"
            className="font-bold underline decoration-[#C59B27] underline-offset-2 hover:text-[#C59B27] transition-colors"
          >
            0800 428 428 (Toll-Free 24/7)
          </a>
          <span className="hidden md:inline text-neutral-400">·</span>
          <span className="hidden md:inline text-neutral-300">
            SAPS Emergency: <a href="tel:10111" className="font-bold hover:text-white underline">10111</a>
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={onOpenConfidentialHelp}
            className="px-2.5 py-1 text-[11px] font-semibold bg-[#B85D3B] hover:bg-[#9B4B2E] text-white rounded transition-colors"
          >
            Confidential Help Intake
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-[11px] text-neutral-300 hover:text-white transition-colors"
          >
            <span>All Helplines</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expanded directory */}
      {isExpanded && (
        <div className="bg-[#1C060E] border-t border-[#4A1525] px-4 sm:px-6 py-3.5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {EMERGENCY_HELPLINES.map((line, idx) => (
              <div
                key={idx}
                className="p-2.5 bg-[#2B0A16]/60 rounded border border-[#C59B27]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-amber-200/90 font-medium">
                    <span>{line.type}</span>
                    <span className="text-[10px] text-neutral-400">{line.hours}</span>
                  </div>
                  <h4 className="font-bold text-white mt-1 text-sm">{line.name}</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">{line.alt}</p>
                </div>
                <a
                  href={`tel:${line.phone.replace(/\s+/g, "")}`}
                  className="mt-2.5 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#8B1E3F] hover:bg-[#6D1530] text-white font-semibold rounded text-xs transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call {line.phone}</span>
                </a>
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto mt-2.5 pt-2 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
            <p className="flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>Browsing history safety: clear cache if accessing this portal on a shared or monitored device.</span>
            </p>
            <a
              href="https://www.google.co.za"
              className="text-amber-300 underline hover:text-amber-100"
            >
              Exit to Google immediately
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
