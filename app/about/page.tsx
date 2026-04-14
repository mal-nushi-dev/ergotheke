import Link from "next/link";
import TypingEffect from "@/components/typing-effect";
import { Metadata } from "next";
import type { ReactNode } from "react";

const title = "About Me";
const description = "About Mal Nushi.";

export const metadata: Metadata = {
  title,
  description,
};

interface PassionLink {
  name: string;
  href: string;
  description: ReactNode;
}

const passionLinks: PassionLink[] = [
  {
    name: "Lab",
    href: "/lab",
    description: "Where Good Ideas Go to Get Debugged",
  },
  {
    name: "Blog",
    href: "/blog",
    description: (
      <>
        A blog by Mal Nushi—<i>where ideas wander from circuits to sentences</i>
      </>
    ),
  },
  {
    name: "Sidequests",
    href: "/sidequests",
    description: "Because not everything has to compile",
  },
];

export default function AboutPage() {
  return (
    <section>
      <h1 className="page-heading">{title}</h1>
      <h2 className="page-subheading">
        <TypingEffect text="$ whoami" />
      </h2>
      <article className="prose">
        <p>
          I thought of using AI for this, because honestly I think it is
          difficult describing yourself. I can't be the only one who thinks
          this, right? So I am going to put myself to the test and write this
          section without the use of these new computer tools.
        </p>
        <p>
          I am a Charlotte, NC based Software Engineer @ Ally Financial. As part
          of the Enterprise Data & Analytics organization at Ally, I serve as a
          full stack engineer, focusing on developing user interfaces & APIs for
          our Ally Customer Master application.
        </p>
        <p>
          Without getting into too much detail about my personal life: because
          of the war in Kosovo 🇽🇰🇦🇱, my parents brought our family to the U.S.
          🇺🇸 as immigrants and refugees, for which I'm endlessly grateful. Both
          my parents are a huge inspirations of how much a person can achieve
          even during hardships.
        </p>
        <p>You can find some of my passions here:</p>
      </article>
      <div className="mt-6 flex flex-col gap-4">
        {passionLinks.map((link) => (
          <Link key={link.name} href={link.href} className="block group">
            <div className="flex items-center gap-1">
              <span className="body-links">→</span>
              <span className="body-links">{link.name}</span>
            </div>
            <p className="ml-4 body-subtext">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
