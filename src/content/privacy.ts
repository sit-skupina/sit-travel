// Zásady ochrany osobních údajů.
//
// Vychází ze "Záznamu o činnostech zpracování správce" SIT Travel, s.r.o. (PDF na starém webu,
// www.sittravel.cz/gdpr) a doplňuje, co ve starém záznamu chybělo: webový formulář, cookies,
// práva subjektů údajů a lhůty. Starý záznam byl veden i na zrušenou CK Pacholík — ta zde není.
//
// ⚠ Před spuštěním ověřit s Pavlem / právníkem: konkrétní lhůty uchování a zpracovatele
//    (poskytovatel formulářové služby, e-mailu).

import type { Locale } from "@/lib/i18n";
import { COMPANY } from "@/lib/site";

export interface PrivacySection {
  h: string;
  p?: string[];
  ul?: string[];
}

const address = `${COMPANY.street}, ${COMPANY.city}`;

const cs: {
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: PrivacySection[];
} = {
  title: "Ochrana osobních údajů | SIT Travel",
  description:
    "Zásady ochrany osobních údajů společnosti SIT Travel s.r.o.: kdo údaje zpracovává, jaké údaje, proč, komu je předáváme a jaká máte práva.",
  h1: "Ochrana osobních údajů",
  lead: "Vážíme si Vaší důvěry. Zde se dozvíte, jaké osobní údaje zpracováváme, proč a jak s nimi nakládáme.",
  sections: [
    {
      h: "1. Správce osobních údajů",
      p: [
        `Správcem je ${COMPANY.name}, IČ ${COMPANY.ico}, DIČ ${COMPANY.dic}, se sídlem ${address} (dále jen „SIT Travel“).`,
        `Kontakt pro záležitosti osobních údajů: ${COMPANY.email}, tel. ${COMPANY.phone}.`,
      ],
    },
    {
      h: "2. Jaké údaje zpracováváme a proč",
      p: ["Osobní údaje zpracováváme jen v rozsahu, který je nezbytný pro daný účel."],
      ul: [
        "Poptávkový formulář a komunikace: jméno a příjmení, společnost, e-mail, telefon a informace o plánované akci. Účelem je vyřízení poptávky a předsmluvní jednání (čl. 6 odst. 1 písm. b) GDPR).",
        "Zajištění cest a služeb: jméno a příjmení, adresa pro doručování, místo trvalého pobytu, telefon, e-mail, datum narození a — podle druhu služby — fotografie a údaje z cestovního pasu (např. u víz a kongresů). Týká se letenek, ubytování, vlakových, autobusových a lodních jízdenek, víz, vstupenek, kongresů a konferencí, pronájmu automobilů, transferů a sightseeingu a cestovního pojištění. Právním základem je plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR).",
        "Účetnictví a daně: údaje na dokladech zpracováváme, protože nám to ukládají právní předpisy (čl. 6 odst. 1 písm. c) GDPR).",
        "Ochrana právních nároků a zabezpečení webu: oprávněný zájem SIT Travel (čl. 6 odst. 1 písm. f) GDPR).",
      ],
    },
    {
      h: "3. Komu údaje předáváme",
      p: ["Údaje předáváme pouze těm, kdo se na zajištění Vaší cesty nebo akce skutečně podílejí:"],
      ul: [
        "letecké společnosti, dopravci, hotely, resorty a ubytovací zařízení, autopůjčovny, cestovní pojišťovny;",
        "organizátoři kongresů, konferencí a kulturních a sportovních akcí, správci památek a národních parků;",
        "ambasády a konzulární úřady (u vízové agendy);",
        "poskytovatelé IT a e-mailových služeb a poskytovatel formulářové služby, který přeposílá poptávky z webu do naší schránky. Tito zpracovatelé jednají na základě smlouvy a jen podle našich pokynů.",
      ],
    },
    {
      h: "4. Předání mimo EU / EHP",
      p: [
        "Při cestách do zemí mimo EU / EHP je předání údajů dodavatelům v cílové zemi nezbytné pro splnění smlouvy, kterou jste s námi uzavřeli (čl. 49 odst. 1 písm. b) GDPR). Údaje pro cestovní pojištění do třetích zemí nepředáváme.",
      ],
    },
    {
      h: "5. Jak dlouho údaje uchováváme",
      p: [
        "Údaje z poptávky uchováváme po dobu jejího vyřízení a jednání o zakázce. Údaje související s uzavřenou zakázkou uchováváme po dobu plnění smlouvy a poté po dobu, kterou nám ukládají účetní a daňové předpisy a kterou je potřeba pro ochranu právních nároků. Poté je vymažeme nebo anonymizujeme.",
      ],
    },
    {
      h: "6. Jak údaje chráníme",
      p: [
        "Údaje jsou zpracovávány elektronicky nebo v listinné podobě. Přístup k nim mají jen pracovníci, kteří je potřebují k výkonu práce, a to podle vnitřních směrnic. Pokud údaje spravuje externí zpracovatel, je zabezpečení ošetřeno smluvně.",
      ],
    },
    {
      h: "7. Cookies a externí obsah",
      p: [
        "Web nepoužívá analytické ani reklamní cookies a nesleduje Vaši aktivitu. Ukládáme pouze Vaši volbu v cookie liště (v úložišti prohlížeče), aby se Vás web nevyptával opakovaně.",
        "Písma jsou součástí webu a nenačítají se od třetích stran. Mapa Google se načte až po Vašem souhlasu s externím obsahem; po jejím zobrazení může společnost Google ukládat cookies a zpracovávat Vaši IP adresu podle vlastních zásad. Souhlas můžete kdykoli změnit v patičce webu (Nastavení cookies).",
      ],
    },
    {
      h: "8. Vaše práva",
      p: ["Podle GDPR máte právo:"],
      ul: [
        "na přístup ke svým osobním údajům a na kopii zpracovávaných údajů,",
        "na opravu nepřesných údajů,",
        "na výmaz údajů, pokud pominul důvod jejich zpracování,",
        "na omezení zpracování,",
        "na přenositelnost údajů,",
        "vznést námitku proti zpracování založenému na oprávněném zájmu,",
        "podat stížnost u Úřadu pro ochranu osobních údajů (Pplk. Sochora 27, 170 00 Praha 7, www.uoou.cz).",
      ],
    },
    {
      h: "9. Jak svá práva uplatnit",
      p: [
        `Napište nám na ${COMPANY.email} nebo písemně na adresu ${address}. Odpovíme bez zbytečného odkladu, nejpozději do jednoho měsíce.`,
      ],
    },
  ],
};

