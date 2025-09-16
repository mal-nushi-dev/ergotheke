import type { Metadata } from "next";
import { GearSubpages } from "@/data/sidequests/pickleball/gear-subpages"; // Subpages for each gear item
import { GearListPage } from "@/components/gear/gear-list-page";

// SEO metadata
export const metadata: Metadata = {
  title: "My Pickleball Gear",
  description: "A look at my current setup.",
};

// Display the gear items
export default function GearPage() {
  return (
    <GearListPage
      title="My Pickleball Gear"
      description="A look at my current setup."
      basePath="/sidequests/pickleball/pickleball_gear"
      items={GearSubpages}
    />
  );
}
