import { describe, expect, it } from "vitest";
import { serializeSitemap } from "@/features/seo/core/seo";
import { Route } from "./sitemap[.]xml";

describe("sitemap.xml server route", () => {
  it("serves the route catalogue as XML", async () => {
    const handlers = Route.options.server?.handlers;
    const get = typeof handlers === "function" ? undefined : handlers?.GET;
    if (typeof get !== "function") {
      throw new Error("Route /sitemap.xml exports no GET handler.");
    }
    const response = await get({
      request: new Request("https://wahidyankf.github.io/sitemap.xml"),
    } as never);
    if (!(response instanceof Response)) {
      throw new Error("Route /sitemap.xml did not return a response.");
    }
    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe("application/xml; charset=utf-8");
    expect(await response.text()).toBe(serializeSitemap());
  });
});
