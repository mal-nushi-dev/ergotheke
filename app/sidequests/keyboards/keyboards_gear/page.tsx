import type { Metadata } from "next";
import { GearSubpages } from "@/data/sidequests/keyboards/gear-subpages"; // Subpages for each gear item
import { GearListPage } from "@/components/gear/gear-list-page";

// SEO metadata
export const metadata: Metadata = {
  title: "My Keyboards",
  description: "These are they keyboards I use at home, and at work.",
};

// Display the gear items
export default function GearPage() {
  return (
    <GearListPage
      title="My Keyboards"
      description="These are they keyboards I use at home, and at work."
      basePath="/sidequests/keyboards/keyboards_gear"
      items={GearSubpages}
    />
  );
}
