import BlogPosts from 'app/components/posts'
import { Metadata } from 'next'

/**
 * Metadata for the blog page.
 */
export const metadata: Metadata = {
  title: 'Kodikion.',
  description: 'A blog by Mal Nushi—where ideas wander from circuits to sentences.',
}

/**
 * Blog page component.
 *
 * @returns {JSX.Element} The rendered blog page.
 */
export default function Page(): JSX.Element {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">Kodikion.</h1>
      <h2 className="font-semibold text-lg mb-8 tracking-tight">A blog by Mal Nushi—where ideas wander from circuits to sentences.</h2>
      <BlogPosts />
    </section>
  )
}