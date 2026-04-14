function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const footerLinks = [
  { name: "github", href: "https://github.com/mal-nushi-dev" },
  { name: "linkedin", href: "https://linkedin.com/in/malnushi/" },
  { name: "blog", href: "https://www.kodikion.com" },
];

export default function Footer() {
  return (
    <footer className="mt-4 mb-16 text-sm text-neutral-600 dark:text-neutral-300">
      <ul className="mt-8 flex flex-col md:flex-row gap-2 md:gap-4">
        {footerLinks.map((link) => (
          <li key={link.name}>
            <a
              className="flex items-center gap-2 muted-link"
              rel="noopener noreferrer"
              target="_blank"
              href={link.href}
            >
              <ArrowIcon />
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        © {new Date().getFullYear()} Mal Nushi. All rights reserved.
        <br />
        Made with ♥ in Detroit. Maintained in Charlotte.
      </p>
    </footer>
  );
}
