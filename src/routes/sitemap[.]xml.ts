import { createFileRoute } from "@tanstack/react-router";
import { serializeSitemap } from "@/features/seo/core/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(serializeSitemap(), {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
