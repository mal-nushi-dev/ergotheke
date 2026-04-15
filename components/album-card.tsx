import { Album } from "@/interfaces/music";
import MediaCard from "@/components/media-card";

export default function AlbumCard({
  album,
  priority,
}: {
  album: Album;
  priority?: boolean;
}) {
  return (
    <MediaCard
      href={`/sidequests/music/${album.slug}`}
      imageSrc={album.coverImagePath}
      altText={`${album.title} cover`}
      title={album.title}
      imageFill
      imageSizes="(max-width: 768px) 50vw, 33vw"
      cardClassName="w-full aspect-square"
      overlayClassName="z-10"
      gradientClassName="from-black/60 z-10"
      titleContainerClassName="z-20"
      titleClassName="text-lg sm:text-xl line-clamp-2"
      viewTransitionName={`album-cover-${album.slug}`}
      imagePriority={priority}
    />
  );
}
