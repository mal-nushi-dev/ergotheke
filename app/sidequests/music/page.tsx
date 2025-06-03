import Link from "next/link";
import type { Metadata } from "next";
import React from "react";
import TaggedBlogPosts from "app/components/TaggedBlogPosts";

// Define the subpages for the Music page
const musicSubpages = [
  {
    name: "My Gear",
    slug: "music_gear",
    description:
      "The gear responsible for the sounds that make my neighbors think a rat’s meeting its end.",
    externalUrl: "",
  },
];

/**
 * Metadata for the Music page. This object is used by Next.js to set the page title and description for SEO and browser display.
 */
export const metadata: Metadata = {
  title: "Music",
  description:
    "I grew up with a very musical dad who introduced me to all types of genres. It has become part of my life since.",
};

/**
 * MusicPage component.
 * This component renders the main content for the Music page.
 * @returns The rendered React element for the Music page.
 */
export default function MusicPage(): React.JSX.Element {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        {metadata.title?.toString() ?? ""}
      </h1>

      <h2 className="mb-8 text-neutral-600 dark:text-neutral-400">
        {metadata.description}
      </h2>

      <h2 className="mb-4 text-xl font-semibold tracking-tight">Sub-Topics</h2>
      {/*List of subpages for the Music section*/}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {musicSubpages.map((subpage) => (
          <li key={subpage.slug}>
            {/* This is a conditional render: use external link if exists, otherwise use internal link */}
            {subpage.externalUrl ? (
              <a
                href={subpage.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer h-full flex flex-col">
                  <h3 className="text-md font-semibold mb-1">{subpage.name}</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-300 flex-grow">
                    {subpage.description}
                  </p>
                </div>
              </a>
            ) : (
              <Link href={`/sidequests/music/${subpage.slug}`}>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer h-full flex flex-col">
                  <h3 className="text-md font-semibold mb-1">{subpage.name}</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-300 flex-grow">
                    {subpage.description}
                  </p>
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* You can keep or modify the BlogPosts component if it's relevant here */}
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Blog Posts
        </h2>
        <div>
          <TaggedBlogPosts
            tags={["music", "music_page"]}
            // limit={5}
          />
        </div>
      </div>
    </section>
  );
}
