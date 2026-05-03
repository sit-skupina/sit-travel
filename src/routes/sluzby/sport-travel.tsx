import { createFileRoute } from "@tanstack/react-router";
import { Eye, Trophy } from "lucide-react";
import { ServicePage, TwoColFeatures, CheckList } from "@/components/ServicePage";
import bgImage from "@/assets/sluzby-bentogrid/sport-travel.webp";

export const Route = createFileRoute("/sluzby/sport-travel")({
  component: SportTravel,
  head: () => ({
    meta: [
      { title: "Sport Travel | SIT Travel" },
      {
        name: "description",
        content:
          "Cesty za sportovními událostmi pro firmy i jednotlivce. Světové maratony, zápasy a závody. SIT Travel zajišťuje Sport Travel s letitou tradicí — registrace, doprava i ubytování vyřešeno. Poptejte nezávazně.",
      },
    ],
  }),
});

function SportTravel() {
  return (
    <ServicePage
      slug="sport-travel"
      hero={{
        eyebrow: "Sport Travel",
        h1: "Světové sportovní události na vlastní kůži.",
        subtitle:
          "Cesty za sportovními událostmi pro firmy i jednotlivce. Světové maratony, zápasy a závody. Registrace, doprava i ubytování vyřešeno — Vy se soustředíte jen na výkon nebo zážitek.",
        ctaLabel: "Poptejte cestu",
        bgImage,
      }}
      intro={{
        h2: "Sport travel s letitou tradicí.",
        paragraphs: [
          "Sport Travel má dlouholetou tradici a velké zkušenosti se zajištěním cest za sportovními událostmi po celém světě — pro firmy i skupiny, pro individuální klientelu.",
          "Cesta je vždy připravena s ohledem na Vaše časové možnosti a požadovaný rozpočet. Vy se soustředíte na sportovní zážitek nebo výkon — logistiku řešíme my.",
        ],
      }}
      cta={{
        h2: "Jaká sportovní událost Vás láká?",
        subtitle: "Napište nám termín a destinaci. Postaráme se o zbytek.",
        ctaLabel: "Poptejte Sport Travel",
        contactNote: "Potřebujete poradit s výběrem události nebo destinace?",
      }}
    >
      <TwoColFeatures
        heading="Typy cest"
        left={{
          icon: <Eye size={28} />,
          name: "Sportovní události jako divák",
          desc: "Vstupenky, letenky, ubytování, transfery. Zajistíme místo co nejblíže dění.",
          examples: "Formule 1 · Fotbalové ligy · Tenisové grandslamy · Olympijské hry · Hokejové MS",
        }}
        right={{
          icon: <Trophy size={28} />,
          name: "Účast na světových maratonech",
          desc: "Registrace na vybraný maraton, doprava, ubytování, doplňkový program. Soustřeďte se jen na výsledek.",
          examples: "New York · London · Berlin · Boston · Chicago · Tokyo",
        }}
      />
      <CheckList
        heading="Co zajistíme"
        bg="slate"
        items={[
          "Registrace na sportovní událost nebo závod",
          "Letenky za nejlepší dostupné tarify",
          "Ubytování v optimální lokalitě k události",
          "Transfery z letiště a na místo konání",
          "Vstupenky na tribunu nebo VIP zónu",
          "Doplňkový kulturní a zábavní program",
        ]}
      />
    </ServicePage>
  );
}
