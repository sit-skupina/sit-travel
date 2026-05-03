import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Phone, Mail } from "lucide-react";

import imgIncentivni from "@/assets/sluzby-bentogrid/incentivni-zajezdy.webp";
import imgPrivatni from "@/assets/sluzby-bentogrid/privatni-servis.webp";
import imgKongresova from "@/assets/sluzby-bentogrid/kongresova-turistika.webp";
import imgIncoming from "@/assets/sluzby-bentogrid/incoming.webp";
import imgSluzebni from "@/assets/sluzby-bentogrid/sluzebni-cesty.webp";
import imgKongresy from "@/assets/sluzby-bentogrid/kongresy-v-cr.webp";
import imgSport from "@/assets/sluzby-bentogrid/sport-travel.webp";

const ALL_SERVICES = [
  { slug: "incentivni-zajezdy", name: "Incentivní zájezdy", sub: "Originální programy pro zaměstnance, management a obchodní partnery.", img: imgIncentivni },
  { slug: "privatni-servis", name: "Privátní servis", sub: "F1, Wimbledon, privátní jet. Pro ty, kteří nechtějí kompromisy.", img: imgPrivatni },
  { slug: "kongresova-turistika", name: "Kongresová turistika", sub: "Kongresy a semináře po celém světě.", img: imgKongresova },
  { slug: "incoming-ceska-republika", name: "Incoming", sub: "Poznávací pobyty v ČR pro zahraniční klienty.", img: imgIncoming },
  { slug: "sluzebni-cesty", name: "Služební cesty", sub: "Letenky, ubytování, transfery od jednoho dodavatele.", img: imgSluzebni },
  { slug: "kongresy-seminare-cr", name: "Kongresy a konference v ČR", sub: "Organizace kongresů a společenských akcí na klíč.", img: imgKongresy },
  { slug: "sport-travel", name: "Sport Travel", sub: "Světové maratony, zápasy a závody. Registrace i ubytování.", img: imgSport },
];

interface ServicePageProps {
  slug: string;
  hero: {
    eyebrow: string;
    h1: string;
    subtitle: string;
    ctaLabel: string;
    bgImage: string;
  };
  intro: {
    h2: string;
    paragraphs: string[];
  };
  cta: {
    h2: string;
    subtitle: string;
    ctaLabel: string;
    contactNote?: string;
    contactEmail?: string;
    contactPhone?: string;
    extraLink?: { href: string; label: string };
  };
  children?: React.ReactNode;
}

