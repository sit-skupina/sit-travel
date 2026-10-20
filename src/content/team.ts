// Tým SIT Travel — kontakty dodal Pavel Vlk (18. 10. 2026).
// Pořadí: partneři, poté služební cesty a konference / incentiva / eventy.
//
// Místo fotek jsou zatím ilustrované avatary (src/assets/team/*.webp, průhledné pozadí, 640×640).
// Až klient schválí fotky, stačí soubory přepsat — import zůstane stejný.
// Před spuštěním ověřit souhlas členů týmu se zveřejněním kontaktů.

import type { Locale } from "@/lib/i18n";
import frantisekPacholik from "@/assets/team/frantisek-pacholik.webp";
import pavelVlk from "@/assets/team/pavel-vlk.webp";
import josefSpacek from "@/assets/team/josef-spacek.webp";
import alenaBright from "@/assets/team/alena-bright.webp";
import renataFelcarkova from "@/assets/team/renata-felcarkova.webp";
import lucieVlkova from "@/assets/team/lucie-vlkova.webp";

export interface TeamMember {
  id: string;
  name: string;
  role: Record<Locale, string>;
  email: string;
  phone?: string;
  /** Ilustrace / fotka z src/assets/team/ */
  photo: string;
}

export const team: TeamMember[] = [
  {
    id: "frantisek-pacholik",
    photo: frantisekPacholik,
    name: "František Pacholík",
    role: { cs: "Partner", en: "Partner" },
    email: "pacholik@sittravel.cz",
    phone: "+420 602 303 152",
  },
  {
    id: "pavel-vlk",
    photo: pavelVlk,
    name: "Pavel Vlk",
    role: { cs: "Partner", en: "Partner" },
    email: "vlk@sittravel.cz",
    phone: "+420 606 209 108",
  },
  {
    id: "josef-spacek",
    photo: josefSpacek,
    name: "Josef Špaček",
    role: { cs: "Služební cesty", en: "Business travel" },
    email: "spacek@sittravel.cz",
    phone: "+420 606 264 059",
  },
  {
    id: "alena-bright",
    photo: alenaBright,
    name: "Alena Bright",
    role: { cs: "Konference a incentiva", en: "Conferences and incentives" },
    email: "alena.bright@sittravel.cz",
    phone: "+420 734 244 133",
  },
  {
    id: "renata-felcarkova",
    photo: renataFelcarkova,
    name: "Renata Felčárková",
    role: { cs: "Konference a incentiva", en: "Conferences and incentives" },
    email: "renata.felcarkova@sittravel.cz",
    phone: "+420 773 973 175",
  },
  {
    id: "lucie-vlkova",
    photo: lucieVlkova,
    name: "Lucie Vlková",
    role: { cs: "Konference a eventy", en: "Conferences and events" },
    email: "lucie.vlkova@sittravel.cz",
    phone: "+420 733 750 640",
  },
];
