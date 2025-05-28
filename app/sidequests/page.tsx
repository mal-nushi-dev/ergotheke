import Link from 'next/link'
import TypingEffect from '../components/TypingEffect'

export const metadata = {
  title: 'Sidequests',
  description: 'Because not everything has to compile',
}

const sidequests = [
  { name: 'Skating', emoji: '🛹', slug: 'skating' },
  { name: 'Pickleball', emoji: '🏓', slug: 'pickleball' },
  { name: 'Photography', emoji: '📷', slug: 'photography' },
  { name: 'Legos', emoji: '🧱', slug: 'legos' },
  { name: 'Music', emoji: '🎵', slug: 'music' },
  { name: 'Keyboards', emoji: '⌨️', slug: 'keyboards' },
  { name: 'Travel', emoji: '✈️', slug: 'travel' },
  { name: 'Design', emoji: '🎨', slug: 'design' }
]

export default function SidequestsPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">{metadata.title}</h1>
      <h2 className="font-semibold text-lg mb-8 tracking-tight">{metadata.description.split('compile')[0]}<TypingEffect text="compile"/></h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {sidequests.map((item) => (
          <li key={item.name}>
            <Link href={`/sidequests/${item.slug}`}>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow flex flex-col items-center justify-center p-3 text-center hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer">
                <span
                  role="img"
                  aria-label={item.name}
                  className="text-3xl mb-1"
                >
                  {item.emoji}
                </span>
                <span className="text-xs font-semibold tracking-tight">{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}