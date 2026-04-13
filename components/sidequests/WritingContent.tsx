import Link from "next/link";
import Image from "next/image";
import { Sidequest } from "@/interfaces/sidequest";

const sidequestPages: Sidequest[] = [
  {
    name: "Kodikion.",
    slug: "https://kodikion.substack.com",
    imagePath: "/images/kodikion.webp",
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
        {sidequestPages.map((page) => (
          <SidequestCard key={page.slug} page={page} />
        ))}
      </div>
    </>
  );
}
