import fs from "fs";
import path from "path";
import { sidequestPages } from "@/data/sidequests";
import { baseUrl } from "@/lib/site";

/**
 * Recursively crawls the app directory to find all static page.tsx files.
 */
function getStaticRoutes(dir: string, currentPath = ""): string[] {
  let routes: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      // Ignore dynamic routes (e.g., [slug]), api routes, and private folders
      if (
        entry.name.startsWith("[") ||
        entry.name === "api" ||
        entry.name.startsWith("_")
      ) {
        continue;
      }

      // Handle Route Groups (e.g., "(marketing)") by ignoring the folder name in the URL
      if (entry.name.startsWith("(")) {
        routes = routes.concat(
          getStaticRoutes(path.join(dir, entry.name), currentPath),
        );
        continue;
      }

      const nextPath = `${currentPath}/${entry.name}`;
      routes = routes.concat(
        getStaticRoutes(path.join(dir, entry.name), nextPath),
      );
    } else if (entry.isFile() && entry.name === "page.tsx") {
      routes.push(currentPath === "" ? "/" : currentPath);
    }
  }
  return routes;
}

export default async function sitemap() {
  // 1. Auto-discover all static pages in the app/ directory
  const appDir = path.join(process.cwd(), "app");
  const staticPaths = getStaticRoutes(appDir);

  const lastModified = new Date().toISOString().split("T")[0];
  const staticRoutes = staticPaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));

  // 2. Get dynamic sidequests from our data source
  const sideQuestRoutes = sidequestPages.map((page) => ({
    url: `${baseUrl}/sidequests/${page.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...staticRoutes, ...sideQuestRoutes];
}
