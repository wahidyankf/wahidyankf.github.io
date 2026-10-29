import { describe, it, expect } from "vitest";
import { buildRobots, buildSitemap, routeMetadata, serializeRobots, serializeSitemap, siteMetadata } from "./seo";

describe("robots", () => {
  it("allows every crawler to reach every path", () => {
    expect(buildRobots().rules).toEqual([{ userAgent: "*", allow: "/" }]);
  });

  it("names the sitemap by absolute URL", () => {
    // A crawler resolves this field against the origin, not against the file it
    // read, so a relative path here would point somewhere that does not exist.
    expect(buildRobots().sitemap).toBe("https://www.wahidyankf.com/sitemap.xml");
  });

  it("serializes to the plain-text directives crawlers read", () => {
    expect(serializeRobots()).toBe("User-Agent: *\nAllow: /\n\nSitemap: https://www.wahidyankf.com/sitemap.xml\n");
  });
});

describe("sitemap", () => {
  it("publishes the three public routes and nothing else", () => {
    expect(buildSitemap().map((entry) => entry.url)).toEqual([
      "https://www.wahidyankf.com",
      "https://www.wahidyankf.com/cv",
      "https://www.wahidyankf.com/personal-projects",
    ]);
  });

  it("ranks the root above the two sections", () => {
    const [root, ...sections] = buildSitemap();
    expect(root.priority).toBe(1);
    expect(sections.map((entry) => entry.priority)).toEqual([0.8, 0.8]);
  });

  it("declares every route as monthly", () => {
    expect(buildSitemap().every((entry) => entry.changeFrequency === "monthly")).toBe(true);
  });

  it("serializes to the XML document crawlers read", () => {
    const xml = serializeSitemap();
    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(xml).toContain("<loc>https://www.wahidyankf.com/cv</loc>");
  });
});

describe("site metadata", () => {
  it("references the og-image.jpg asset for OpenGraph and Twitter previews", () => {
    expect(siteMetadata.openGraph.images).toEqual([
      {
        url: "https://www.wahidyankf.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ]);
    expect(siteMetadata.twitter.images).toEqual(["https://www.wahidyankf.com/og-image.jpg"]);
  });

  it("uses the canonical public URL for OpenGraph metadata", () => {
    expect(siteMetadata.openGraph.url).toBe("https://www.wahidyankf.com");
  });

  it("does not reference a Twitter handle", () => {
    expect(siteMetadata.twitter).not.toHaveProperty("creator");
  });

  it("names every route's tab title, because the root route carries none", () => {
    expect(routeMetadata["/"].title).toBe(
      "Wahidyan Kresna Fridayoka | Engineering Leader — Digital Banking, Fintech & RegTech",
    );
    expect(routeMetadata["/cv"].title).toBe("CV | Wahidyan Kresna Fridayoka");
    expect(routeMetadata["/personal-projects"].title).toBe("Independent Projects | Wahidyan Kresna Fridayoka");
    expect(routeMetadata.notFound.title).toBe("Page not found | Wahidyan Kresna Fridayoka");
  });

  it("describes the CV and projects routes for search results", () => {
    expect(routeMetadata["/cv"].description).toContain("Full curriculum vitae");
    expect(routeMetadata["/personal-projects"].description).toContain("Open-source and independent projects");
  });
});
