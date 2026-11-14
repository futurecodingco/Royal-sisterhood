import { useEffect, useState } from "react";

const SOUND_STORAGE_KEY = "royal_sisterhood_sound_enabled";

let audioCtx: AudioContext | null = null;
let soundEnabled = false;

try {
  soundEnabled = localStorage.getItem(SOUND_STORAGE_KEY) === "true";
} catch {
  soundEnabled = false;
}

type Listener = (enabled: boolean) => void;
const listeners = new Set<Listener>();

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function isAudioFeedbackEnabled(): boolean {
  return soundEnabled;
}

export function setAudioFeedbackEnabled(next: boolean): void {
  soundEnabled = next;
  try {
    localStorage.setItem(SOUND_STORAGE_KEY, String(next));
  } catch {
    // Ignore storage restriction
  }
  listeners.forEach((cb) => cb(next));
  if (next) {
    playChime(true);
  }
}

export function toggleAudioFeedback(): boolean {
  const next = !soundEnabled;
  setAudioFeedbackEnabled(next);
  return next;
}

export function playTap(): void {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(210, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.032);

    gain.gain.setValueAtTime(0.035, now);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.038);
  } catch {
    // Ignore audio context edge cases
  }
}

export function playChime(force = false): void {
  if (!soundEnabled && !force) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const frequencies = [440, 659.25];
    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.045);

      gain.gain.setValueAtTime(0.001, now + idx * 0.045);
      gain.gain.linearRampToValueAtTime(0.028, now + idx * 0.045 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0005, now + idx * 0.045 + 0.24);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.045);
      osc.stop(now + idx * 0.045 + 0.25);
    });
  } catch {
    // Ignore audio context edge cases
  }
}

export function playConfirm(): void {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const notes = [440, 554.37, 659.25];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.055);

      gain.gain.setValueAtTime(0.001, now + idx * 0.055);
      gain.gain.linearRampToValueAtTime(0.032, now + idx * 0.055 + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0006, now + idx * 0.055 + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.055);
      osc.stop(now + idx * 0.055 + 0.3);
    });
  } catch {
    // Ignore audio context edge cases
  }
}

export function useSoundSettings() {
  const [enabled, setEnabled] = useState<boolean>(soundEnabled);

  useEffect(() => {
    const handleUpdate: Listener = (val) => setEnabled(val);
    listeners.add(handleUpdate);
    return () => {
      listeners.delete(handleUpdate);
    };
  }, []);

  return {
    soundEnabled: enabled,
    toggleSound: toggleAudioFeedback,
  };
}