export function ServicePage({ slug, hero, intro, cta, children }: ServicePageProps) {
  const currentService = ALL_SERVICES.find(s => s.slug === slug);
  const related = ALL_SERVICES.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar transparentOnTop={false} subpage />

      {/* Breadcrumb */}
      <div className="sp-breadcrumb-wrap">
        <nav className="sp-breadcrumb" aria-label="Breadcrumb">
          <a href="/" className="sp-bc-link">Domů</a>
          <span className="sp-bc-sep" aria-hidden="true">›</span>
          <a href="/#sluzby" className="sp-bc-link">Služby</a>
          <span className="sp-bc-sep" aria-hidden="true">›</span>
          <span className="sp-bc-current">{currentService?.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="sp-hero" style={{ backgroundImage: `url(${hero.bgImage})` }}>
        <div className="sp-hero-overlay" aria-hidden="true" />
        <div className="sp-hero-content">
          <span className="sp-hero-eyebrow">{hero.eyebrow}</span>
          <h1 className="sp-hero-h1 font-serif">{hero.h1}</h1>
          <p className="sp-hero-sub">{hero.subtitle}</p>
          <a href="/#kontakt" className="sp-hero-cta">{hero.ctaLabel}</a>
        </div>
      </section>

      {/* Intro */}
      <section className="sp-intro-section">
        <div className="sp-intro-inner">
          <h2 className="sp-intro-h2 font-serif">{intro.h2}</h2>
          {intro.paragraphs.map((p, i) => (
            <p key={i} className="sp-intro-body">{p}</p>
          ))}
        </div>
      </section>

      {/* Page-specific sections */}
      {children}

      {/* Related services */}
      <section className="sp-related-section">
        <div className="sp-related-inner">
          <h3 className="sp-related-heading">Mohlo by Vás zajímat</h3>
          <div className="sp-related-grid">
            {related.map(s => (
              <a key={s.slug} href={`/sluzby/${s.slug}`} className="sp-related-card">
                <div className="sp-related-img-wrap">
                  <img src={s.img} alt={s.name} className="sp-related-img" loading="lazy" />
                  <div className="sp-related-overlay" aria-hidden="true" />
                </div>
                <div className="sp-related-text">
                  <h4 className="sp-related-name">{s.name}</h4>
                  <p className="sp-related-sub">{s.sub}</p>
                  <span className="sp-related-more">Zjistit více →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta-section">
        <div className="sp-cta-inner">
          <span className="sp-cta-eyebrow">Nezávazná poptávka</span>
          <h2 className="sp-cta-h2 font-serif">{cta.h2}</h2>
          <p className="sp-cta-sub">{cta.subtitle}</p>
          <div className="sp-cta-actions">
            <a href="/#kontakt" className="sp-cta-btn">{cta.ctaLabel}</a>
            {cta.extraLink && (
              <a href={cta.extraLink.href} target="_blank" rel="noreferrer" className="sp-cta-btn-outline">
                {cta.extraLink.label}
              </a>
            )}
          </div>
          {cta.contactNote && <p className="sp-cta-note">{cta.contactNote}</p>}
          <div className="sp-cta-contacts">
            <a href="tel:+420241441147" className="sp-cta-contact-link">
              <Phone size={15} /> {cta.contactPhone ?? "+420 241 441 147"}
            </a>
            <a href={`mailto:${cta.contactEmail ?? "sit@sittravel.cz"}`} className="sp-cta-contact-link">
              <Mail size={15} /> {cta.contactEmail ?? "sit@sittravel.cz"}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ─── Reusable section components ─────────────────────────────────────────────

interface FeatureCol {
  icon: React.ReactNode;
  name: string;
  desc: string;
}

export function FeatureColumns({ heading, columns }: { heading?: string; columns: FeatureCol[] }) {
  return (
    <section className="sp-features-section">
      <div className="sp-features-inner">
        {heading && <h2 className="sp-features-h2 font-serif">{heading}</h2>}
        <div className={`sp-features-grid sp-features-grid--${columns.length}`}>
          {columns.map((col, i) => (
            <div key={i} className="sp-feature-card">
              <div className="sp-feature-icon">{col.icon}</div>
              <h3 className="sp-feature-name">{col.name}</h3>
              <p className="sp-feature-desc">{col.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardItem {
  icon?: React.ReactNode;
  name: string;
  desc: string;
}

export function CardGrid({
  heading,
  cards,
  bg = "white",
}: {
  heading?: string;
  cards: CardItem[];
  bg?: "white" | "slate";
}) {
  return (
    <section className={`sp-cards-section${bg === "slate" ? " sp-cards-section--slate" : ""}`}>
      <div className="sp-cards-inner">
        {heading && <h2 className="sp-cards-h2 font-serif">{heading}</h2>}
        <div className="sp-cards-grid">
          {cards.map((card, i) => (
            <div key={i} className="sp-card">
              {card.icon && <div className="sp-card-icon">{card.icon}</div>}
              <h3 className="sp-card-name">{card.name}</h3>
              <p className="sp-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureTwoCol({
  heading,
  left,
  right,
}: {
  heading?: string;
  left: string[];
  right: string[];
}) {
  return (
    <section className="sp-features-section">
      <div className="sp-features-inner">
        {heading && <h2 className="sp-features-h2 font-serif">{heading}</h2>}
        <div className="sp-twocol-list">
          <ul className="sp-list">
            {left.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <ul className="sp-list">
            {right.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CheckList({ heading, items, bg = "white" }: {
  heading?: string;
  items: string[];
  bg?: "white" | "slate";
}) {
  return (
    <section className={`sp-checklist-section${bg === "slate" ? " sp-checklist-section--slate" : ""}`}>
      <div className="sp-checklist-inner">
        {heading && <h2 className="sp-checklist-h2 font-serif">{heading}</h2>}
        <ul className="sp-checklist">
          {items.map((item, i) => (
            <li key={i} className="sp-checklist-item">
              <span className="sp-check-mark" aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function EventsList({ heading, events }: { heading: string; events: string[] }) {
  return (
    <section className="sp-events-section">
      <div className="sp-events-inner">
        <h2 className="sp-events-h2 font-serif">{heading}</h2>
        <div className="sp-events-grid">
          {events.map((event, i) => (
            <div key={i} className="sp-event-item">
              <span className="sp-event-dot" aria-hidden="true" />
              <span className="sp-event-name">{event}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DestinationGrid({
  heading,
  destinations,
}: {
  heading: string;
  destinations: { name: string; desc: string }[];
}) {
  return (
    <section className="sp-destinations-section">
      <div className="sp-destinations-inner">
        <h2 className="sp-destinations-h2 font-serif">{heading}</h2>
        <div className="sp-destinations-grid">
          {destinations.map((d, i) => (
            <div key={i} className="sp-destination-card">
              <h3 className="sp-destination-name">{d.name}</h3>
              <p className="sp-destination-desc">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TwoColFeatures({
  heading,
  left,
  right,
}: {
  heading?: string;
  left: { icon: React.ReactNode; name: string; desc: string; examples?: string };
  right: { icon: React.ReactNode; name: string; desc: string; examples?: string };
}) {
  return (
    <section className="sp-features-section">
      <div className="sp-features-inner">
        {heading && <h2 className="sp-features-h2 font-serif">{heading}</h2>}
        <div className="sp-two-col-features">
          {[left, right].map((col, i) => (
            <div key={i} className="sp-two-col-feature">
              <div className="sp-feature-icon">{col.icon}</div>
              <h3 className="sp-feature-name">{col.name}</h3>
              <p className="sp-feature-desc">{col.desc}</p>
              {col.examples && <p className="sp-feature-examples">{col.examples}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
