/**
 * The site's crawler-facing contracts and shared head metadata, in one place.
 * The route files in `src/routes/` serialize these (robots and sitemap through
 * server handlers, metadata through each route's `head`), and the unit tests
 * beside them assert what crawlers and tabs see. Nothing here imports a
 * framework: these are the decisions, and the routes are the transport.
 */

export const siteUrl = "https://wahidyankf.github.io";

export const siteMetadata = {
  description:
    "Portfolio and CV of Wahidyan Kresna Fridayoka, an engineering leader with nearly nine years of experience in Sharia-compliant digital banking, fintech, and RegTech, leading cross-functional engineering teams and open-source work.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/favicon.ico" },
  ],
  keywords: [
    "Engineering Leadership",
    "Engineering Manager",
    "Digital Banking",
    "Sharia-Compliant Fintech",
    "RegTech",
    "Software System Designer",
    "Financing Engineer",
    "Software Testing",
    "Core Banking",
    "ISO 27001",
  ],
  authors: [{ name: "Wahidyan Kresna Fridayoka" }],
  creator: "Wahidyan Kresna Fridayoka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Wahidyan Kresna Fridayoka",
    title: "Wahidyan Kresna Fridayoka | Engineering Leader — Digital Banking, Fintech & RegTech",
    description:
      "Portfolio and CV of Wahidyan Kresna Fridayoka, an engineering leader with nearly nine years of experience in Sharia-compliant digital banking, fintech, and RegTech, leading cross-functional engineering teams and open-source work.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahidyan Kresna Fridayoka | Engineering Leader — Digital Banking, Fintech & RegTech",
    description:
      "Portfolio and CV of Wahidyan Kresna Fridayoka, an engineering leader with nearly nine years of experience in Sharia-compliant digital banking, fintech, and RegTech, leading cross-functional engineering teams and open-source work.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
} as const;

export const routeMetadata = {
  "/": {
    title: "Wahidyan Kresna Fridayoka | Engineering Leader — Digital Banking, Fintech & RegTech",
  },
  "/cv": {
    title: "CV | Wahidyan Kresna Fridayoka",
    description:
      "Full curriculum vitae of Wahidyan Kresna Fridayoka — work experience, skills, education, and certifications.",
  },
  "/personal-projects": {
    title: "Independent Projects | Wahidyan Kresna Fridayoka",
    description:
      "Open-source and independent projects by Wahidyan Kresna Fridayoka, including OSE, AyoKoding, OrganicLever, and more.",
  },
  notFound: {
    title: "Page not found | Wahidyan Kresna Fridayoka",
  },
} as const;

export interface SitemapEntry {
  url: string;
  changeFrequency: "monthly";
  priority: number;
}

/**
 * Lists the three routes this site publishes, with the priorities that rank
 * them against one another. The list is written out rather than derived from
 * the route tree: three static pages gain nothing from a crawler of their own
 * directory, and deriving them would lose the ability to weight them by hand.
 */
export function buildSitemap(): SitemapEntry[] {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/cv`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${siteUrl}/personal-projects`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

export interface RobotsDirectives {
  rules: [{ userAgent: string; allow: string }];
  sitemap: string;
}

/**
 * Builds the crawler directives served at `/robots.txt`. Every path is
 * allowed because this is a public personal site with no private routes, and
 * the sitemap is named by absolute URL because a crawler resolves that field
 * against the origin rather than against the file it read.
 */
export function buildRobots(): RobotsDirectives {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

export function serializeRobots(directives: RobotsDirectives = buildRobots()): string {
  const rules = directives.rules.map((rule) => `User-Agent: ${rule.userAgent}\nAllow: ${rule.allow}`).join("\n");
  return `${rules}\n\nSitemap: ${directives.sitemap}\n`;
}

export function serializeSitemap(entries: SitemapEntry[] = buildSitemap()): string {
  const urls = entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${entry.url}</loc>\n    <changefreq>${entry.changeFrequency}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
