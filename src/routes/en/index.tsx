import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import heroBg from "@/assets/hero-bg.webp";
import { home } from "@/content/home";
import { localizedHead, pagePath } from "@/lib/i18n";

export const Route = createFileRoute("/en/")({
  component: HomePage,
  head: () => {
    const h = localizedHead({
      title: home.en.meta.title,
      description: home.en.meta.description,
      paths: { cs: pagePath("home", "cs"), en: pagePath("home", "en") },
      locale: "en",
    });
    return {
      meta: h.meta,
      links: [...h.links, { rel: "preload", href: heroBg, as: "image", type: "image/webp" }],
    };
  },
});
