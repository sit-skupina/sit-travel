import type { ServiceId } from "@/lib/i18n";
import imgIncentivni from "@/assets/sluzby-bentogrid/incentivni-zajezdy.webp";
import imgPrivatni from "@/assets/sluzby-bentogrid/privatni-servis.webp";
import imgKongresova from "@/assets/sluzby-bentogrid/kongresova-turistika.webp";
import imgIncoming from "@/assets/sluzby-bentogrid/incoming.webp";
import imgSluzebni from "@/assets/sluzby-bentogrid/sluzebni-cesty.webp";
import imgKongresy from "@/assets/sluzby-bentogrid/kongresy-v-cr.webp";
import imgSport from "@/assets/sluzby-bentogrid/sport-travel.webp";

export const serviceImages: Record<ServiceId, string> = {
  "incentivni-zajezdy": imgIncentivni,
  "privatni-servis": imgPrivatni,
  "kongresova-turistika": imgKongresova,
  "incoming-ceska-republika": imgIncoming,
  "sluzebni-cesty": imgSluzebni,
  "kongresy-seminare-cr": imgKongresy,
  "sport-travel": imgSport,
};

/** Pořadí karet služeb na homepage (bento grid). */
export const bentoOrder: ServiceId[] = [
  "incentivni-zajezdy",
  "privatni-servis",
  "kongresova-turistika",
  "incoming-ceska-republika",
  "sluzebni-cesty",
  "kongresy-seminare-cr",
  "sport-travel",
];

/** Pořadí odkazů v patičce. */
export const footerOrder: ServiceId[] = [
  "incentivni-zajezdy",
  "kongresova-turistika",
  "kongresy-seminare-cr",
  "incoming-ceska-republika",
  "sluzebni-cesty",
  "privatni-servis",
  "sport-travel",
];
