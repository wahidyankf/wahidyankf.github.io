import { createFileRoute } from "@tanstack/react-router";
import { PersonalProjectsContent } from "@/features/personal-projects/shell/personal-projects-content";
import { routeMetadata } from "@/features/seo/core/seo";

export const Route = createFileRoute("/personal-projects")({
  head: () => ({
    meta: [
      { title: routeMetadata["/personal-projects"].title },
      { name: "description", content: routeMetadata["/personal-projects"].description },
    ],
  }),
  component: Projects,
});

/**
 * Renders the `/personal-projects` route. As with the other route files here,
 * the page is a binding point for the router and the content it shows lives
 * in `PersonalProjectsContent`.
 */
function Projects() {
  return <PersonalProjectsContent />;
}
