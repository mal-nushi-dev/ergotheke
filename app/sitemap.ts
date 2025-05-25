import { fetchBlogFeed } from 'app/blog/rss-client'

export const baseUrl = 'https://ergotheke.vercel.app'

export default async function sitemap() {
  const blogPosts = await fetchBlogFeed()

  const blogs = blogPosts.map((post) => ({
    url: post.link,
    lastModified: new Date(post.date).toISOString().split('T')[0],
  }))

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
