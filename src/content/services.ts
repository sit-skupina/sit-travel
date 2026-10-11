// Obsah podstránek služeb — česky a anglicky. Texty v češtině jsou po ruční jazykové kontrole
// (pády, shoda, vykání s velkým V). Struktura sekcí je stejná pro oba jazyky.

import type { Locale, ServiceId } from "@/lib/i18n";

export type IconKey =
  | "globe"
  | "presentation"
  | "fileText"
  | "plane"
  | "star"
  | "building2"
  | "user"
  | "clipboardCheck"
  | "bedDouble"
  | "shield"
  | "users"
  | "music"
  | "eye"
  | "trophy";

export type Section =
  | { type: "sportShowcase" }
  | { type: "features"; heading: string; items: { icon: IconKey; name: string; desc: string }[] }
  | { type: "events"; heading: string; items: string[] }
  | { type: "twocol"; heading: string; left: string[]; right: string[] }
  | { type: "destinations"; heading: string; items: { name: string; desc: string }[] }
  | {
      type: "cards";
      heading: string;
      bg?: "slate";
      items: { icon?: IconKey; name: string; desc: string }[];
    }
  | { type: "checklist"; heading: string; bg?: "slate"; items: string[] }
  | {
      type: "twofeatures";
      heading: string;
      left: { icon: IconKey; name: string; desc: string; examples: string };
      right: { icon: IconKey; name: string; desc: string; examples: string };
    };

export interface ServiceContent {
  /** Krátký název (karty, drobečková navigace, patička). */
  name: string;
  shortName: string;
  /** Jedna věta na kartě služby. */
  card: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; subtitle: string; ctaLabel: string };
  intro: { h2: string; paragraphs: string[] };
  cta: {
    h2: string;
    subtitle: string;
    ctaLabel: string;
    contactNote?: string;
    contactEmail?: string;
    contactPhone?: string;
    extraLink?: { href: string; label: string };
  };
  sections: Section[];
}

const FLIGHTS_URL = "https://sittravel-s2.symphony.cz/cs/index.php";

