import { fetchBlogFeed, BlogPost } from "@/lib/blog/rss-client";

interface TaggedBlogPostsProps {
  tags: string[];
  limit?: number;
}

/**
 * Server component that fetches and renders blog posts filtered by tags
 * @param {Object} props - Component props
 * @param {string[]} props.tags - Array of tags to filter posts by
 * @param {number} [props.limit] - Optional limit of posts to display
 */
export default async function TaggedBlogPosts({
  tags,
  limit,
}: TaggedBlogPostsProps): Promise<JSX.Element> {
  // Fetch all blog posts
  const allPosts = await fetchBlogFeed();

  // Filter posts by tags
  const filteredPosts = allPosts.filter((post) => {
    if (!post.tags || post.tags.length === 0) return false;
    return tags.some((tag) =>
      post.tags?.some((postTag) =>
        postTag.toLowerCase().includes(tag.toLowerCase())
      )
    );
  });

  // Limit the number of posts if specified
  const postsToShow = limit ? filteredPosts.slice(0, limit) : filteredPosts;

  return (
    <div className="space-y-4">
      {postsToShow.length === 0 ? (
        <p className="mb-8 text-neutral-600 dark:text-neutral-400">
          No blog posts yet. Check back later :) !
        </p>
      ) : (
        postsToShow.map((post) => (
          <a
            key={post.guid}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex flex-col md:flex-row md:items-baseline">
              <p className="text-neutral-500 dark:text-neutral-400 min-w-[120px] md:w-24 flex-shrink-0 tabular-nums">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 tracking-tight">
                {post.title}
              </p>
            </div>
          </a>
        ))
      )}
    </div>
  );
}
