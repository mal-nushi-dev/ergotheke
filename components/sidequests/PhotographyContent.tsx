import Link from "next/link";
import Image from "next/image";
import { Sidequest } from "@/interfaces/sidequest";

const sidequestPages: Sidequest[] = [
  {
    name: "Instagram",
    slug: "https://www.instagram.com/malspixelempire/",
    imagePath: "/images/instagram.jpeg",
  },
];

function SidequestCard({ page }: { page: Sidequest }) {
  // Determine if the link is external so we can open it in a new tab
  const isExternal = page.slug.startsWith("http");
  const href = isExternal ? page.slug : `/sidequests/${page.slug}`;

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group relative block w-full mb-6 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800"
    >
      <Image
        src={page.imagePath}
        alt={page.name}
        width={800}
        height={400}
        className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      {/* Dark overlay that fades in on hover to simulate the opacity change smoothly */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
      {/* Gradual blur and gradient overlay */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-md [-webkit-mask-image:linear-gradient(to_top,black,transparent)] [mask-image:linear-gradient(to_top,black,transparent)]" />
      {/* Text layer */}
      <div className="absolute bottom-0 w-full p-4">
        <span className="text-white font-bold text-xl tracking-tight">
          {page.name}
        </span>
      </div>
    </Link>
  );
}

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
        {sidequestPages.map((page) => (
          <SidequestCard key={page.slug} page={page} />
        ))}
      </div>
    </>
  );
}
