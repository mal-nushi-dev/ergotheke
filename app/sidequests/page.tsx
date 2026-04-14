import TypingEffect from "@/components/typing-effect";
import ImageCard from "@/components/image-card";
import { sidequestPages } from "@/data/sidequests";
import { Metadata } from "next";

const title = "Sidequests";
const description = "Hobbies and other projects by Mal Nushi.";

export const metadata: Metadata = {
  title,
  description,
};

export default function SidequestsPage() {
  return (
    <section>
      <h1 className="page-heading">{title}</h1>
      <h2 className="page-subheading">
        <TypingEffect text="$ ls ./sidequests" />
      </h2>
      <div className="flex flex-col gap-6">
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
