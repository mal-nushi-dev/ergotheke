import type { Metadata } from "next";
import { GearSubpages } from "@/data/sidequests/skating/gear-subpages"; // Subpages for each gear item
import { GearListPage } from "@/components/gear/gear-list-page";

// SEO metadata
export const metadata: Metadata = {
  title: "My Skating Gear",
  description: "Details about my skateboard setup and accessories.",
};

// Display the gear items
export default function GearPage() {
  return (
    <GearListPage
      title="My Skating Gear"
      description="Details about my skateboard setup and accessories."
      basePath="/sidequests/skating/skate_gear"
      items={GearSubpages}
    />
  );
}
