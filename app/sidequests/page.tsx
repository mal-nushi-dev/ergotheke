import Link from "next/link";
import TypingEffect from "@/components/typing-effect";
import { sidequests } from "@/data/sidequests/sidequests";

export const metadata = {
  title: "Sidequests",
  description: "Because not everything has to compile",
};

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
        {sidequests.map((item) => (
          <Link
            key={item.slug}
            href={`/sidequests/${item.slug}`}
            className="block mb-4 group"
          >
            <div className="flex items-center gap-1">
              <span className="text-neutral-400 dark:text-neutral-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                →
              </span>
              <p className="text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 tracking-tight">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
