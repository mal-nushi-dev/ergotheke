import Link from "next/link";
import SkateText from "app/components/SkateEffect";
import TaggedBlogPosts from "app/components/TaggedBlogPosts";

/**
 * Interface & class for the structure of skating subpages
 * @property {string} name - Display name of the subpage
 * @property {string} slug - URL slug for routing
 * @property {string} description - Short description of the subpage content
 */
const skatingSubpages: {
  name: string;
  slug: string;
  description: string;
}[] = [
  {
    name: "My Gear",
    slug: "skate_gear",
    description: "A look at my current setup.",
  },
  {
    name: "Favorite Spots",
    slug: "skate_spots",
    description: "Best places I've skated.",
  },
];

/**
 * Metadata for the Skating page. This object is used by Next.js to set the page title and description for SEO and browser display.
 */
export const metadata = {
  title: "Skating",
  description:
    "My skate equipment and favorite spots. You will usually see me with a surfskate, but recently I have picked up inline skates. Completely different experience, but so fun!",
};

/**
 * Skating page component that displays the main skating hub with subpage navigation
 * and skateboarding text effect applied to the description.
 * @returns {React.JSX.Element} - Rendered Skating page component.
 */
export default function SkatingPage(): React.JSX.Element {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        {metadata.title}
      </h1>

      <SkateText
        text={metadata.description}
        skateWord="skate"
        className="mb-8 text-neutral-600 dark:text-neutral-400"
      />

      <h2 className="mb-4 text-xl font-semibold tracking-tight">Sub-Topics</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {skatingSubpages.map((subpage) => (
          <li key={subpage.slug}>
            <Link href={`/sidequests/skating/${subpage.slug}`}>
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
            tags={[
              "skateboard",
              "skating",
              "surfskate",
              "inline skating",
              "inline skates",
              "rollerblading",
              "rollerblades",
              "roller skating",
              "roller skates",
              "penny boards",
              "carver",
              "skating_page"
            ]}
            // limit={5}
          />
        </div>
      </div>
    </section>
  );
}
