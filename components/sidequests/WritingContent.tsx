import { Sidequest } from "@/interfaces/sidequest";
import ImageCard from "@/components/image-card";

const sidequestPages: Sidequest[] = [
  {
    name: "Kodikion.",
    slug: "https://kodikion.substack.com",
    imagePath: "/images/kodikion.webp",
  },
];

export default function WritingContent() {
  return (
    <>
      <article className="prose">
        <p>I absolutely love writing and sharing my thoughts.</p>
        <p>
          I haver a blog in Substack called, Kodikion. On that blog, I try to
          focus on tech topics since it is a huge passion of mine. From time to
          time I might drift and write about something else that piques my
          interest.
        </p>
        <p>
          My biggest influences in writing come from The Verge & The New Yorker.
          Fun fact, the artwork (which is AI generated if you haven't noticed)
          is influenced by the visual style of The New Yorker. At least the idea
          of it.
        </p>
        <p>You can visit my blog below:</p>
      </article>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {sidequestPages.map((page) => {
          const isExternal = page.slug.startsWith("http");
          return (
            <ImageCard
              key={page.slug}
              href={isExternal ? page.slug : `/sidequests/${page.slug}`}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              imageSrc={page.imagePath}
              altText={page.name}
              title={page.name}
            />
          );
        })}
      </div>
    </>
  );
}
