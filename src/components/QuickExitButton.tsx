import React, { useEffect, useState } from "react";
import { ShieldAlert, ExternalLink } from "lucide-react";

export const QuickExitButton: React.FC = () => {
  const [pressCount, setPressCount] = useState(0);

  const handleQuickExit = () => {
    // Immediate redirect to neutral search page
    window.location.replace("https://www.google.co.za");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPressCount((prev) => {
          if (prev >= 1) {
            handleQuickExit();
            return 0;
          }
          return prev + 1;
        });
        setTimeout(() => setPressCount(0), 1200);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 group">
      <button
        onClick={handleQuickExit}
        type="button"
        title="Immediate Safety Exit: Redirects instantly to Google"
        aria-label="Quick Exit to Google for survivor safety"
        className="flex items-center gap-2.5 px-4 py-2.5 bg-[#8B1E3F] hover:bg-[#6D1530] text-white font-medium text-xs tracking-wider uppercase rounded-full shadow-xl border border-white/20 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C59B27] cursor-pointer"
      >
        <ShieldAlert className="w-4 h-4 text-[#F3C969] animate-pulse" />
        <span className="font-semibold">Quick Exit</span>
        <ExternalLink className="w-3.5 h-3.5 text-white/80" />
      </button>

      {/* Discreet tooltip */}
      <div className="hidden lg:group-hover:block absolute right-0 bottom-full mb-2 w-64 p-2.5 bg-neutral-900 text-neutral-200 text-xs rounded-lg shadow-2xl border border-neutral-700 pointer-events-none">
        <p className="font-semibold text-[#F3C969] mb-1">Survivor Safety Feature</p>
        <p className="text-[11px] leading-relaxed">
          Instantly redirects this browser tab to Google. Press <kbd className="px-1 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-[10px]">Esc</kbd> twice from anywhere on this site.
        </p>
      </div>
    </div>
  );
};
