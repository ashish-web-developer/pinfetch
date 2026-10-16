type JsonLdProps = {
  url: string;
};

export default function JsonLd({ url }: JsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: "Pinvee",
        description: "Download Pinterest videos online with Pinvee.",
        inLanguage: "en",
      },
      {
        "@type": "WebApplication",
        "@id": `${url}/#webapplication`,
        name: "Pinvee",
        url,
        description:
          "A free online tool to download publicly accessible Pinterest videos.",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript enabled",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        isAccessibleForFree: true,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
