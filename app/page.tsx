import TypingEffect from "./components/TypingEffect";
// import BlogPosts from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Mal Nushi
      </h1>
      <p className="mb-4">
        <TypingEffect text="$whoami" />
        <br />A software engineer at Ally Financial, building user interfaces
        and APIs for the Ally Customer Master application. Curious by nature,
        precise by practice, and always developing with purpose.
      </p>
      <div className="my-8">{/* <BlogPosts /> */}</div>
    </section>
  );
}
