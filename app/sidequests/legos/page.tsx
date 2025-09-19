import SidequestPage from "@/components/sidequest-page";
import LegoWordBuilder from "@/components/lego-word-builder";
import { sidequestSubpages } from "@/data/sidequests/legos/subpages";

export const metadata = {
  title: "Legos",
  description: `I know... it is kind of lame, but I digitally build legos. But when you lack space and the will to spend funds on 
    the lego pieces then there is no better alternative. Maybe someday I will take the time. Actually, as I am typing this I kind of
    want to do it now.`,
};

export default function LegosPage(): React.JSX.Element {
  const description = metadata.description ?? "";
  const buildPattern = /(build)/i;
  const parts = description.split(buildPattern);

  // 👇 Build the custom "HeroText" node
  const HeroText = (
    <h2 className="mb-8 text-neutral-600 dark:text-neutral-400">
      {parts.map((part, index) =>
        part.toLowerCase() === "build" ? (
          <LegoWordBuilder key={index} word={part} />
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </h2>
  );

  return (
    <SidequestPage
      title={metadata.title as string}
      description={description}
      tags={["legos", "lego_page"]}
      subpages={sidequestSubpages}
      baseHref="/sidequests/legos"
      HeroText={HeroText}
    />
  );
}
