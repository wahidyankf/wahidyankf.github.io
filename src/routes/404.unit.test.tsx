import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { routeMetadata } from "@/features/seo/core/seo";
import { Route } from "./404";

describe("Not-found fallback route", () => {
  it("renders the shared not-found content", () => {
    const Component = Route.options.component;
    if (!Component) {
      throw new Error("Route /404 exports no component.");
    }
    render(<Component />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("404: This page could not be found.");
  });

  it("titles the fallback document so the tab never carries another page's title", async () => {
    const head = await Route.options.head?.({} as never);
    expect(head?.meta).toEqual([{ title: routeMetadata.notFound.title }]);
  });
});
