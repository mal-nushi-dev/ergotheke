import { Metadata } from "next";
import { safeString } from "@/utils/safe-string";
import SidequestPage from "@/components/sidequest-page";
import FlashingText from "@/components/flashing-text";
import { sidequestSubpages } from "@/data/sidequests/photography/subpages";

export const metadata: Metadata = {
  title: "Photography",
  description: "I like taking pictures of things.",
};

export default function PhotographyPage() {
  return (
    <SidequestPage
      title={safeString(metadata.title)}
      description={safeString(metadata.description)}
      tags={["photography", "photography_page"]}
      subpages={sidequestSubpages}
      baseHref="/sidequests/photography"
      HeroText={
        <FlashingText
          text={safeString(metadata.description)}
          flashWord="things"
          className="mb-8 text-neutral-600 dark:text-neutral-400"
        />
      }
    />
  );
}
