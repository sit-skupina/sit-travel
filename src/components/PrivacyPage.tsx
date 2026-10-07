import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { privacy } from "@/content/privacy";
import { useUi } from "@/content/ui";
import { useLocale } from "@/lib/i18n";

export function PrivacyPage() {
  const locale = useLocale();
  const ui = useUi();
  const p = privacy[locale];

  return (
    <div className="min-h-screen bg-background">
      <Navbar transparentOnTop={false} subpage />

      <article className="legal">
        <div className="legal-inner">
          <span className="about-eyebrow">{ui.privacy.eyebrow}</span>
          <h1 className="ct-h1 font-serif">{p.h1}</h1>
          <p className="legal-lead">{p.lead}</p>
          <p className="legal-updated">{ui.privacy.updated}</p>

          {p.sections.map((s) => (
            <section key={s.h} className="legal-section">
              <h2 className="legal-h2">{s.h}</h2>
              {s.p?.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {s.ul && (
                <ul>
                  {s.ul.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      <Footer />
    </div>
  );
}
