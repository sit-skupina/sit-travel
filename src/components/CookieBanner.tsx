import { pagePath, useLocale } from "@/lib/i18n";
import { setConsent, useConsent, useSettingsOpen } from "@/lib/consent";
import { useUi } from "@/content/ui";

/** Cookie lišta. Zobrazí se, dokud návštěvník nevybere, nebo po otevření z patičky. */
export function CookieBanner() {
  const locale = useLocale();
  const ui = useUi();
  const consent = useConsent();
  const reopened = useSettingsOpen();

  if (consent === "unknown" || (consent !== null && !reopened)) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label={ui.consent.title}>
      <div className="cookie-banner-text">
        <p className="cookie-banner-title">{ui.consent.title}</p>
        <p className="cookie-banner-body">
          {ui.consent.text}{" "}
          <a href={pagePath("privacy", locale)} className="cookie-banner-link">
            {ui.consent.more}
          </a>
        </p>
      </div>
      <div className="cookie-banner-actions">
        <button
          type="button"
          className="cookie-btn cookie-btn--ghost"
          onClick={() => setConsent("necessary")}
        >
          {ui.consent.necessary}
        </button>
        <button
          type="button"
          className="cookie-btn cookie-btn--primary"
          onClick={() => setConsent("all")}
        >
          {ui.consent.all}
        </button>
      </div>
    </div>
  );
}
