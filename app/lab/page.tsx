import { repositories } from './repositories'
import { languageColors } from './languageColors'

export const metadata = {
  title: 'Lab',
  description: 'Mal Nushis Lab',
}

export default function LabPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">Lab</h1>
      <h2 className="font-semibold text-lg mb-8 tracking-tight">Where Good Ideas Go to Get Debugged</h2>
      <ul className="space-y-4">
        {repositories.map((repo) => (
          <li key={repo.url}>
            <div className="flex items-center gap-2">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                {repo.name}
              </a>
              <div className="flex flex-wrap gap-1">
                {repo.languages.map((lang) => (
                  <span
                    key={lang}
                    className={`text-[10px] px-1.5 py-0.5 rounded ${languageColors[lang] || 'bg-gray-200 text-gray-800'}`}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600">{repo.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
