import { createFileRoute } from "@tanstack/react-router";
import { ContactsPage } from "@/components/ContactsPage";
import { ui } from "@/content/ui";
import { localizedHead, pagePath } from "@/lib/i18n";

export const Route = createFileRoute("/en/contact")({
  component: ContactsPage,
  head: () =>
    localizedHead({
      title: ui.en.contactsPage.title,
      description: ui.en.contactsPage.description,
      paths: { cs: pagePath("contacts", "cs"), en: pagePath("contacts", "en") },
      locale: "en",
    }),
});
