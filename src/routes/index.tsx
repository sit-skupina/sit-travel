import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Phone, Mail, Plane, ChevronDown } from "lucide-react";
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
import skodaPrahaInvest from "@/assets/clients/skodaprahainvest.png";
import renault from "@/assets/clients/renault.png";
import heroBg from "@/assets/hero-bg.webp";
import heroBg2 from "@/assets/hero-bg-2.webp";
import heroBg3 from "@/assets/hero-bg-3.webp";
import oFirme from "@/assets/o-firme.webp";
import brozura from "@/assets/SIT Travel brozura 2025 UPDATE (1).pdf";
import imgIncentivni from "@/assets/sluzby-bentogrid/incentivni-zajezdy.webp";
import imgPrivatni from "@/assets/sluzby-bentogrid/privatni-servis.webp";
import imgKongresova from "@/assets/sluzby-bentogrid/kongresova-turistika.webp";
import imgIncoming from "@/assets/sluzby-bentogrid/incoming.webp";
import imgSluzebni from "@/assets/sluzby-bentogrid/sluzebni-cesty.webp";
import imgKongresy from "@/assets/sluzby-bentogrid/kongresy-v-cr.webp";
import imgSport from "@/assets/sluzby-bentogrid/sport-travel.webp";

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
  { src: skodaPrahaInvest, alt: "Škoda Praha Invest" },
  { src: renault, alt: "Renault" },
];


const bentoCards = [
  {
    img: imgIncentivni,
    headline: "Incentivní zájezdy",
    sub: "Originální programy pro zaměstnance, management a obchodní partnery.",
  },
  {
    img: imgPrivatni,
    headline: "Privátní servis",
    sub: "F1, Wimbledon, privátní jet. Pro ty, kteří nechtějí kompromisy.",
  },
  {
    img: imgKongresova,
    headline: "Kongresová turistika",
    sub: "Kongresy a semináře po celém světě.",
  },
  {
    img: imgIncoming,
    headline: "Incoming",
    sub: "Poznávací pobyty v ČR pro zahraniční klienty.",
  },
  {
    img: imgSluzebni,
    headline: "Služební cesty",
    sub: "Letenky, ubytování, transfery od jednoho dodavatele.",
  },
  {
    img: imgKongresy,
    headline: "Kongresy a konference v ČR",
    sub: "Organizace kongresů a společenských akcí na klíč.",
  },
  {
    img: imgSport,
    headline: "Sport Travel",
    sub: "Světové maratony, zápasy a závody. Registrace i ubytování.",
  },
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
    links: [
      { rel: "preload", href: heroBg, as: "image", type: "image/webp" },
    ],
  }),
});

const faqItems = [
  {
    q: "Pro koho jsou Vaše služby určeny?",
    a: "SIT Travel je výhradně B2B cestovní kancelář. Spolupracujeme se soukromými společnostmi, státními institucemi a organizacemi, které potřebují profesionální servis pro firemní akce, kongresy nebo každodenní správu firemních cest.",
  },
  {
    q: "Jak rychle dostanu konkrétní nabídku?",
    a: "Do 48 hodin v pracovní dny. Stačí nám sdělit typ akce, přibližný počet účastníků a termín. Žádné obecné ceníky — každou nabídku připravujeme přímo na míru Vašemu požadavku.",
  },
  {
    q: "Zajišťujete i jednodenní firemní akce v ČR?",
    a: "Ano. Organizujeme kongresy, konference a firemní akce na klíč po celé České republice — od výběru prostorů přes catering až po technické zajištění a doprovodný program.",
  },
  {
    q: "Co zahrnuje Vaše správa firemních letenek?",
    a: "Rezervace, ticketing, změny a storna, online systém pro self-booking, konsolidované reporting a vyúčtování. Jako akreditovaný agent IATA máme přímý přístup ke všem globálním distribučním systémům.",
  },
  {
    q: "Jakou máte zkušenost se zahraničními destinacemi?",
    a: "35 let praxe zahrnuje stovky akcí na všech kontinentech. Spolupracujeme s prověřenými lokálními partnery v každé destinaci. Znáte-li již cílové místo, rádi ho přijmeme; pokud ne, navrhneme nejvhodnější varianty.",
  },
  {
    q: "Lze u Vás zajistit pojištění pro celou skupinu?",
    a: "Ano, zajišťujeme skupinové cestovní pojištění včetně pojištění storna a komplexního pojištění pro akce — vše u jednoho dodavatele tak, aby Vaše administrativa byla co nejjednodušší.",
  },
  {
    q: "Jak probíhá vyúčtování po akci?",
    a: "Po skončení akce obdržíte přehledné závěrečné vyúčtování se všemi položkami, fotodokumentaci a v případě incentivních zájezdů i závěrečnou zprávu pro management.",
  },
];

