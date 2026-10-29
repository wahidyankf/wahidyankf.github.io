import { describe, it, expect } from "vitest";
import { buildRobots, buildSitemap } from "./seo";

describe("SEO metadata routes", () => {
  it("advertises the canonical sitemap to crawlers", () => {
    expect(buildRobots()).toEqual({
      rules: [{ userAgent: "*", allow: "/" }],
      sitemap: "https://wahidyankf.github.io/sitemap.xml",
    });
  });

  it("lists every public portfolio route at the canonical domain", () => {
    expect(buildSitemap()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ url: "https://wahidyankf.github.io" }),
        expect.objectContaining({ url: "https://wahidyankf.github.io/cv" }),
        expect.objectContaining({
          url: "https://wahidyankf.github.io/personal-projects",
        }),
      ]),
    );
  });
});
