import { describe, it, expect } from "vitest";
import { buildRobots, buildSitemap } from "./seo";

describe("SEO metadata routes", () => {
  it("advertises the canonical sitemap to crawlers", () => {
    expect(buildRobots()).toEqual({
      rules: [{ userAgent: "*", allow: "/" }],
      sitemap: "https://wahidyankf.com/sitemap.xml",
    });
  });

  it("lists every public portfolio route at the canonical domain", () => {
    expect(buildSitemap()).toEqual(
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
