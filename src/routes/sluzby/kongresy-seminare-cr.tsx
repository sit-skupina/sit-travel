import { createFileRoute } from "@tanstack/react-router";
import { Users, Presentation, Music } from "lucide-react";
import { ServicePage, FeatureTwoCol, CardGrid } from "@/components/ServicePage";
import bgImage from "@/assets/sluzby-bentogrid/kongresy-v-cr.webp";

export const Route = createFileRoute("/sluzby/kongresy-seminare-cr")({
  component: KongreseseminareCr,
  head: () => ({
    meta: [
      { title: "Kongresy a konference v ČR | SIT Travel" },
      {
        name: "description",
        content:
          "Organizace kongresů a firemních akcí v České republice na klíč. SIT Travel poskytuje kompletní řešení pro přípravu a realizaci kongresů, konferencí a společenských akcí. Jedno rozhodnutí, jedna schůzka — zbytek je na nás. Poptejte nezávazně.",
      },
    ],
  }),
});

function KongreseseminareCr() {
  return (
    <ServicePage
      slug="kongresy-seminare-cr"
      hero={{
        eyebrow: "Kongresy a konference v ČR",
        h1: "Organizace kongresů a firemních akcí v České republice na klíč.",
        subtitle:
          "Poskytujeme kompletní řešení pro přípravu a realizaci kongresů, konferencí a společenských akcí v ČR a na Slovensku. Jedno rozhodnutí, jedna schůzka — zbytek je na nás.",
        ctaLabel: "Poptejte organizaci",
        bgImage,
      }}
      intro={{
        h2: "Od rozhodnutí po závěrečné tleskaní.",
        paragraphs: [
          "Poskytujeme profesionální řešení pro přípravu a organizaci kongresů, konferencí a společenských akcí v České republice a na Slovensku. Nabízíme kompletní řešení na klíč včetně doprovodných služeb.",
          "Zajistíme online registraci účastníků včetně mobilní aplikace. Postaráme se o všechny technické, logistické i gastronomické detaily.",
        ],
      }}
      cta={{
        h2: "Plánujete kongres nebo firemní akci?",
        subtitle: "Stačí jedna schůzka. Připravíme kompletní nabídku.",
        ctaLabel: "Poptejte organizaci akce",
        contactNote: "Rádi s Vámi probereme Vaše požadavky osobně.",
      }}
    >
      <FeatureTwoCol
        heading="Co zahrnuje kompletní servis"
        left={[
          "Výběr a rezervace vhodného místa konání",
          "Online registrace účastníků včetně mobilní aplikace",
          "Technické zajištění (ozvučení, projekce, simultánní tlumočení)",
          "Catering a gastronomické služby",
        ]}
        right={[
          "Transfery a doprava účastníků",
          "Galavečeře a společenský program",
          "Průvodcovské služby",
          "Přehledné vyúčtování po skončení akce",
        ]}
      />
      <CardGrid
        heading="Typy akcí"
        bg="slate"
        cards={[
          {
            icon: <Users size={28} />,
            name: "Kongresy a konference",
            desc: "Odborné akce pro desítky až stovky účastníků. Kompletní organizace včetně registrace.",
          },
          {
            icon: <Presentation size={28} />,
            name: "Firemní semináře",
            desc: "Vzdělávací a interní akce pro zaměstnance. Zajistíme místo, catering i program.",
          },
          {
            icon: <Music size={28} />,
            name: "Společenské akce",
            desc: "Galavečeře, firemní večírky, výroční akce. Organizace s důrazem na každý detail.",
          },
        ]}
      />
    </ServicePage>
  );
}
