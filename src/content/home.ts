// Texty homepage — česky a anglicky.

import type { Locale } from "@/lib/i18n";

const cs = {
  meta: {
    title: "SIT Travel — B2B cestovní kancelář pro firmy",
    description:
      "35 let zkušeností s incentivními zájezdy, kongresy a služebními cestami pro firemní klientelu. Akreditovaný agent IATA, člen ACK ČR.",
  },
  hero: {
    eyebrow: "Firemní cestovní kancelář · Praha · Od roku 1991",
    h1: "Firemní akce, které si Vaši lidé budou pamatovat ještě roky.",
    lead: "Incentivní zájezdy, kongresy a služební cesty pro firmy. Kompletní servis od prvního briefu po závěrečné vyúčtování. Více než 40 firemních klientů, 35 let v oboru.",
    cta: "Poptejte akci",
    brochure: "Stáhněte brožuru",
    note: "Nezávazná poptávka · Návrh do 48 hodin",
    partners: "Spolupracujeme s",
  },
  stats: [
    { num: "35 let", label: "Na trhu nepřetržitě od roku 1991" },
    { num: "40+", label: "Předních firem a institucí" },
    { num: "IATA", label: "Akreditovaný agent od roku 1995" },
    { num: "ACK ČR", label: "Člen asociace cestovních kanceláří" },
  ],
  flights: {
    title: "Firemní letenky online",
    sub: "Přímý přístup k rezervačnímu systému — porovnejte sazby a objednejte sami, kdykoliv.",
    button: "Rezervovat letenky →",
  },
  services: {
    heading: "Co pro Vás zajistíme",
    sub: "Od motivačního zájezdu přes kongres až po každodenní správu firemních letenek.",
    more: "Zjistit více",
  },
  how: {
    heading: "Tři kroky od nápadu k akci",
    sub: "Zbývá Vám jen rozhodnout se. Zbytek je na nás.",
    steps: [
      {
        num: "01",
        title: "Poptáte nás",
        desc: "Jeden e-mail nebo telefonát. Řeknete nám typ akce, počet lidí a rámcový termín. Nic víc nepotřebujeme ke startu.",
      },
      {
        num: "02",
        title: "Do 48 hodin máte konkrétní návrh",
        desc: "Destinace, program, rozpočet. Žádné obecné nabídky — návrh odpovídá přesně Vašemu požadavku.",
      },
      {
        num: "03",
        title: "Akce proběhne bez starostí",
        desc: "Od letenek po galavečer řešíme vše my. Po skončení dostanete přehledné vyúčtování a fotodokumentaci.",
      },
    ],
    cta: "Poptejte akci",
  },
  about: {
    eyebrow: "O společnosti",
    heading: "35 let. Jedno pravidlo.",
    p1: "SIT Travel zajišťuje servis pro více než 40 předních soukromých společností a státních institucí. Od roku 1991.",
    p2: "Zakládáme si na tom, že každý klient mluví s člověkem, který jeho prostředí skutečně zná. Stabilní tým, osvědčení partneři v destinacích, osobní zodpovědnost za každou akci.",
    badges: ["Akreditovaný agent IATA", "Člen ACK ČR"],
    imageAlt: "O firmě SIT Travel",
  },
  references: {
    eyebrow: "Reference",
    heading: "Firmy, které nám důvěřují",
  },
  faq: {
    eyebrow: "Časté dotazy",
    heading: "Máte otázky? Máme odpovědi.",
    items: [
      {
        q: "Pro koho jsou Vaše služby určeny?",
        a: "SIT Travel je výhradně B2B cestovní kancelář. Spolupracujeme se soukromými společnostmi, státními institucemi a organizacemi, které potřebují profesionální servis pro firemní akce, kongresy nebo každodenní správu firemních cest.",
      },
      {
        q: "Jak rychle dostanu konkrétní nabídku?",
        a: "Do 48 hodin v pracovní dny. Stačí nám sdělit typ akce, přibližný počet účastníků a termín. Žádné obecné ceníky — každou nabídku připravujeme přímo na míru Vašemu požadavku.",
      },
      {
        q: "Zajišťujete i jednodenní firemní akce v ČR?",
        a: "Ano. Organizujeme kongresy, konference a firemní akce na klíč po celé České republice — od výběru prostorů přes catering až po technické zajištění a doprovodný program.",
      },
      {
        q: "Co zahrnuje Vaše správa firemních letenek?",
        a: "Rezervace, ticketing, změny a storna, online systém pro self-booking, konsolidovaný reporting a vyúčtování. Jako akreditovaný agent IATA máme přímý přístup ke všem globálním distribučním systémům.",
      },
      {
        q: "Jakou máte zkušenost se zahraničními destinacemi?",
        a: "35 let praxe zahrnuje stovky akcí na všech kontinentech. Spolupracujeme s prověřenými lokálními partnery v každé destinaci. Znáte-li již cílové místo, rádi ho zohledníme; pokud ne, navrhneme nejvhodnější varianty.",
      },
      {
        q: "Lze u Vás zajistit pojištění pro celou skupinu?",
        a: "Ano, zajišťujeme skupinové cestovní pojištění včetně pojištění storna a komplexního pojištění pro akce — vše u jednoho dodavatele, aby Vaše administrativa byla co nejjednodušší.",
      },
      {
        q: "Jak probíhá vyúčtování po akci?",
        a: "Po skončení akce obdržíte přehledné závěrečné vyúčtování se všemi položkami, fotodokumentaci a v případě incentivních zájezdů i závěrečnou zprávu pro management.",
      },
    ],
  },
  cta: {
    eyebrow: "Nezávazná poptávka",
    heading: "Řekněte nám, co plánujete.",
    sub: "Konkrétní návrh do 48 hodin. Žádné obecné nabídky.",
    rows: ["Návrh do 48 hodin v pracovní dny", "S Vašimi údaji nakládáme v souladu s GDPR"],
    cardTitle: "SIT Travel s.r.o.",
    cardSub: "Pod rovinou 682/4, 140 00 Praha 4",
    mapTitle: "Mapa — SIT Travel",
  },
};

