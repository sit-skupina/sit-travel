import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, FeatureTwoCol, DestinationGrid } from "@/components/ServicePage";
import bgImage from "@/assets/sluzby-bentogrid/incoming.webp";

export const Route = createFileRoute("/sluzby/incoming-ceska-republika")({
  component: IncomingCeskaRepublika,
  head: () => ({
    meta: [
      { title: "Incoming — Česká republika | SIT Travel" },
      {
        name: "description",
        content:
          "Organizujeme poznávací pobyty v ČR pro zahraniční firemní klienty. Licencovaní průvodci ve všech jazycích, doprava, vstupenky, kulturní program na míru. SIT Travel — DMC se sídlem v Praze od roku 1991. Poptejte nezávazně.",
      },
    ],
  }),
});

function IncomingCeskaRepublika() {
  return (
    <ServicePage
      slug="incoming-ceska-republika"
      hero={{
        eyebrow: "Incoming",
        h1: "To nejlepší z České republiky. Pro Vaše zahraniční hosty.",
        subtitle:
          "Organizujeme poznávací pobyty v ČR pro zahraniční firemní klienty. Licencovaní průvodci ve všech jazycích, doprava, vstupenky, kulturní program na míru.",
        ctaLabel: "Poptejte program",
        bgImage,
      }}
      intro={{
        h2: "Česká republika očima profesionála.",
        paragraphs: [
          "Jsme DMC se sídlem v Praze s zkušenostmi od roku 1991. Navrhujeme, připravujeme a realizujeme programy pro zahraniční firemní skupiny i individuální klienty v Praze, České republice a střední Evropě.",
          "Každý projekt je šitý na míru — s ohledem na Vaše potřeby, složení skupiny a cíl návštěvy.",
        ],
      }}
      cta={{
        h2: "Plánujete příjezd zahraniční skupiny?",
        subtitle: "Napište nám počet osob, termín a zájem skupiny. Návrh programu do 48 hodin.",
        ctaLabel: "Poptejte incoming program",
        contactEmail: "incoming@sittravel.cz",
        contactPhone: "+420 777 858 524",
      }}
    >
      <FeatureTwoCol
        heading="Co zajistíme"
        left={[
          "Poradenství při výběru destinace a programu",
          "Licencovaní průvodci ve všech jazycích",
          "Doprava všeho druhu — od koňského spřežení po limuzínu",
          "Vstupenky na kulturní, společenské a sportovní akce",
        ]}
        right={[
          "Ubytování v hotelech všech kategorií",
          "Gastronomické zážitky a cateringové služby",
          "Teambuilding a sportovní program",
          "Site inspections s naším projektovým manažerem",
        ]}
      />
      <DestinationGrid
        heading="Kde Vás provedeme"
        destinations={[
          { name: "Praha", desc: "Historické centrum, UNESCO, architektura — jedno z nejkrásnějších měst Evropy." },
          { name: "Český Krumlov", desc: "Nejkrásnější město jižních Čech s gotickým hradem a barokním zámkem." },
          { name: "Karlovy Vary", desc: "Lázeňské město s tradicí oblíbené mezinárodní klientelou." },
          { name: "České Švýcarsko", desc: "Unikátní přírodní scenérie s pískovcovými skalami a Pravčickou bránou." },
          { name: "Moravské vinařské oblasti", desc: "Víno, tradice a pohostinnost jižní Moravy." },
        ]}
      />
    </ServicePage>
  );
}
