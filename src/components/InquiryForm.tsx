import React from "react";
import { COMPANY, FORM_ACCESS_KEY, FORM_ENDPOINT } from "@/lib/site";
import { pagePath, useLocale } from "@/lib/i18n";
import { useUi } from "@/content/ui";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Poptávkový formulář. Odesílá JSON na Web3Forms (FORM_ENDPOINT), který poptávku
 * doručí na e-mail svázaný s přístupovým klíčem.
 */
export function InquiryForm() {
  const locale = useLocale();
  const ui = useUi();
  const t = ui.form;
  const [status, setStatus] = React.useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Honeypot — boti vyplní skryté pole, člověk ne. Tváříme se, že vše proběhlo.
    if (data.website) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          type: data.type,
          headcount: data.headcount,
          date: data.date,
          message: data.message,
          language: locale,
          access_key: FORM_ACCESS_KEY,
          subject: `${t.subject}: ${data.company} — ${data.name}`,
          from_name: "SIT Travel web",
          replyto: data.email,
        }),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok || !result?.success)
        throw new Error(`Form service failed: ${result?.message ?? res.status}`);
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="cta-form cta-form--done" role="status">
        <p className="cta-form-done-title font-serif">✓</p>
        <p className="cta-form-done-text">{t.success}</p>
      </div>
    );
  }

  return (
    <form className="cta-form" onSubmit={onSubmit}>
      <div className="cta-form-grid">
        <div className="cta-field">
          <label className="cta-label" htmlFor="name">
            {t.name}
          </label>
          <input
            className="cta-input"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>
        <div className="cta-field">
          <label className="cta-label" htmlFor="company">
            {t.company}
          </label>
          <input
            className="cta-input"
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
          />
        </div>
        <div className="cta-field">
          <label className="cta-label" htmlFor="email">
            {t.email}
          </label>
          <input
            className="cta-input"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="cta-field">
          <label className="cta-label" htmlFor="phone">
            {t.phone}
          </label>
          <input
            className="cta-input"
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </div>
      </div>

      <div className="cta-field">
        <label className="cta-label" htmlFor="type">
          {t.type}
        </label>
        <select className="cta-input" id="type" name="type" required defaultValue="">
          <option value="" disabled>
            {t.typePlaceholder}
          </option>
          {t.types.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="cta-field">
        <label className="cta-label" htmlFor="headcount">
          {t.headcount}
        </label>
        <select className="cta-input" id="headcount" name="headcount" required defaultValue="">
          <option value="" disabled>
            {t.headcountPlaceholder}
          </option>
          {t.headcounts.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="cta-field">
        <label className="cta-label" htmlFor="date">
          {t.date}
        </label>
        <input
          className="cta-input"
          id="date"
          name="date"
          type="text"
          placeholder={t.datePlaceholder}
        />
      </div>

      <div className="cta-field">
        <label className="cta-label" htmlFor="message">
          {t.message}
        </label>
        <textarea className="cta-input cta-textarea" id="message" name="message" />
      </div>

      {/* Honeypot */}
      <div className="cta-hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="cta-checkbox-row">
        <input type="checkbox" id="gdpr" name="gdpr" required className="cta-checkbox" />
        <label htmlFor="gdpr" className="cta-checkbox-label">
          {t.gdprBefore}
          <a
            href={pagePath("privacy", locale)}
            target="_blank"
            rel="noreferrer"
            className="cta-checkbox-link"
          >
            {t.gdprLink}
          </a>
          {t.gdprAfter}
        </label>
      </div>

      {status === "error" && (
        <p className="cta-form-error" role="alert">
          {t.error} <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
        </p>
      )}

      <button type="submit" className="cta-submit" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.submit}
      </button>
      <p className="cta-note">{t.note}</p>
    </form>
  );
}
