import Link from "next/link";
import type { Metadata } from "next";
import React from "react";
import LegoWordBuilder from "app/components/LegoWordBuilder";
import TaggedBlogPosts from "app/components/TaggedBlogPosts";

// Define the subpages for the legos page
const legoSubpages = [
  {
    name: "Gallery",
    slug: "legos_gallery",
    description:
      "I should charge you for this one, but I can't. Living in Charlotte is expensive man.",
    externalUrl: "https://www.instagram.com/mal.builds.legos/",
  },
];

/**
 * Metadata for the Legos page. This object is used by Next.js to set the page title and description for SEO and browser display.
 */
export const metadata: Metadata = {
  title: "Legos",
  description: `I know... it is kind of lame, but I digitally build legos. But when you lack space and the will to spend funds on 
    the lego pieces then there is no better alternative. Maybe someday I will take the time. Actually, as I am typing this I kind of
    want to do it now.`,
};

/**
 * LegosPage component.
 * This component renders the main content for the lego page.
 *
 * @returns The rendered React element for the lego page.
 */
export default function LegosPage(): React.JSX.Element {
  // Extract description and single out specific word
  const description = metadata.description?.toString() ?? "";
  const buildPattern = /(build)/i;
  const parts = description.split(buildPattern);

  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        {metadata.title?.toString() ?? ""}
      </h1>

      <h2 className="mb-8 text-neutral-600 dark:text-neutral-400">
        {parts.map((part, index) => {
          const isLegoWord = part.toLowerCase() === "build";

          return isLegoWord ? (
            <LegoWordBuilder key={index} word={part} />
          ) : (
            <span key={index}>{part}</span>
          );
        })}
      </h2>

      {/*List of subpages for the lego section*/}
      <h2 className="mb-4 text-xl font-semibold tracking-tight">Sub-Topics</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {legoSubpages.map((subpage) => (
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
              <Link href={`/sidequests/legos/${subpage.slug}`}>
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

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Blog Posts
        </h2>
        <div>
          <TaggedBlogPosts
            tags={["legos", "lego_page"]}
            // limit={5}
          />
        </div>
      </div>
    </section>
  );
}
