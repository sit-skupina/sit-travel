// Obsah stránky Sport Travel — česky a anglicky.
// Vychází z původních webů sporttravel.cz a maratontravel.cz (destinace, programy, rozsah cest),
// bez cen a termínů z roku 2018 — ty se vždy navrhují na míru.

import type { Locale } from "@/lib/i18n";

export type SportId = "nba" | "nhl" | "nfl" | "nascar" | "tenis" | "maraton";
export const SPORT_IDS: SportId[] = ["nba", "nhl", "nfl", "nascar", "tenis", "maraton"];

export interface SportText {
  name: string;
  tag: string;
  text: string;
  places: string[];
  programTitle: string;
  program: string[];
}

export interface SportContent {
  eyebrow: string;
  heading: string;
  sub: string;
  selectLabel: string;
  placesLabel: string;
  marathonLink: { href: string; label: string };
  incl: {
    heading: string;
    sub: string;
    tabIn: string;
    tabOut: string;
    included: string[];
    excluded: string[];
    note: string;
  };
  gallery: { heading: string; sub: string; captions: string[]; hint: string };
  more: { heading: string; items: string[] };
  sports: Record<SportId, SportText>;
}

const cs: SportContent = {
  eyebrow: "Cesty za sportem",
  heading: "Vyberte si sport, my vyřešíme cestu.",
  sub: "Od zápasů NBA, NHL a NFL přes závody NASCAR až po tenisové turnaje a maratony po celém světě.",
  selectLabel: "Vyberte sport",
  placesLabel: "Kam se jezdí",
  marathonLink: {
    href: "https://www.maratontravel.cz/",
    label: "Přehled maratonů na maratontravel.cz ↗",
  },
  incl: {
    heading: "Co obvykle zahrnuje cesta za zápasem do USA",
    sub: "Základní balíček, ze kterého vycházíme. Rozsah, termíny i cenu vždy připravíme na míru.",
    tabIn: "V ceně",
    tabOut: "Není v ceně",
    included: [
      "Letenka Praha – destinace – Praha",
      "Letištní poplatky a taxy",
      "Ubytování na 4 noci ve dvoulůžkovém pokoji v hotelu 3*",
      "Snídaně",
      "Vstupenka na zápas nebo závod",
      "Informační balíček",
    ],
    excluded: [
      "ESTA",
      "Transfery (letiště, stadion)",
      "Cestovní pojištění",
      "Pojištění storna zájezdu",
      "Průvodce",
      "Pronájem automobilu",
    ],
    note: "Chcete něco z druhého sloupce zajistit s námi? Stačí napsat — přidáme to do nabídky.",
  },
  gallery: {
    heading: "Fotky z našich cest",
    sub: "Zápas je jen začátek. Mezi hrami zbývá čas na město, pobřeží i přírodu.",
    captions: [
      "Everglades",
      "Orlando",
      "Seattle",
      "Seattle",
      "San Francisco",
      "New York",
      "Miami Beach",
      "Vídeň",
      "Gstaad",
      "Boston",
    ],
    hint: "Přetáhněte nebo posuňte",
  },
  more: {
    heading: "Za čím dalším s Vámi vyrazíme",
    items: [
      "Atletika",
      "Motorsport",
      "Golf",
      "Rodeo",
      "Dostihy",
      "Fotbal",
      "Lyžování",
      "Fotoexpedice",
    ],
  },
  sports: {
    nba: {
      name: "NBA",
      tag: "Basketbal v USA",
      text: "Zápas NBA přímo v hale a k tomu dny na prohlídku města. Vybírat můžete z Miami, New Yorku nebo Orlanda.",
      places: ["Miami", "New York", "Orlando"],
      programTitle: "Typický program · 5 dní",
      program: [
        "Odlet z Prahy a transfer do hotelu",
        "Prohlídka města a zápas NBA",
        "Volný den: Miami Beach, pobřeží, případně pronájem auta",
        "Volný den: národní park Everglades",
        "Odlet do Prahy",
      ],
    },
    nhl: {
      name: "NHL",
      tag: "Hokej v USA a Kanadě",
      text: "Zápas NHL v zámořské aréně. Jezdíme do Calgary, Vancouveru, Washingtonu D.C., New Yorku, Miami i Tampy.",
      places: ["Calgary", "Vancouver", "Washington D.C.", "New York", "Miami", "Tampa"],
      programTitle: "Typický program · 5 dní",
      program: [
        "Odlet z Prahy a transfer do hotelu",
        "Prohlídka města a zápas NHL",
        "Volný den: pláže, pobřeží, případně pronájem auta",
        "Volný den: národní parky a okolí",
        "Odlet do Prahy",
      ],
    },
    nfl: {
      name: "NFL",
      tag: "Americký fotbal",
      text: "Zápas NFL na stadionu, kde to žije. Miami, San Francisco, Seattle, Boston, Tampa nebo Dallas — atmosféru i okolí města si užijete naplno.",
      places: ["Miami", "San Francisco", "Seattle", "Boston", "Tampa", "Dallas"],
      programTitle: "Typický program · 5 dní",
      program: [
        "Odlet z Prahy a transfer do hotelu",
        "Prohlídka města a zápas NFL",
        "Volný den: město a pobřeží, případně pronájem auta",
        "Volný den: výlety do okolí",
        "Odlet do Prahy",
      ],
    },
    nascar: {
      name: "NASCAR",
      tag: "Motorsport v USA",
      text: "Závody na legendárních okruzích, například na Daytona International Speedway, kde se každý rok otevírá sezóna slavnou Daytonou 500. Jezdíme do Orlanda, Miami i Phoenixu.",
      places: ["Orlando", "Miami", "Phoenix"],
      programTitle: "Typický program · 5 dní",
      program: [
        "Odlet z Prahy do Orlanda a transfer do hotelu",
        "Prohlídka města a závod na okruhu Daytona International Speedway",
        "Volný den: Walt Disney Resort, Universal Studios a další atrakce",
        "Volný den: pláže nebo Kennedy Space Center",
        "Odlet do Prahy",
      ],
    },
    tenis: {
      name: "Tenis",
      tag: "Turnaje v Evropě",
      text: "Tenisové turnaje ve výjimečných kulisách: Swiss Indoor v Basileji, Swiss Open v Gstaadu a Vienna Open ve Vídni. Krátké cesty na 3 až 4 dny, ideální i na prodloužený víkend.",
      places: ["Basilej", "Gstaad", "Vídeň"],
      programTitle: "Typický program · 4 dny",
      program: [
        "Příjezd do Vídně",
        "Tenisový turnaj ve Wiener Stadthalle",
        "Druhý hrací den turnaje",
        "Odjezd do ČR",
      ],
    },
    maraton: {
      name: "Maraton",
      tag: "Cesty pro běžce",
      text: "Pomůžeme Vám s celou cestou na maraton: letenky, ubytování, přihláška i zaplacení startovného. Pro fanoušky a rodinu připravíme vlastní program. A cestu rádi okořeníme — po maratonu v Kigali za horskými gorilami, v Paříži do Moulin Rouge, v Peru za památkami dávných civilizací.",
      places: ["Evropa", "Amerika", "Asie", "Afrika", "Austrálie"],
      programTitle: "Jak to probíhá",
      program: [
        "Společně vybereme maraton",
        "Zařídíme přihlášku a startovné",
        "Zajistíme letenky a ubytování",
        "Připravíme program pro rodinu a fanoušky",
        "Po závodě přidáme poznání místa",
      ],
    },
  },
};

