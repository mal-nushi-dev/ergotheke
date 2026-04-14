import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { albumsData } from "@/data/music";
import { Metadata } from "next";
import type { Album } from "@/interfaces/music";
import { ViewTransition } from "react";

const albumsBySlug = new Map(albumsData.map((album) => [album.slug, album]));

function getAlbumBySlug(slug: string) {
  return albumsBySlug.get(slug);
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// This generates static paths at build time for all your albums
export function generateStaticParams() {
  return albumsData.map((album) => ({
    slug: album.slug,
  }));
}

// This dynamically generates metadata (like the browser tab title) based on the album
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);

  if (!album) {
    return {
      title: "Album Not Found",
    };
  }

  return {
    title: `${album.title} | Sidequests`,
    description: album.description,
    openGraph: {
      title: `${album.title} | Sidequests`,
      description: album.description,
      images: [{ url: album.coverImagePath }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${album.title} | Sidequests`,
      description: album.description,
      images: [album.coverImagePath],
    },
  };
}

function AlbumHeader({ album }: { album: Album }) {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
      <div className="shrink-0">
        <ViewTransition name={`album-cover-${album.slug}`}>
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 overflow-hidden rounded-lg shadow-md surface-card">
            <Image
              src={album.coverImagePath}
              alt={`${album.title} cover`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 288px"
              priority // Loads the cover image immediately
            />
          </div>
        </ViewTransition>
      </div>

      <div className="flex flex-col justify-end pb-4">
        <p className="body-subtext mb-2 uppercase tracking-widest">Album</p>
        <h1 className="page-heading">{album.title}</h1>
        <p className="page-subheading mb-4 text-neutral-600 dark:text-neutral-300">
          {album.description}
        </p>
        {album.releaseYear && (
          <div className="body-subtext flex items-center">
            <span>{album.releaseYear}</span>
            <span className="mx-2">•</span>
            <span>{album.tracks.length} tracks</span>
          </div>
        )}
      </div>
    </div>
  );
}

function TrackList({ tracks }: { tracks: Album["tracks"] }) {
  if (!tracks || tracks.length === 0) return null;

  return (
    <div className="mt-4">
      <h2 className="page-subheading mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">
        Tracklist
      </h2>
      <ol className="flex flex-col gap-2">
        {tracks.map((track, index) => {
          const isTrackComplete = track.isComplete ?? true;
          const trackKey = track.id ?? `${track.title}-${index}`;

          return (
            <li
              key={trackKey}
              className={`flex items-center justify-between p-3 rounded-md transition-all ${
                isTrackComplete
                  ? "hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                  : "bg-neutral-100/50 dark:bg-neutral-900/30 opacity-60"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="w-6 text-right text-neutral-400 dark:text-neutral-500 font-mono text-sm">
                  {index + 1}
                </span>
                <span
                  className={`font-medium ${
                    isTrackComplete
                      ? "text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-500 dark:text-neutral-500"
                  }`}
                >
                  {track.title}
                </span>
              </div>
              {track.duration && (
                <span
                  className={`text-sm ${
                    isTrackComplete
                      ? "text-neutral-500 dark:text-neutral-400"
                      : "text-neutral-500 dark:text-neutral-500"
                  }`}
                >
                  {track.duration}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default async function AlbumPage({ params }: Props) {
  const { slug } = await params;
  // Find the album that matches the slug in the URL
  const album = getAlbumBySlug(slug);

  // If someone navigates to an invalid slug, show the default 404 page
  if (!album) {
    notFound();
  }

  return (
    <section>
      <Link
        href="/sidequests/music"
        className="inline-flex items-center text-sm mb-8 muted-link"
      >
        ← Back
      </Link>
      <AlbumHeader album={album} />
      <TrackList tracks={album.tracks} />
    </section>
  );
}
