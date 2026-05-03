import { createFileRoute } from "@tanstack/react-router";
import { Globe, Presentation, FileText } from "lucide-react";
import { ServicePage, FeatureColumns, CardGrid } from "@/components/ServicePage";
import bgImage from "@/assets/sluzby-bentogrid/incentivni-zajezdy.webp";

export const Route = createFileRoute("/sluzby/incentivni-zajezdy")({
  component: IncentivniZajezdy,
  head: () => ({
    meta: [
      { title: "Incentivní zájezdy | SIT Travel" },
      {
        name: "description",
        content:
          "Originální incentivní programy pro zaměstnance, management a obchodní partnery. SIT Travel zajišťuje incentivní zájezdy pro firemní klientelu od roku 1991. Výběr destinace, program na míru, přehledné vyúčtování. Poptejte nezávazně.",
      },
    ],
  }),
});

function IncentivniZajezdy() {
  return (
    <ServicePage
      slug="incentivni-zajezdy"
      hero={{
        eyebrow: "Incentivní zájezdy",
        h1: "Zážitky, které Váš tým ještě dlouho nepřestane chválit.",
        subtitle:
          "Originální programy pro zaměstnance, management a obchodní partnery. Vybíráme destinaci, připravíme program, předložíme vyúčtování. Stačí jedno rozhodnutí.",
        ctaLabel: "Poptejte program",
        bgImage,
      }}
      intro={{
        h2: "Nápad nestačí. Záleží na provedení.",
        paragraphs: [
          "Ani dobrý nápad nezaručí dobrý výsledek. Proto přicházíme s originálními nápady — takovými, které Vám zajistí náskok před ostatními. Ve spojení s důrazem na každý detail přinášejí jistý úspěch.",
          "Toužíte po lyžování v kanadském Whistleru? Láká Vás nedotčená Afrika v rezervaci Ngorongoro? Chcete prohánět divoké hřebce sportovního Ferrari v italských Dolomitech? Adrenalin, wellness, kultura nebo sport — ušijeme program na míru s ohledem na osobnost a povahu Vašeho týmu.",
        ],
      }}
      cta={{
        h2: "Řekněte nám, co plánujete.",
        subtitle: "Konkrétní návrh destinace a programu do 48 hodin.",
        ctaLabel: "Poptejte incentivní zájezd",
        contactNote: "Máte otázku ještě před poptávkou?",
      }}
    >
      <FeatureColumns
        heading="Co zajistíme"
        columns={[
          {
            icon: <Globe size={28} />,
            name: "Výběr destinace",
            desc: "Navrhujeme destinaci podle charakteru skupiny, ročního období a cíle akce. Máme zkušenosti s Evropou i vzdálenými destinacemi.",
          },
          {
            icon: <Presentation size={28} />,
            name: "Program na míru",
            desc: "Připravíme kompletní program — od příletu po odlet. Adrenalinové aktivity, wellness, kulturní program nebo kombinace.",
          },
          {
            icon: <FileText size={28} />,
            name: "Vyúčtování a fotodokumentace",
            desc: "Po skončení akce obdržíte přehledné vyúčtování, fotodokumentaci a vyhodnocení celé akce.",
          },
        ]}
      />
      <CardGrid
        heading="Pro koho"
        bg="slate"
        cards={[
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
        ]}
      />
    </ServicePage>
  );
}
