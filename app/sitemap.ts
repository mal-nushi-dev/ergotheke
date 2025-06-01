import { fetchBlogFeed } from "app/blog/rss-client";
import fs from "fs";
import path from "path";

export const baseUrl: string =
  process.env.NODE_ENV === "production"
    ? "https://www.malnushi.com"
    : "http://localhost:3000";

/**
 * Generates sitemap entries for static routes and blog posts.
 * This function is used by Next.js to create a sitemap for SEO.
 * @returns {Promise<Array<{ url: string; lastModified: string }>>}
 *   An array of objects representing sitemap entries.
 */
export default async function sitemap(): Promise<
  Array<{ url: string; lastModified: string }>
> {
  // Fetch all blog posts from the RSS client
  const blogPosts = await fetchBlogFeed();

  // Map blog posts to sitemap entry objects
  const blogs = blogPosts.map((post) => ({
    url: post.link,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  // Define static routes
  const routes = ["", "/blog", "/about", "/lab", "/sidequests"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  /**
   * Recursively walks a directory to find all "page.tsx" files
   * and returns their route paths (relative to /sidequests).
   * @param dir - Absolute path to the directory to scan.
   * @param segment - Accumulated route segment (used in recursion).
   * @returns Array of route segments (e.g., "/skating", "/pickleball/foo").
   */
  function getSidequestRoutes(dir: string, segment = ""): string[] {
    let routes: string[] = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const nestedSegment = `${segment}/${entry.name}`;
        routes = routes.concat(getSidequestRoutes(entryPath, nestedSegment));
      } else if (entry.isFile() && entry.name === "page.tsx") {
        routes.push(segment || "/");
      }
    }
    return routes;
  }

  // Compute all sidequest-derived routes under app/sidequests
  const sideQuestDir = path.join(process.cwd(), "app", "sidequests");
  const rawSegments = getSidequestRoutes(sideQuestDir);
  const sideQuestRoutes = rawSegments.map((seg) => {
    // Ensure leading slash for segment, then prefix "/sidequests"
    const route = seg === "/" ? "/sidequests" : `/sidequests${seg}`;
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    };
  });

  return [...routes, ...blogs, ...sideQuestRoutes];
}
