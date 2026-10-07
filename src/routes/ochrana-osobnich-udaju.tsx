import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/PrivacyPage";
import { privacy } from "@/content/privacy";
import { localizedHead, pagePath } from "@/lib/i18n";

export const Route = createFileRoute("/ochrana-osobnich-udaju")({
  component: PrivacyPage,
  head: () =>
    localizedHead({
      title: privacy.cs.title,
      description: privacy.cs.description,
      paths: { cs: pagePath("privacy", "cs"), en: pagePath("privacy", "en") },
      locale: "cs",
    }),
});
