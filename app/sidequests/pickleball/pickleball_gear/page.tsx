import Link from "next/link";
import type { Metadata } from "next";
import React from "react";
import { safeString } from "@/app/utils/safeString";

/**
 * Interface representing a gear item
 * @property {string} name - Display name of the gear
 * @property {string} slug - URL slug for routing
 * @property {string} description - Short description of the gear
 * @property {string} externalUrl - Optional external URL if the item links to an external site
 */
interface GearItem {
  name: string;
  slug: string;
  description: string;
  externalUrl?: string;
}

/**
 * Array of gear items that represent subpages (or external links)
 * Each item includes a name, slug, description, and optionally an external URL.
 */
const GearSubpages: GearItem[] = [
  {
    name: "Vatic Pro Prism Flash Carbon Fiber 16MM - Foam Injected Walls",
    slug: "vatic_pro_prism",
    description: "I slice well with this bad boy.",
  },
];

// SEO metadata
export const metadata: Metadata = {
  title: "My Pickleball Gear",
  description: "A look at my current setup.",
};

/**
 * GearCard component
 *
 * A presentational component that displays the visual card for a single gear item.
 * It renders a styled container with the gear's name and description.
 *
 * This component does not handle linking — it is meant to be wrapped by either
 * a Next.js `<Link>` for internal navigation or an `<a>` tag for external links.
 *
 * @param {object} props - Component props
 * @param {string} props.name - The display name of the gear item
 * @param {string} props.description - A short description of the gear item
 *
 * @returns {React.JSX.Element} A styled card element showing the gear details
 *
 * @example
 * <GearCard
 *   name="Penny Ocean Mist 22\" Penny Board"
 *   description="Bought this bad boy for traveling. Never once took it for traveling."
 * />
 */
function GearCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer h-full flex flex-col">
      <h3 className="text-md font-semibold mb-1">{safeString(name)}</h3>
      <p className="text-xs text-neutral-500 dark:text-neutral-300 flex-grow">
        {safeString(description)}
      </p>
    </div>
  );
}

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
  const pageTitle = "My Pickleball Gear";
  const pageDescription = "A look at my current setup.";

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
            `/sidequests/pickleball/pickleball_gear/${encodeURIComponent(
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
