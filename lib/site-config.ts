/** URL base para meta tags (Open Graph, canonical). Definir em produção: NEXT_PUBLIC_SITE_URL */
export function getMetadataBase(): URL {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    try {
      return new URL(fromEnv);
    } catch {
      /* fall through */
    }
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return new URL(`https://${vercel}`);
  }
  return new URL("http://localhost:3000");
}

export const SITE = {
  name: "Transfer Ilha do Sal",
  nameEn: "Transfer Sal Island",

  primaryKeyword: "transfer sal cabo verde",
  phoneDisplay: "+238 9837959",
  phoneE164: "+2389837959",
  email: "cz45538@gmail.com",
  locality: "Ilha do Sal",
  localityEn: "Sal Island",
  country: "CV",
} as const;

export function getPhoneHref(): string {
  return `tel:${SITE.phoneE164}`;
}

export function getWhatsAppHref(): string {
  const digits = SITE.phoneDisplay.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}
