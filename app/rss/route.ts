import { baseUrl } from "app/sitemap";
import { fetchBlogFeed } from "app/blog/rss-client";

/**
 * Handles GET requests to generate the RSS feed for the blog.
 * Fetches all blog posts, sorts them by date (newest first), and returns an RSS XML response.
 *
 * @returns {Response} An XML response containing the RSS feed.
 */
export async function GET(): Promise<Response> {
  // Fetch all blog posts
  let allBlogs = await fetchBlogFeed();

  // Sort blogs posts by date (newest first)
  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.date) > new Date(b.date)) {
        return -1;
      }
      return 1;
    })

    // Map each post to an <item> entry in the RSS feed
    .map(
      (post) =>
        `<item>
          <title>${post.title}</title>
          <link>${post.link}</link>
          <description>${post.contentSnippet || ""}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>`
    )
    .join("\n");

  // Construct the full RSS XML feed
  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Kodikion | Mal Nushi</title>
        <link>${baseUrl}</link>
        <description>Kodikion is a blog by Mal Nushi</description>
        ${itemsXml}
    </channel>
  </rss>`;

  // Return the RSS feed as an XML response
  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
