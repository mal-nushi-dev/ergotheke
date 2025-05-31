import Link from "next/link";
import SkateText from "app/components/SkateEffect";
// import BlogPosts from 'app/components/posts';

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
  description: "My skate equipment and favorite spots",
};

/**
 * Skating page component that displays the main skating hub with subpage navigation
 * and skateboarding text effect applied to the description.
 * @returns {React.JSX.Element} - Rendered Skating page component.
 */
export default function SkatingPage() {
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
        <p className="mb-4">
          Working on getting this component set-up. I need to configure my rss
          feed route to bring in tags and then have this component only display
          posts with a specific tag. Now that I am thinking about it, I should
          do a blog post about implementing this blog feature. Woah.
        </p>
        {/* <BlogPosts /> */}
      </div>
    </section>
  );
}
