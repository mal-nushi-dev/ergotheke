import { Metadata } from "next";
import { safeString } from "@/utils/safe-string";
import SidequestPage from "@/components/sidequest-page";
import PingPongText from "@/components/pickleball-effect";
import { sidequestSubpages } from "@/data/sidequests/pickleball/subpages";

export const metadata: Metadata = {
  title: "Pickleball",
  description: "My pickleball equipment and favorite courts.",
};

export default function PickleballPage() {
  return (
    <SidequestPage
      title={safeString(metadata.title)}
      description={safeString(metadata.description)}
      tags={["pickleball", "pickleball_page"]}
      subpages={sidequestSubpages}
      baseHref="/sidequests/pickleball"
      HeroText={
        <PingPongText
          text={safeString(metadata.description)}
          targetWord="courts"
          targetLetter="o"
          className="mb-8 text-neutral-600 dark:text-neutral-400"
        />
      }
    />
  );
}
