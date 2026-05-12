import { SITE } from "@/lib/site-config";

export function getLocalBusinessJsonLd(siteUrl: URL) {
  const url = siteUrl.origin;
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": `${url}/#business`,
    name: SITE.name,
    alternateName: ["Transfer Sal Cabo Verde", SITE.nameEn],
    description:
      "Transfer na ilha do Sal, Cabo Verde: aeroporto, hotel, deslocações e passeios. Marcação por telefone ou WhatsApp.",
    url,
    telephone: SITE.phoneE164,
    email: SITE.email,
    image: `${url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.locality,
      addressCountry: SITE.country,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${SITE.locality}, Cabo Verde`,
    },
    knowsAbout: [
      SITE.primaryKeyword,
      "transfer aeroporto sal",
      "taxi sal cabo verde",
      "passeios ilha do sal",
    ],
  };
}
