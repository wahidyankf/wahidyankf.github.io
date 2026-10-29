import "./src/env-loader.ts";
import "./src/env.ts";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Static export for GitHub Pages. This is a user site served from the domain
// root, so no base path is set: every asset and link resolves against `/`.
// Every route is prerendered at build time (`prerender.enabled` with
// `crawlLinks`, which follows the navigation links from the home page and
// discovers `/` and `/cv` and `/personal-projects`; `robots.txt` and
// `sitemap.xml` are server routes no link points at, so they are listed
// explicitly). The `github-pages` Nitro preset writes that prerendered output
// to `.output/public`, the directory `.github/workflows/static.yml` uploads.
// Prerender failures fail the build rather than shipping a half-rendered page.
export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    // The tanstackStart plugin MUST come before viteReact().
    tanstackStart({
      // Unit tests live beside the routes they cover; the route scanner would
      // otherwise warn that they export no Route.
      router: { routeFileIgnorePattern: "\\.unit\\.test\\." },
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
        concurrency: 14,
        failOnError: true,
        // The CV page links the generated PDF with a plain anchor. It is a
        // static file, not a route, so crawling it only fails the build.
        filter: ({ path }) => !path.endsWith(".pdf"),
      },
      // No explicit `pages`: every content route is reachable through the
      // navigation links, so crawling from `/` discovers them all. The
      // non-HTML and fallback documents live in Nitro's `prerender.routes`
      // below instead — TanStack fetches its pages from a static preview
      // server, which cannot run route handlers.
    }),
    // `robots.txt`, `sitemap.xml`, and the `/404` route are rendered by
    // Nitro's prerenderer rather than TanStack's: TanStack fetches from a
    // static preview server, which can only serve files a previous step
    // already wrote, while Nitro runs the route handlers themselves — the
    // same handlers the dev server answers. The crawler still discovers the
    // three content pages through the navigation links. Nitro writes the
    // not-found route as `404/index.html`; `postbuild` copies it to the
    // `404.html` fallback GitHub Pages serves for unknown paths.
    nitro({
      preset: "github-pages",
      prerender: { routes: ["/robots.txt", "/sitemap.xml", "/404"] },
    }),
    viteReact(),
  ],
});
