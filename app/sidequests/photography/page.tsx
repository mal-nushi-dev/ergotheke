import Link from 'next/link';
import type { Metadata } from 'next';
import React from 'react';
import FlashingText from 'app/components/FlashingText';
// import BlogPosts from 'app/components/posts';

// Define the subpages for the photography page
const photographySubpages = [
  { name: 'My Gear', slug: 'photography_gear', description: 'The gear that makes me look like I know what I am doing.' },
  { name: 'Gallery', slug: 'photography_gallery', description: '$0 entry to the \'Mal Nushi Museum of Photography\'.', externalUrl: 'https://www.instagram.com/malspixelempire/' },
];

/**
 * Metadata for the Photography page. This object is used by Next.js to set the page title and description for SEO and browser display.
 */
export const metadata: Metadata = {
  title: 'Photography',
  description: 'I like taking pictures of things.',
};

/**
 * PhotographyPage component.
 * This component renders the main content for the photography page.
 *
 * @returns The rendered React element for the photography page.
 */
export default function PhotographyPage(): React.JSX.Element {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">{metadata.title?.toString() ?? ''}</h1>
      <FlashingText text={metadata.description?.toString() ?? ''} flashWord="things" className="mb-8 text-neutral-600 dark:text-neutral-400"/>
      
      {/* Remove the redundant paragraph since FlashingText now handles the full description */}
      <h2 className="mb-4 text-xl font-semibold tracking-tight">Sub-Topics</h2>
      
      {/*List of subpages for the photography section*/}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {photographySubpages.map((subpage) => (
          <li key={subpage.slug}>
            {/* This is a conditional render: use external link if exists, otherwise use internal link */}
            {subpage.externalUrl ? (
              <a href={subpage.externalUrl} target="_blank" rel="noopener noreferrer">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer h-full flex flex-col">
                  <h3 className="text-md font-semibold mb-1">{subpage.name}</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-300 flex-grow">{subpage.description}</p>
                </div>
              </a>
            ) : (
              <Link href={`/sidequests/photography/${subpage.slug}`}>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer h-full flex flex-col">
                  <h3 className="text-md font-semibold mb-1">{subpage.name}</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-300 flex-grow">{subpage.description}</p>
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* You can keep or modify the BlogPosts component if it's relevant here */}
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Blog Posts</h2>
        <p className="mb-4">
          Working on getting this component set-up.
          I need to configure my rss feed route to bring in tags and then have
          this component only display posts with a specific tag. Now that I am thinking about it,
          I should do a blog post about implementing this blog feature. Woah.
        </p>
        {/* <BlogPosts /> */}
      </div>
    </section>
  );
}
