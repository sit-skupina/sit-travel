import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/content/services";
import { localizedHead, serviceIdFromSlug, servicePath } from "@/lib/i18n";
import { SPORT_TRAVEL_URL } from "@/lib/site";

export const Route = createFileRoute("/en/services/$slug")({
  beforeLoad: ({ params }) => {
    const id = serviceIdFromSlug(params.slug, "en");
    if (!id) throw notFound();
    if (id === "sport-travel" && SPORT_TRAVEL_URL) throw redirect({ href: SPORT_TRAVEL_URL });
    return { serviceId: id };
  },
  component: ServiceRoute,
  head: ({ params }) => {
    const id = serviceIdFromSlug(params.slug, "en");
    if (!id) return {};
    return localizedHead({
      title: services.en[id].meta.title,
      description: services.en[id].meta.description,
      paths: { cs: servicePath(id, "cs"), en: servicePath(id, "en") },
      locale: "en",
    });
  },
});

function ServiceRoute() {
  const { serviceId } = Route.useRouteContext();
  return <ServicePage id={serviceId} />;
}
