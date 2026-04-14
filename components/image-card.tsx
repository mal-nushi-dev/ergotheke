import Link from "next/link";
import Image from "next/image";

interface ImageCardProps {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
  target?: string;
  rel?: string;
}

export default function ImageCard({
  href,
  imageSrc,
  altText,
  title,
  target,
  rel,
}: ImageCardProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className="group relative block w-full rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800"
    >
      <Image
        src={imageSrc}
        alt={altText}
        width={800}
        height={400}
        className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      {/* Dark overlay that fades in on hover to simulate the opacity change smoothly */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
      {/* Gradual blur and gradient overlay */}
      <div className="absolute bottom-0 w-full h-1/2 bg-linear-to-t from-black/50 to-transparent backdrop-blur-md [-webkit-mask-image:linear-gradient(to_top,black,transparent)] mask-[linear-gradient(to_top,black,transparent)]" />
      {/* Text layer */}
      <div className="absolute bottom-0 w-full p-4">
        <span className="text-white font-bold text-xl tracking-tight">
          {title}
        </span>
      </div>
    </Link>
  );
}
