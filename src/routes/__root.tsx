import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { ScrollToTop, ThemeToggle } from "@/features/ui/shell";
import { siteMetadata } from "@/features/seo/core/seo";
import "../styles.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: siteMetadata.description },
      { name: "keywords", content: siteMetadata.keywords.join(", ") },
      { name: "author", content: siteMetadata.authors[0].name },
      { name: "creator", content: siteMetadata.creator },
      { property: "og:type", content: siteMetadata.openGraph.type },
      { property: "og:locale", content: siteMetadata.openGraph.locale },
      { property: "og:url", content: siteMetadata.openGraph.url },
      { property: "og:site_name", content: siteMetadata.openGraph.siteName },
      { property: "og:title", content: siteMetadata.openGraph.title },
      { property: "og:description", content: siteMetadata.openGraph.description },
      { property: "og:image", content: siteMetadata.openGraph.images[0].url },
      { property: "og:image:width", content: String(siteMetadata.openGraph.images[0].width) },
      { property: "og:image:height", content: String(siteMetadata.openGraph.images[0].height) },
      { name: "twitter:card", content: siteMetadata.twitter.card },
      { name: "twitter:title", content: siteMetadata.twitter.title },
      { name: "twitter:description", content: siteMetadata.twitter.description },
      { name: "twitter:image", content: siteMetadata.twitter.images[0] },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

/**
 * Wraps every page in the document shell: the language on the root element,
 * the pre-paint theme script in the head, the theme toggle and scroll-to-top
 * controls around the page body, and the analytics tags last. The start router
 * renders this around all other routes, so anything that must exist on every
 * page belongs here rather than being repeated in each one.
 *
 * No `title` lives here: a root title would also head the 404 page, which
 * names itself in `NotFound` below. Each page declares its own.
 */
function RootComponent() {
  return (
    <html lang="en" className="geist-font">
      <head>
        <HeadContent />
        {/* This script must run before the first paint, or the page renders in
            the wrong theme and then corrects itself visibly. It reads one
            localStorage key and sets one class; no user input reaches it, which
            is why injecting it as markup is safe here. */}
        {/* eslint-disable-next-line @eslint-react/no-dangerously-set-inner-html -- blocking pre-paint theme script with no user input */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light-theme');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="root-layout flex flex-col lg:flex-row">
        <div className="body-content flex-grow">
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <Outlet />
          <ScrollToTop />
        </div>
        <Scripts />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0F62KPYGM3" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0F62KPYGM3');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-THSDKWSZ');
            `,
          }}
        />
      </body>
    </html>
  );
}

/**
 * Renders every address the site does not have. React hoists the `<title>`
 * below into the document head; the text in the body is the built-in page's
 * own wording.
 */
export function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 text-green-400">
      <title>Page not found | Wahidyan Kresna Fridayoka</title>
      <h1 className="text-2xl font-bold text-yellow-400">404: This page could not be found.</h1>
    </main>
  );
}
