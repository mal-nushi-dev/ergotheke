import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

const siteTitle: string = "Mal Nushi";
const siteDescription: string = "Mal Nushis Personal Website";

/**
 * Metadata configuration for Next.js pages.
 *
 * - `metadataBase`: Base URL used for constructing absolute URLs in metadata.
 * - `title`: Defines both the default title and a template for dynamic titles.
 * - `description`: A short description of the site.
 * - `openGraph`: Open Graph tags for social media sharing.
 * - `robots`: Crawling and indexing directives for search engines.
 * - `alternates`: Canonical URL and alternate content types (e.g., RSS feed).
 */
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: baseUrl,
    siteName: siteTitle,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    types: {
      "application/rss+xml": `${baseUrl}/rss.xml`,
    },
  },
};

/**
 * Concatenates an arbitrary number of CSS class names into a single string,
 * filtering out any falsy values (e.g., `false`, `null`, `undefined`, or `""`).
 * @param {...(string | false | null | undefined)} classes - A list of class name values.
 * @returns {string} A space-separated string of all truthy class names.
 */
const cx = (...classes) => classes.filter(Boolean).join(" ");

/**
 * RootLayout component: wraps all pages with global HTML structure and shared UI elements.
 * It sets the `<html>` `lang` attribute, applies global font classes, and ensures
 * that every page includes a Navbar, Footer, Analytics, and Speed Insights.
 * @param {RootLayoutProps} props - Component properties.
 * @param {React.ReactNode} props.children - Content to render inside the layout.
 * @returns {JSX.Element} The complete HTML layout for each page.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
