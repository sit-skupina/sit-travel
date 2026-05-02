import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoDark from "@/assets/sittravel-logo.png";
import logoWhite from "@/assets/sittravel-logo-white.png";

const NAV_ITEMS = [
  { to: "/", label: "O nás" },
  { to: "/", label: "Služby" },
  { to: "/", label: "Reference" },
  { to: "/", label: "Kontakt" },
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
        "sticky top-0 z-50 w-full transition-colors duration-200",
        solid
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <Link to="/" className="relative flex items-center" aria-label="SIT Travel">
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
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={cn(
                "text-[15px] font-medium tracking-wide transition-colors hover:text-primary",
                solid ? "text-foreground" : "text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="primary" size="cta">
            Poptejte akci
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
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-[15px] font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" size="cta" className="mt-3 w-full">
              Poptejte akci
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
