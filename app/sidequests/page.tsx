import Link from "next/link";
import Image from "next/image";
import { Sidequest } from "@/interfaces/sidequest";
import TypingEffect from "@/components/typing-effect";

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

function SidequestCard({ page }: { page: Sidequest }) {
  return (
    <Link
      href={`/sidequests/${page.slug}`}
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

export default function SidequestsPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">
        {metadata.title}
      </h1>
      <h2 className="font-semibold text-lg mb-8 tracking-tight">
        {metadata.description.split("compile")[0]}
        <TypingEffect text="compile" />
      </h2>
      <div>
        {sidequestPages.map((page) => (
          <SidequestCard key={page.slug} page={page} />
        ))}
      </div>
    </section>
  );
}
