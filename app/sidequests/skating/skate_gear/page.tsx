import Link from "next/link";
import type { Metadata } from "next";
import React from "react";
import { safeString } from "@/app/utils/safeString";

/**
 * Interface representing a skate gear item
 * @property {string} name - Display the name of the gear
 * @property {string} slug - URL slug for routing
 * @property {string} description - Short description of the gear
 * @property {string} externalUrl - Optional external url if the item links to an external site
 */
interface SkateGearItem {
  name: string;
  slug: string;
  description: string;
  externalUrl?: string;
}

const skatingGearSubpages: SkateGearItem[] = [
  {
    name: "The Original GRLSWIRL x Carver Surfskate",
    slug: "grlswirl_x_carver",
    description: "My very first surfskate and my daily rider.",
  },
  {
    name: 'Penny Ocean Mist 22" Penny Board',
    slug: "pennyboard_ocean_mist",
    description:
      "Bought this bad boy for traveling. Never once took it for traveling.",
  },
  {
    name: "Powell / Peralta / Rodriguez Skull and Sword Skateboard",
    slug: "powell_peralta",
    description:
      "A cool 80's style board that is configured as a skatepark board, but also a cruiser.",
  },
  {
    name: "Fila Legacy Pro 84 Roller Blade",
    slug: "fila_legacy_pro",
    description: "My very first pair of roller skates (thank you Sally).",
  },
  {
    name: "187 Killer Pads 6-Pack Set",
    slug: "killer_pads",
    description: "Can never be too careful.",
  },
  {
    name: "Protec Classic Skateboard Helmet CPSC",
    slug: "protec_helmet",
    description: "Can most definitely never be too careful.",
  },
];

// Page metadata for SEO
export const metadata: Metadata = {
  title: "My Skating Gear",
  description: "Details about my skateboard setup and accessories.",
};

/**
 * GearPage component - Renders the skate gear listing page
 *
 * Displays a responsive grid of skate equipment with links to either
 * external product pages or internal detail pages.
 *
 * @returns {React.JSX.Element} The rendered skate gear page
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
        {skatingGearSubpages.map((subpage) => (
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
              <Link href={`/sidequests/skating/skate_gear/${subpage.slug}`}>
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