export type HomeContent = typeof cs;

const en: HomeContent = {
  meta: {
    title: "SIT Travel — B2B travel agency for companies",
    description:
      "35 years of experience in incentive trips, congresses and business travel for corporate clients. IATA accredited agent, member of ACK ČR.",
  },
  hero: {
    eyebrow: "Corporate travel agency · Prague · Since 1991",
    h1: "Corporate events your people will remember for years.",
    lead: "Incentive trips, congresses and business travel for companies. A complete service from the first brief to the final statement. More than 40 corporate clients, 35 years in the industry.",
    cta: "Request an event",
    brochure: "Download the brochure",
    note: "No-obligation enquiry · Proposal within 48 hours",
    partners: "We work with",
  },
  stats: [
    { num: "35 years", label: "In continuous business since 1991" },
    { num: "40+", label: "Leading companies and institutions" },
    { num: "IATA", label: "Accredited agent since 1995" },
    { num: "ACK ČR", label: "Member of the Association of Czech Travel Agencies" },
  ],
  flights: {
    title: "Corporate flights online",
    sub: "Direct access to the booking system — compare fares and book yourself, any time.",
    button: "Book flights →",
  },
  services: {
    heading: "What we take care of for you",
    sub: "From an incentive trip through a congress to the day-to-day management of corporate flights.",
    more: "Learn more",
  },
  how: {
    heading: "Three steps from idea to event",
    sub: "All you have to do is decide. We take care of the rest.",
    steps: [
      {
        num: "01",
        title: "You send an enquiry",
        desc: "One e-mail or phone call. Tell us the type of event, the number of people and a rough date. That is all we need to get started.",
      },
      {
        num: "02",
        title: "Within 48 hours you have a concrete proposal",
        desc: "Destination, programme, budget. No generic offers — the proposal matches your requirements exactly.",
      },
      {
        num: "03",
        title: "The event runs without worries",
        desc: "From flights to the gala dinner, we handle everything. Afterwards you receive a clear final statement and photo documentation.",
      },
    ],
    cta: "Request an event",
  },
  about: {
    eyebrow: "About the company",
    heading: "35 years. One rule.",
    p1: "SIT Travel provides services for more than 40 leading private companies and state institutions. Since 1991.",
    p2: "We make sure that every client speaks with someone who genuinely knows their business. A stable team, proven partners in the destinations, personal responsibility for every event.",
    badges: ["IATA accredited agent", "Member of ACK ČR"],
    imageAlt: "About SIT Travel",
  },
  references: {
    eyebrow: "References",
    heading: "Companies that trust us",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Have questions? We have answers.",
    items: [
      {
        q: "Who are your services intended for?",
        a: "SIT Travel is exclusively a B2B travel agency. We work with private companies, state institutions and organisations that need professional service for corporate events, congresses or the day-to-day management of business travel.",
      },
      {
        q: "How quickly will I receive a concrete offer?",
        a: "Within 48 hours on working days. Just tell us the type of event, the approximate number of participants and the date. No generic price lists — every offer is tailored to your request.",
      },
      {
        q: "Do you also organise one-day corporate events in the Czech Republic?",
        a: "Yes. We organise congresses, conferences and corporate events turnkey throughout the Czech Republic — from selecting the venue and catering to technical support and the accompanying programme.",
      },
      {
        q: "What does your corporate flight management include?",
        a: "Reservations, ticketing, changes and cancellations, an online self-booking system, consolidated reporting and invoicing. As an IATA accredited agent we have direct access to all global distribution systems.",
      },
      {
        q: "What experience do you have with international destinations?",
        a: "35 years of practice include hundreds of events on every continent. We work with proven local partners in every destination. If you already know where you want to go, we will gladly take that into account; if not, we will propose the best options.",
      },
      {
        q: "Can you arrange insurance for a whole group?",
        a: "Yes, we arrange group travel insurance including cancellation insurance and comprehensive event insurance — all from one supplier, to keep your administration as simple as possible.",
      },
      {
        q: "How does the final settlement after an event work?",
        a: "After the event you receive a clear final statement with all items, photo documentation and, for incentive trips, a final report for management.",
      },
    ],
  },
  cta: {
    eyebrow: "No-obligation enquiry",
    heading: "Tell us what you are planning.",
    sub: "A concrete proposal within 48 hours. No generic offers.",
    rows: ["Proposal within 48 hours on working days", "We handle your data in line with the GDPR"],
    cardTitle: "SIT Travel s.r.o.",
    cardSub: "Pod rovinou 682/4, 140 00 Prague 4",
    mapTitle: "Map — SIT Travel",
  },
};

export const home: Record<Locale, HomeContent> = { cs, en };
