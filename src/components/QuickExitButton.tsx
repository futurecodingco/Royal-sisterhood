import React, { useEffect, useState } from "react";
import { ShieldAlert, ExternalLink } from "lucide-react";

export const QuickExitButton: React.FC = () => {
  const [, setPressCount] = useState(0);

  const handleQuickExit = () => {
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
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 group">
      <button
        onClick={handleQuickExit}
        type="button"
        title="Immediate Safety Exit: Redirects instantly to Google"
        aria-label="Quick Exit to Google for survivor safety"
        className="flex items-center gap-2 px-4 py-2.5 bg-[#8B1E3F] hover:bg-[#6D1530] text-white font-semibold text-xs tracking-wide rounded-lg shadow-lg border border-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27] focus-visible:ring-offset-2 cursor-pointer whitespace-nowrap shrink-0"
      >
        <ShieldAlert className="w-4 h-4 text-[#F3C969]" />
        <span>Quick Exit</span>
        <ExternalLink className="w-3.5 h-3.5 text-white/80" />
      </button>

      {/* Discreet tooltip on hover/focus */}
      <div className="hidden lg:group-hover:block absolute right-0 bottom-full mb-2 w-64 p-3 bg-neutral-900 text-neutral-200 text-xs rounded-lg shadow-xl border border-neutral-700 pointer-events-none">
        <p className="font-semibold text-[#F3C969] mb-1">Survivor Safety Exit</p>
        <p className="text-[11px] leading-relaxed">
          Immediately replaces this tab with Google. Press{" "}
          <kbd className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-[10px]">
            Esc
          </kbd>{" "}
          twice from anywhere on the site.
        </p>
      </div>
    </div>
  );
};
