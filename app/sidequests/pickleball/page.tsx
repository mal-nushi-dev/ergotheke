import Link from "next/link";
import type { Metadata } from "next";
import PingPongText from "app/components/PingPongEffect";
import TaggedBlogPosts from "app/components/TaggedBlogPosts";

/**
 * Interface & class for the structure of pickleball subpages
 * @property {string} name - Display name of the subpage
 * @property {string} slug - URL slug for routing
 * @property {string} description - Short description of the subpage content
 */
const pickleballSubpages: {
  name: string;
  slug: string;
  description: string;
}[] = [
  {
    name: "My Gear",
    slug: "pickleball_gear",
    description: "A look at my current setup.",
  },
  {
    name: "Favorite Courts",
    slug: "pickleball_courts",
    description: "Best courts I have played in.",
  },
];

/**
 * Metadata for the Pickleball page. This object is used by Next.js to set the page title and description for SEO and browser display.
 */
export const metadata: Metadata = {
  title: "Pickleball",
  description: "My pickleball equipment and favorite courts",
};

/**
 * Pickleball page component that displays the main pickleball hub with subpage navigation
 * and pickleball text effect applied to the description.
 * @returns {React.JSX.Element} - Rendered Pickleball page component.
 */
export default function PickleballPage(): React.JSX.Element {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        {metadata.title?.toString() ?? ""}
      </h1>

      <PingPongText
        text={metadata.description?.toString() ?? ""}
        targetWord="courts"
        targetLetter="o"
        className="mb-8 text-neutral-600 dark:text-neutral-400"
      />

      <h2 className="mb-4 text-xl font-semibold tracking-tight">Sub-Topics</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {pickleballSubpages.map((subpage) => (
          <li key={subpage.slug}>
            <Link href={`/sidequests/pickleball/${subpage.slug}`}>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer h-full flex flex-col">
                <h3 className="text-md font-semibold mb-1">{subpage.name}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-300 flex-grow">
                  {subpage.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Blog Posts
        </h2>
        <div>
          <TaggedBlogPosts
            tags={["pickleball"]}
            // limit={5}
          />
        </div>
      </div>
    </section>
  );
}
