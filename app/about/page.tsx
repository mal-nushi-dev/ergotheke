import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: "Learn about Mal Nushi",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About Me</h1>
      <p className="mb-4">
        I thought of using AI for this, because honestly I think it is difficult
        describing yourself. I can't be the only one who thinks this, right? So
        I am going to put myself to the test and write this section without the
        use of these new computer tools.
        <br></br>
        <br></br>I am a Charlotte, NC based Software Engineer @ Ally Financial.
        I specialize in the data-side of things working closely with our data
        systems 🤓.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <Link
            href="/lab"
            className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
          >
            <h3 className="text-md font-semibold mb-1">Lab</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              Where Good Ideas Go to Get Debugged
            </p>
          </Link>

          <Link
            href="/blog"
            className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
          >
            <h3 className="text-md font-semibold mb-1">Blog</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              A blog by Mal Nushi—
              <i>where ideas wander from circuits to sentences</i>
            </p>
          </Link>

          <Link
            href="/sidequests"
            className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
          >
            <h3 className="text-md font-semibold mb-1">Sidequests</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              Because not everything has to compile
            </p>
          </Link>
        </div>
      </p>
    </section>
  );
}
