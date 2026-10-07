import { Mail, MapPin, Phone, FileText } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsentMap } from "@/components/ConsentMap";
import { TeamGrid } from "@/components/TeamGrid";
import { COMPANY } from "@/lib/site";
import { homeAnchor, useLocale } from "@/lib/i18n";
import { useUi } from "@/content/ui";

export function ContactsPage() {
  const locale = useLocale();
  const ui = useUi();
  const t = ui.contactsPage;

  return (
    <div className="min-h-screen bg-background">
      <Navbar transparentOnTop={false} subpage />

      <section className="ct-hero">
        <div className="ct-hero-inner">
          <span className="about-eyebrow">{t.eyebrow}</span>
          <h1 className="ct-h1 font-serif">{t.h1}</h1>
          <p className="ct-sub">{t.sub}</p>
        </div>
      </section>

      <section className="ct-main">
        <div className="ct-main-inner">
          <div className="ct-info">
            <h2 className="ct-h2 font-serif">{t.company}</h2>
            <p className="ct-company">{COMPANY.name}</p>

            <dl className="ct-list">
              <div className="ct-row">
                <MapPin size={18} color="#C9530E" aria-hidden="true" />
                <div>
                  <dt>{t.addressLabel}</dt>
                  <dd>
                    {COMPANY.street}
                    <br />
                    {COMPANY.city}
                  </dd>
                </div>
              </div>
              <div className="ct-row">
                <Phone size={18} color="#C9530E" aria-hidden="true" />
                <div>
                  <dt>{t.landline}</dt>
                  <dd>
                    <a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a>
                  </dd>
                </div>
              </div>
              <div className="ct-row">
                <Mail size={18} color="#C9530E" aria-hidden="true" />
                <div>
                  <dt>{t.generalEmail}</dt>
                  <dd>
                    <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                  </dd>
                </div>
              </div>
              <div className="ct-row">
                <FileText size={18} color="#C9530E" aria-hidden="true" />
                <div>
                  <dt>{t.registration}</dt>
                  <dd>
                    {t.ico}: {COMPANY.ico}
                    <br />
                    {t.dic}: {COMPANY.dic}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <ConsentMap className="ct-map" />
        </div>
      </section>

      <section className="ct-team">
        <div className="ct-team-inner">
          <h2 className="ct-h2 font-serif">{t.teamHeading}</h2>
          <TeamGrid />
        </div>
      </section>

      <section className="ct-cta">
        <div className="ct-cta-inner">
          <h2 className="ct-h2 font-serif">{t.ctaHeading}</h2>
          <p className="ct-sub">{t.ctaText}</p>
          <a href={homeAnchor(locale, "#kontakt")} className="sp-cta-btn">
            {t.ctaButton}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
