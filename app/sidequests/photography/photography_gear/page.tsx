import Link from "next/link";

const photographyGearSubpages = [
  {
    name: "Sony DSLR-A300",
    slug: "sony_dslr_a300",
    description: "An entry-level DSLR with live view and fast autofocus.",
  },
  {
    name: "Minolta X-370",
    slug: "minolta_x_370",
    description: "A classic Japanese 35mm film SLR.",
  },
];

export const metadata = {
  title: "My Photography Gear",
  description: "Details about my photography setup and accessories.",
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
        {photographyGearSubpages.map((subpage) => (
          <li key={subpage.slug}>
            <Link
              href={`/sidequests/photography/photography_gear/${subpage.slug}`}
            >
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
