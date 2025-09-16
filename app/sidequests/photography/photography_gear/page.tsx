import Link from "next/link";
import { safeString } from "@/utils/safe-string";
import { GearSubpages } from "@/data/sidequests/photography/gear-subpages"; // Subpages defined here
import { GearCard } from "@/components/gear/gear-card"; // Shows the cards for each gear

export const metadata = {
  title: "My Photography Gear",
  description: "Details about my photography setup and accessories.",
};

/**
 * GearPage component.
 *
 * The main page for displaying a grid of gear items.
 * It pulls gear data from `GearSubpages` and renders a list of `GearCard` components.
 * Each card is wrapped in either a Next.js `<Link>` for internal navigation or an `<a>` tag for external links.
 *
 * @returns {React.JSX.Element} The rendered gear page containing the gear list.
 */
export default function GearPage(): React.JSX.Element {
  const pageTitle = "My Photography Gear";
  const pageDescription = "Details about my photography setup and accessories.";

  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        {pageTitle}
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        {pageDescription}
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {GearSubpages.map((subpage) => {
          const external = safeString(subpage.externalUrl);
          const href =
            external ||
            `/sidequests/photography/photography_gear/${encodeURIComponent(
              subpage.slug
            )}`;

          return (
            <li key={subpage.slug}>
              {external ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <GearCard
                    name={subpage.name}
                    description={subpage.description}
                  />
                </a>
              ) : (
                <Link href={href}>
                  <GearCard
                    name={subpage.name}
                    description={subpage.description}
                  />
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
