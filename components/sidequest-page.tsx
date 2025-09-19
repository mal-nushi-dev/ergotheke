import Link from "next/link";
import React from "react";
import { safeString } from "@/utils/safe-string";
import TaggedBlogPosts from "@/components/tagged-blog-posts";
import { GearCard } from "@/components/gear/gear-card";
import type { SidequestSubpage } from "@/interfaces/sidequest-subpages";

/**
 * Props for the SidequestPage component.
 *
 * @property {string} title - The main title of the page (displayed in <h1>).
 * @property {string} description - The description text for the sidequest.
 * @property {string[]} tags - Tags passed to TaggedBlogPosts to filter blog posts.
 * @property {SidequestSubpage[]} subpages - List of subpage items to display as cards.
 * @property {string} baseHref - Base path for internal links (e.g., "/sidequests/photography").
 * @property {React.ReactNode} HeroText - A custom React node (e.g., <FlashingText />, <SkateText />) used for the hero description text.
 */
export type SidequestPageProps = {
  title: string;
  description: string;
  tags: string[];
  subpages: SidequestSubpage[];
  baseHref: string;
  HeroText?: React.ReactNode;
};

/**
 * SidequestPage
 *
 * A reusable template component for rendering individual sidequest pages.
 * Provides a common layout: title, custom hero text, subpage cards (via GearCard), and tagged blog posts.
 *
 * Equal card sizes are enforced using:
 * - `auto-rows-fr` on the grid to make rows evenly distribute height
 * - `h-full` on <li>, <a>/<Link>, and the GearCard container to stretch to fill available space
 */
export default function SidequestPage({
  title,
  tags,
  subpages,
  baseHref,
  HeroText,
}: SidequestPageProps): React.JSX.Element {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        {safeString(title)}
      </h1>

      {HeroText}

      <h2 className="mb-4 text-xl font-semibold tracking-tight">Sub-Topics</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 auto-rows-fr">
        {subpages.map((subpage) => (
          <li key={safeString(subpage.slug)} className="h-full">
            {safeString(subpage.externalUrl) ? (
              <a
                href={safeString(subpage.externalUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <GearCard
                  name={safeString(subpage.name)}
                  description={safeString(subpage.description)}
                />
              </a>
            ) : (
              <Link
                href={`${safeString(baseHref)}/${safeString(subpage.slug)}`}
                className="block h-full"
              >
                <GearCard
                  name={safeString(subpage.name)}
                  description={safeString(subpage.description)}
                />
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Blog Posts
        </h2>
        <TaggedBlogPosts tags={tags} />
      </div>
    </section>
  );
}
