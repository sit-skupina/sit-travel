import { createContext, useContext, type ReactNode } from "react";
import { SPORT_TRAVEL_URL, SITE_URL } from "./site";

export type Locale = "cs" | "en";
export const LOCALES: Locale[] = ["cs", "en"];

const LocaleContext = createContext<Locale>("cs");

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "cs";
}

// ─── Služby: česká URL je zároveň ID, anglická URL má vlastní slug ──────────────

export const SERVICE_SLUGS = {
  "incentivni-zajezdy": { cs: "incentivni-zajezdy", en: "incentive-trips" },
  "privatni-servis": { cs: "privatni-servis", en: "private-service" },
  "kongresova-turistika": { cs: "kongresova-turistika", en: "congress-travel" },
  "incoming-ceska-republika": { cs: "incoming-ceska-republika", en: "incoming-czech-republic" },
  "sluzebni-cesty": { cs: "sluzebni-cesty", en: "business-travel" },
  "kongresy-seminare-cr": { cs: "kongresy-seminare-cr", en: "congresses-czech-republic" },
  "sport-travel": { cs: "sport-travel", en: "sport-travel" },
} as const;

export type ServiceId = keyof typeof SERVICE_SLUGS;
export const SERVICE_IDS = Object.keys(SERVICE_SLUGS) as ServiceId[];

export function serviceIdFromSlug(slug: string, locale: Locale): ServiceId | undefined {
  return SERVICE_IDS.find((id) => SERVICE_SLUGS[id][locale] === slug);
}

// ─── Cesty ─────────────────────────────────────────────────────────────────────

export type StaticPage = "home" | "contacts" | "privacy";

const STATIC_PATHS: Record<StaticPage, Record<Locale, string>> = {
  home: { cs: "/", en: "/en" },
  contacts: { cs: "/kontakty", en: "/en/contact" },
  privacy: { cs: "/ochrana-osobnich-udaju", en: "/en/privacy-policy" },
};

export function pagePath(page: StaticPage, locale: Locale): string {
  return STATIC_PATHS[page][locale];
}

export function servicePath(id: ServiceId, locale: Locale): string {
  return locale === "cs"
    ? `/sluzby/${SERVICE_SLUGS[id].cs}`
    : `/en/services/${SERVICE_SLUGS[id].en}`;
}

/** Odkaz na službu; Sport Travel vede na externí web, jakmile je vyplněn SPORT_TRAVEL_URL. */
export function serviceHref(id: ServiceId, locale: Locale): { href: string; external: boolean } {
  if (id === "sport-travel" && SPORT_TRAVEL_URL) return { href: SPORT_TRAVEL_URL, external: true };
  return { href: servicePath(id, locale), external: false };
}

/** Odkaz na kotvu na homepage (např. #kontakt) v dané jazykové verzi. */
export function homeAnchor(locale: Locale, hash: string): string {
  return `${pagePath("home", locale)}${hash}`;
}

/** Stejná stránka v druhém jazyce (pro přepínač vlajek). */
export function alternatePath(pathname: string, target: Locale): string {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  for (const page of Object.keys(STATIC_PATHS) as StaticPage[]) {
    if (LOCALES.some((l) => STATIC_PATHS[page][l] === path)) return STATIC_PATHS[page][target];
  }
  for (const id of SERVICE_IDS) {
    if (LOCALES.some((l) => servicePath(id, l) === path)) return servicePath(id, target);
  }
  return pagePath("home", target);
}

/** Meta tagy + hreflang pro stránku, která existuje v obou jazycích. */
export function localizedHead({
  title,
  description,
  paths,
  locale,
}: {
  title: string;
  description: string;
  paths: Record<Locale, string>;
  locale: Locale;
}) {
  const abs = (p: string) => `${SITE_URL}${p === "/" ? "/" : p}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:locale", content: locale === "cs" ? "cs_CZ" : "en_GB" },
      { property: "og:site_name", content: "SIT Travel" },
      { property: "og:url", content: abs(paths[locale]) },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: abs(paths[locale]) },
      { rel: "alternate", hrefLang: "cs", href: abs(paths.cs) },
      { rel: "alternate", hrefLang: "en", href: abs(paths.en) },
      { rel: "alternate", hrefLang: "x-default", href: abs(paths.cs) },
    ],
  };
}
