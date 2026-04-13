import TypingEffect from "@/components/typing-effect";
// import BlogPosts from "@/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="page-heading">Mal Nushi</h1>
      <h2 className="page-subheading">
        <TypingEffect text="$whoami" />
      </h2>
      <p className="mb-4">
        <br />A software engineer at Ally Financial, building user interfaces
        and APIs for the Ally Customer Master application. Curious by nature,
        precise by practice, and always developing with purpose.
      </p>
      <div className="my-8">{/* <BlogPosts /> */}</div>
    </section>
  );
}
