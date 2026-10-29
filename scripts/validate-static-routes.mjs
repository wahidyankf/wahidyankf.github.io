import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

// TanStack Start's prerender writes one directory per route into
// `.output/public` (see `vite.config.ts`). This is a user site served from the
// domain root, so every route resolves against `/` with no base path. The
// table below is the whole public surface: the three pages, the host's
// `404.html` fallback copy (see `scripts/copy-404.mjs`), and the two crawler
// documents. A prerender that silently dropped one of them would still exit
// zero, so this validator reads the output directory itself.
const appRoot = resolve(import.meta.dirname, "..");
const publicDir = resolve(appRoot, ".output/public");

const publicRoutes = [
  { path: "index.html", marker: "Welcome to My Portfolio" },
  { path: "cv/index.html", marker: "Curriculum Vitae" },
  { path: "personal-projects/index.html", marker: "Independent Projects" },
  { path: "404.html", marker: "404: This page could not be found." },
  { path: "robots.txt", marker: "Sitemap: https://wahidyankf.com/sitemap.xml" },
  { path: "sitemap.xml", marker: "https://wahidyankf.com/cv" },
];

const missingFiles = publicRoutes.map((route) => route.path).filter((file) => !existsSync(resolve(publicDir, file)));

if (missingFiles.length > 0) {
  throw new Error(`.output/public is missing static route(s): ${missingFiles.join(", ")}`);
}

const emptyMarkers = publicRoutes.filter((route) => {
  const contents = readFileSync(resolve(publicDir, route.path), "utf8");
  return !contents.includes(route.marker);
});

if (emptyMarkers.length > 0) {
  throw new Error(
    `static route(s) rendered without their expected content: ${emptyMarkers.map((route) => route.path).join(", ")}`,
  );
}

// This validator runs under `static-routes:validation`, and this line is its
// only report of what it checked. A validator that passes silently cannot be
// told from one that examined nothing.
console.log(`Verified static build output for ${publicRoutes.map((route) => route.path).join(", ")}.`);
