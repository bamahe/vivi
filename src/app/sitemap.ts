// ============================================
// sitemap.ts — Generate sitemap for all pages
// including dynamic city pages
// ============================================

import type { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/lib/cities";
import { getBlogPosts } from "@/lib/supabase";
import { STATIC_BLOG_POSTS } from "@/lib/blog-posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://vivipm.com";

  // All static pages on the site
  const staticPages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/areas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/owners", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tenants", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/rental-analysis", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/guarantees", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/compare", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/investors", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tools/roi-calculator", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  // County landing pages — high priority for local SEO
  const countyPages = [
    "hillsborough-county",
    "pinellas-county",
    "pasco-county",
    "polk-county",
    "manatee-county",
  ].map((slug) => ({
    path: `/areas/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  // County sub-pages — guides, resources, etc.
  const countySubPages = [
    {
      path: "/areas/hillsborough-county/property-management-guide",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/areas/pinellas-county/property-management-guide",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/areas/pasco-county/property-management-guide",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/areas/polk-county/property-management-guide",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/areas/manatee-county/property-management-guide",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
  ];

  // Dynamic city pages — high priority for local SEO
  const cityPages = getAllCitySlugs().map((slug) => ({
    path: `/areas/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // Blog posts from Supabase; fall back to static posts if empty
  const supabasePosts = await getBlogPosts();
  const posts = supabasePosts.length > 0 ? supabasePosts : STATIC_BLOG_POSTS;
  const blogPages = posts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const allPages = [...staticPages, ...countyPages, ...countySubPages, ...cityPages, ...blogPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
