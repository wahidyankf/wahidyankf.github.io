import path from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { loadFeature, describeFeature } from "@amiceli/vitest-cucumber";
import { cleanup, render, within } from "@testing-library/react";
import { expect, vi } from "vitest";
import { buildRobots, buildSitemap } from "@/features/seo/core/seo";
import { Route as IndexRoute } from "@/routes/index";
import { Route as CvRoute } from "@/routes/cv";
import { Route as ProjectsRoute } from "@/routes/personal-projects";
import { CvContent } from "@/features/cv/shell/cv-content";

const mockPush = vi.fn();
const mockReplace = vi.fn();
let renderedCv: HTMLElement | undefined;
const publicPortfolioPages = [
  { Component: IndexRoute.options.component, content: "Welcome to My Portfolio" },
  { Component: CvRoute.options.component, content: "Curriculum Vitae" },
  { Component: ProjectsRoute.options.component, content: "Independent Projects" },
] as const;
let renderedStaticPortfolioPages: string[] = [];
let crawlerRobots: ReturnType<typeof buildRobots> | undefined;
let crawlerSitemap: ReturnType<typeof buildSitemap> | undefined;

function getRenderedCv(): HTMLElement {
  if (!renderedCv) {
    throw new Error("The shared CV URL must be opened before asserting its filtered state.");
  }

  return renderedCv;
}

vi.mock("@tanstack/react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@tanstack/react-router")>();
  return {
    ...actual,
    useRouter: () => ({ history: { push: mockPush, replace: mockReplace } }),
    useLocation: () => ({ pathname: "/cv" }),
    Link: ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) =>
      React.createElement("a", { href: to, className }, children),
  };
});

vi.mock("@/features/app-shell/shell/navigation", () => ({
  Navigation: () => React.createElement("div", { "data-testid": "navigation" }, "Navigation"),
}));

vi.mock("@/features/ui/shell", () => ({
  SearchComponent: ({ searchTerm, placeholder }: { searchTerm: string; placeholder: string }) =>
    React.createElement("input", {
      "data-testid": "search-component",
      value: searchTerm,
      placeholder,
      readOnly: true,
    }),
  HighlightText: ({ text }: { text: string }) => React.createElement("span", null, text),
}));

vi.mock("@/features/cv/core/data", () => ({
  cvData: [
    {
      type: "work",
      title: "Head of Engineering - Hijra Bank",
      organization: "Hijra",
      period: "March 2025 - Present",
      details: ["Leads the engineering organization."],
      skills: ["Software Engineering"],
      programmingLanguages: ["TypeScript"],
      frameworks: ["Next.js"],
    },
    {
      type: "certification",
      title: "Database Design Fundamentals for Software Engineers",
      organization: "Educative, Inc.",
      period: "June 2021",
      details: ["Credential ID: database-design"],
    },
  ],
  getTopSkillsLastFiveYears: () => [],
  getTopLanguagesLastFiveYears: () => [],
  getTopFrameworksLastFiveYears: () => [],
  getTopAISkillsLastFiveYears: () => [],
  formatDuration: (duration: number) => `${duration} months`,
  parseDate: vi.fn((date: string) => new Date(date)),
  calculateDuration: vi.fn(() => 12),
  calculateTotalDuration: vi.fn(() => 12),
}));

const feature = await loadFeature(
  path.resolve(process.cwd(), "specs/apps/wahidyankf-www/behaviours/static-filterable-routes.feature"),
);

describeFeature(feature, ({ Scenario, Background, AfterEachScenario }) => {
  AfterEachScenario(() => {
    cleanup();
    renderedCv = undefined;
  });
  Background(({ Given }) => {
    Given("the app is running", () => {
      renderedCv = undefined;
      window.history.replaceState({}, "", "/cv");
    });
  });

  Scenario("Search-filtered portfolio routes are static yet still filterable", ({ When, Then, And }) => {
    When('a visitor opens the shared CV search URL for "TypeScript"', () => {
      window.history.replaceState({}, "", "/cv?search=TypeScript");
      const { container } = render(React.createElement(CvContent));
      renderedCv = container;
    });

    Then('the CV search input is prefilled with "TypeScript"', () => {
      expect(new URLSearchParams(window.location.search).get("search")).toBe("TypeScript");
      expect(within(getRenderedCv()).getByPlaceholderText("Search CV entries...")).toHaveValue("TypeScript");
    });

    And('the "Head of Engineering - Hijra Bank" entry is visible', () => {
      expect(within(getRenderedCv()).getByText("Head of Engineering - Hijra Bank")).toBeVisible();
    });

    // @covers specs/apps/wahidyankf-www/behaviours/static-filterable-routes.feature:Search-filtered portfolio routes are static yet still filterable
    And('the "Database Design Fundamentals for Software Engineers" entry is hidden', () => {
      expect(
        within(getRenderedCv()).queryByText("Database Design Fundamentals for Software Engineers"),
      ).not.toBeInTheDocument();
    });
  });

  Scenario("Public portfolio routes are available from the production server", ({ When, Then }) => {
    When("a visitor requests every public portfolio page", () => {
      renderedStaticPortfolioPages = publicPortfolioPages.map(({ Component }) =>
        renderToStaticMarkup(React.createElement(Component as React.ComponentType)),
      );
    });

    // @covers specs/apps/wahidyankf-www/behaviours/static-filterable-routes.feature:Public portfolio routes are available from the production server
    Then("each public portfolio page responds with a successful HTML document", () => {
      expect(renderedStaticPortfolioPages).toHaveLength(publicPortfolioPages.length);
      for (const [index, page] of renderedStaticPortfolioPages.entries()) {
        expect(page).toContain(publicPortfolioPages[index]?.content);
      }
    });
  });

  Scenario("Crawlers receive discovery directives for every public route", ({ When, Then, And }) => {
    When("a crawler requests the robots and sitemap routes", () => {
      crawlerRobots = buildRobots();
      crawlerSitemap = buildSitemap();
    });

    Then("robots permits crawling and names the canonical sitemap", () => {
      expect(crawlerRobots).toEqual({
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: "https://wahidyankf.com/sitemap.xml",
      });
    });

    // @covers specs/apps/wahidyankf-www/behaviours/static-filterable-routes.feature:Crawlers receive discovery directives for every public route
    And("the sitemap lists every public portfolio route", () => {
      expect(crawlerSitemap).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ url: "https://wahidyankf.com" }),
          expect.objectContaining({ url: "https://wahidyankf.com/cv" }),
          expect.objectContaining({
            url: "https://wahidyankf.com/personal-projects",
          }),
        ]),
      );
    });
  });
});
