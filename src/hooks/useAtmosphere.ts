import { useEffect, useState } from "react";
import { playTap } from "../utils/soundEngine";

export type AtmosphereMode = "daylight" | "velvet";

const ATMOSPHERE_STORAGE_KEY = "royal_sisterhood_atmosphere";

interface TimeContext {
  greeting: string;
  timeWindowLabel: string;
  recommendedMode: AtmosphereMode;
}

function getLocalTimeContext(): TimeContext {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return {
      greeting: "Good Morning",
      timeWindowLabel: "Morning Sunlight Palette",
      recommendedMode: "daylight",
    };
  }
  if (hour >= 12 && hour < 18) {
    return {
      greeting: "Good Afternoon",
      timeWindowLabel: "Daylight Parchment Palette",
      recommendedMode: "daylight",
    };
  }
  return {
    greeting: "Good Evening",
    timeWindowLabel: "Evening Royal Velvet",
    recommendedMode: "velvet",
  };
}

export function useAtmosphere() {
  const [timeContext, setTimeContext] = useState<TimeContext>(() => getLocalTimeContext());
  const [atmosphere, setAtmosphere] = useState<AtmosphereMode>(() => {
    try {
      const saved = localStorage.getItem(ATMOSPHERE_STORAGE_KEY);
      if (saved === "daylight" || saved === "velvet") {
        return saved;
      }
    } catch {
      // Ignore storage edge cases
    }
    return getLocalTimeContext().recommendedMode;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeContext(getLocalTimeContext());
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  const toggleAtmosphere = () => {
    playTap();
    setAtmosphere((prev) => {
      const next: AtmosphereMode = prev === "daylight" ? "velvet" : "daylight";
      try {
        localStorage.setItem(ATMOSPHERE_STORAGE_KEY, next);
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  };

  return {
    greeting: timeContext.greeting,
    timeWindowLabel: timeContext.timeWindowLabel,
    atmosphere,
    toggleAtmosphere,
  };
}
