import { Suspense } from "react";
import { Metadata } from "next";
import { fetchBlogFeed, BlogPost } from "@/lib/blog/rss-client";

const title = "Kodikion.";
const description =
  "A blog by Mal Nushi—where ideas wander from circuits to sentences.";

// Revalidate the page every 3600 seconds (1 hour) so new blog posts appear automatically
export const revalidate = 3600;

export const metadata: Metadata = {
  title,
  description,
};

/**
 * Server component that fetches and renders a list of external blog posts.
 *
 * Uses `fetchBlogFeed` to retrieve posts from the Kodikion RSS feed at runtime.
 * Displays a fallback message if no posts are returned or if fetching fails.
 * Each blog post is rendered with a date and title, linking to the original post.
 *
 * @returns A rendered list of blog posts or a fallback message.
 */
async function BlogPosts() {
  // Explicitly type the posts variable
  let posts: BlogPost[] = [];

  try {
    posts = await fetchBlogFeed();
  } catch (error) {
    console.error("Failed to fetch blog feed:", error);
  }

  // Render fallback message if no posts, otherwise map over and display each post
  return (
    <div className="flex flex-col gap-4">
      {posts.length === 0 ? (
        <p className="body-subtext">
          No blog posts found or failed to load feed ☹
        </p>
      ) : (
        posts.map((post) => (
          <a
            key={post.guid}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
              <p className="body-subtext min-w-[100px] flex-shrink-0 tabular-nums">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              </p>
              <span className="body-links">{post.title}</span>
            </div>
          </a>
        ))
      )}
    </div>
  );
}

/**
 * Blog page component.
 *
 * @returns The rendered blog page.
 */
export default function Page() {
  return (
    <section>
      <h1 className="page-heading">{title}</h1>
      <h2 className="page-subheading">
        {description.split("—")[0]}—<i>{description.split("—")[1]}</i>
      </h2>
      <Suspense
        fallback={
          <p className="text-neutral-500 animate-pulse">
            Loading latest posts...
          </p>
        }
      >
        <BlogPosts />
      </Suspense>
    </section>
  );
}
