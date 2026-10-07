import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";
import { ConsentMap } from "@/components/ConsentMap";
import { TeamGrid } from "@/components/TeamGrid";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Phone, Mail, Plane, ChevronDown } from "lucide-react";
import { COMPANY, BROCHURE_FILENAME } from "@/lib/site";
import { pagePath, serviceHref, useLocale } from "@/lib/i18n";
import { home as homeContent } from "@/content/home";
import { services } from "@/content/services";
import { bentoOrder, serviceImages } from "@/content/service-images";
import { useUi } from "@/content/ui";
import mobilize from "@/assets/clients/mobilize.png";
import fourFin from "@/assets/clients/4fin.png";
import swisslife from "@/assets/clients/swisslife.png";
import alfasigma from "@/assets/clients/alfasigma.png";
import lindeGas from "@/assets/clients/linde-gas.png";
import tipsport from "@/assets/clients/tipsport.png";
import coloplast from "@/assets/clients/coloplast.png";
import direct from "@/assets/clients/direct.png";
import mmr from "@/assets/clients/mmr.png";
import conseq from "@/assets/clients/conseq.svg";
import medimat from "@/assets/clients/medimat.png";
import zeppelin from "@/assets/clients/zeppelin.png";
import heroBg from "@/assets/hero-bg.webp";
import heroBg2 from "@/assets/hero-bg-2.webp";
import heroBg3 from "@/assets/hero-bg-3.webp";
import oFirme from "@/assets/o-firme.webp";
import brozura from "@/assets/SIT Travel brozura 2025 UPDATE (1).pdf";

