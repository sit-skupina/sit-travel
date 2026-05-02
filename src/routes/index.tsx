import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import penta from "@/assets/clients/penta.png";
import eucLekarna from "@/assets/clients/euc-lekarna.png";
import direct from "@/assets/clients/direct.png";
import mmr from "@/assets/clients/mmr.png";
import tipsport from "@/assets/clients/tipsport.png";
import swisslife from "@/assets/clients/swisslife.png";
import ecHarris from "@/assets/clients/ec-harris.png";
import fourFin from "@/assets/clients/4fin.png";
import alfasigma from "@/assets/clients/alfasigma.png";
import coloplast from "@/assets/clients/coloplast.png";
import heroBg from "@/assets/hero-bg.webp";
import heroBg2 from "@/assets/hero-bg-2.webp";
import heroBg3 from "@/assets/hero-bg-3.webp";

const clientLogos = [
  { src: penta, alt: "Penta" },
  { src: eucLekarna, alt: "EUC Lékárna" },
  { src: direct, alt: "Direct pojišťovna" },
  { src: mmr, alt: "Ministerstvo pro místní rozvoj ČR" },
  { src: tipsport, alt: "Tipsport" },
  { src: swisslife, alt: "Swiss Life Select" },
  { src: ecHarris, alt: "EC Harris" },
  { src: fourFin, alt: "4fin" },
  { src: alfasigma, alt: "Alfasigma" },
  { src: coloplast, alt: "Coloplast" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SIT Travel — B2B cestovní kancelář pro firmy" },
      {
        name: "description",
        content:
          "35 let zkušeností s incentivními zájezdy, kongresy a služebními cestami pro firemní klientelu. Akreditovaný agent IATA, člen ACK ČR.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparentOnTop />

      {/* Hero */}
      <section className="relative -mt-[60px] flex min-h-[640px] items-center overflow-hidden md:-mt-[72px] md:min-h-[720px]">
        <div className="absolute inset-0" aria-hidden>
          {[heroBg, heroBg2, heroBg3].map((src, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-cover bg-center animate-hero-fade"
              style={{
                backgroundImage: `url(${src})`,
                animationDelay: `${i * 7}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/[0.52]" aria-hidden />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-white/85">
            Firemní cestovní kancelář · Praha · Od roku 1991
          </span>
          <h1 className="mt-5 max-w-4xl text-[40px] leading-[1.08] text-white md:text-[64px]">
            Firemní akce, které si Vaši lidé budou pamatovat ještě roky.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
            Incentivní zájezdy, kongresy a služební cesty pro firmy. Kompletní servis od prvního
            briefu po závěrečné vyúčtování. Více než 40 firemních klientů, 34 let v oboru.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" size="cta">
              Poptejte akci
            </Button>
            <Button variant="ghost-light" size="cta">
              Stáhněte brožuru
            </Button>
          </div>
          <p className="mt-4 text-xs text-white/65">
            Nezávazná poptávka · Návrh do 48 hodin
          </p>

          {/* Logo marquee */}
          <div className="mt-16 md:mt-20">
            <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
              Spolupracujeme s
            </p>
            <div
              className="group relative mt-5 overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              }}
            >
              <div className="flex w-max animate-marquee items-center gap-14">
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <img
                    key={`${logo.alt}-${i}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 w-auto shrink-0 object-contain opacity-90 brightness-0 invert md:h-12"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="bg-[#F7F5F0] py-10"
        style={{
          borderTop: "1px solid #D3D1C7",
          borderBottom: "1px solid #D3D1C7",
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {[
            { num: "34 let", label: "Na trhu nepřetržitě od roku 1991" },
            { num: "40+", label: "Předních firem a institucí" },
            { num: "IATA", label: "Akreditovaný agent od roku 1995" },
            { num: "ACK ČR", label: "Člen asociace cestovních kanceláří" },
          ].map((s, i, arr) => {
            const isLast = i === arr.length - 1;
            const isLastRowMobile = i >= arr.length - 2;
            return (
              <div
                key={s.label}
                className="stats-item flex flex-col items-center justify-center text-center px-5 py-5 md:py-0"
                style={{
                  borderRight: !isLast ? "1px solid #D3D1C7" : undefined,
                  borderBottom: !isLastRowMobile ? "1px solid #D3D1C7" : undefined,
                }}
                data-last={isLast}
                data-last-row={isLastRowMobile}
              >
                <div
                  className="font-serif"
                  style={{
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#F5A623",
                    lineHeight: 1.1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#6B6A66",
                    lineHeight: 1.4,
                    marginTop: "8px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="bg-[oklch(0.18_0.005_60)] py-10 text-center text-sm text-white/60">
        © 2026 SIT Travel · Všechna práva vyhrazena
      </footer>
    </div>
  );
}
