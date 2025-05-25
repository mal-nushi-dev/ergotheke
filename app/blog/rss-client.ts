import Parser from 'rss-parser';

// Define the shape of each blog post we expect from the RSS feed
export type BlogPost = {
  title: string;
  link: string;
  date: string;
  guid: string;
  contentSnippet?: string;
}

// Create a new RSS parser instance, typed to expect BlogPost items
const parser: Parser<{}, BlogPost> = new Parser();

// Async function to fetch and parse the external RSS feed
export async function fetchBlogFeed(): Promise<BlogPost[]> {
  const feed = await parser.parseURL('https://www.kodikion.com/rss.xml');
  return feed.items;
}
