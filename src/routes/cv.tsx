import { createFileRoute } from "@tanstack/react-router";
import { CvContent } from "@/features/cv/shell/cv-content";
import { routeMetadata } from "@/features/seo/core/seo";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [{ title: routeMetadata["/cv"].title }, { name: "description", content: routeMetadata["/cv"].description }],
  }),
  component: CV,
});

/**
 * Renders the `/cv` route. The file-based router binds this file to that
 * path, so the export name is what the framework reads and not something a
 * caller ever writes. The page holds no logic of its own: everything the CV
 * shows lives in `CvContent`, which can be rendered without a route around it.
 */
function CV() {
  return <CvContent />;
}
