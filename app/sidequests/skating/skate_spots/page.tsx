import {skatingSpots} from "./skatingSpots"

export const metadata = {
  title: 'Skate Spots',
  description: 'Favorite skate spots',
};


function SkateSpotItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <ul className="text-blue-700 dark:text-blue-500 font-medium">
      <li className="hover:underline">
        <a href={href}>{children}</a>
      </li>
    </ul>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">{metadata.title}</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">{metadata.description}</p>
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Michigan 🇺🇸</h2>
      {skatingSpots.filter(spot => spot.state === 'MI').map(spot => (<SkateSpotItem key={spot.href} href={spot.href}>{spot.name}</SkateSpotItem>))}
      <br />
      <h2 className="font-semibold text-lg mb-2 tracking-tight">North Carolina 🇺🇸</h2>
      {skatingSpots.filter(spot => spot.state === 'NC').map(spot => (<SkateSpotItem key={spot.href} href={spot.href}>{spot.name}</SkateSpotItem>))}
      <div className="my-8"></div>
    </section>
  )
}
