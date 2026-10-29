import { createFileRoute } from "@tanstack/react-router";
import { serializeRobots } from "@/features/seo/core/seo";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(serializeRobots(), {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      },
    },
  },
});
