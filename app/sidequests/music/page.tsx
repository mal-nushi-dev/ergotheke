import { Metadata } from "next";
import { safeString } from "@/utils/safe-string";
import SidequestPage from "@/components/sidequest-page";
import { sidequestSubpages } from "@/data/sidequests/music/subpages";

export const metadata: Metadata = {
  title: "Music",
  description:
    "I grew up with a very musical dad who introduced me to all types of genres. It has become part of my life since.",
};

export default function MusicPage() {
  return (
    <SidequestPage
      title={safeString(metadata.title)}
      description={safeString(metadata.description)}
      tags={["music", "music_page"]}
      subpages={sidequestSubpages}
      baseHref="/sidequests/music"
    />
  );
}
