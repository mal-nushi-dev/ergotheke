import BlogPosts from 'app/components/posts'

export const metadata = {
  title: 'Kodikion.',
  description: 'A blog by Mal Nushi—where ideas wander from circuits to sentences.',
}

export default function Page() {
  return (
    <section>
            <h1 className="font-semibold text-2xl mb-2 tracking-tighter">Kodikion.</h1>
      <h2 className="font-semibold text-lg mb-8 tracking-tight">A blog by Mal Nushi—where ideas wander from circuits to sentences.</h2>
      <BlogPosts />
    </section>
  )
}