"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/lab", name: "lab" },
  { path: "/blog", name: "blog" },
  { path: "/sidequests", name: "sidequests" },
];

export function Navbar() {
  const pathname = usePathname() || "/";

  return (
    <aside className="-ml-2 mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex items-start relative fade md:overflow-auto scroll-pr-6"
          id="nav"
          aria-label="Main Navigation"
        >
          <div className="flex pr-10">
            {navItems.map(({ path, name }) => {
              // Highlight the home path strictly if it's "/", otherwise highlight if the pathname starts with the sub-path (e.g., nested blog routes)
              const isActive =
                path === "/" ? pathname === "/" : pathname.startsWith(path);

              return (
                <Link
                  key={path}
                  href={path}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center relative py-1 px-2 m-1 ${
                    isActive
                      ? "font-semibold text-neutral-800 dark:text-neutral-100"
                      : "muted-link"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
