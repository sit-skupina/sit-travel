import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/PrivacyPage";
import { privacy } from "@/content/privacy";
import { localizedHead, pagePath } from "@/lib/i18n";

export const Route = createFileRoute("/en/privacy-policy")({
  component: PrivacyPage,
  head: () =>
    localizedHead({
      title: privacy.en.title,
      description: privacy.en.description,
      paths: { cs: pagePath("privacy", "cs"), en: pagePath("privacy", "en") },
      locale: "en",
    }),
});
