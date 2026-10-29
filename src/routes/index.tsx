import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/features/home/shell/home-content";
import { routeMetadata } from "@/features/seo/core/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: routeMetadata["/"].title }],
  }),
  component: Home,
});

/**
 * Renders the site root. The page delegates to `HomeContent` so the rendering
 * logic stays in a component that can be exercised without a route around it.
 */
function Home() {
  return <HomeContent />;
}
