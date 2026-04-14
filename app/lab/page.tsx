import { repositories } from "@/data/repositories";
import { languageColors } from "@/data/language-colors";
import TypingEffect from "@/components/typing-effect";
import { Metadata } from "next";

const title = "Lab";
const description = "List of repositories maintained by Mal Nushi.";

export const metadata: Metadata = {
  title,
  description,
};

export default function LabPage() {
  return (
    <section>
      <h1 className="page-heading">{title}</h1>
      <h2 className="page-subheading">
        <TypingEffect text="$ ls ./projects" />
      </h2>
      <ul className="flex flex-col gap-4">
        {repositories.map((repo) => (
          <li key={repo.url}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-center gap-2">
                <span className="body-links">{repo.name}</span>
                <div className="flex flex-wrap gap-1">
                  {repo.languages.map((lang) => (
                    <span
                      key={lang}
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-extrabold ${
                        languageColors[lang] ||
                        "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      }`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-1 body-subtext">{repo.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
