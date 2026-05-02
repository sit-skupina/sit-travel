import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

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
      <section className="relative -mt-[60px] flex min-h-[640px] items-center md:-mt-[72px] md:min-h-[720px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=2000&q=80')",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[var(--color-overlay)]" aria-hidden />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
          <span className="inline-block rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/90">
            B2B cestovní kancelář · od roku 1991
          </span>
          <h1 className="mt-6 max-w-3xl text-[40px] leading-[1.1] text-white md:text-[64px]">
            Firemní akce, které Vašim lidem zůstanou v hlavě.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
            Od prvního nápadu po závěrečné vyúčtování. 35 let zkušeností s incentivami, kongresy a
            služebními cestami pro firemní klientelu.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" size="cta">
              Poptejte akci
            </Button>
            <Button variant="ghost-light" size="cta">
              Stáhněte brožuru
            </Button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            { num: "35 let", label: "Na trhu od roku 1991" },
            { num: "IATA", label: "Akreditovaný agent" },
            { num: "ACK ČR", label: "Člen asociace" },
            { num: "B2B only", label: "Výhradně firmy" },
          ].map((s) => (
            <div key={s.label} className="bg-background px-6 py-10 text-center">
              <div className="font-serif text-3xl font-bold text-primary md:text-4xl">{s.num}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[oklch(0.18_0.005_60)] py-10 text-center text-sm text-white/60">
        © 2026 SIT Travel · Všechna práva vyhrazena
      </footer>
    </div>
  );
}
