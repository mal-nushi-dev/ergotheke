import TypingEffect from "@/components/typing-effect";
import ImageCard from "@/components/image-card";
import { sidequestPages } from "@/data/sidequests";
import { Metadata } from "next";

const title = "Sidequests";
const description = "Because not everything has to compile";

export const metadata: Metadata = {
  title,
  description,
};

export default function SidequestsPage() {
  return (
    <section>
      <h1 className="page-heading">{title}</h1>
      <h2 className="page-subheading">
        {description.split("compile")[0]}
        <TypingEffect text="compile" />
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
