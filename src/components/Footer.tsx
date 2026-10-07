import { COMPANY, DOCS } from "@/lib/site";
import { pagePath, serviceHref, useLocale } from "@/lib/i18n";
import { openCookieSettings } from "@/lib/consent";
import { services } from "@/content/services";
import { footerOrder } from "@/content/service-images";
import { useUi } from "@/content/ui";

export function Footer() {
  const locale = useLocale();
  const ui = useUi();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Top grid */}
        <div className="footer-grid">
          {/* Col 1 — brand */}
          <div className="footer-brand">
            <span className="footer-logo">SIT Travel</span>
            <p className="footer-desc">{ui.footer.desc}</p>
            <div className="footer-badges">
              <span className="footer-badge">IATA</span>
              <span className="footer-badge">ACK ČR</span>
            </div>
          </div>

          {/* Col 2 — services */}
          <div className="footer-col">
            <p className="footer-col-heading">{ui.footer.services}</p>
            {footerOrder.map((id) => {
              const { href, external } = serviceHref(id, locale);
              return (
                <a
                  key={id}
                  href={href}
                  className="footer-link"
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {services[locale][id].shortName}
                </a>
              );
            })}
          </div>

          {/* Col 3 — contact */}
          <div className="footer-col">
            <p className="footer-col-heading">{ui.footer.contact}</p>
            <p className="footer-contact-line">{COMPANY.street}</p>
            <p className="footer-contact-line">{COMPANY.city}</p>
            <a href={`tel:${COMPANY.phoneHref}`} className="footer-link footer-contact-line">
              {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="footer-link footer-contact-line">
              {COMPANY.email}
            </a>
            <a href={pagePath("contacts", locale)} className="footer-link footer-contact-line">
              {ui.footer.allContacts}
            </a>
          </div>

          {/* Col 4 — group */}
          <div className="footer-col">
            <p className="footer-col-heading">{ui.footer.group}</p>
            <a
              href="https://www.sittravel.cz"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              SIT Travel →
            </a>
            <a
              href="https://www.sit-automotive.cz"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              SIT Automotive →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 {COMPANY.name}</span>
          <div className="footer-bottom-right">
            <nav className="footer-legal" aria-label="Legal">
              <a href={pagePath("privacy", locale)} className="footer-gdpr">
                {ui.footer.privacy}
              </a>
              <a href={DOCS.terms} target="_blank" rel="noreferrer" className="footer-gdpr">
                {ui.footer.terms}
              </a>
              <a href={DOCS.insurance} target="_blank" rel="noreferrer" className="footer-gdpr">
                {ui.footer.insurance}
              </a>
              <button
                type="button"
                onClick={openCookieSettings}
                className="footer-gdpr footer-gdpr--button"
              >
                {ui.footer.cookies}
              </button>
            </nav>
            <span className="footer-credit">
              {ui.footer.created}{" "}
              <a href="https://www.matejboska.cz" className="footer-credit-link" rel="dofollow">
                {ui.footer.creator}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
