import TypingEffect from "@/components/typing-effect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Mal Nushi's personal website and portfolio.",
};

export default function Page() {
  return (
    <section>
      <h1 className="page-heading">Mal Nushi</h1>
      <h2 className="page-subheading">
        <TypingEffect text="$ cd ~" />
      </h2>
      <article className="prose">
        <p>
          A software engineer at Ally Financial, building user interfaces and
          APIs for the Ally Customer Master application. Curious by nature,
          precise by practice, and always developing with purpose.
        </p>
      </article>
    </section>
  );
}
