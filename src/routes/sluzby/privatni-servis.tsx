import { createFileRoute } from "@tanstack/react-router";
import { Plane, Star, Building2, User } from "lucide-react";
import { ServicePage, FeatureColumns, EventsList } from "@/components/ServicePage";
import bgImage from "@/assets/sluzby-bentogrid/privatni-servis.webp";

export const Route = createFileRoute("/sluzby/privatni-servis")({
  component: PrivatniServis,
  head: () => ({
    meta: [
      { title: "Privátní servis | SIT Travel" },
      {
        name: "description",
        content:
          "F1, Wimbledon, British Open — v těsné blízkosti sportovních velikánů. Privátní jet, VIP ubytování, osobní poradce. SIT Travel zajišťuje privátní servis pro náročnou firemní klientelu od roku 1991. Poptejte nezávazně.",
      },
    ],
  }),
});

function PrivatniServis() {
  return (
    <ServicePage
      slug="privatni-servis"
      hero={{
        eyebrow: "Privátní servis",
        h1: "Přímo u akce. Ne před obrazovkou.",
        subtitle:
          "F1, Wimbledon, British Open — v těsné blízkosti sportovních velikánů. Privátní jet, VIP ubytování, osobní poradce. Pro ty, kteří nechtějí kompromisy.",
        ctaLabel: "Nezávazná poptávka",
        bgImage,
      }}
      intro={{
        h2: "Přímé přenosy nikdy nenahradí osobní přítomnost.",
        paragraphs: [
          "Přímé přenosy z F1, Wimbledonu nebo British Open nikdy nebudou mít takovou atmosféru, jako když je navštívíte osobně. Zajistíme Vám místo v těsné blízkosti sportovních velikánů či filmových celebrit.",
          "Kompletní servis zahrnuje letenky, transfery, luxusní ubytování, vstupenky do centra dění a bohatý doprovodný program. Za idoly Vás navíc můžeme dostat tou nejrychlejší a nejkomfortnější cestou — privátním jetem.",
        ],
      }}
      cta={{
        h2: "Nespokojte se s méně.",
        subtitle: "Popište nám Váš požadavek. Zbytek je na nás.",
        ctaLabel: "Poptejte privátní servis",
        contactNote: "Preferujete přímý kontakt?",
      }}
    >
      <FeatureColumns
        heading="Co zajistíme"
        columns={[
          {
            icon: <Plane size={28} />,
            name: "Privátní jet",
            desc: "Ideální pro 4 až 16 osob. Žádná přeplněná letiště, žádné přestupy. Odlétáte kdy Vy chcete.",
          },
          {
            icon: <Star size={28} />,
            name: "VIP vstupenky",
            desc: "Místa v těsné blízkosti dění — ne jen v hledišti. Hospitality zóny, pit lane, backstage.",
          },
          {
            icon: <Building2 size={28} />,
            name: "Luxusní ubytování",
            desc: "Hotely nejvyšší kategorie v nejlepší dostupné lokalitě k události.",
          },
          {
            icon: <User size={28} />,
            name: "Osobní poradce",
            desc: "Váš poradce je k dispozici po celou dobu akce. Na osobní jednání klademe nejvyšší důraz.",
          },
        ]}
      />
      <EventsList
        heading="Akce, které zajišťujeme"
        events={[
          "Formule 1 — Grand Prix po celém světě",
          "Wimbledon — tenisový grandslam v Londýně",
          "British Open — golf nejvyšší úrovně",
          "Masters Augusta — nejprestižnější golfový turnaj světa",
          "Champions League Final",
          "Super Bowl",
          "Filmové festivaly (Cannes, Benátky)",
        ]}
      />
    </ServicePage>
  );
}
