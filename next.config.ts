import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  /** Favicon: `app/favicon.ico` (16/32/48), `app/icon.png` (512) e `app/apple-icon.png` (180). */
};

export default nextConfig;
