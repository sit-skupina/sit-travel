import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";

import "@fontsource-variable/dm-sans";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import appCss from "../styles.css?url";
import { CookieBanner } from "@/components/CookieBanner";
import { LocaleProvider, localeFromPathname, pagePath, useLocale } from "@/lib/i18n";

const NOT_FOUND = {
  cs: {
    title: "Stránka nenalezena",
    text: "Stránka, kterou hledáte, neexistuje nebo byla přesunuta.",
    home: "Zpět na úvod",
  },
  en: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has been moved.",
    home: "Go home",
  },
};

function NotFoundComponent() {
  const locale = useLocale();
  const t = NOT_FOUND[locale];
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
        <div className="mt-6">
          <a
            href={pagePath("home", locale)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.home}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#C9530E" },
      { title: "SIT Travel — B2B cestovní kancelář pro firmy" },
      {
        name: "description",
        content:
          "Prémiová B2B cestovní kancelář s 35 lety zkušeností. Incentivní zájezdy, kongresy a služební cesty pro firemní klientelu. Akreditovaný agent IATA, člen ACK ČR.",
      },
      { name: "author", content: "SIT Travel s.r.o." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <html lang={localeFromPathname(pathname)}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <LocaleProvider locale={localeFromPathname(pathname)}>
      <Outlet />
      <CookieBanner />
    </LocaleProvider>
  );
}
