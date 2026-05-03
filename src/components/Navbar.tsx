import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoDark from "@/assets/sittravel-logo.png";
import logoWhite from "@/assets/sittravel-logo-white.png";

const NAV_ITEMS = [
  { href: "#sluzby", label: "Služby" },
  { href: "#jak-to-funguje", label: "Jak to funguje" },
  { href: "#o-nas", label: "O nás" },
  { href: "#reference", label: "Reference" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar({ transparentOnTop = true }: { transparentOnTop?: boolean }) {
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
        <a href="/" className="relative flex items-center" aria-label="SIT Travel">
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

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
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
          <Button variant="primary" size="cta" asChild>
            <a href="#kontakt">Poptejte akci</a>
          </Button>
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors md:hidden",
            solid ? "text-foreground" : "text-white",
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-[15px] font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="cta" className="mt-3 w-full" asChild>
              <a href="#kontakt" onClick={() => setOpen(false)}>Poptejte akci</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