const en: typeof cs = {
  title: "Privacy policy | SIT Travel",
  description:
    "Privacy policy of SIT Travel s.r.o.: who processes personal data, which data, why, who receives it and what rights you have.",
  h1: "Privacy policy",
  lead: "We value your trust. Here you can find out which personal data we process, why, and how we handle it.",
  sections: [
    {
      h: "1. Data controller",
      p: [
        `The controller is ${COMPANY.name}, company ID (IČ) ${COMPANY.ico}, VAT ID (DIČ) ${COMPANY.dic}, with its registered office at ${address}, Czech Republic (“SIT Travel”).`,
        `Contact for personal data matters: ${COMPANY.email}, tel. ${COMPANY.phone}.`,
      ],
    },
    {
      h: "2. Which data we process and why",
      p: ["We process personal data only to the extent necessary for the given purpose."],
      ul: [
        "Enquiry form and communication: name, company, e-mail, phone number and information about the planned event. The purpose is to handle your enquiry and pre-contractual negotiations (Art. 6(1)(b) GDPR).",
        "Arranging trips and services: name, delivery address, place of permanent residence, phone number, e-mail, date of birth and — depending on the service — a photograph and passport details (e.g. for visas and congresses). This applies to flights, accommodation, train, bus and boat tickets, visas, event tickets, congresses and conferences, car rental, transfers and sightseeing, and travel insurance. The legal basis is performance of a contract (Art. 6(1)(b) GDPR).",
        "Accounting and taxes: we process data on documents because the law requires us to (Art. 6(1)(c) GDPR).",
        "Protection of legal claims and website security: the legitimate interest of SIT Travel (Art. 6(1)(f) GDPR).",
      ],
    },
    {
      h: "3. Who we share data with",
      p: ["We only share data with those who actually take part in arranging your trip or event:"],
      ul: [
        "airlines, carriers, hotels, resorts and other accommodation providers, car rental companies, travel insurers;",
        "organisers of congresses, conferences, and cultural and sporting events, administrators of monuments and national parks;",
        "embassies and consular offices (for visa services);",
        "IT and e-mail service providers and the form service provider that forwards enquiries from the website to our mailbox. These processors act under contract and only on our instructions.",
      ],
    },
    {
      h: "4. Transfers outside the EU / EEA",
      p: [
        "For trips to countries outside the EU / EEA, transferring data to suppliers in the destination country is necessary to perform the contract you have concluded with us (Art. 49(1)(b) GDPR). We do not transfer travel insurance data to third countries.",
      ],
    },
    {
      h: "5. How long we keep data",
      p: [
        "We keep enquiry data for as long as it takes to handle the enquiry and negotiate the order. Data related to a concluded order is kept for the duration of the contract and then for as long as accounting and tax regulations require and as is needed to protect legal claims. After that we delete or anonymise it.",
      ],
    },
    {
      h: "6. How we protect data",
      p: [
        "Data is processed electronically or in paper form. Only staff who need it for their work have access, in accordance with internal policies. Where data is managed by an external processor, security is covered by contract.",
      ],
    },
    {
      h: "7. Cookies and external content",
      p: [
        "This website uses no analytics or advertising cookies and does not track your activity. We only store your choice in the cookie banner (in your browser storage) so that the site does not ask you repeatedly.",
        "Fonts are part of the website and are not loaded from third parties. Google Maps loads only after you allow external content; once it is shown, Google may set cookies and process your IP address under its own policies. You can change your choice at any time in the footer (Cookie settings).",
      ],
    },
    {
      h: "8. Your rights",
      p: ["Under the GDPR you have the right to:"],
      ul: [
        "access your personal data and receive a copy of the data we process,",
        "have inaccurate data corrected,",
        "have data erased once the reason for processing has ceased,",
        "restrict processing,",
        "data portability,",
        "object to processing based on legitimate interest,",
        "lodge a complaint with the Office for Personal Data Protection (Pplk. Sochora 27, 170 00 Prague 7, www.uoou.cz).",
      ],
    },
    {
      h: "9. How to exercise your rights",
      p: [
        `Write to us at ${COMPANY.email} or by post to ${address}. We will reply without undue delay and no later than within one month.`,
      ],
    },
  ],
};

export const privacy: Record<Locale, typeof cs> = { cs, en };
