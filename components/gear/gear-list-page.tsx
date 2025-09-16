import Link from "next/link";
import { safeString } from "@/utils/safe-string";
import { GearCard } from "@/components/gear/gear-card"; // Displays the cards for each gear item
import type { GearItem } from "@/interfaces/gear-item";

/**
 * GearListPage is a reusable page section component that renders a grid of gear items.
 *
 * @param {Object} props - Component props.
 * @param {string} props.title - Title to display at the top of the section.
 * @param {string} props.description - A descriptive paragraph displayed below the title.
 * @param {string} props.basePath - The base path used to construct internal links for gear items (e.g. "/sidequests/photography/photography_gear").
 * @param {GearItem[]} props.items - An array of gear items to render in the grid.
 *
 * @returns {JSX.Element} A section element containing a title, description, and a responsive grid of gear cards.
 *
 * @example
 * <GearListPage
 *    title="My Photography Gear"
 *    description="Details about my photography setup and accessories."
 *    basePath="/sidequests/photography/photography_gear"
 *    items={GearSubpages}
 *  />
 */
export function GearListPage({
  title,
  description,
  basePath,
  items,
}: {
  title: string;
  description: string;
  /** e.g. "/sidequests/photography/photography_gear" */
  basePath: string;
  items: GearItem[];
}) {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">{title}</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        {description}
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {items.map((subpage) => {
          const external = safeString(subpage.externalUrl);
          const href =
            external || `${basePath}/${encodeURIComponent(subpage.slug)}`;

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
