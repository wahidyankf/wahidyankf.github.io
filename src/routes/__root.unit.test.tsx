import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";
import { NotFound, Route } from "./__root";

type HeadFn = NonNullable<typeof Route.options.head>;
type HeadResult = Awaited<ReturnType<HeadFn>>;
type HeadContext = HeadFn extends (context: infer Context) => unknown ? Context : never;

async function headResult(): Promise<HeadResult> {
  const head = await Route.options.head?.({} as HeadContext);
  if (!head) {
    throw new Error("The root route declares no head.");
  }
  return head;
}

function entryField(entry: unknown, field: string): string | undefined {
  if (typeof entry !== "object" || entry === null) {
    return undefined;
  }
  const value = (entry as Record<string, unknown>)[field];
  return typeof value === "string" ? value : undefined;
}

describe("Root route head", () => {
  it("declares a favicon in both ICO and PNG form", async () => {
    const links = ((await headResult()).links ?? []).filter((link) => entryField(link, "rel") === "icon");
    expect(links.map((link) => entryField(link, "href"))).toEqual(["/favicon.ico", "/favicon.png"]);
    expect(entryField(links[1], "type")).toBe("image/png");
  });

  it("declares an apple touch icon for the iOS home screen", async () => {
    const links = (await headResult()).links ?? [];
    const touch = links.find((link) => entryField(link, "rel") === "apple-touch-icon");
    expect(entryField(touch, "href")).toBe("/favicon.png");
  });

  it("describes the site for search results and link previews", async () => {
    const meta = (await headResult()).meta ?? [];
    const byName = new Map<string, string>();
    for (const entry of meta) {
      const name = entryField(entry, "name") ?? entryField(entry, "property");
      const content = entryField(entry, "content");
      if (name && content) {
        byName.set(name, content);
      }
    }
    expect(byName.get("description")).toContain("engineering leader");
    expect(byName.get("og:title")).toContain("Engineering Leader");
    expect(byName.get("og:image")).toBe("https://wahidyankf.com/og-image.jpg");
    expect(byName.get("twitter:card")).toBe("summary_large_image");
  });

  it("carries no title of its own, because each page declares one", async () => {
    const meta = (await headResult()).meta ?? [];
    expect(meta.filter((entry) => entryField(entry, "title") !== undefined)).toEqual([]);
  });
});

describe("Root route document", () => {
  it("frames every page with the theme toggle and the page content", async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/"] }),
    });
    await router.load();
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByText("Welcome to My Portfolio")).toBeInTheDocument();
    });
    expect(screen.getByRole("button", { name: /theme/i })).toBeInTheDocument();
  });
});

describe("NotFound", () => {
  it("names itself so the tab never carries another page's title", () => {
    render(<NotFound />);
    expect(document.title).toBe("Page not found | Wahidyan Kresna Fridayoka");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("404: This page could not be found.");
  });
});
