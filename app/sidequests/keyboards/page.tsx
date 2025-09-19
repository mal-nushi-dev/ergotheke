import { Metadata } from "next";
import { safeString } from "@/utils/safe-string";
import SidequestPage from "@/components/sidequest-page";
import { sidequestSubpages } from "@/data/sidequests/keyboards/subpages";

export const metadata: Metadata = {
  title: "Keyboards",
  description:
    "I have a passion for keyboards, from mechanical to digital. They are an essential part of my creative process.",
};

export default function KeyboardsPage() {
  return (
    <SidequestPage
      title={safeString(metadata.title)}
      description={safeString(metadata.description)}
      tags={["keyboards", "keyboards_page"]}
      subpages={sidequestSubpages}
      baseHref="/sidequests/keyboards"
      HeroText={undefined}
    />
  );
}
