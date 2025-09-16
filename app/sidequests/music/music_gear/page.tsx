import type { Metadata } from "next";
import { GearSubpages } from "@/data/sidequests/music/gear-subpages"; // Subpages for each gear item
import { GearListPage } from "@/components/gear/gear-list-page";

// SEO metadata
export const metadata: Metadata = {
  title: "My Music Gear",
  description:
    "The gear responsible for the sounds that make my neighbors think a rat's meeting its end.",
};

// Display the gear items
export default function GearPage() {
  return (
    <GearListPage
      title="My Music Gear"
      description="The gear responsible for the sounds that make my neighbors think a rat's meeting its end."
      basePath="/sidequests/music/music_gear"
      items={GearSubpages}
    />
  );
}
