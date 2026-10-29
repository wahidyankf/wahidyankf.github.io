import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { ComponentType, ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { Route as IndexRoute } from "./index";
import { Route as CvRoute } from "./cv";
import { Route as ProjectsRoute } from "./personal-projects";

/**
 * Every route file in this directory exports its page through `component`,
 * which is what the assertions below render. The helper fails loudly when a
 * route forgets it, instead of rendering `undefined` into a confusing React
 * error.
 */
function mustComponent(route: { options: { component?: ComponentType } }, pathname: string): ComponentType {
  const { component } = route.options;
  if (!component) {
    throw new Error(`Route ${pathname} exports no component.`);
  }
  return component;
}

vi.mock("@tanstack/react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@tanstack/react-router")>();
  return {
    ...actual,
    useRouter: () => ({ history: { push: vi.fn(), replace: vi.fn() } }),
    Link: ({ to, children }: { to: string; children: ReactNode }) => <a href={to}>{children}</a>,
  };
});

vi.mock("@/features/app-shell/shell/navigation", () => ({
  Navigation: () => <nav aria-label="Primary navigation" />,
}));

vi.mock("@/features/ui/shell", () => ({
  SearchComponent: ({ placeholder }: { placeholder: string }) => <input placeholder={placeholder} readOnly />,
  HighlightText: ({ text }: { text: string }) => <>{text}</>,
}));

const routes = [
  {
    pathname: "/",
    source: "index.tsx",
    contentSource: "../features/home/shell/home-content.tsx",
    Component: mustComponent(IndexRoute, "/"),
    visibleContent: "Welcome to My Portfolio",
  },
  {
    pathname: "/cv",
    source: "cv.tsx",
    contentSource: "../features/cv/shell/cv-content.tsx",
    Component: mustComponent(CvRoute, "/cv"),
    visibleContent: "Curriculum Vitae",
  },
  {
    pathname: "/personal-projects",
    source: "personal-projects.tsx",
    contentSource: "../features/personal-projects/shell/personal-projects-content.tsx",
    Component: mustComponent(ProjectsRoute, "/personal-projects"),
    visibleContent: "Independent Projects",
  },
];

describe("static portfolio route content", () => {
  for (const route of routes) {
    it(`${route.pathname} renders visible content before browser query seeding`, () => {
      const source = readFileSync(resolve(__dirname, route.source), "utf8");
      const contentSource = readFileSync(resolve(__dirname, route.contentSource), "utf8");

      expect(source).not.toContain("Suspense");
      expect(contentSource).not.toContain("useSearchParams");
      expect(renderToStaticMarkup(<route.Component />)).toContain(route.visibleContent);
    });
  }
});
