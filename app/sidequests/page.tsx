import { Sidequest } from "@/interfaces/sidequest";
import TypingEffect from "@/components/typing-effect";
import ImageCard from "@/components/image-card";

export const metadata = {
  title: "Sidequests",
  description: "Because not everything has to compile",
};

const sidequestPages: Sidequest[] = [
  {
    name: "Music",
    slug: "music",
    imagePath: "/images/music.png",
  },
  {
    name: "Photography",
    slug: "photography",
    imagePath: "/images/photography.png",
  },
  {
    name: "Travel",
    slug: "travel",
    imagePath: "/images/travel.png",
  },
  {
    name: "Writing",
    slug: "writing",
    imagePath: "/images/writing.png",
  },
];

export default function SidequestsPage() {
  return (
    <section>
      <h1 className="page-heading">{metadata.title}</h1>
      <h2 className="page-subheading">
        {metadata.description.split("compile")[0]}
        <TypingEffect text="compile" />
      </h2>
      <div>
        {sidequestPages.map((page) => (
          <ImageCard
            key={page.slug}
            href={`/sidequests/${page.slug}`}
            imageSrc={page.imagePath}
            altText={page.name}
            title={page.name}
          />
        ))}
      </div>
    </section>
  );
}
