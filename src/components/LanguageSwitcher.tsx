import type { ReactElement } from "react";
import { useRouterState } from "@tanstack/react-router";
import { alternatePath, useLocale, type Locale } from "@/lib/i18n";
import { useUi } from "@/content/ui";
import { cn } from "@/lib/utils";

function FlagCZ() {
  return (
    <svg viewBox="0 0 30 20" width="24" height="16" aria-hidden="true" focusable="false">
      <rect width="30" height="10" fill="#FFFFFF" />
      <rect y="10" width="30" height="10" fill="#D7141A" />
      <path d="M0 0l15 10L0 20z" fill="#11457E" />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg viewBox="0 0 60 40" width="24" height="16" aria-hidden="true" focusable="false">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#FFFFFF" strokeWidth="8" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" strokeWidth="3" />
      <path d="M30 0v40M0 20h60" stroke="#FFFFFF" strokeWidth="13" />
      <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="8" />
    </svg>
  );
}

const OPTIONS: { locale: Locale; label: string; Flag: () => ReactElement }[] = [
  { locale: "cs", label: "Čeština", Flag: FlagCZ },
  { locale: "en", label: "English", Flag: FlagGB },
];

/** Přepínač jazyka vlajkami — vede na stejnou stránku v druhém jazyce. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const ui = useUi();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className={cn("lang-switch", className)} role="group" aria-label={ui.nav.language}>
      {OPTIONS.map(({ locale: l, label, Flag }) => {
        const active = l === locale;
        return (
          <a
            key={l}
            href={alternatePath(pathname, l)}
            lang={l}
            hrefLang={l}
            title={label}
            aria-label={label}
            aria-current={active ? "true" : undefined}
            className={cn("lang-switch-flag", active && "lang-switch-flag--active")}
          >
            <Flag />
          </a>
        );
      })}
    </div>
  );
}
