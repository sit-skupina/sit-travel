// Staré adresy z původního webu sittravel.cz → nové stránky (301).
// Klíč je cesta bez úvodního lomítka, malými písmeny. Vše ostatní skončí na 404.
export const LEGACY_REDIRECTS: Record<string, string> = {
  // hlavní stránky
  "o-nas": "/#o-nas",
  reference: "/#reference",
  "reference-test0": "/#reference",
  kontakt: "/kontakty",
  "ke-stazeni": "/",
  aktuality: "/",
  fotografie: "/",
  sitemap: "/",
  // právní dokumenty
  gdpr: "/ochrana-osobnich-udaju",
  "obchodni-podminky": "/dokumenty/smluvni-podminky-sit-travel.pdf",
  // služby
  "hlavni-sluzby": "/#sluzby",
  "cesty-za-poznanim": "/#sluzby",
  "incentivni-produkty": "/sluzby/incentivni-zajezdy",
  "kongresy-a-seminare": "/sluzby/kongresy-seminare-cr",
  "sluzebni-cesty": "/sluzby/sluzebni-cesty",
  "sport-travel": "/sluzby/sport-travel",
  letenky: "/sluzby/sluzebni-cesty",
};
