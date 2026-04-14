import MediaCard from "@/components/media-card";

interface ImageCardProps {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
  target?: string;
  rel?: string;
  imagePriority?: boolean;
}

export default function ImageCard({
  href,
  imageSrc,
  altText,
  title,
  target,
  rel,
  imagePriority,
}: ImageCardProps) {
  return (
    <MediaCard
      href={href}
      imageSrc={imageSrc}
      altText={altText}
      title={title}
      target={target}
      rel={rel}
      imagePriority={imagePriority}
      imageWidth={800}
      imageHeight={400}
      cardClassName="w-full"
      imageClassName="w-full h-48"
      titleClassName="text-xl"
    />
  );
}
