import React from "react";
import { Volume2, VolumeX, Sun, Moon } from "lucide-react";
import { AtmosphereMode } from "../hooks/useAtmosphere";
import { useSoundSettings } from "../utils/soundEngine";

interface ExperienceBarProps {
  atmosphere: AtmosphereMode;
  onToggleAtmosphere: () => void;
}

export const ExperienceBar: React.FC<ExperienceBarProps> = ({
  atmosphere,
  onToggleAtmosphere,
}) => {
  const { soundEnabled, toggleSound } = useSoundSettings();

  return (
    <div
      aria-label="Reading atmosphere and tactile audio controls"
      className="fixed bottom-4 left-4 z-40 flex items-center bg-[#20050E]/95 backdrop-blur-md text-stone-100 rounded-lg border border-[#C59B27]/45 shadow-lg divide-x divide-[#C59B27]/25 overflow-hidden"
    >
      <button
        type="button"
        onClick={toggleSound}
        aria-pressed={soundEnabled}
        title={soundEnabled ? "Mute tactile audio feedback" : "Enable gentle acoustic chimes"}
        className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap"
      >
        {soundEnabled ? (
          <Volume2 className="w-3.5 h-3.5 text-[#F3C969]" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-stone-400" />
        )}
        <span className="hidden sm:inline">
          {soundEnabled ? "Sound On" : "Sound Off"}
        </span>
      </button>

      <button
        type="button"
        onClick={onToggleAtmosphere}
        aria-pressed={atmosphere === "velvet"}
        title={
          atmosphere === "daylight"
            ? "Switch to Evening Royal Velvet theme"
            : "Switch to Daylight Parchment theme"
        }
        className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap"
      >
        {atmosphere === "velvet" ? (
          <Moon className="w-3.5 h-3.5 text-[#F3C969]" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-[#F3C969]" />
        )}
        <span className="hidden sm:inline">
          {atmosphere === "velvet" ? "Royal Velvet" : "Daylight"}
        </span>
      </button>
    </div>
  );
};
