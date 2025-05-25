import { fetchBlogFeed } from 'app/blog/rss-client'

// Server component that fetches and displays blog posts from an external RSS feed
export default async function BlogPosts() {
  const allBlogs = await fetchBlogFeed()

  return (
    <div>
      {allBlogs.map((post) => (
        // Render each post as a styled external link
        <a
          key={post.guid}
          className="flex flex-col space-y-1 mb-4"
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.title}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
