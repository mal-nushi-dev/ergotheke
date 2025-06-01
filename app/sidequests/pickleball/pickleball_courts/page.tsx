import { pickleballCourts } from "./pickleballCourts";
import type { Metadata } from "next";
import React from "react";

/**
 * Interface defining the structuree of a pickleball court location
 * @property {string} name - The name of the pickleball court
 * @property {string} href - The link to the pickleball court
 * @property {string} state - The state which the pickleball court resides
 */
interface PickelballCourt {
  name: string;
  href: string;
  state: string;
}

/**
 * Props interface for the PickleballSpotItem component
 * @property {string} href - URL to the pickleball court's website
 * @property {React.ReactNode} children - Child elements (typically the spot name)
 */
interface PickleballCourtItemProps {
  href: string;
  children: React.ReactNode;
}

// Page metadata for SEO
export const metadata: Metadata = {
  title: "Pickleball Courts",
  description: "Best courts I have played in",
};

/**
 * Component for rendering a single pickleball court as a list item
 * Creates a list item with an external link to the court's website
 * @param {PickleballCourtItemProps} props - Component properties
 * @param {string} props.href - URL to the court's website
 * @param {React.ReactNode} props.children - Content to render (typically court name)
 * @returns {React.JSX.Element} Rendered list item with external link
 */
const PickleballCourtItem = ({
  href,
  children,
}: PickleballCourtItemProps): React.JSX.Element => (
  <li className="text-blue-700 dark:text-blue-500 font-medium hover:underline">
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </li>
);

/**
 * Page component displaying pickleball court locations organized by state
 * Filters and groups courts by state, currently featuring Michigan and North Carolina
 * @returns {React.JSX.Element} Rendered page of pickleball courts
 */
export default function Page(): React.JSX.Element {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        {metadata.title?.toString() ?? ""}
      </h1>

      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        {metadata.description?.toString() ?? ""}
      </p>

      <h2 className="font-semibold text-lg mb-2 tracking-tight">Michigan 🇺🇸</h2>
      <ul>
        {pickleballCourts
          .filter((court) => court.state === "MI")
          .map((court) => (
            <PickleballCourtItem key={court.href} href={court.href}>
              {court.name}
            </PickleballCourtItem>
          ))}
      </ul>

      <br />

      <h2 className="font-semibold text-lg mb-2 tracking-tight">
        North Carolina 🇺🇸
      </h2>
      <ul>
        {pickleballCourts
          .filter((court) => court.state === "NC")
          .map((court) => (
            <PickleballCourtItem key={court.href} href={court.href}>
              {court.name}
            </PickleballCourtItem>
          ))}
      </ul>

      <div className="my-8"></div>
    </section>
  );
}
