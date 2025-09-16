import type { Metadata } from "next";
import { GearSubpages } from "@/data/sidequests/photography/gear-subpages"; // Subpages for each gear item
import { GearListPage } from "@/components/gear/gear-list-page";

// SEO metadata
export const metadata: Metadata = {
  title: "My Photography Gear",
  description: "Details about my photography setup and accessories.",
};

// Display the gear items
export default function GearPage() {
  return (
    <GearListPage
      title="My Photography Gear"
      description="Details about my photography setup and accessories."
      basePath="/sidequests/photography/photography_gear"
      items={GearSubpages}
    />
  );
}
