import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

// GitHub Pages serves `404.html` for every unknown path, but the prerenderers
// write the not-found route as `404/index.html`. Copying the rendered
// document to the host's fallback filename keeps both addresses working: the
// `/404` URL serves the directory file, and every other unknown path serves
// the fallback copy with identical content.
const appRoot = resolve(import.meta.dirname, "..");
const rendered = resolve(appRoot, ".output/public/404/index.html");
copyFileSync(rendered, resolve(appRoot, ".output/public/404.html"));
console.log("Copied the prerendered not-found page to 404.html.");