const en: SportContent = {
  eyebrow: "Sport travel",
  heading: "Choose a sport — we take care of the trip.",
  sub: "From NBA, NHL and NFL games through NASCAR races to tennis tournaments and marathons around the world.",
  selectLabel: "Choose a sport",
  placesLabel: "Where we go",
  marathonLink: {
    href: "https://www.maratontravel.cz/",
    label: "Browse marathons at maratontravel.cz ↗",
  },
  incl: {
    heading: "What a trip to a US game usually includes",
    sub: "The basic package we start from. The scope, dates and price are always tailored to you.",
    tabIn: "Included",
    tabOut: "Not included",
    included: [
      "Return flight Prague – destination – Prague",
      "Airport fees and taxes",
      "4 nights in a double room in a 3* hotel",
      "Breakfasts",
      "Ticket to the game or race",
      "Information pack",
    ],
    excluded: [
      "ESTA",
      "Transfers (airport, stadium)",
      "Travel insurance",
      "Trip cancellation insurance",
      "Guide",
      "Car rental",
    ],
    note: "Would you like us to arrange something from the second column? Just let us know — we will add it to the offer.",
  },
  gallery: {
    heading: "Photos from our trips",
    sub: "The game is just the beginning. Between games there is time for the city, the coast and nature.",
    captions: [
      "Everglades",
      "Orlando",
      "Seattle",
      "Seattle",
      "San Francisco",
      "New York",
      "Miami Beach",
      "Vienna",
      "Gstaad",
      "Boston",
    ],
    hint: "Drag or scroll",
  },
  more: {
    heading: "What else we travel for",
    items: [
      "Athletics",
      "Motorsport",
      "Golf",
      "Rodeo",
      "Horse racing",
      "Football",
      "Skiing",
      "Photo expeditions",
    ],
  },
  sports: {
    nba: {
      name: "NBA",
      tag: "Basketball in the USA",
      text: "An NBA game right in the arena, plus days to explore the city. Choose from Miami, New York or Orlando.",
      places: ["Miami", "New York", "Orlando"],
      programTitle: "Typical programme · 5 days",
      program: [
        "Flight from Prague and transfer to the hotel",
        "City sightseeing and the NBA game",
        "Free day: Miami Beach, the coast, optional car rental",
        "Free day: Everglades National Park",
        "Flight back to Prague",
      ],
    },
    nhl: {
      name: "NHL",
      tag: "Ice hockey in the USA and Canada",
      text: "An NHL game in an overseas arena. We travel to Calgary, Vancouver, Washington D.C., New York, Miami and Tampa.",
      places: ["Calgary", "Vancouver", "Washington D.C.", "New York", "Miami", "Tampa"],
      programTitle: "Typical programme · 5 days",
      program: [
        "Flight from Prague and transfer to the hotel",
        "City sightseeing and the NHL game",
        "Free day: beaches, the coast, optional car rental",
        "Free day: national parks and surroundings",
        "Flight back to Prague",
      ],
    },
    nfl: {
      name: "NFL",
      tag: "American football",
      text: "An NFL game in a stadium that lives and breathes it. Miami, San Francisco, Seattle, Boston, Tampa or Dallas — enjoy the atmosphere and the city around it.",
      places: ["Miami", "San Francisco", "Seattle", "Boston", "Tampa", "Dallas"],
      programTitle: "Typical programme · 5 days",
      program: [
        "Flight from Prague and transfer to the hotel",
        "City sightseeing and the NFL game",
        "Free day: the city and the coast, optional car rental",
        "Free day: trips to the surroundings",
        "Flight back to Prague",
      ],
    },
    nascar: {
      name: "NASCAR",
      tag: "Motorsport in the USA",
      text: "Races at legendary tracks, for example Daytona International Speedway, where the season opens every year with the famous Daytona 500. We travel to Orlando, Miami and Phoenix.",
      places: ["Orlando", "Miami", "Phoenix"],
      programTitle: "Typical programme · 5 days",
      program: [
        "Flight from Prague to Orlando and transfer to the hotel",
        "City sightseeing and the race at Daytona International Speedway",
        "Free day: Walt Disney Resort, Universal Studios and other attractions",
        "Free day: beaches or Kennedy Space Center",
        "Flight back to Prague",
      ],
    },
    tenis: {
      name: "Tennis",
      tag: "Tournaments in Europe",
      text: "Tennis tournaments in exceptional settings: Swiss Indoors in Basel, Swiss Open in Gstaad and the Vienna Open. Short trips of 3 to 4 days, ideal for a long weekend too.",
      places: ["Basel", "Gstaad", "Vienna"],
      programTitle: "Typical programme · 4 days",
      program: [
        "Arrival in Vienna",
        "Tournament day at the Wiener Stadthalle",
        "Second tournament day",
        "Departure to the Czech Republic",
      ],
    },
    maraton: {
      name: "Marathon",
      tag: "Trips for runners",
      text: "We help with the whole trip to a marathon: flights, accommodation, registration and payment of the entry fee. We prepare a programme for fans and family too. And we gladly spice up the trip — after the Kigali marathon to see mountain gorillas, in Paris a visit to the Moulin Rouge, in Peru the monuments of ancient civilisations.",
      places: ["Europe", "America", "Asia", "Africa", "Australia"],
      programTitle: "How it works",
      program: [
        "Together we choose the marathon",
        "We handle registration and the entry fee",
        "We arrange flights and accommodation",
        "We prepare a programme for family and fans",
        "After the race we add some sightseeing",
      ],
    },
  },
};

export const sport: Record<Locale, SportContent> = { cs, en };
