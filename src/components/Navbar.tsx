import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";
import { homeAnchor, pagePath, useLocale } from "@/lib/i18n";
import { useUi } from "@/content/ui";
import logoDark from "@/assets/sittravel-logo.png";
import logoWhite from "@/assets/sittravel-logo-white.png";

export function Navbar({
  transparentOnTop = true,
  subpage = false,
}: {
  transparentOnTop?: boolean;
  subpage?: boolean;
}) {
  const locale = useLocale();
  const ui = useUi();
  // Na homepage stačí kotva, na podstránkách musí odkaz vést zpět na homepage.
  const anchor = (hash: string) => (subpage ? homeAnchor(locale, hash) : hash);

  const navItems = [
    { href: anchor("#sluzby"), label: ui.nav.services },
    { href: anchor("#jak-to-funguje"), label: ui.nav.how },
    { href: anchor("#o-nas"), label: ui.nav.about },
    { href: anchor("#reference"), label: ui.nav.references },
    { href: anchor("#faq"), label: ui.nav.faq },
    { href: pagePath("contacts", locale), label: ui.nav.contact },
  ];
  const ctaHref = anchor("#kontakt");

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !transparentOnTop || open;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200",
        solid
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <a
          href={pagePath("home", locale)}
          className="relative flex items-center"
          aria-label="SIT Travel"
        >
          <img
            src={logoWhite}
            alt="SIT Travel"
            className={cn(
              "h-8 w-auto transition-opacity duration-300 md:h-9",
              solid ? "opacity-0" : "opacity-100",
            )}
          />
          <img
            src={logoDark}
            alt=""
            aria-hidden="true"
            className={cn(
              "absolute inset-0 h-8 w-auto transition-opacity duration-300 md:h-9",
              solid ? "opacity-100" : "opacity-0",
            )}
          />
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label={ui.nav.mainNav}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-[15px] font-medium tracking-wide transition-colors hover:text-primary",
                solid ? "text-foreground" : "text-white",
              )}
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher className={solid ? undefined : "lang-switch--on-dark"} />
          <Button variant="primary" size="cta" asChild>
            <a href={ctaHref}>{ui.nav.cta}</a>
          </Button>
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors md:hidden",
            solid ? "text-foreground" : "text-white",
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? ui.nav.closeMenu : ui.nav.openMenu}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4"
            aria-label={ui.nav.mainNav}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-[15px] font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher className="mt-2 px-3" />
            <Button variant="primary" size="cta" className="mt-3 w-full" asChild>
              <a href={ctaHref} onClick={() => setOpen(false)}>
                {ui.nav.cta}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
