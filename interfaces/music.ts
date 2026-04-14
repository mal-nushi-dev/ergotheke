export interface Track {
  id?: string;
  title: string;
  duration?: string;
  url?: string;
  isComplete?: boolean;
}

export interface Album {
  slug: string;
  title: string;
  description: string;
  coverImagePath: string;
  releaseYear?: string;
  tracks: Track[];
}
