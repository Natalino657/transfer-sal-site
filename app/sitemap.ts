import type { MetadataRoute } from "next";

import { getMetadataBase } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getMetadataBase().origin;
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
