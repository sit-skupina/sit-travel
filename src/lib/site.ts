// Centrální konfigurace webu — údaje, které se mění zřídka a používají se na více místech.

export const SITE_URL = "https://www.sittravel.cz";

export const COMPANY = {
  name: "SIT Travel s.r.o.",
  street: "Pod rovinou 682/4",
  city: "140 00 Praha 4",
  ico: "29060648",
  dic: "CZ29060648",
  phone: "+420 241 441 147",
  phoneHref: "+420241441147",
  email: "info@sittravel.cz",
} as const;

/**
 * Formulář odesílá přes Web3Forms. Přístupový klíč je veřejný (smí být v kódu na klientu)
 * a je svázaný s e-mailem, na který služba poptávky doručuje — viz účet na web3forms.com
 * (aktuálně vlk@sittravel.cz). Pro doručování na info@ je potřeba vytvořit klíč pro info@
 * a nahradit ho zde (nebo v .env jako VITE_WEB3FORMS_KEY).
 */
export const FORM_ACCESS_KEY: string =
  import.meta.env.VITE_WEB3FORMS_KEY ?? "65a9f337-f075-4f53-b2b5-83a256df51e2";

/** Endpoint formulářové služby; VITE_FORM_ENDPOINT se hodí jen pro lokální testy s mockem. */
export const FORM_ENDPOINT: string =
  import.meta.env.VITE_FORM_ENDPOINT ?? "https://api.web3forms.com/submit";

/**
 * Odkaz na samostatný web Sport Travel (včetně maratonu). Jakmile ho dodá Pavel,
 * stačí ho sem doplnit — karta na homepage, odkazy v patičce i související služby
 * pak povedou přímo tam a stránka /sluzby/sport-travel se přesměruje.
 */
export const SPORT_TRAVEL_URL = "";

/** Dokumenty ve /public/dokumenty — při obnově jen přepsat soubor, URL zůstane. */
export const DOCS = {
  terms: "/dokumenty/smluvni-podminky-sit-travel.pdf",
  /**
   * Pojistka CK (záruka pro případ úpadku). Platí 21. 6. 2026 – 20. 6. 2027.
   * Každý rok před koncem platnosti vyměnit soubor public/dokumenty/pojisteni-ck.pdf
   * a upravit INSURANCE_VALID_TO. Připomínka v kalendáři: květen 2027.
   */
  insurance: "/dokumenty/pojisteni-ck.pdf",
} as const;
export const INSURANCE_VALID_TO = "2027-06-20";

export const BROCHURE_FILENAME = {
  cs: "SIT Travel brožura 2025.pdf",
  en: "SIT Travel brochure 2025.pdf",
} as const;
