import { fetchBlogFeed } from 'app/blog/rss-client'

export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://malnushi.com'
    : 'http://localhost:3000'

/**
 * Generates sitemap entries for static routes and blog posts.
 * This function is used by Next.js to create a sitemap for SEO.
 *
 * @returns {Promise<Array<{ url: string; lastModified: string }>>}
 *   An array of objects representing sitemap entries.
 */
export default async function sitemap(): Promise<Array<{ url: string; lastModified: string }>> {
  // Fetch all blog posts from the RSS client
  const blogPosts = await fetchBlogFeed()

  // Map blog posts to sitemap entry objects
  const blogs = blogPosts.map((post) => ({
    url: post.link,
    lastModified: new Date(post.date).toISOString().split('T')[0],
  }))
  
  // Define static routes
  const routes = ['', '/blog', '/about', '/lab', '/sidequests'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
