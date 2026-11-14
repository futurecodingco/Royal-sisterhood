import React, { useState } from "react";
import { Sliders, HeartHandshake, Laptop, Shield, Sprout, ArrowRight } from "lucide-react";
import { FLAGSHIP_PROGRAMMES, FlagshipProgramme } from "../data/organizationData";
import { playTap, playConfirm } from "../utils/soundEngine";

type FocusMode = "balanced" | "dignity" | "coding" | "safehaven";

interface CSIImpactSimulatorProps {
  onProceedToEft: (programme?: FlagshipProgramme, amount?: number) => void;
}

const PRESET_AMOUNTS = [350, 2500, 5000, 25000, 100000];

const FOCUS_OPTIONS: { id: FocusMode; label: string; programmeId?: string }[] = [
  { id: "balanced", label: "Balanced Coalition Impact" },
  {
    id: "dignity",
    label: "Food & Dignity Packs",
    programmeId: "food-security-dignity-drive",
  },
  {
    id: "coding",
    label: "Coding & Tech Bursaries",
    programmeId: "women-economic-tech-hub",
  },
  {
    id: "safehaven",
    label: "GBV Safe Haven Care",
    programmeId: "gbv-safe-haven-network",
  },
];

export const CSIImpactSimulator: React.FC<CSIImpactSimulatorProps> = ({
  onProceedToEft,
}) => {
  const [amount, setAmount] = useState<number>(5000);
  const [focus, setFocus] = useState<FocusMode>("balanced");

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handlePresetClick = (val: number) => {
    playTap();
    setAmount(val);
  };

  const handleFocusClick = (mode: FocusMode) => {
    playTap();
    setFocus(mode);
  };

  // Verified unit equivalents grounded in published sponsorship packages:
  // R350 = 1 Monthly Dignity & Hygiene Pack
  // R2,500 = 1 Young Woman's 12-week Coding Bootcamp Bursary (Future Coding Corp)
  // R5,000 = 30 Days Emergency Safe Haven Care (shelter, counseling & legal support)
  // R25,000 = 10 Household Food Gardens with rainwater irrigation
  const shareWeight = focus === "balanced" ? 0.35 : 1;

  const dignityPacks =
    focus === "dignity" || focus === "balanced"
      ? Math.max(1, Math.floor((amount * (focus === "balanced" ? 0.25 : 1)) / 350))
      : Math.floor((amount * 0.15) / 350);

  const codingSeats =
    focus === "coding"
      ? Math.floor(amount / 2500)
      : focus === "balanced"
      ? Math.floor((amount * 0.35) / 2500)
      : 0;

  const shelterDays =
    focus === "safehaven"
      ? Math.max(1, Math.round((amount / 5000) * 30))
      : focus === "balanced"
      ? Math.max(1, Math.round(((amount * shareWeight) / 5000) * 30))
      : 0;

  const gardensInstalled =
    amount >= 2500
      ? Math.max(1, Math.floor(((amount * (focus === "dignity" ? 0.45 : 0.2)) / 25000) * 10))
      : 0;

  const handleSponsorClick = () => {
    playConfirm();
    const selectedFocus = FOCUS_OPTIONS.find((f) => f.id === focus);
    const targetProg = selectedFocus?.programmeId
      ? FLAGSHIP_PROGRAMMES.find((p) => p.id === selectedFocus.programmeId)
      : undefined;
    onProceedToEft(targetProg, amount);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-[#2D0B16] text-white rounded-2xl border border-[#C59B27]/50 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Interactive Controls (6 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-6 border-b lg:border-b-0 lg:border-r border-[#C59B27]/25">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F3C969]">
                <Sliders className="w-4 h-4 shrink-0" />
                <span>Interactive Sponsorship Impact Simulator</span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white text-balance">
                Model Your Direct Community Impact
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Slide or select a South African Rand (ZAR) contribution to preview tangible community outputs across Mid Ennerdale and our national coalition programmes.
              </p>
            </div>

            {/* Amount Display & Range Slider */}
            <div className="p-5 bg-white/5 rounded-xl border border-white/15 space-y-4">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-xs text-stone-300 font-medium">
                  Simulated Contribution
                </span>
                <span className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#F3C969] tabular-nums">
                  R {amount.toLocaleString("en-ZA")}
                </span>
              </div>

              <input
                type="range"
                min={350}
                max={100000}
                step={350}
                value={amount}
                onChange={handleSliderChange}
                aria-label="Simulated ZAR sponsorship amount"
                className="w-full royal-slider cursor-pointer"
              />

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {PRESET_AMOUNTS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handlePresetClick(preset)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold tabular-nums cursor-pointer btn-tactile border ${
                      amount === preset
                        ? "bg-[#C59B27] text-stone-950 border-[#F3C969]"
                        : "bg-white/5 text-stone-200 border-white/15 hover:bg-white/15"
                    }`}
                  >
                    R {preset.toLocaleString("en-ZA")}
                  </button>
                ))}
              </div>
            </div>

            {/* Focus Mode Selector */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-stone-300 block">
                Select Primary Allocation Focus
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FOCUS_OPTIONS.map((opt) => {
                  const isSelected = focus === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleFocusClick(opt.id)}
                      className={`px-3.5 py-2.5 rounded-lg text-left text-xs font-semibold border transition-colors cursor-pointer btn-tactile ${
                        isSelected
                          ? "bg-[#4A1525] text-[#F3C969] border-[#C59B27]"
                          : "bg-white/5 text-stone-300 border-white/15 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Live Output Readout (6 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 bg-[#20050E] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#F3C969] block">
                Estimated Direct Beneficiary Outcomes
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-[#C59B27]/30 space-y-1">
                  <div className="flex items-center justify-between text-[#F3C969]">
                    <HeartHandshake className="w-4 h-4" />
                    <span className="text-[10px] font-mono text-stone-400">R 350 / pack</span>
                  </div>
                  <div className="font-cinzel text-2xl sm:text-3xl font-bold text-white tabular-nums pt-1">
                    {dignityPacks.toLocaleString("en-ZA")}
                  </div>
                  <p className="text-xs text-stone-300">
                    Monthly Dignity & Hygiene Packs for schoolgirls & mothers
                  </p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-[#C59B27]/30 space-y-1">
                  <div className="flex items-center justify-between text-[#F3C969]">
                    <Laptop className="w-4 h-4" />
                    <span className="text-[10px] font-mono text-stone-400">R 2,500 / seat</span>
                  </div>
                  <div className="font-cinzel text-2xl sm:text-3xl font-bold text-white tabular-nums pt-1">
                    {codingSeats > 0 ? codingSeats.toLocaleString("en-ZA") : "—"}
                  </div>
                  <p className="text-xs text-stone-300">
                    {codingSeats > 0
                      ? "12-Week Future Coding Corp Software & Digital Seats"
                      : "Select R 2,500+ or Coding focus to fund a full bursary"}
                  </p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-[#C59B27]/30 space-y-1">
                  <div className="flex items-center justify-between text-[#F3C969]">
                    <Shield className="w-4 h-4" />
                    <span className="text-[10px] font-mono text-stone-400">R 5,000 / 30 days</span>
                  </div>
                  <div className="font-cinzel text-2xl sm:text-3xl font-bold text-white tabular-nums pt-1">
                    {shelterDays > 0 ? `${shelterDays} Days` : "—"}
                  </div>
                  <p className="text-xs text-stone-300">
                    {shelterDays > 0
                      ? "Emergency Safe Haven shelter, counselling & legal care"
                      : "Switch to Safe Haven or Balanced focus to allocate shelter care"}
                  </p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-[#C59B27]/30 space-y-1">
                  <div className="flex items-center justify-between text-[#F3C969]">
                    <Sprout className="w-4 h-4" />
                    <span className="text-[10px] font-mono text-stone-400">R 25,000 / 10 gardens</span>
                  </div>
                  <div className="font-cinzel text-2xl sm:text-3xl font-bold text-white tabular-nums pt-1">
                    {gardensInstalled > 0 ? gardensInstalled.toLocaleString("en-ZA") : "Seed Kits"}
                  </div>
                  <p className="text-xs text-stone-300">
                    {gardensInstalled > 0
                      ? "Bio-intensive household food gardens with irrigation"
                      : "Household organic seed & soil starter support"}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-[11px] text-stone-300 leading-relaxed max-w-xs">
                Direct ring-fenced deposit into Capitec Bank Account{" "}
                <span className="font-mono text-[#F3C969]">1055214607</span>.
              </p>

              <button
                type="button"
                onClick={handleSponsorClick}
                className="group px-5 py-3 bg-[#C59B27] hover:bg-[#B08920] text-stone-950 font-bold text-xs uppercase tracking-wider rounded-md btn-tactile cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shrink-0 tabular-nums"
              >
                <span>Commit R {amount.toLocaleString("en-ZA")} via Capitec EFT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-tactile group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
