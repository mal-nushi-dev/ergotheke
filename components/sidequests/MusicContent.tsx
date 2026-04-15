import { albumsData } from "@/data/music";
import AlbumCard from "@/components/album-card";

export default function MusicContent() {
  return (
    <>
      <article className="prose">
        <p>
          I create original tracks and reimagine existing ones, sharing my
          musical journey here.
        </p>
        <p>
          Here are some of the upcoming projects and albums I am excited to
          share soon:
        </p>
      </article>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {albumsData.map((album) => (
          <AlbumCard key={album.slug} album={album} />
        ))}
      </div>
    </>
  );
}
