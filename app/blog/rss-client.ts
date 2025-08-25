import Parser from "rss-parser";

// Define the shape of each blog post we expect from the RSS feed
export type BlogPost = {
  title: string;
  link: string;
  date: string;
  guid: string;
  contentSnippet?: string;
  tags?: string[];
};

// Create a new RSS parser instance, typed to expect BlogPost items
const parser: Parser<{}, BlogPost> = new Parser();

/**
 * Fetches and parses blog posts from the external Kodikion RSS feed.
 *
 * Uses `rss-parser` to retrieve and parse the feed at https://www.kodikion.com/rss.xml.
 * Each feed item is normalized to ensure a `date` field is present, falling back to `pubDate` if needed.
 * If an error occurs during fetch or parsing, the function logs the error and returns an empty array.
 *
 * @returns {Promise<BlogPost[]>} A promise that resolves to a list of blog posts.
 */
export async function fetchBlogFeed(): Promise<BlogPost[]> {
  try {
    // const feed = await parser.parseURL("https://www.kodikion.com/rss.xml");
    const feed = await parser.parseURL("https://kodikion.substack.com/feed");

    const items = feed.items.map((item) => ({
      ...item,
      date: item.date || item.pubDate || "",
      tags: item.categories || [],
    }));

    return items;
  } catch (error) {
    console.error("Failed to fetch RSS feed:", error);
    return [];
  }
}
