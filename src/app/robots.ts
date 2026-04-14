// ============================================
// robots.ts — Allow all crawlers, point to sitemap
// ============================================

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://vivipm.com/sitemap.xml",
  };
}
