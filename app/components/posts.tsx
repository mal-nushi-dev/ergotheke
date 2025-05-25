import { fetchBlogFeed } from 'app/blog/rss-client'

/**
 * Server component that fetches and renders a list of external blog posts.
 *
 * Uses `fetchBlogFeed` to retrieve posts from the Kodikion RSS feed at runtime.
 * Displays a fallback message if no posts are returned or if fetching fails.
 * Each blog post is rendered with a date and title, linking to the original post.
 *
 * @returns {JSX.Element} A rendered list of blog posts or a fallback message.
 */
export default async function BlogPosts() {

  // Explicitly type the posts variables to match `fetchBlogFeed's` return type
  let posts: Awaited<ReturnType<typeof fetchBlogFeed>> = []

  try {
    posts = await fetchBlogFeed()
    posts.forEach((p) => console.log('Post date:', p.date))
  } catch (error) {
    console.error('Failed to fetch blog feed:', error)
  }

  // Render fallback message if no posts, otherwise map over and display each post
  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-neutral-500">No blog posts found or failed to load feed ☹</p>
      ) : (
        posts.map((post) => (
          <a
            key={post.guid}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4"
          >
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
            </div>
          </a>
        ))
      )}
    </div>
  )
}
