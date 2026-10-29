import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "./__root";
import { routeMetadata } from "@/features/seo/core/seo";

export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [{ title: routeMetadata.notFound.title }],
  }),
  component: Missing,
});

/**
 * Renders the not-found content as a prerenderable page. The build writes
 * this route out as `404.html` (see `vite.config.ts`), which is the
 * document GitHub Pages serves for every unknown path. Client-side
 * navigation to an unknown route renders the same content through the root
 * route's `notFoundComponent` instead, so both paths share `NotFound`.
 */
function Missing() {
  return <NotFound />;
}
