import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1 className="page-heading">404 - Page Not Found</h1>
      <p className="mb-6 body-subtext">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="body-links">
        ← Return Home
      </Link>
    </section>
  );
}
