import { useSyncExternalStore } from "react";

// Souhlas s cookies / externím obsahem. Web nepoužívá analytiku ani marketing —
// souhlas řídí jen načtení externího obsahu (mapa Google).

export type Consent = "all" | "necessary" | null;

const KEY = "sit-cookie-consent";
const listeners = new Set<() => void>();
let settingsOpen = false;

function read(): Consent {
  try {
    const v = localStorage.getItem(KEY);
    return v === "all" || v === "necessary" ? v : null;
  } catch {
    return null;
  }
}

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

export function setConsent(value: Exclude<Consent, null>) {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* úložiště nedostupné — volba platí jen pro tuto relaci */
    memory = value;
  }
  settingsOpen = false;
  emit();
}

let memory: Consent = null;

export function openCookieSettings() {
  settingsOpen = true;
  emit();
}

/** "unknown" na serveru / před hydratací, aby se lišta nerenderovala dvakrát. */
export function useConsent(): Consent | "unknown" {
  return useSyncExternalStore(
    subscribe,
    () => read() ?? memory,
    () => "unknown",
  );
}

export function useSettingsOpen(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => settingsOpen,
    () => false,
  );
}
