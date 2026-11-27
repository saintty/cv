const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Артём Узингер — Frontend-разработчик",
      inLanguage: "ru-RU",
    },

    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Артём Узингер — Frontend-разработчик",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "ru-RU",
    },

    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,

      name: "Артём Узингер",
      jobTitle: "Frontend-разработчик",

      description:
        "Frontend-разработчик с коммерческим опытом разработки интерфейсов на React, Next.js и TypeScript.",

      url: siteUrl,
      image: `${siteUrl}/og-image.jpg`,

      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "HTML",
        "CSS",
        "SCSS",
        "Frontend Development",
        "Web Accessibility",
      ],
      sameAs: ["https://t.me/uzinger_artem"],
    },
  ],
};

export const JsonLD = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
    }}
  />
);
