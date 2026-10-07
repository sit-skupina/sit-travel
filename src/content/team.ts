// Tým SIT Travel. Pořadí odpovídá domluvě s Pavlem: Pavel, bratr, Lucka, Renata, Alena.
//
// DOPLNIT před spuštěním (označeno `todo`):
//  - celá jména, pozice, e-maily a mobily (u členů, kde pole chybí, se nezobrazí / ukáže se zástupný text)
//  - fotky: uložit do src/assets/team/ (upravené AI, světle zelené pozadí) a doplnit `photo`
//  - Pavlův souhlas i souhlas ostatních se zveřejněním fotek a kontaktů
// E-maily převzaty z auditu schránek (označeno jako ponechat); jména Renaty a Aleny z adres schránek.

import type { Locale } from "@/lib/i18n";

export interface TeamMember {
  id: string;
  name: string;
  role: Record<Locale, string>;
  email?: string;
  phone?: string;
  /** Import fotky z src/assets/team/ */
  photo?: string;
  /** Údaje nejsou potvrzené / chybí. */
  todo?: boolean;
}

export const team: TeamMember[] = [
  {
    id: "pavel-vlk",
    name: "Pavel Vlk",
    role: { cs: "", en: "" },
    email: "vlk@sittravel.cz",
    phone: "+420 606 209 108",
    todo: true,
  },
  { id: "bratr", name: "", role: { cs: "", en: "" }, todo: true },
  { id: "lucie", name: "Lucie", role: { cs: "", en: "" }, todo: true },
  {
    id: "renata-felcarkova",
    name: "Renata Felčárková",
    role: { cs: "", en: "" },
    email: "renata.felcarkova@sittravel.cz",
    todo: true,
  },
  {
    id: "alena-bright",
    name: "Alena Bright",
    role: { cs: "", en: "" },
    email: "alena.bright@sittravel.cz",
    todo: true,
  },
];