// Reference podle seznamu od Pavla. Pořadí odpovídá rozložení mřížky (logoGrid níže):
// široká loga jsou na pozicích se šířkou 2 sloupce.
const clientLogos = [
  { src: mobilize, alt: "Mobilize Financial Services" },
  { src: fourFin, alt: "4fin" },
  { src: swisslife, alt: "Swiss Life Select" },
  { src: alfasigma, alt: "Alfasigma" },
  { src: lindeGas, alt: "Linde Gas" },
  { src: tipsport, alt: "Tipsport" },
  { src: coloplast, alt: "Coloplast" },
  { src: direct, alt: "Direct pojišťovna" },
  { src: mmr, alt: "Ministerstvo pro místní rozvoj ČR" },
  { src: conseq, alt: "Conseq" },
  { src: medimat, alt: "Medimat" },
  { src: zeppelin, alt: "Zeppelin" },
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

export function HomePage() {
  const locale = useLocale();
  const ui = useUi();
  const c = homeContent[locale];
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
            {c.hero.eyebrow}
          </span>
          <h1 className="mt-5 max-w-4xl text-[40px] leading-[1.08] text-white md:text-[64px]">
            {c.hero.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">{c.hero.lead}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" size="cta" asChild>
              <a href="#kontakt">{c.hero.cta}</a>
            </Button>
            <Button variant="ghost-light" size="cta" asChild>
              <a href={brozura} download={BROCHURE_FILENAME[locale]}>
                {c.hero.brochure}
              </a>
            </Button>
          </div>
          <p className="mt-4 text-xs text-white/65">{c.hero.note}</p>

          {/* Logo marquee */}
          <div className="mt-16 md:mt-20">
            <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
              {c.hero.partners}
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
          {c.stats.map((s) => (
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
              <span className="letenky-banner-title">{c.flights.title}</span>
              <span className="letenky-banner-sub">{c.flights.sub}</span>
            </div>
          </div>
          <a
            href="https://sittravel-s2.symphony.cz/cs/index.php"
            target="_blank"
            rel="noreferrer"
            className="letenky-banner-btn"
          >
            {c.flights.button}
          </a>
        </div>
      </div>

      {/* Services — Bento Grid */}
      <section id="sluzby" className="bento-section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="bento-heading font-serif">{c.services.heading}</h2>
          <p className="bento-subtext">{c.services.sub}</p>

          <div className="bento-grid">
            {bentoOrder.map((id, i) => {
              const { href, external } = serviceHref(id, locale);
              const s = services[locale][id];
              return (
                <a
                  key={id}
                  href={href}
                  className={`bento-card bento-card--${i + 1}`}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <img
                    src={serviceImages[id]}
                    alt={s.name}
                    className="bento-card-img"
                    loading="lazy"
                  />
                  <div className="bento-card-overlay" aria-hidden />
                  <div className="bento-card-content">
                    <h3 className="bento-card-headline">{s.name}</h3>
                    <p className="bento-card-sub">{s.card}</p>
                    <span className="bento-card-btn">{c.services.more}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="jak-to-funguje" className="how-section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <h2
              className="font-serif"
              style={{
                fontSize: "40px",
                fontWeight: 600,
                color: "#1A1A1A",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {c.how.heading}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "16px",
                color: "#6B6A66",
                marginTop: "20px",
                lineHeight: 1.65,
              }}
            >
              {c.how.sub}
            </p>
          </div>

          <div className="how-timeline">
            <div className="how-timeline-line" aria-hidden />
            <div className="how-grid">
              {c.how.steps.map(({ num, title, desc }) => (
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
            <a href="#kontakt" className="how-cta">
              {c.how.cta}
            </a>
          </div>
        </div>
      </section>

      {/* About + Team */}
      <section id="o-nas" className="about-section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="about-layout">
            <div className="about-text">
              <span className="about-eyebrow">{c.about.eyebrow}</span>
              <h2 className="about-heading font-serif">{c.about.heading}</h2>
              <p className="about-body">{c.about.p1}</p>
              <p className="about-body">{c.about.p2}</p>
              <div className="about-badges">
                {c.about.badges.map((b) => (
                  <span key={b} className="about-badge">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-image-wrap">
              <img src={oFirme} alt={c.about.imageAlt} className="about-image-placeholder" />
            </div>
          </div>

          <div id="tym" className="team-section">
            <div className="team-header">
              <span className="about-eyebrow">{ui.team.eyebrow}</span>
              <h3 className="team-heading font-serif">{ui.team.heading}</h3>
              <p className="team-sub">{ui.team.sub}</p>
            </div>
            <TeamGrid />
            <a href={pagePath("contacts", locale)} className="about-link">
              {ui.team.allContacts}
            </a>
          </div>
        </div>
      </section>

      {/* Reference — logo board */}
      <section id="reference" className="reference-section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="reference-header">
            <span className="reference-eyebrow">{c.references.eyebrow}</span>
            <h2 className="reference-heading font-serif">{c.references.heading}</h2>
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
            <span className="faq-eyebrow">{c.faq.eyebrow}</span>
            <h2 className="faq-heading font-serif">{c.faq.heading}</h2>
          </div>
          <div className="faq-list">
            {c.faq.items.map((item, i) => (
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
                <div
                  className="faq-answer-wrap"
                  style={{ maxHeight: openFaq === i ? "400px" : "0" }}
                >
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
            <span className="cta-eyebrow">{c.cta.eyebrow}</span>
            <h2 className="cta-heading font-serif">{c.cta.heading}</h2>
            <p className="cta-subheading">{c.cta.sub}</p>
            <div className="cta-info">
              <div className="cta-info-row">
                <Clock size={20} color="#C9530E" />
                <span>{c.cta.rows[0]}</span>
              </div>
              <div className="cta-info-row">
                <Shield size={20} color="#C9530E" />
                <span>{c.cta.rows[1]}</span>
              </div>
              <div className="cta-info-row">
                <Phone size={20} color="#C9530E" />
                <span>{COMPANY.phone}</span>
              </div>
            </div>

            <hr className="cta-divider" />

            <div className="cta-contact-cards">
              <div className="cta-contact-card">
                <p className="cta-contact-name">{c.cta.cardTitle}</p>
                <p className="cta-contact-company">{c.cta.cardSub}</p>
                <div className="cta-contact-links">
                  <div className="cta-contact-row">
                    <Phone size={14} color="#C9530E" />
                    <a href={`tel:${COMPANY.phoneHref}`} className="cta-contact-link">
                      {COMPANY.phone}
                    </a>
                  </div>
                  <div className="cta-contact-row">
                    <Mail size={14} color="#C9530E" />
                    <a href={`mailto:${COMPANY.email}`} className="cta-contact-link">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
                <a href={pagePath("contacts", locale)} className="cta-contact-more">
                  {ui.team.allContacts}
                </a>
              </div>
            </div>

            <ConsentMap />
          </div>

          {/* Right — form */}
          <div className="cta-right">
            <InquiryForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
