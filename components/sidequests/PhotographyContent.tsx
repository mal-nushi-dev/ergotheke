import { Sidequest } from "@/interfaces/sidequest";
import ImageCard from "@/components/image-card";

const sidequestPages: Sidequest[] = [
  {
    name: "Instagram",
    slug: "https://www.instagram.com/malspixelempire/",
    imagePath: "/images/instagram.jpeg",
  },
];

export default function PhotographyContent() {
  return (
    <>
      <article className="prose">
        <p>
          I have a DSLR, but since I always carry my phone with me, I tend to
          take more pictures using my iPhone 15 Plus.
        </p>
        <p>
          I take photos for fun. Usually I capture whatever catches my eye
          during the day (which is usually architecture) and do some edits
          through either my phone or through my computer.
        </p>
        <p>
          I plan on uploading the pictures here through Instagram's API, but
          until then, here is a link to my Instagram page:
        </p>
      </article>
      <div className="mt-8">
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
