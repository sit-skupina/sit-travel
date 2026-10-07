import { setConsent, useConsent } from "@/lib/consent";
import { useUi } from "@/content/ui";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.396854488049!2d14.45229768651648!3d50.04139665661524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a1d21380f1%3A0x9356fe309d0869bd!2sSit%20Travel!5e0!3m2!1sen!2scz!4v1777816108019!5m2!1sen!2scz";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Pod+rovinou+682%2F4%2C+140+00+Praha+4";

/** Mapa Google — načte se až po souhlasu s externím obsahem. */
export function ConsentMap({ className = "cta-map" }: { className?: string }) {
  const ui = useUi();
  const consent = useConsent();

  return (
    <div className={className}>
      {consent === "all" ? (
        <iframe
          src={MAP_SRC}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={ui.consent.mapAlt}
        />
      ) : (
        <div className="map-consent">
          <p className="map-consent-title">{ui.consent.mapTitle}</p>
          <p className="map-consent-text">{ui.consent.mapText}</p>
          <div className="map-consent-actions">
            <button
              type="button"
              className="cookie-btn cookie-btn--primary"
              onClick={() => setConsent("all")}
            >
              {ui.consent.mapButton}
            </button>
            <a href={MAP_LINK} target="_blank" rel="noreferrer" className="map-consent-link">
              {ui.consent.openMap}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
