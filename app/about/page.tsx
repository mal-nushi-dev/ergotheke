import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: "Learn about Mal Nushi",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="page-heading">{metadata.title}</h1>
      <h2 className="page-subheading">{metadata.description}</h2>
      <div className="mb-4">
        I thought of using AI for this, because honestly I think it is difficult
        describing yourself. I can't be the only one who thinks this, right? So
        I am going to put myself to the test and write this section without the
        use of these new computer tools.
        <br></br>
        <br></br>I am a Charlotte, NC based Software Engineer @ Ally Financial.
        As part of the Enterprise Data & Analytics organization at Ally, I serve
        as a full stack engineer, focusing on developing user interfaces & APIs
        for our Ally Customer Master application.
        <br></br>
        <br></br>
        Without getting into too much detail about my personal life: because of
        the war in Kosovo 🇽🇰🇦🇱, my parents brought our family to the U.S. 🇺🇸 as
        immigrants and refugees, for which I'm endlessly grateful. Both my
        parents are a huge inspirations of how much a person can achieve even
        during hardships.
        <br></br>
        <br></br>
        You can find some of my passions here:
        <div className="my-6">
          <Link href="/lab" className="block mb-4 group">
            <div className="flex items-center gap-1">
              <span className="body-links">→</span>
              <p className="body-links">Lab</p>
            </div>
            <p className="ml-4 text-sm text-neutral-500 dark:text-neutral-400">
              Where Good Ideas Go to Get Debugged
            </p>
          </Link>

          <Link href="/blog" className="block mb-4 group">
            <div className="flex items-center gap-1">
              <span className="body-links">→</span>
              <p className="body-links">Blog</p>
            </div>
            <p className="ml-4 text-sm text-neutral-500 dark:text-neutral-400">
              A blog by Mal Nushi—
              <i>where ideas wander from circuits to sentences</i>
            </p>
          </Link>

          <Link href="/sidequests" className="block mb-4 group">
            <div className="flex items-center gap-1">
              <span className="body-links">→</span>
              <p className="body-links">Sidequests</p>
            </div>
            <p className="ml-4 text-sm text-neutral-500 dark:text-neutral-400">
              Because not everything has to compile
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