const cs: Record<ServiceId, ServiceContent> = {
  "incentivni-zajezdy": {
    name: "Incentivní zájezdy",
    shortName: "Incentivní zájezdy",
    card: "Originální programy pro zaměstnance, management a obchodní partnery.",
    meta: {
      title: "Incentivní zájezdy | SIT Travel",
      description:
        "Originální incentivní programy pro zaměstnance, management a obchodní partnery. SIT Travel zajišťuje incentivní zájezdy pro firemní klientelu od roku 1991. Výběr destinace, program na míru, přehledné vyúčtování. Poptejte nezávazně.",
    },
    hero: {
      eyebrow: "Incentivní zájezdy",
      h1: "Zážitky, které Váš tým ještě dlouho nepřestane chválit.",
      subtitle:
        "Originální programy pro zaměstnance, management a obchodní partnery. Vybíráme destinaci, připravíme program, předložíme vyúčtování. Stačí jedno rozhodnutí.",
      ctaLabel: "Poptejte program",
    },
    intro: {
      h2: "Nápad nestačí. Záleží na provedení.",
      paragraphs: [
        "Ani dobrý nápad nezaručí dobrý výsledek. Proto přicházíme s originálními nápady — takovými, které Vám zajistí náskok před ostatními. Ve spojení s důrazem na každý detail přinášejí jistý úspěch.",
        "Toužíte po lyžování v kanadském Whistleru? Láká Vás nedotčená Afrika v rezervaci Ngorongoro? Chcete prohánět divoké hřebce sportovního Ferrari v italských Dolomitech? Adrenalin, wellness, kultura nebo sport — ušijeme program na míru s ohledem na osobnost a povahu Vašeho týmu.",
      ],
    },
    cta: {
      h2: "Řekněte nám, co plánujete.",
      subtitle: "Konkrétní návrh destinace a programu do 48 hodin.",
      ctaLabel: "Poptejte incentivní zájezd",
      contactNote: "Máte otázku ještě před poptávkou?",
    },
    sections: [
      {
        type: "features",
        heading: "Co zajistíme",
        items: [
          {
            icon: "globe",
            name: "Výběr destinace",
            desc: "Navrhujeme destinaci podle charakteru skupiny, ročního období a cíle akce. Máme zkušenosti s Evropou i vzdálenými destinacemi.",
          },
          {
            icon: "presentation",
            name: "Program na míru",
            desc: "Připravíme kompletní program — od příletu po odlet. Adrenalinové aktivity, wellness, kulturní program nebo kombinace.",
          },
          {
            icon: "fileText",
            name: "Vyúčtování a fotodokumentace",
            desc: "Po skončení akce obdržíte přehledné vyúčtování, fotodokumentaci a vyhodnocení celé akce.",
          },
        ],
      },
      {
        type: "cards",
        heading: "Pro koho",
        bg: "slate",
        items: [
          {
            name: "Zaměstnanci",
            desc: "Motivační akce pro celý tým. Teambuilding, který skutečně stmelí kolektiv.",
          },
          {
            name: "Management",
            desc: "Exkluzivní programy pro vedení firmy. Kombinace obchodního jednání a prémiových zážitků.",
          },
          {
            name: "Obchodní partneři",
            desc: "Poděkování klíčovým partnerům formou nezapomenutelného výjezdu. Nejlepší investice do vztahu.",
          },
        ],
      },
    ],
  },

  "privatni-servis": {
    name: "Privátní servis",
    shortName: "Privátní servis",
    card: "F1, Wimbledon, privátní jet. Pro ty, kteří nechtějí kompromisy.",
    meta: {
      title: "Privátní servis | SIT Travel",
      description:
        "F1, Wimbledon, British Open — v těsné blízkosti sportovních velikánů. Privátní jet, VIP ubytování, osobní poradce. SIT Travel zajišťuje privátní servis pro náročnou firemní klientelu od roku 1991. Poptejte nezávazně.",
    },
    hero: {
      eyebrow: "Privátní servis",
      h1: "Přímo u akce. Ne před obrazovkou.",
      subtitle:
        "F1, Wimbledon, British Open — v těsné blízkosti sportovních velikánů. Privátní jet, VIP ubytování, osobní poradce. Pro ty, kteří nechtějí kompromisy.",
      ctaLabel: "Nezávazná poptávka",
    },
    intro: {
      h2: "Přímé přenosy nikdy nenahradí osobní přítomnost.",
      paragraphs: [
        "Přímé přenosy z F1, Wimbledonu nebo British Open nikdy nebudou mít takovou atmosféru, jako když je navštívíte osobně. Zajistíme Vám místo v těsné blízkosti sportovních velikánů či filmových celebrit.",
        "Kompletní servis zahrnuje letenky, transfery, luxusní ubytování, vstupenky do centra dění a bohatý doprovodný program. K idolům Vás navíc můžeme dopravit tou nejrychlejší a nejpohodlnější cestou — privátním jetem.",
      ],
    },
    cta: {
      h2: "Nespokojte se s méně.",
      subtitle: "Popište nám Váš požadavek. Zbytek je na nás.",
      ctaLabel: "Poptejte privátní servis",
      contactNote: "Preferujete přímý kontakt?",
    },
    sections: [
      {
        type: "features",
        heading: "Co zajistíme",
        items: [
          {
            icon: "plane",
            name: "Privátní jet",
            desc: "Ideální pro 4 až 16 osob. Žádná přeplněná letiště, žádné přestupy. Odlétáte, kdy chcete.",
          },
          {
            icon: "star",
            name: "VIP vstupenky",
            desc: "Místa v těsné blízkosti dění — ne jen v hledišti. Hospitality zóny, pit lane, backstage.",
          },
          {
            icon: "building2",
            name: "Luxusní ubytování",
            desc: "Hotely nejvyšší kategorie v nejlepší dostupné lokalitě u místa konání události.",
          },
          {
            icon: "user",
            name: "Osobní poradce",
            desc: "Váš poradce je Vám k dispozici po celou dobu akce. Na osobní jednání klademe nejvyšší důraz.",
          },
        ],
      },
      {
        type: "events",
        heading: "Akce, které zajišťujeme",
        items: [
          "Formule 1 — Grand Prix po celém světě",
          "Wimbledon — tenisový grandslam v Londýně",
          "British Open — golf nejvyšší úrovně",
          "Masters v Augustě — nejprestižnější golfový turnaj světa",
          "Finále Ligy mistrů",
          "Super Bowl",
          "Filmové festivaly (Cannes, Benátky)",
        ],
      },
    ],
  },

  "kongresova-turistika": {
    name: "Kongresová turistika",
    shortName: "Kongresová turistika",
    card: "Kongresy a semináře po celém světě.",
    meta: {
      title: "Kongresová turistika | SIT Travel",
      description:
        "Kongresy a semináře po celém světě od přihlášky po zpáteční letenku. SIT Travel zajišťuje kongresovou turistiku pro firemní klientelu od roku 1991. Registrace, letenky, transfery, ubytování, víza — vše od jednoho dodavatele. Poptejte nezávazně.",
    },
    hero: {
      eyebrow: "Kongresová turistika",
      h1: "Kongresy a semináře po celém světě. Od přihlášky po zpáteční letenku.",
      subtitle:
        "Zajistíme Vám vstup na vybraný kongres nebo seminář kdekoliv na světě. Registrace, letenky, transfery, ubytování, víza — vše od jednoho dodavatele.",
      ctaLabel: "Poptejte kongres",
    },
    intro: {
      h2: "Spojte příjemné s užitečným.",
      paragraphs: [
        "Víte o kongresu nebo semináři, kterého byste se Vy nebo Vaši kolegové chtěli zúčastnit? Zajistíme Vám kompletní servis — od registrace a úhrady účastnických poplatků po zpáteční cestu.",
        "Najdeme pro Vás nejvhodnější a nejrychlejší letecké spojení, zajistíme veškeré transfery a pečlivě se postaráme o Váš klidný spánek. Předem zjistíme vízové podmínky a v případě potřeby zajistíme i příslušné dokumenty.",
      ],
    },
    cta: {
      h2: "Víte o kongresu, kterého se chcete zúčastnit?",
      subtitle: "Napište nám název a termín. Zbytek vyřídíme my.",
      ctaLabel: "Poptejte kongresový servis",
      contactNote: "Máte otázku?",
    },
    sections: [
      {
        type: "features",
        heading: "Co zahrnuje servis",
        items: [
          {
            icon: "clipboardCheck",
            name: "Registrace a poplatky",
            desc: "Vyplnění přihlášky, úhrada účastnických poplatků, potvrzení účasti. Vše vyřídíme za Vás.",
          },
          {
            icon: "plane",
            name: "Doprava a transfery",
            desc: "Nejrychlejší letecké spojení za nejlepší cenu. Transfery z letiště na místo konání a zpět.",
          },
          {
            icon: "bedDouble",
            name: "Ubytování a volný čas",
            desc: "Hotel v optimální lokalitě. Na přání doplníme program o aktivity pro volný čas — golf, kolo, kulturu.",
          },
        ],
      },
    ],
  },

  "incoming-ceska-republika": {
    name: "Incoming",
    shortName: "Incoming",
    card: "Poznávací pobyty v ČR pro zahraniční klienty.",
    meta: {
      title: "Incoming — Česká republika | SIT Travel",
      description:
        "Organizujeme poznávací pobyty v ČR pro zahraniční firemní klienty. Licencovaní průvodci ve všech jazycích, doprava, vstupenky, kulturní program na míru. SIT Travel — DMC se sídlem v Praze od roku 1991. Poptejte nezávazně.",
    },
    hero: {
      eyebrow: "Incoming",
      h1: "To nejlepší z České republiky. Pro Vaše zahraniční hosty.",
      subtitle:
        "Organizujeme poznávací pobyty v ČR pro zahraniční firemní klienty. Licencovaní průvodci ve všech jazycích, doprava, vstupenky, kulturní program na míru.",
      ctaLabel: "Poptejte program",
    },
    intro: {
      h2: "Česká republika očima profesionála.",
      paragraphs: [
        "Jsme DMC se sídlem v Praze a se zkušenostmi od roku 1991. Navrhujeme, připravujeme a realizujeme programy pro zahraniční firemní skupiny i individuální klienty v Praze, České republice a střední Evropě.",
        "Každý projekt je šitý na míru — s ohledem na Vaše potřeby, složení skupiny a cíl návštěvy.",
      ],
    },
    cta: {
      h2: "Plánujete příjezd zahraniční skupiny?",
      subtitle: "Napište nám počet osob, termín a zájem skupiny. Návrh programu do 48 hodin.",
      ctaLabel: "Poptejte incoming program",
      contactEmail: "incoming@sittravel.cz",
      contactPhone: "+420 777 858 524",
    },
    sections: [
      {
        type: "twocol",
        heading: "Co zajistíme",
        left: [
          "Poradenství při výběru destinace a programu",
          "Licencovaní průvodci ve všech jazycích",
          "Doprava všeho druhu — od koňského spřežení po limuzínu",
          "Vstupenky na kulturní, společenské a sportovní akce",
        ],
        right: [
          "Ubytování v hotelech všech kategorií",
          "Gastronomické zážitky a cateringové služby",
          "Teambuilding a sportovní program",
          "Prohlídky míst konání (site inspections) s naším projektovým manažerem",
        ],
      },
      {
        type: "destinations",
        heading: "Kde Vás provedeme",
        items: [
          {
            name: "Praha",
            desc: "Historické centrum, UNESCO, architektura — jedno z nejkrásnějších měst Evropy.",
          },
          {
            name: "Český Krumlov",
            desc: "Nejkrásnější město jižních Čech s gotickým hradem a barokním zámkem.",
          },
          {
            name: "Karlovy Vary",
            desc: "Lázeňské město s tradicí, oblíbené u mezinárodní klientely.",
          },
          {
            name: "České Švýcarsko",
            desc: "Unikátní přírodní scenérie s pískovcovými skalami a Pravčickou bránou.",
          },
          { name: "Moravské vinařské oblasti", desc: "Víno, tradice a pohostinnost jižní Moravy." },
        ],
      },
    ],
  },

  "sluzebni-cesty": {
    name: "Služební cesty",
    shortName: "Služební cesty",
    card: "Letenky, ubytování, transfery od jednoho dodavatele.",
    meta: {
      title: "Služební cesty | SIT Travel",
      description:
        "Letenky za nejlepší dostupné tarify, ubytování, transfery, pojištění a půjčení vozu — vše od jednoho dodavatele. SIT Travel zajišťuje správu firemních cest od roku 1991. Specialisté dostupní i mimo pracovní dobu. Poptejte nezávazně.",
    },
    hero: {
      eyebrow: "Služební cesty",
      h1: "Vaše firemní cestování. Náš problém.",
      subtitle:
        "Letenky za nejlepší dostupné tarify, ubytování, transfery, pojištění a půjčení vozu — vše od jednoho dodavatele. Naši specialisté jsou k dispozici i mimo pracovní dobu.",
      ctaLabel: "Poptejte servis",
    },
    intro: {
      h2: "Kompletní agenda služebních cest v jedněch rukou.",
      paragraphs: [
        "Specialisté z oddělení korporátních klientů zajistí kompletní agendu Vašich služebních cest. Chápeme potřebu úspory času a nákladů — proto vždy nabízíme optimální spojení za nejvýhodnější tarify.",
        "Náš tým tvoří specialisté s minimálně pětiletou praxí v oboru, které pravidelně školíme v novinkách a tarifních změnách. Jsme k dispozici i mimo standardní pracovní dobu.",
      ],
    },
    cta: {
      h2: "Svěřte cestovní agendu profesionálům.",
      subtitle: "35 let zkušeností s firemním cestováním.",
      ctaLabel: "Poptejte servis",
      contactNote: "Potřebujete poradit s výběrem tarifu?",
      extraLink: { href: FLIGHTS_URL, label: "Online letenky →" },
    },
    sections: [
      {
        type: "features",
        heading: "Co zajistíme",
        items: [
          {
            icon: "plane",
            name: "Letenky",
            desc: "Optimální letecké spojení za nejlepší dostupné tarify. Economy, business i first class. Online rezervační systém dostupný 24 hodin denně.",
          },
          {
            icon: "bedDouble",
            name: "Ubytování a transfery",
            desc: "Hotely ve všech destinacích, transfery z letiště. Vždy s ohledem na Váš rozpočet a preference.",
          },
          {
            icon: "shield",
            name: "Pojištění a víza",
            desc: "Cestovní pojištění a vízová agenda. Podmínky vstupu do každé destinace zjišťujeme předem.",
          },
        ],
      },
      {
        type: "checklist",
        heading: "Proč SIT Travel",
        bg: "slate",
        items: [
          "Tým specialistů s minimálně pětiletou praxí v oboru",
          "Dostupnost i mimo standardní pracovní dobu",
          "Online rezervační systém 24/7",
        ],
      },
    ],
  },

  "kongresy-seminare-cr": {
    name: "Kongresy a konference v ČR",
    shortName: "Kongresy v ČR",
    card: "Organizace kongresů a společenských akcí na klíč.",
    meta: {
      title: "Kongresy a konference v ČR | SIT Travel",
      description:
        "Organizace kongresů a firemních akcí v České republice na klíč. SIT Travel poskytuje kompletní řešení pro přípravu a realizaci kongresů, konferencí a společenských akcí. Jedno rozhodnutí, jedna schůzka — zbytek je na nás. Poptejte nezávazně.",
    },
    hero: {
      eyebrow: "Kongresy a konference v ČR",
      h1: "Organizace kongresů a firemních akcí v České republice na klíč.",
      subtitle:
        "Poskytujeme kompletní řešení pro přípravu a realizaci kongresů, konferencí a společenských akcí v ČR a na Slovensku. Jedno rozhodnutí, jedna schůzka — zbytek je na nás.",
      ctaLabel: "Poptejte organizaci",
    },
    intro: {
      h2: "Od rozhodnutí po závěrečný potlesk.",
      paragraphs: [
        "Připravíme a zorganizujeme kongresy, konference i společenské akce v České republice a na Slovensku. Nabízíme kompletní řešení na klíč včetně doprovodných služeb.",
        "Zajistíme online registraci účastníků včetně mobilní aplikace. Postaráme se o všechny technické, logistické i gastronomické detaily.",
      ],
    },
    cta: {
      h2: "Plánujete kongres nebo firemní akci?",
      subtitle: "Stačí jedna schůzka. Připravíme kompletní nabídku.",
      ctaLabel: "Poptejte organizaci akce",
      contactNote: "Rádi s Vámi probereme Vaše požadavky osobně.",
    },
    sections: [
      {
        type: "twocol",
        heading: "Co zahrnuje kompletní servis",
        left: [
          "Výběr a rezervace vhodného místa konání",
          "Online registrace účastníků včetně mobilní aplikace",
          "Technické zajištění (ozvučení, projekce, simultánní tlumočení)",
          "Catering a gastronomické služby",
        ],
        right: [
          "Transfery a doprava účastníků",
          "Galavečeře a společenský program",
          "Průvodcovské služby",
          "Přehledné vyúčtování po skončení akce",
        ],
      },
      {
        type: "cards",
        heading: "Typy akcí",
        bg: "slate",
        items: [
          {
            icon: "users",
            name: "Kongresy a konference",
            desc: "Odborné akce pro desítky až stovky účastníků. Kompletní organizace včetně registrace.",
          },
          {
            icon: "presentation",
            name: "Firemní semináře",
            desc: "Vzdělávací a interní akce pro zaměstnance. Zajistíme místo, catering i program.",
          },
          {
            icon: "music",
            name: "Společenské akce",
            desc: "Galavečeře, firemní večírky, výroční akce. Organizace s důrazem na každý detail.",
          },
        ],
      },
    ],
  },

  "sport-travel": {
    name: "Sport Travel",
    shortName: "Sport Travel",
    card: "Světové maratony, zápasy a závody. Registrace i ubytování.",
    meta: {
      title: "Sport Travel | SIT Travel",
      description:
        "Cesty za sportovními událostmi pro firmy i jednotlivce. Světové maratony, zápasy a závody. SIT Travel zajišťuje Sport Travel s letitou tradicí — registrace, doprava i ubytování vyřešeno. Poptejte nezávazně.",
    },
    hero: {
      eyebrow: "Sport Travel",
      h1: "Světové sportovní události na vlastní kůži.",
      subtitle:
        "Cesty za sportovními událostmi pro firmy i jednotlivce. Světové maratony, zápasy a závody. Registraci, dopravu i ubytování vyřešíme my — Vy se soustředíte jen na výkon nebo zážitek.",
      ctaLabel: "Poptejte cestu",
    },
    intro: {
      h2: "Cesty za sportem s letitou tradicí.",
      paragraphs: [
        "Máme dlouholetou tradici a bohaté zkušenosti se zajišťováním cest za sportovními událostmi po celém světě — pro firmy a skupiny i pro individuální klienty.",
        "Cesta je vždy připravena s ohledem na Vaše časové možnosti a požadovaný rozpočet. Vy se soustředíte na sportovní zážitek nebo výkon — logistiku řešíme my.",
      ],
    },
    cta: {
      h2: "Jaká sportovní událost Vás láká?",
      subtitle: "Napište nám termín a destinaci. Postaráme se o zbytek.",
      ctaLabel: "Poptejte Sport Travel",
      contactNote: "Potřebujete poradit s výběrem události nebo destinace?",
    },
    sections: [{ type: "sportShowcase" }],
  },
};