const logoGrid = [
  { colSpan: 2, depth: 1.2 },
  { colSpan: 1, depth: 0.5 },
  { colSpan: 1, depth: 1.7 },
  { colSpan: 2, depth: 0.8 },
  { colSpan: 1, depth: 1.4 },
  { colSpan: 2, depth: 0.6 },
  { colSpan: 2, depth: 1.9 },
  { colSpan: 1, depth: 0.7 },
  { colSpan: 2, depth: 1.1 },
  { colSpan: 1, depth: 1.6 },
  { colSpan: 1, depth: 0.9 },
  { colSpan: 2, depth: 1.3 },
];

function Index() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);


  // Reference board parallax — RAF-throttled so it never fires more than once per frame
  const refBoardRef = React.useRef<HTMLDivElement>(null);
  const [refMouse, setRefMouse] = React.useState({ x: 0, y: 0 });
  const rafRef = React.useRef<number | null>(null);

  const handleRefMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const rect = refBoardRef.current?.getBoundingClientRect();
      if (!rect) return;
      setRefMouse({
        x: (clientX - rect.left - rect.width / 2) / rect.width,
        y: (clientY - rect.top - rect.height / 2) / rect.height,
      });
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar transparentOnTop />

      {/* Hero */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-black md:min-h-[720px]">
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
            briefu po závěrečné vyúčtování. Více než 40 firemních klientů, 35 let v oboru.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" size="cta" asChild>
              <a href="#kontakt">Poptejte akci</a>
            </Button>
            <Button variant="ghost-light" size="cta" asChild>
              <a href={brozura} download="SIT Travel brožura 2025.pdf">Stáhněte brožuru</a>
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
                  <div
                    key={`${logo.alt}-${i}`}
                    className="flex h-10 w-[140px] shrink-0 items-center justify-center md:h-12 md:w-[160px]"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-full max-w-full object-contain opacity-90 brightness-0 invert"
                      loading="lazy"
                    />
                  </div>
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
            { num: "35 let", label: "Na trhu nepřetržitě od roku 1991" },
            { num: "40+", label: "Předních firem a institucí" },
            { num: "IATA", label: "Akreditovaný agent od roku 1995" },
            { num: "ACK ČR", label: "Člen asociace cestovních kanceláří" },
          ].map((s) => (
            <div
              key={s.label}
              className="stats-item flex flex-col items-center justify-center text-center px-5 py-5 md:py-0"
            >
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "36px",
                  fontWeight: 600,
                  color: "#2C2C2A",
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
          ))}
        </div>
      </section>

      {/* Letenky banner */}
      <div className="letenky-banner">
        <div className="letenky-banner-inner">
          <div className="letenky-banner-left">
            <Plane size={20} color="#F5A623" strokeWidth={2} />
            <div>
              <span className="letenky-banner-title">Firemní letenky online</span>
              <span className="letenky-banner-sub">Přímý přístup k rezervačnímu systému — porovnejte sazby a objednejte sami, kdykoliv.</span>
            </div>
          </div>
          <a
            href="https://sittravel-s2.symphony.cz/cs/index.php"
            target="_blank"
            rel="noreferrer"
            className="letenky-banner-btn"
          >
            Rezervovat letenky →
          </a>
        </div>
      </div>

      {/* Services — Bento Grid */}
      <section id="sluzby" className="bento-section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="bento-heading font-serif">Co pro Vás zajistíme</h2>
          <p className="bento-subtext">
            Od motivačního zájezdu přes kongres až po každodenní správu firemních letenek.
          </p>

          <div className="bento-grid">
            {bentoCards.map((card, i) => (
              <div key={i} className={`bento-card bento-card--${i + 1}`}>
                <img src={card.img} alt={card.headline} className="bento-card-img" loading="lazy" />
                <div className="bento-card-overlay" aria-hidden />
                <div className="bento-card-content">
                  <h3 className="bento-card-headline">{card.headline}</h3>
                  <p className="bento-card-sub">{card.sub}</p>
                  <button className="bento-card-btn">Zjistit více</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="jak-to-funguje" className="how-section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <h2 className="font-serif" style={{ fontSize: "40px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.2, margin: 0 }}>
              Tři kroky od nápadu k akci
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "16px", color: "#6B6A66", marginTop: "20px", lineHeight: 1.65 }}>
              Zbývá Vám jen rozhodnout se. Zbytek je na nás.
            </p>
          </div>

          <div className="how-timeline">
            <div className="how-timeline-line" aria-hidden />
            <div className="how-grid">
              {[
                {
                  num: "01",
                  title: "Poptáte nás",
                  desc: "Jeden e-mail nebo telefonát. Řeknete nám typ akce, počet lidí a rámcový termín. Nic víc nepotřebujeme ke startu.",
                },
                {
                  num: "02",
                  title: "Do 48 hodin máte konkrétní návrh",
                  desc: "Destinace, program, rozpočet. Žádné obecné nabídky — návrh odpovídá přesně Vašemu požadavku.",
                },
                {
                  num: "03",
                  title: "Akce proběhne bez starostí",
                  desc: "Od letenek po galavečer řešíme vše my. Po skončení dostanete přehledné vyúčtování a fotodokumentaci.",
                },
              ].map(({ num, title, desc }) => (
                <div key={num} className="how-step">
                  <div className="how-step-circle">
                    <span className="how-step-num">{num}</span>
                  </div>
                  <h3 className="how-step-title">{title}</h3>
                  <p className="how-step-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center" style={{ marginTop: "56px" }}>
            <a href="#kontakt" className="how-cta">Poptejte akci</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="o-nas" className="about-section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="about-layout">

            <div className="about-text">
              <span className="about-eyebrow">O společnosti</span>
              <h2 className="about-heading font-serif">35 let. Jedno pravidlo.</h2>
              <p className="about-body">
                SIT Travel zajišťuje servis pro více než 40 předních soukromých společností
                a státních institucí. Od roku 1991.
              </p>
              <p className="about-body">
                Zakládáme si na tom, že každý klient mluví s člověkem, který jeho prostředí
                skutečně zná. Stabilní tým, osvědčení partneři v destinacích, osobní
                zodpovědnost za každou akci.
              </p>
              <div className="about-badges">
                <span className="about-badge">Akreditovaný agent IATA</span>
                <span className="about-badge">Člen ACK ČR</span>
              </div>
              <a href="https://www.sittravel.cz" target="_blank" rel="noreferrer" className="about-link">Více o nás →</a>
            </div>

            <div className="about-image-wrap">
              <img src={oFirme} alt="O firmě SIT Travel" className="about-image-placeholder" />
            </div>

          </div>
        </div>
      </section>


      {/* Reference — logo board */}
      <section id="reference" className="reference-section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="reference-header">
            <span className="reference-eyebrow">Reference</span>
            <h2 className="reference-heading font-serif">Firmy, které nám důvěřují</h2>
          </div>

          <div
            ref={refBoardRef}
            className="reference-board"
            onMouseMove={handleRefMouseMove}
            onMouseLeave={() => setRefMouse({ x: 0, y: 0 })}
          >
            {clientLogos.map((logo, i) => (
              <div
                key={logo.alt}
                className="reference-logo-cell"
                style={{
                  gridColumn: `span ${logoGrid[i].colSpan}`,
                  transform: `translate(${(refMouse.x * logoGrid[i].depth * 16).toFixed(2)}px, ${(refMouse.y * logoGrid[i].depth * 10).toFixed(2)}px)`,
                }}
              >
                <img src={logo.src} alt={logo.alt} className="reference-logo-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq-section">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="faq-header">
            <span className="faq-eyebrow">Časté dotazy</span>
            <h2 className="faq-heading font-serif">Máte otázky? Máme odpovědi.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <div key={i} className={`faq-item${openFaq === i ? " faq-item--open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={20}
                    className="faq-chevron"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <div className="faq-answer-wrap" style={{ maxHeight: openFaq === i ? "400px" : "0" }}>
                  <p className="faq-answer">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section id="kontakt" className="cta-section">
        <div className="cta-inner">
          {/* Left */}
          <div className="cta-left">
            <span className="cta-eyebrow">Nezávazná poptávka</span>
            <h2 className="cta-heading font-serif">Řekněte nám, co plánujete.</h2>
            <p className="cta-subheading">Konkrétní návrh do 48 hodin. Žádné obecné nabídky.</p>
            <div className="cta-info">
              <div className="cta-info-row">
                <Clock size={20} color="#C9530E" />
                <span>Návrh do 48 hodin v pracovní dny</span>
              </div>
              <div className="cta-info-row">
                <Shield size={20} color="#C9530E" />
                <span>Vaše údaje nepředáváme třetím stranám</span>
              </div>
              <div className="cta-info-row">
                <Phone size={20} color="#C9530E" />
                <span>+420 241 441 147</span>
              </div>
            </div>

            <hr className="cta-divider" />

            <div className="cta-contact-cards">
              {/* Card 1 */}
              <div className="cta-contact-card">
                <p className="cta-contact-name">František Pacholík</p>
                <p className="cta-contact-company">SIT Travel</p>
                <div className="cta-contact-links">
                  <div className="cta-contact-row">
                    <Phone size={14} color="#C9530E" />
                    <a href="tel:+420241441146" className="cta-contact-link">+420 241 441 146</a>
                  </div>
                  <div className="cta-contact-row">
                    <Mail size={14} color="#C9530E" />
                    <a href="mailto:info@sittravel.cz" className="cta-contact-link">info@sittravel.cz</a>
                  </div>
                </div>
                <p className="cta-contact-meta">IČ: 16112661 · DIČ: CZ6105081807</p>
              </div>

              {/* Card 2 */}
              <div className="cta-contact-card">
                <p className="cta-contact-name">Pavel Vlk</p>
                <p className="cta-contact-company">SIT Travel s.r.o.</p>
                <div className="cta-contact-links">
                  <div className="cta-contact-row">
                    <Phone size={14} color="#C9530E" />
                    <a href="tel:+420606209108" className="cta-contact-link">+420 606 209 108</a>
                  </div>
                  <div className="cta-contact-row">
                    <Mail size={14} color="#C9530E" />
                    <a href="mailto:vlk@sittravel.cz" className="cta-contact-link">vlk@sittravel.cz</a>
                  </div>
                </div>
                <p className="cta-contact-meta">IČ: 29060648 · DIČ: CZ29060648</p>
              </div>
            </div>

            <div className="cta-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.396854488049!2d14.45229768651648!3d50.04139665661524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a1d21380f1%3A0x9356fe309d0869bd!2sSit%20Travel!5e0!3m2!1sen!2scz!4v1777816108019!5m2!1sen!2scz"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SIT Travel mapa"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="cta-right">
            <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
              <div className="cta-form-grid">
                <div className="cta-field">
                  <label className="cta-label" htmlFor="name">Jméno a příjmení</label>
                  <input className="cta-input" id="name" type="text" required />
                </div>
                <div className="cta-field">
                  <label className="cta-label" htmlFor="company">Společnost</label>
                  <input className="cta-input" id="company" type="text" required />
                </div>
                <div className="cta-field">
                  <label className="cta-label" htmlFor="email">E-mail</label>
                  <input className="cta-input" id="email" type="email" required />
                </div>
                <div className="cta-field">
                  <label className="cta-label" htmlFor="phone">Telefon</label>
                  <input className="cta-input" id="phone" type="tel" required />
                </div>
              </div>

              <div className="cta-field">
                <label className="cta-label" htmlFor="type">Typ akce</label>
                <select className="cta-input" id="type" required>
                  <option value="" disabled selected>Vyberte typ akce</option>
                  <option>Incentivní zájezd</option>
                  <option>Kongres</option>
                  <option>Konference v ČR</option>
                  <option>Služební cesty</option>
                  <option>Privátní servis</option>
                  <option>Sport Travel</option>
                  <option>Jiné</option>
                </select>
              </div>

              <div className="cta-field">
                <label className="cta-label" htmlFor="headcount">Počet osob</label>
                <select className="cta-input" id="headcount" required>
                  <option value="" disabled selected>Vyberte počet osob</option>
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>51–200</option>
                  <option>200+</option>
                </select>
              </div>

              <div className="cta-field">
                <label className="cta-label" htmlFor="date">Termín</label>
                <input className="cta-input" id="date" type="text" placeholder="Např. červen 2025 nebo flexibilní" />
              </div>

              <div className="cta-field">
                <label className="cta-label" htmlFor="message">Popis požadavku</label>
                <textarea className="cta-input cta-textarea" id="message" />
              </div>

              <div className="cta-checkbox-row">
                <input type="checkbox" id="gdpr" required className="cta-checkbox" />
                <label htmlFor="gdpr" className="cta-checkbox-label">
                  Souhlasím se zpracováním osobních údajů dle GDPR.
                </label>
              </div>

              <button type="submit" className="cta-submit">Odeslat poptávku</button>
              <p className="cta-note">Odpovídáme do 48 hodin v pracovní dny.</p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
