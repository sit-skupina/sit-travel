import React from "react";
import {
  Phone,
  Mail,
  Globe,
  Presentation,
  FileText,
  Plane,
  Star,
  Building2,
  User,
  ClipboardCheck,
  BedDouble,
  Shield,
  Users,
  Music,
  Eye,
  Trophy,
} from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { COMPANY } from "@/lib/site";
import { homeAnchor, serviceHref, SERVICE_IDS, useLocale, type ServiceId } from "@/lib/i18n";
import { services, type IconKey, type Section } from "@/content/services";
import { serviceImages } from "@/content/service-images";
import { useUi } from "@/content/ui";

const ICONS: Record<IconKey, React.ReactNode> = {
  globe: <Globe size={28} />,
  presentation: <Presentation size={28} />,
  fileText: <FileText size={28} />,
  plane: <Plane size={28} />,
  star: <Star size={28} />,
  building2: <Building2 size={28} />,
  user: <User size={28} />,
  clipboardCheck: <ClipboardCheck size={28} />,
  bedDouble: <BedDouble size={28} />,
  shield: <Shield size={28} />,
  users: <Users size={28} />,
  music: <Music size={28} />,
  eye: <Eye size={28} />,
  trophy: <Trophy size={28} />,
};

/** Kompletní podstránka služby podle ID a aktuálního jazyka. */
export function ServicePage({ id }: { id: ServiceId }) {
  const locale = useLocale();
  const ui = useUi();
  const content = services[locale][id];
  const related = SERVICE_IDS.filter((s) => s !== id).slice(0, 3);
  const contactEmail = content.cta.contactEmail ?? COMPANY.email;
  const contactPhone = content.cta.contactPhone ?? COMPANY.phone;
  const kontakt = homeAnchor(locale, "#kontakt");

  return (
    <div className="min-h-screen bg-background">
      <Navbar transparentOnTop={false} subpage />

      {/* Breadcrumb */}
      <div className="sp-breadcrumb-wrap">
        <nav className="sp-breadcrumb" aria-label={ui.breadcrumb.aria}>
          <a href={homeAnchor(locale, "")} className="sp-bc-link">
            {ui.breadcrumb.home}
          </a>
          <span className="sp-bc-sep" aria-hidden="true">
            ›
          </span>
          <a href={homeAnchor(locale, "#sluzby")} className="sp-bc-link">
            {ui.breadcrumb.services}
          </a>
          <span className="sp-bc-sep" aria-hidden="true">
            ›
          </span>
          <span className="sp-bc-current">{content.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="sp-hero" style={{ backgroundImage: `url(${serviceImages[id]})` }}>
        <div className="sp-hero-overlay" aria-hidden="true" />
        <div className="sp-hero-content">
          <span className="sp-hero-eyebrow">{content.hero.eyebrow}</span>
          <h1 className="sp-hero-h1 font-serif">{content.hero.h1}</h1>
          <p className="sp-hero-sub">{content.hero.subtitle}</p>
          <a href={kontakt} className="sp-hero-cta">
            {content.hero.ctaLabel}
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="sp-intro-section">
        <div className="sp-intro-inner">
          <h2 className="sp-intro-h2 font-serif">{content.intro.h2}</h2>
          {content.intro.paragraphs.map((p, i) => (
            <p key={i} className="sp-intro-body">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Page-specific sections */}
      {content.sections.map((section, i) => (
        <SectionView key={i} section={section} />
      ))}

      {/* Related services */}
      <section className="sp-related-section">
        <div className="sp-related-inner">
          <h3 className="sp-related-heading">{ui.service.related}</h3>
          <div className="sp-related-grid">
            {related.map((rid) => {
              const { href, external } = serviceHref(rid, locale);
              const r = services[locale][rid];
              return (
                <a
                  key={rid}
                  href={href}
                  className="sp-related-card"
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <div className="sp-related-img-wrap">
                    <img
                      src={serviceImages[rid]}
                      alt={r.name}
                      className="sp-related-img"
                      loading="lazy"
                    />
                    <div className="sp-related-overlay" aria-hidden="true" />
                  </div>
                  <div className="sp-related-text">
                    <h4 className="sp-related-name">{r.name}</h4>
                    <p className="sp-related-sub">{r.card}</p>
                    <span className="sp-related-more">{ui.service.more}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta-section">
        <div className="sp-cta-inner">
          <span className="sp-cta-eyebrow">{ui.service.inquiry}</span>
          <h2 className="sp-cta-h2 font-serif">{content.cta.h2}</h2>
          <p className="sp-cta-sub">{content.cta.subtitle}</p>
          <div className="sp-cta-actions">
            <a href={kontakt} className="sp-cta-btn">
              {content.cta.ctaLabel}
            </a>
            {content.cta.extraLink && (
              <a
                href={content.cta.extraLink.href}
                target="_blank"
                rel="noreferrer"
                className="sp-cta-btn-outline"
              >
                {content.cta.extraLink.label}
              </a>
            )}
          </div>
          {content.cta.contactNote && <p className="sp-cta-note">{content.cta.contactNote}</p>}
          <div className="sp-cta-contacts">
            <a href={`tel:${contactPhone.replace(/\s/g, "")}`} className="sp-cta-contact-link">
              <Phone size={15} /> {contactPhone}
            </a>
            <a href={`mailto:${contactEmail}`} className="sp-cta-contact-link">
              <Mail size={15} /> {contactEmail}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SectionView({ section }: { section: Section }) {
  switch (section.type) {
    case "features":
      return (
        <FeatureColumns
          heading={section.heading}
          columns={section.items.map((c) => ({ icon: ICONS[c.icon], name: c.name, desc: c.desc }))}
        />
      );
    case "events":
      return <EventsList heading={section.heading} events={section.items} />;
    case "twocol":
      return <FeatureTwoCol heading={section.heading} left={section.left} right={section.right} />;
    case "destinations":
      return <DestinationGrid heading={section.heading} destinations={section.items} />;
    case "cards":
      return (
        <CardGrid
          heading={section.heading}
          bg={section.bg}
          cards={section.items.map((c) => ({ ...c, icon: c.icon ? ICONS[c.icon] : undefined }))}
        />
      );
    case "checklist":
      return <CheckList heading={section.heading} bg={section.bg} items={section.items} />;
    case "twofeatures":
      return (
        <TwoColFeatures
          heading={section.heading}
          left={{ ...section.left, icon: ICONS[section.left.icon] }}
          right={{ ...section.right, icon: ICONS[section.right.icon] }}
        />
      );
  }
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
            {left.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <ul className="sp-list">
            {right.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CheckList({
  heading,
  items,
  bg = "white",
}: {
  heading?: string;
  items: string[];
  bg?: "white" | "slate";
}) {
  return (
    <section
      className={`sp-checklist-section${bg === "slate" ? " sp-checklist-section--slate" : ""}`}
    >
      <div className="sp-checklist-inner">
        {heading && <h2 className="sp-checklist-h2 font-serif">{heading}</h2>}
        <ul className="sp-checklist">
          {items.map((item, i) => (
            <li key={i} className="sp-checklist-item">
              <span className="sp-check-mark" aria-hidden="true">
                ✓
              </span>
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
