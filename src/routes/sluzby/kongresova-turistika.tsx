import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, Plane, BedDouble } from "lucide-react";
import { ServicePage, FeatureColumns } from "@/components/ServicePage";
import bgImage from "@/assets/sluzby-bentogrid/kongresova-turistika.webp";

export const Route = createFileRoute("/sluzby/kongresova-turistika")({
  component: KongresovaTuristika,
  head: () => ({
    meta: [
      { title: "Kongresová turistika | SIT Travel" },
      {
        name: "description",
        content:
          "Kongresy a semináře po celém světě od přihlášky po zpáteční letenku. SIT Travel zajišťuje kongresovou turistiku pro firemní klientelu od roku 1991. Registrace, letenky, transfery, ubytování, víza — vše od jednoho dodavatele. Poptejte nezávazně.",
      },
    ],
  }),
});

function KongresovaTuristika() {
  return (
    <ServicePage
      slug="kongresova-turistika"
      hero={{
        eyebrow: "Kongresová turistika",
        h1: "Kongresy a semináře po celém světě. Od přihlášky po zpáteční letenku.",
        subtitle:
          "Zajistíme Vám vstup na vybraný kongres nebo seminář kdekoliv na světě. Registrace, letenky, transfery, ubytování, víza — vše od jednoho dodavatele.",
        ctaLabel: "Poptejte kongres",
        bgImage,
      }}
      intro={{
        h2: "Spojte příjemné s užitečným.",
        paragraphs: [
          "Víte o kongresu nebo semináři, kterého byste se Vy nebo Vaši kolegové chtěli zúčastnit? Zajistíme Vám kompletní servis — od registrace a úhrady účastnických poplatků po zpáteční cestu.",
          "Najdeme pro Vás nejvhodnější a nejrychlejší letecké spojení, zajistíme veškeré transfery a pečlivě se postaráme o Váš klidný spánek. Předem zjistíme vízové podmínky a v případě potřeby příslušné dokumenty zajistíme.",
        ],
      }}
      cta={{
        h2: "Víte o kongresu, kterého se chcete zúčastnit?",
        subtitle: "Napište nám název a termín. Zbytek vyřídíme my.",
        ctaLabel: "Poptejte kongresový servis",
        contactNote: "Máte otázku?",
      }}
    >
      <FeatureColumns
        heading="Co zahrnuje servis"
        columns={[
          {
            icon: <ClipboardCheck size={28} />,
            name: "Registrace a poplatky",
            desc: "Vyplnění přihlášky, úhrada účastnických poplatků, potvrzení účasti. Vše vyřídíme za Vás.",
          },
          {
            icon: <Plane size={28} />,
            name: "Doprava a transfery",
            desc: "Nejrychlejší letecké spojení za nejlepší cenu. Transfery z letiště na místo konání a zpět.",
          },
          {
            icon: <BedDouble size={28} />,
            name: "Ubytování a volný čas",
            desc: "Hotel v optimální lokalitě. Na přání doplníme o aktivity pro volný čas — golf, kolo, kulturní program.",
          },
        ]}
      />
    </ServicePage>
  );
}
