import { createFileRoute } from "@tanstack/react-router";
import { ContactsPage } from "@/components/ContactsPage";
import { ui } from "@/content/ui";
import { localizedHead, pagePath } from "@/lib/i18n";

export const Route = createFileRoute("/kontakty")({
  component: ContactsPage,
  head: () =>
    localizedHead({
      title: ui.cs.contactsPage.title,
      description: ui.cs.contactsPage.description,
      paths: { cs: pagePath("contacts", "cs"), en: pagePath("contacts", "en") },
      locale: "cs",
    }),
});
