import Link from "next/link";
import { safeString } from "@/utils/safe-string";
import type { GearItem } from "@/interfaces/gear-item";

export function GearListPage({
  title,
  description,
  basePath,
  items,
}: {
  title: string;
  description: string;
  /** e.g. "/sidequests/photography/photography_gear" */
  basePath: string;
  items: GearItem[];
}) {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">{title}</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        {description}
      </p>

      <div>
        {items.map((subpage) => {
          const external = safeString(subpage.externalUrl);
          const href =
            external || `${basePath}/${encodeURIComponent(subpage.slug)}`;
          const sharedClassName = "block mb-4 group";
          const inner = (
            <div className="flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 tracking-tight">
                {safeString(subpage.name)}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {safeString(subpage.description)}
              </p>
            </div>
          );

          return external ? (
            <a
              key={subpage.slug}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={sharedClassName}
            >
              {inner}
            </a>
          ) : (
            <Link key={subpage.slug} href={href} className={sharedClassName}>
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
