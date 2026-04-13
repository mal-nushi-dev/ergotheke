import { Metadata } from "next";
import { fetchBlogFeed, BlogPost } from "@/lib/blog/rss-client";

/**
 * Server component that fetches and renders a list of external blog posts.
 *
 * Uses `fetchBlogFeed` to retrieve posts from the Kodikion RSS feed at runtime.
 * Displays a fallback message if no posts are returned or if fetching fails.
 * Each blog post is rendered with a date and title, linking to the original post.
 *
 * @returns {JSX.Element} A rendered list of blog posts or a fallback message.
 */
async function BlogPosts(): Promise<JSX.Element> {
  // Explicitly type the posts variable
  let posts: BlogPost[] = [];

  try {
    posts = await fetchBlogFeed();
  } catch (error) {
    console.error("Failed to fetch blog feed:", error);
  }

  // Render fallback message if no posts, otherwise map over and display each post
  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-neutral-500">
          No blog posts found or failed to load feed ☹
        </p>
      ) : (
        posts.map((post) => (
          <a
            key={post.guid}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 group"
          >
            <div className="flex flex-col md:flex-row md:items-baseline space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 min-w-[100px] flex-shrink-0 tabular-nums">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="body-links">{post.title}</p>
            </div>
          </a>
        ))
      )}
    </div>
  );
}

/**
 * Metadata for the blog page.
 */
export const metadata: Metadata = {
  title: "Kodikion.",
  description:
    "A blog by Mal Nushi—where ideas wander from circuits to sentences.",
};

/**
 * Blog page component.
 *
 * @returns {JSX.Element} The rendered blog page.
 */
export default function Page(): JSX.Element {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">
        Kodikion.
      </h1>
      <h2 className="font-semibold text-lg mb-8 tracking-tight">
        A blog by Mal Nushi—
        <i>where ideas wander from circuits to sentences.</i>
      </h2>
      <BlogPosts />
    </section>
  );
}
