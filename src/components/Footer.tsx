export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Top grid */}
        <div className="footer-grid">
          {/* Col 1 — brand */}
          <div className="footer-brand">
            <span className="footer-logo">SIT Travel</span>
            <p className="footer-desc">
              Prémiová B2B cestovní kancelář. Akreditovaný agent IATA. Člen ACK ČR.
              Na trhu od roku 1991.
            </p>
            <div className="footer-badges">
              <span className="footer-badge">IATA</span>
              <span className="footer-badge">ACK ČR</span>
            </div>
          </div>

          {/* Col 2 — services */}
          <div className="footer-col">
            <p className="footer-col-heading">Služby</p>
            {[
              { label: "Incentivní zájezdy", href: "#sluzby" },
              { label: "Kongresová turistika", href: "#sluzby" },
              { label: "Kongresy v ČR", href: "#sluzby" },
              { label: "Incoming", href: "#sluzby" },
              { label: "Služební cesty", href: "#sluzby" },
              { label: "Privátní servis", href: "#sluzby" },
              { label: "Sport Travel", href: "#sluzby" },
            ].map((s) => (
              <a key={s.label} href={s.href} className="footer-link">{s.label}</a>
            ))}
          </div>

          {/* Col 3 — contact */}
          <div className="footer-col">
            <p className="footer-col-heading">Kontakt</p>
            <p className="footer-contact-line">Pod rovinou 682/4</p>
            <p className="footer-contact-line">140 00 Praha 4</p>
            <a href="tel:+420241441147" className="footer-link footer-contact-line">+420 241 441 147</a>
            <a href="mailto:sit@sittravel.cz" className="footer-link footer-contact-line">sit@sittravel.cz</a>
            <a href="https://www.sittravel.cz" target="_blank" rel="noreferrer" className="footer-link footer-contact-line">www.sittravel.cz</a>
          </div>

          {/* Col 4 — group */}
          <div className="footer-col">
            <p className="footer-col-heading">Skupina SIT</p>
            <a href="https://www.sittravel.cz" target="_blank" rel="noreferrer" className="footer-link">SIT Travel →</a>
            <a href="https://www.sit-automotive.cz" target="_blank" rel="noreferrer" className="footer-link">SIT Automotive →</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 SIT Travel s.r.o.</span>
          <div className="footer-bottom-right">
            <a href="https://www.sittravel.cz/ochrana-osobnich-udaju" target="_blank" rel="noreferrer" className="footer-gdpr">Ochrana osobních údajů</a>
            <span className="footer-credit">
              Vytvořeno <a href="https://www.matejboska.cz" className="footer-credit-link" rel="dofollow">Matějem Boškou</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
