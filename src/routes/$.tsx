import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { LEGACY_REDIRECTS } from "@/lib/redirects";

// Zachytává všechny neexistující adresy: staré URL ze sittravel.cz přesměruje (301),
// zbytek skončí na stránce 404.
export const Route = createFileRoute("/$")({
  beforeLoad: ({ params }) => {
    const key = (params._splat ?? "").replace(/\/+$/, "").toLowerCase();
    const target = LEGACY_REDIRECTS[key];
    if (target) throw redirect({ href: target, statusCode: 301 });
    throw notFound();
  },
});
