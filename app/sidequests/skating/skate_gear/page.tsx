import Link from 'next/link';

// Define your skating subpages
const skatingGearSubpages = [
  { name: 'The Original GRLSWIRL x Carver Surfskate', slug: 'grlswirl_x_carver', description: 'My very first surfskate and my daily rider.' },
  { name: 'Penny Ocean Mist 22" Penny Board', slug: 'pennyboard_ocean_mist', description: 'Bought this bad boy for traveling. Never once took it for traveling.' },
  { name: 'Powell / Peralta / Rodriguez Skull and Sword Skateboard', slug: 'powell_peralta', description: 'A cool 80\'s style board that is configured as a skatepark board, but also a cruiser.' },
  { name: 'Fila Legacy Pro 84 Roller Blade', slug: 'fila_legacy_pro', description: 'My very first pair of roller skates (thank you Sally).' },
  { name: '187 Kiler Pads 6-Pack Set', slug: 'killer_pads', description: 'Can never be too careful.' },
  { name: 'Protec Classic Skateboard Helmet CPSC', slug: 'protec_helmet', description: 'Can most definitely never be too careful.' },
];

export const metadata = {
  title: 'My Skating Gear',
  description: 'Details about my skateboard setup and accessories.',
};

export default function GearPage() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">{metadata.title}</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">{metadata.description}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {skatingGearSubpages.map((subpage) => (
          <li key={subpage.slug}>
            <Link href={`/sidequests/skating/skate_gear/${subpage.slug}`}>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer h-full flex flex-col">
                <h3 className="text-md font-semibold mb-1">{subpage.name}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-300 flex-grow">{subpage.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}