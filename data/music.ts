import { Album } from "@/interfaces/music";

export const albumsData: Album[] = [
  {
    slug: "george-harrison-cover-album",
    title: "George Harrison Cover Album",
    description: "My take on some of my favorite George Harrison hits.",
    coverImagePath: "/images/georgeHarrisonCoverAlbum.webp",
    releaseYear: "Coming Soon",
    tracks: [
      { title: "My Sweet Lord", isComplete: false },
      { title: "Isn't It A Pity", isComplete: false },
      { title: "I Me Mine", isComplete: false },
      { title: "If Not For You", isComplete: false },
      { title: "Something", isComplete: false },
      { title: "Give Me Love (Give Me Peace on Earth)", isComplete: false },
      { title: "Here Comes The Sun", isComplete: false },
    ],
  },
  {
    slug: "paul-mccartney-cover-album",
    title: "Paul McCartney Cover Album",
    description: "A tribute to Sir Paul's greatest Beatles tracks.",
    coverImagePath: "/images/paulMcCartneyCoverAlbum.webp",
    releaseYear: "Coming Soon",
    tracks: [
      { title: "Yesterday", isComplete: false },
      { title: "The Long and Winding Road", isComplete: false },
      { title: "Blackbird", isComplete: false },
      { title: "I'm Looking Through You", isComplete: false },
    ],
  },
];
