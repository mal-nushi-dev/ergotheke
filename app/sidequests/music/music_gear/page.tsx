import Link from "next/link";

const musicGearSubpages = [
  {
    name: "Yamaha F335 Acoustic Guitar",
    slug: "y_f335",
    description: "Far from the best acoustic guitar, but hey, it works for me.",
  },
  {
    name: "Epiphone ES-335 Semi-Hollowbody Electric Guitar",
    slug: "es-335",
    description:
      "The very first guitar pops ever gave to me. I cherish it like it is my kid.",
  },
  {
    name: "PRS SE Custom 24 Solid-Body Electric Guitar",
    slug: "prs_se_custom_24",
    description: "Very versatile and so comfortable to play.",
  },
  {
    name: "Yamaha RBX170 Electric Bass",
    slug: "y_rbx170",
    description:
      "The very first bass pops ever gave to me. Cheaper than my Viola bass, but packs a mean punch.",
  },
  {
    name: "Epiphone Viola Bass",
    slug: "e_viola",
    description: "Honestly, I am just a Paul McCartney fan.",
  },
  {
    name: "Epiphone MM-20 Acoustic Mandolin",
    slug: "e_mm-20",
    description: "Talk about blisters on your fingers...",
  },
];

export const metadata = {
  title: "My Music Gear",
  description:
    "The gear responsible for the sounds that make my neighbors think a rat’s meeting its end.",
};

export default function GearPage() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        {metadata.title}
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        {metadata.description}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {musicGearSubpages.map((subpage) => (
          <li key={subpage.slug}>
            <Link href={`/sidequests/music/music_gear/${subpage.slug}`}>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer h-full flex flex-col">
                <h3 className="text-md font-semibold mb-1">{subpage.name}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-300 flex-grow">
                  {subpage.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
