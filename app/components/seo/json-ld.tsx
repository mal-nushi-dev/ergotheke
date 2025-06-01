// This component adds structured metadata about “who the site belongs to”.

import React from "react";

export function PersonJsonLd({
  name,
  description,
  image,
  url,
}: {
  name: string;
  description: string;
  image?: string;
  url: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name,
          description,
          image,
          url,
          sameAs: [
            "https://github.com/mal-nushi-dev",
            "https://linkedin.com/in/malnushi/",
            "https://www.kodikion.com",
            "https://www.instagram.com/malnushi/",
            "https://www.instagram.com/malspixelempire/",
            "https://www.instagram.com/mal.builds.legos/",
            "https://www.facebook.com/nushimal",
            "https://www.threads.com/@malnushi",
            "https://malnushigenealogy.me/",
          ],
        }),
      }}
    />
  );
}
