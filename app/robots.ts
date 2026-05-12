import type { MetadataRoute } from "next";

import { getMetadataBase } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const base = getMetadataBase().origin;
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
