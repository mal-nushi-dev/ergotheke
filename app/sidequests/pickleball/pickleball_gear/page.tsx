import Link from "next/link";
import type { Metadata } from "next";
import React from "react";
import { safeString } from "../../../utils/safeString";

/**
 * Interface representing a pickleball gear item
 * @property {string} name - Display the name of the gear
 * @property {string} slug - URL slug for routing
 * @property {string} description - Short description of the gear
 * @property {string} externalUrl - Optional external url if the item links to an external site
 */
interface PickelballGearItem {
  name: string;
  slug: string;
  title: string;
  description: string;
  externalUrl?: string;
}

// Collection of pickleball gear items to display
const pickleballGearSubpages: PickelballGearItem[] = [
  {
    name: "Vatic Pro Prism Flash Carbon Fiber 16MM - Foam Injected Walls",
    slug: "vatic_pro_prism",
    title: "Vatic Pro Prism Flash Carbon Fiber 16MM - Foam Injected Walls",
    description: "I slice well with this bad boy.",
  },
];
// Page metadata for SEO
export const metadata: Metadata = {
  title: "My Pickleball Gear",
  description: "A look at my current setup.",
};

/**
 * GearPage component - Renders the pickleball gear listing page
 *
 * Displays a responsive grid of pickleball equipment with links to either
 * external product pages or internal detail pages.
 *
 * @returns {React.JSX.Element} The rendered pickleball gear page
 */
export default function GearPage(): React.JSX.Element {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        {safeString(metadata.title)}
      </h1>

      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        {safeString(metadata.description)}
      </p>

      {/* Responsive grid layout for gear items */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {pickleballGearSubpages.map((subpage) => (
          <li key={subpage.slug}>
            {/* This is a conditional render: use external link if exists, otherwise use internal link */}
            {safeString(subpage.externalUrl) ? (
              <a
                href={safeString(subpage.externalUrl)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer h-full flex flex-col">
                  <h3 className="text-md font-semibold mb-1">
                    {safeString(subpage.name)}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-300 flex-grow">
                    {safeString(subpage.description)}
                  </p>
                </div>
              </a>
            ) : (
              <Link
                href={`/sidequests/pickleball/pickleball_gear/${subpage.slug}`}
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer h-full flex flex-col">
                  <h3 className="text-md font-semibold mb-1">
                    {safeString(subpage.name)}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-300 flex-grow">
                    {safeString(subpage.description)}
                  </p>
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
