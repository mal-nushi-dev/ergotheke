import { Metadata } from "next";
import { safeString } from "@/utils/safe-string";
import SidequestPage from "@/components/sidequest-page";
import SkateText from "@/components/skate-effect";
import { sidequestSubpages } from "@/data/sidequests/skating/subpages";

export const metadata: Metadata = {
  title: "Skating",
  description:
    "My skate equipment and favorite spots. You will usually see me with a surfskate, but recently I have picked up inline skates. Completely different experience, but so fun!",
};

export default function SkatingPage() {
  return (
    <SidequestPage
      title={safeString(metadata.title)}
      description={safeString(metadata.description)}
      tags={["skating", "skating_page"]}
      subpages={sidequestSubpages}
      baseHref="/sidequests/skating"
      HeroText={
        <SkateText
          text={safeString(metadata.description)}
          skateWord="skate"
          className="mb-8 text-neutral-600 dark:text-neutral-400"
        />
      }
    />
  );
}