const en: Record<ServiceId, ServiceContent> = {
  "incentivni-zajezdy": {
    name: "Incentive trips",
    shortName: "Incentive trips",
    card: "Original programmes for employees, management and business partners.",
    meta: {
      title: "Incentive trips | SIT Travel",
      description:
        "Original incentive programmes for employees, management and business partners. SIT Travel has organised incentive trips for corporate clients since 1991. Destination selection, tailor-made programme, clear final statement. Send a no-obligation enquiry.",
    },
    hero: {
      eyebrow: "Incentive trips",
      h1: "Experiences your team will keep talking about for a long time.",
      subtitle:
        "Original programmes for employees, management and business partners. We choose the destination, prepare the programme and present the final statement. All you have to do is decide.",
      ctaLabel: "Request a programme",
    },
    intro: {
      h2: "A good idea is not enough. Execution is what counts.",
      paragraphs: [
        "Even a good idea does not guarantee a good result. That is why we come up with original ideas — ones that put you ahead of the competition. Combined with attention to every detail, they bring success.",
        "Do you dream of skiing in Whistler, Canada? Does unspoiled Africa in the Ngorongoro reserve appeal to you? Would you like to drive the wild horses of a sports Ferrari through the Italian Dolomites? Adrenaline, wellness, culture or sport — we tailor the programme to the personality and character of your team.",
      ],
    },
    cta: {
      h2: "Tell us what you are planning.",
      subtitle: "A concrete proposal for destination and programme within 48 hours.",
      ctaLabel: "Request an incentive trip",
      contactNote: "Have a question before you send an enquiry?",
    },
    sections: [
      {
        type: "features",
        heading: "What we take care of",
        items: [
          {
            icon: "globe",
            name: "Destination selection",
            desc: "We propose a destination based on the character of the group, the season and the goal of the event. We have experience with Europe and with distant destinations alike.",
          },
          {
            icon: "presentation",
            name: "Tailor-made programme",
            desc: "We prepare a complete programme — from arrival to departure. Adrenaline activities, wellness, cultural programme or a combination.",
          },
          {
            icon: "fileText",
            name: "Final statement and photo documentation",
            desc: "After the event you receive a clear final statement, photo documentation and an evaluation of the whole event.",
          },
        ],
      },
      {
        type: "cards",
        heading: "Who it is for",
        bg: "slate",
        items: [
          {
            name: "Employees",
            desc: "Motivational events for the whole team. Team building that genuinely brings people together.",
          },
          {
            name: "Management",
            desc: "Exclusive programmes for company leadership. A combination of business meetings and premium experiences.",
          },
          {
            name: "Business partners",
            desc: "Thank your key partners with an unforgettable trip. The best investment in a relationship.",
          },
        ],
      },
    ],
  },

  "privatni-servis": {
    name: "Private service",
    shortName: "Private service",
    card: "F1, Wimbledon, private jets. For those who accept no compromises.",
    meta: {
      title: "Private service | SIT Travel",
      description:
        "F1, Wimbledon, the Open Championship — right next to the stars of sport. Private jet, VIP accommodation, personal adviser. SIT Travel has provided private service for demanding corporate clients since 1991. Send a no-obligation enquiry.",
    },
    hero: {
      eyebrow: "Private service",
      h1: "Right at the event. Not in front of a screen.",
      subtitle:
        "F1, Wimbledon, the Open Championship — close to the greats of sport. Private jet, VIP accommodation, personal adviser. For those who accept no compromises.",
      ctaLabel: "No-obligation enquiry",
    },
    intro: {
      h2: "A live broadcast never replaces being there.",
      paragraphs: [
        "A live broadcast of F1, Wimbledon or the Open Championship can never match the atmosphere of seeing it in person. We will secure you a place close to sporting legends or film celebrities.",
        "The complete service includes flights, transfers, luxury accommodation, tickets to the heart of the action and a rich accompanying programme. We can even take you to your idols in the fastest and most comfortable way — by private jet.",
      ],
    },
    cta: {
      h2: "Do not settle for less.",
      subtitle: "Describe your requirements. We take care of the rest.",
      ctaLabel: "Request private service",
      contactNote: "Prefer to talk directly?",
    },
    sections: [
      {
        type: "features",
        heading: "What we take care of",
        items: [
          {
            icon: "plane",
            name: "Private jet",
            desc: "Ideal for 4 to 16 people. No crowded airports, no connections. You depart whenever you wish.",
          },
          {
            icon: "star",
            name: "VIP tickets",
            desc: "Seats close to the action — not just in the stands. Hospitality areas, pit lane, backstage.",
          },
          {
            icon: "building2",
            name: "Luxury accommodation",
            desc: "Top-category hotels in the best available location near the venue.",
          },
          {
            icon: "user",
            name: "Personal adviser",
            desc: "Your adviser is at your disposal throughout the event. We place the greatest emphasis on personal contact.",
          },
        ],
      },
      {
        type: "events",
        heading: "Events we arrange",
        items: [
          "Formula 1 — Grand Prix around the world",
          "Wimbledon — the tennis Grand Slam in London",
          "The Open Championship — top-level golf",
          "The Masters in Augusta — the most prestigious golf tournament in the world",
          "Champions League Final",
          "Super Bowl",
          "Film festivals (Cannes, Venice)",
        ],
      },
    ],
  },

  "kongresova-turistika": {
    name: "Congress travel",
    shortName: "Congress travel",
    card: "Congresses and seminars around the world.",
    meta: {
      title: "Congress travel | SIT Travel",
      description:
        "Congresses and seminars around the world, from registration to the return flight. SIT Travel has provided congress travel for corporate clients since 1991. Registration, flights, transfers, accommodation, visas — all from a single supplier. Send a no-obligation enquiry.",
    },
    hero: {
      eyebrow: "Congress travel",
      h1: "Congresses and seminars worldwide. From registration to the return flight.",
      subtitle:
        "We arrange your participation in the congress or seminar of your choice anywhere in the world. Registration, flights, transfers, accommodation, visas — all from a single supplier.",
      ctaLabel: "Request a congress",
    },
    intro: {
      h2: "Combine the pleasant with the useful.",
      paragraphs: [
        "Do you know of a congress or seminar that you or your colleagues would like to attend? We will provide a complete service — from registration and payment of participation fees to the return journey.",
        "We will find the most suitable and fastest flight connection, arrange all transfers and make sure you sleep soundly. We check visa requirements in advance and, if needed, obtain the necessary documents.",
      ],
    },
    cta: {
      h2: "Do you know of a congress you would like to attend?",
      subtitle: "Send us its name and date. We take care of the rest.",
      ctaLabel: "Request congress service",
      contactNote: "Have a question?",
    },
    sections: [
      {
        type: "features",
        heading: "What the service includes",
        items: [
          {
            icon: "clipboardCheck",
            name: "Registration and fees",
            desc: "Completing the application, paying participation fees, confirming attendance. We handle it all for you.",
          },
          {
            icon: "plane",
            name: "Transport and transfers",
            desc: "The fastest flight connection at the best price. Transfers from the airport to the venue and back.",
          },
          {
            icon: "bedDouble",
            name: "Accommodation and leisure time",
            desc: "A hotel in an optimal location. On request we add leisure activities — golf, cycling, culture.",
          },
        ],
      },
    ],
  },

  "incoming-ceska-republika": {
    name: "Incoming (Czech Republic)",
    shortName: "Incoming",
    card: "Sightseeing stays in the Czech Republic for international clients.",
    meta: {
      title: "Incoming — Czech Republic | SIT Travel",
      description:
        "We organise sightseeing stays in the Czech Republic for international corporate clients. Licensed guides in all languages, transport, tickets, tailor-made cultural programme. SIT Travel — a DMC based in Prague since 1991. Send a no-obligation enquiry.",
    },
    hero: {
      eyebrow: "Incoming",
      h1: "The best of the Czech Republic. For your international guests.",
      subtitle:
        "We organise sightseeing stays in the Czech Republic for international corporate clients. Licensed guides in all languages, transport, tickets, tailor-made cultural programme.",
      ctaLabel: "Request a programme",
    },
    intro: {
      h2: "The Czech Republic through the eyes of a professional.",
      paragraphs: [
        "We are a DMC based in Prague with experience since 1991. We design, prepare and deliver programmes for international corporate groups and individual clients in Prague, the Czech Republic and Central Europe.",
        "Every project is tailor-made — to your needs, the make-up of the group and the purpose of the visit.",
      ],
    },
    cta: {
      h2: "Planning the arrival of an international group?",
      subtitle:
        "Send us the number of people, the date and the group's interests. Programme proposal within 48 hours.",
      ctaLabel: "Request an incoming programme",
      contactEmail: "incoming@sittravel.cz",
      contactPhone: "+420 777 858 524",
    },
    sections: [
      {
        type: "twocol",
        heading: "What we take care of",
        left: [
          "Advice on choosing the destination and programme",
          "Licensed guides in all languages",
          "Transport of every kind — from horse-drawn carriages to limousines",
          "Tickets to cultural, social and sporting events",
        ],
        right: [
          "Accommodation in hotels of all categories",
          "Gastronomic experiences and catering services",
          "Team building and sports programme",
          "Site inspections with our project manager",
        ],
      },
      {
        type: "destinations",
        heading: "Where we will take you",
        items: [
          {
            name: "Prague",
            desc: "Historic centre, UNESCO heritage, architecture — one of the most beautiful cities in Europe.",
          },
          {
            name: "Český Krumlov",
            desc: "The most beautiful town of South Bohemia, with a Gothic castle and a Baroque chateau.",
          },
          {
            name: "Karlovy Vary",
            desc: "A traditional spa town popular with international guests.",
          },
          {
            name: "Bohemian Switzerland",
            desc: "Unique natural scenery with sandstone rocks and the Pravčická Gate.",
          },
          {
            name: "Moravian wine regions",
            desc: "Wine, tradition and the hospitality of South Moravia.",
          },
        ],
      },
    ],
  },

  "sluzebni-cesty": {
    name: "Business travel",
    shortName: "Business travel",
    card: "Flights, accommodation and transfers from a single supplier.",
    meta: {
      title: "Business travel | SIT Travel",
      description:
        "Flights at the best available fares, accommodation, transfers, insurance and car rental — all from a single supplier. SIT Travel has managed corporate travel since 1991. Specialists available outside office hours. Send a no-obligation enquiry.",
    },
    hero: {
      eyebrow: "Business travel",
      h1: "Your corporate travel. Our problem.",
      subtitle:
        "Flights at the best available fares, accommodation, transfers, insurance and car rental — all from a single supplier. Our specialists are available outside office hours too.",
      ctaLabel: "Request service",
    },
    intro: {
      h2: "The complete business travel agenda in one pair of hands.",
      paragraphs: [
        "Specialists from our corporate clients department take care of the complete agenda of your business trips. We understand the need to save time and money — so we always offer the optimal connection at the most favourable fares.",
        "Our team consists of specialists with at least five years of experience in the industry, whom we regularly train in news and fare changes. We are available outside standard working hours.",
      ],
    },
    cta: {
      h2: "Entrust your travel agenda to professionals.",
      subtitle: "35 years of experience in corporate travel.",
      ctaLabel: "Request service",
      contactNote: "Need advice on choosing a fare?",
      extraLink: { href: FLIGHTS_URL, label: "Online flights →" },
    },
    sections: [
      {
        type: "features",
        heading: "What we take care of",
        items: [
          {
            icon: "plane",
            name: "Flights",
            desc: "The optimal flight connection at the best available fares. Economy, business and first class. Online booking system available 24 hours a day.",
          },
          {
            icon: "bedDouble",
            name: "Accommodation and transfers",
            desc: "Hotels in all destinations, airport transfers. Always in line with your budget and preferences.",
          },
          {
            icon: "shield",
            name: "Insurance and visas",
            desc: "Travel insurance and visa agenda. We check entry requirements for every destination in advance.",
          },
        ],
      },
      {
        type: "checklist",
        heading: "Why SIT Travel",
        bg: "slate",
        items: [
          "A team of specialists with at least five years of experience in the industry",
          "Available outside standard working hours",
          "Online booking system 24/7",
        ],
      },
    ],
  },

  "kongresy-seminare-cr": {
    name: "Congresses and conferences in the Czech Republic",
    shortName: "Congresses in CZ",
    card: "Turnkey organisation of congresses and social events.",
    meta: {
      title: "Congresses and conferences in the Czech Republic | SIT Travel",
      description:
        "Turnkey organisation of congresses and corporate events in the Czech Republic. SIT Travel provides a complete solution for preparing and running congresses, conferences and social events. One decision, one meeting — we do the rest. Send a no-obligation enquiry.",
    },
    hero: {
      eyebrow: "Congresses and conferences in the Czech Republic",
      h1: "Turnkey organisation of congresses and corporate events in the Czech Republic.",
      subtitle:
        "We provide a complete solution for preparing and running congresses, conferences and social events in the Czech Republic and Slovakia. One decision, one meeting — we do the rest.",
      ctaLabel: "Request organisation",
    },
    intro: {
      h2: "From the decision to the final applause.",
      paragraphs: [
        "We prepare and organise congresses, conferences and social events in the Czech Republic and Slovakia. We offer a complete turnkey solution including supporting services.",
        "We arrange online registration of participants, including a mobile app. We take care of all technical, logistical and catering details.",
      ],
    },
    cta: {
      h2: "Planning a congress or a corporate event?",
      subtitle: "One meeting is enough. We will prepare a complete proposal.",
      ctaLabel: "Request event organisation",
      contactNote: "We would be happy to discuss your requirements in person.",
    },
    sections: [
      {
        type: "twocol",
        heading: "What the complete service includes",
        left: [
          "Selection and booking of a suitable venue",
          "Online registration of participants, including a mobile app",
          "Technical support (sound, projection, simultaneous interpreting)",
          "Catering and gastronomic services",
        ],
        right: [
          "Transfers and transport of participants",
          "Gala dinners and social programme",
          "Guide services",
          "Clear final statement after the event",
        ],
      },
      {
        type: "cards",
        heading: "Types of events",
        bg: "slate",
        items: [
          {
            icon: "users",
            name: "Congresses and conferences",
            desc: "Professional events for dozens to hundreds of participants. Complete organisation including registration.",
          },
          {
            icon: "presentation",
            name: "Corporate seminars",
            desc: "Training and internal events for employees. We arrange the venue, catering and programme.",
          },
          {
            icon: "music",
            name: "Social events",
            desc: "Gala dinners, company parties, anniversary events. Organisation with attention to every detail.",
          },
        ],
      },
    ],
  },

  "sport-travel": {
    name: "Sport Travel",
    shortName: "Sport Travel",
    card: "World marathons, matches and races. Registration and accommodation included.",
    meta: {
      title: "Sport Travel | SIT Travel",
      description:
        "Trips to sporting events for companies and individuals. World marathons, matches and races. SIT Travel offers Sport Travel with a long tradition — registration, transport and accommodation arranged. Send a no-obligation enquiry.",
    },
    hero: {
      eyebrow: "Sport Travel",
      h1: "World sporting events, experienced first-hand.",
      subtitle:
        "Trips to sporting events for companies and individuals. World marathons, matches and races. We arrange registration, transport and accommodation — you focus only on performance or the experience.",
      ctaLabel: "Request a trip",
    },
    intro: {
      h2: "Sports travel with a long tradition.",
      paragraphs: [
        "We have a long tradition and plenty of experience in arranging trips to sporting events around the world — for companies and groups as well as for individual clients.",
        "Every trip is prepared with your schedule and budget in mind. You focus on the sporting experience or your performance — we handle the logistics.",
      ],
    },
    cta: {
      h2: "Which sporting event appeals to you?",
      subtitle: "Send us the date and destination. We take care of the rest.",
      ctaLabel: "Request Sport Travel",
      contactNote: "Need advice on choosing an event or destination?",
    },
    sections: [{ type: "sportShowcase" }],
  },
};

export const services: Record<Locale, Record<ServiceId, ServiceContent>> = { cs, en };
