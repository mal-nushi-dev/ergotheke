import { repositories } from "@/data/repositories";
import { languageColors } from "@/data/language-colors";
import TypingEffect from "@/components/typing-effect";

export const metadata = {
  title: "Lab",
  description: "Where Good Ideas Go to Get Debugged",
};

export default function LabPage() {
  return (
    <section>
      <h1 className="page-heading">{metadata.title}</h1>
      <h2 className="page-subheading">
        {metadata.description.split("Debugged")[0]}
        <TypingEffect text="Debugged" />
      </h2>
      <ul className="space-y-4">
        {repositories.map((repo) => (
          <li key={repo.url}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-center gap-2">
                <p className="body-links">{repo.name}</p>
                <div className="flex flex-wrap gap-1">
                  {repo.languages.map((lang) => (
                    <span
                      key={lang}
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-extrabold ${
                        languageColors[lang] || "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {repo.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
