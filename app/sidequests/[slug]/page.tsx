import { notFound } from "next/navigation";
import MusicContent from "@/components/sidequests/MusicContent";
import PhotographyContent from "@/components/sidequests/PhotographyContent";
import TravelContent from "@/components/sidequests/TravelContent";
import WritingContent from "@/components/sidequests/WritingContent";
import ScribbleEffect from "@/components/scribble-effect";

const sidequestData: Record<
  string,
  { title: string; description: React.ReactNode; content: React.ReactNode }
> = {
  music: {
    title: "Music",
    description: "Original Tracks & Reimagines by Me",
    content: <MusicContent />,
  },
  photography: {
    title: "Photography",
    description: "Through My Lens",
    content: <PhotographyContent />,
  },
  travel: {
    title: "Travel",
    description: "Exploring The World",
    content: <TravelContent />,
  },
  writing: {
    title: "Writing",
    description: <ScribbleEffect text="Written Pieces by Me" />,
    content: <WritingContent />,
  },
};

export default async function SidequestTemplate({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sidequest = sidequestData[slug];

  // If someone navigates to a slug that doesn't exist, show the 404 page
  if (!sidequest) {
    notFound();
  }

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">
        {sidequest.title}
      </h1>
      <h2 className="font-semibold text-lg mb-8 tracking-tight">
        {sidequest.description}
      </h2>
      {/* This renders the unique content body for the specific sidequest */}
      <div className="mt-8">{sidequest.content}</div>
    </section>
  );
}
