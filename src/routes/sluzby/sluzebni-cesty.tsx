import { createFileRoute } from "@tanstack/react-router";
import { Plane, BedDouble, Shield } from "lucide-react";
import { ServicePage, FeatureColumns, CheckList } from "@/components/ServicePage";
import bgImage from "@/assets/sluzby-bentogrid/sluzebni-cesty.webp";

export const Route = createFileRoute("/sluzby/sluzebni-cesty")({
  component: SluzebniCesty,
  head: () => ({
    meta: [
      { title: "Služební cesty | SIT Travel" },
      {
        name: "description",
        content:
          "Letenky za nejlepší dostupné tarify, ubytování, transfery, pojištění a půjčení vozu — vše od jednoho dodavatele. SIT Travel zajišťuje správu firemních cest od roku 1991. Specialisté dostupní i mimo pracovní dobu. Poptejte nezávazně.",
      },
    ],
  }),
});

function SluzebniCesty() {
  return (
    <ServicePage
      slug="sluzebni-cesty"
      hero={{
        eyebrow: "Služební cesty",
        h1: "Vaše firemní cestování. Náš problém.",
        subtitle:
          "Letenky za nejlepší dostupné tarify, ubytování, transfery, pojištění a půjčení vozu — vše od jednoho dodavatele. Naši specialisté jsou k dispozici i mimo pracovní dobu.",
        ctaLabel: "Poptejte servis",
        bgImage,
      }}
      intro={{
        h2: "Kompletní agenda služebních cest v jedněch rukou.",
        paragraphs: [
          "Specialisté z oddělení korporátních klientů zajistí kompletní agendu Vašich služebních cest. Chápeme potřebu úspory času a nákladů — proto vždy nabízíme optimální spojení za nejvýhodnější tarify.",
          "Náš tým tvoří specialisté s praxí v oboru minimálně 5 let, kteří jsou pravidelně seznamováni se všemi novinkami a tarifními změnami. Jsme k dispozici i mimo standardní pracovní dobu.",
        ],
      }}
      cta={{
        h2: "Svěřte cestovní agendu profesionálům.",
        subtitle: "Více než 30 let zkušeností s firemním cestováním.",
        ctaLabel: "Poptejte servis",
        contactNote: "Potřebujete poradit se s výběrem tarifu?",
        extraLink: {
          href: "https://sittravel-s2.symphony.cz/cs/index.php",
          label: "Online letenky →",
        },
      }}
    >
      <FeatureColumns
        heading="Co zajistíme"
        columns={[
          {
            icon: <Plane size={28} />,
            name: "Letenky",
            desc: "Optimální letecké spojení za nejlepší dostupné tarify. Economy, business i first class. Online rezervační systém dostupný 24 hodin denně.",
          },
          {
            icon: <BedDouble size={28} />,
            name: "Ubytování a transfery",
            desc: "Hotely ve všech destinacích, transfery z letiště. Vždy s ohledem na Váš rozpočet a preference.",
          },
          {
            icon: <Shield size={28} />,
            name: "Pojištění a víza",
            desc: "Cestovní pojištění, vízová agenda, předem zjišťujeme podmínky vstupu do každé destinace.",
          },
        ]}
      />
      <CheckList
        heading="Proč SIT Travel"
        bg="slate"
        items={[
          "Tým specialistů s min. 5 lety praxe v oboru",
          "Dostupnost i mimo standardní pracovní dobu",
          "Online rezervační systém 24/7",
        ]}
      />
    </ServicePage>
  );
}
