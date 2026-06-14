// ============================================
// Dynamic Blog Post Page — /blog/[slug]
// Fetches post from Supabase, renders MDX body
// Includes Article + FAQ JSON-LD schema
// ============================================

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/supabase";
import { getStaticBlogPost, STATIC_BLOG_POSTS } from "@/lib/blog-posts";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

// Revalidate every hour so fresh posts show up
export const revalidate = 3600;

// Generate metadata for each post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  // Try Supabase first, then fall back to static blog posts
  const post = (await getBlogPostBySlug(slug)) ?? getStaticBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.published_at,
      authors: ["Barrett Henry"],
      ...(post.hero_image_url
        ? { images: [{ url: post.hero_image_url, width: 1200, height: 630 }] }
        : {}),
    },
    alternates: { canonical: `/blog/${slug}` },
  };
}

// Simple MDX-to-HTML converter for rendered content
// Handles: headings, bold, italic, links, lists, paragraphs
function renderMarkdown(mdx: string) {
  const lines = mdx.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (!line.trim()) {
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="mb-4 mt-10 font-display text-2xl font-semibold sm:text-3xl"
        >
          {processInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="mb-3 mt-8 font-display text-xl font-semibold"
        >
          {processInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // Unordered list
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (
        i < lines.length &&
        (lines[i].startsWith("- ") || lines[i].startsWith("* "))
      ) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-2 pl-5">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="list-disc text-sm leading-relaxed text-[var(--muted-text)]"
            >
              {processInline(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p
        key={i}
        className="my-4 text-sm leading-relaxed text-[var(--muted-text)] sm:text-base"
      >
        {processInline(line)}
      </p>
    );
    i++;
  }

  return elements;
}

// Process inline markdown: **bold**, *italic*, [links](url)
function processInline(text: string): React.ReactNode {
  // Split on markdown patterns and rebuild as React nodes
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Link: [text](url)
    const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

    // Find which comes first
    const boldIdx = boldMatch?.index ?? Infinity;
    const linkIdx = linkMatch?.index ?? Infinity;

    if (boldIdx === Infinity && linkIdx === Infinity) {
      // No more patterns — push remaining text
      parts.push(remaining);
      break;
    }

    if (boldIdx <= linkIdx && boldMatch) {
      // Bold comes first
      if (boldIdx > 0) parts.push(remaining.slice(0, boldIdx));
      parts.push(
        <strong key={key++} className="font-semibold text-[var(--foreground)]">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(boldIdx + boldMatch[0].length);
    } else if (linkMatch) {
      // Link comes first
      if (linkIdx > 0) parts.push(remaining.slice(0, linkIdx));
      const href = linkMatch[2];
      const isInternal = href.startsWith("/");
      if (isInternal) {
        parts.push(
          <Link
            key={key++}
            href={href}
            className="font-medium text-accent underline hover:text-accent-dark"
          >
            {linkMatch[1]}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline hover:text-accent-dark"
          >
            {linkMatch[1]}
          </a>
        );
      }
      remaining = remaining.slice(linkIdx + linkMatch[0].length);
    }
  }

  return parts.length === 1 && typeof parts[0] === "string" ? parts[0] : parts;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Try Supabase first, then fall back to static blog posts
  const post = (await getBlogPostBySlug(slug)) ?? getStaticBlogPost(slug);
  if (!post) notFound();

  // Format the date
  const formattedDate = new Date(post.published_at).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  // Extract FAQ section for schema (if the post has an FAQ heading)
  const faqMatches = [
    ...post.body_mdx.matchAll(
      /### (.+?\?)\n\n?([^#]+?)(?=\n###|\n##|$)/g
    ),
  ];
  const faqs = faqMatches
    .filter((m) => m[1].endsWith("?"))
    .map((m) => ({
      question: m[1].trim(),
      answer: m[2].trim().replace(/[*[\]()]/g, ""),
    }));

  // Article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `https://vivipm.com/blog/${post.slug}`,
    ...(post.hero_image_url ? { image: post.hero_image_url } : {}),
    datePublished: post.published_at,
    dateModified: post.published_at,
    author: {
      "@type": "Person",
      name: "Barrett Henry",
      jobTitle: "Broker Associate",
      url: "https://vivipm.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "ViVi Property Management",
      url: "https://vivipm.com",
    },
  };

  // FAQ schema (if FAQs found in content)
  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}

      {/* ---- Header ---- */}
      <section className="gradient-accent px-6 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-6 inline-block text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            &larr; Back to Blog
          </Link>
          {post.category && (
            <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span>{formattedDate}</span>
            {post.read_time && <span>{post.read_time}</span>}
            <span>By Barrett Henry, REALTOR&reg;</span>
          </div>
        </div>
      </section>

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* ---- Hero image ---- */}
      {post.hero_image_url && (
        <section className="px-6 pt-8 sm:pt-12">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl">
            <Image
              src={post.hero_image_url}
              alt={post.title}
              width={1200}
              height={630}
              className="h-auto w-full object-cover"
              priority
            />
            {/* Photo credit — Unsplash requires attribution */}
            {post.hero_image_credit && (
              <p className="mt-2 text-xs text-[var(--muted-text)]">
                Photo by {post.hero_image_credit} on{" "}
                <a
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Unsplash
                </a>
              </p>
            )}
          </div>
        </section>
      )}

      {/* ---- Article body ---- */}
      <section className="px-6 py-16 sm:py-20">
        <article className="mx-auto max-w-3xl">
          {renderMarkdown(post.body_mdx)}
        </article>
      </section>

      {/* ---- Author bio ---- */}
      <section className="section-alt px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="card p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold">
              About the Author
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">
              Barrett Henry is the property manager behind ViVi Property
              Management, a licensed Florida Broker Associate with REMAX
              Collective. With 23+ years of real estate experience, Barrett and
              his team manage rental properties across five Tampa Bay counties —
              handling tenant screening, maintenance through Best Bay
              Services, rent collection, and financial reporting. Barrett also leads{" "}
              <a href="https://nowtb.com" target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline hover:text-accent-dark">The NOW Team</a>{" "}
              for real estate sales across Tampa Bay.
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href="/about"
                className="text-sm font-medium text-accent underline"
              >
                Learn more
              </Link>
              <Link
                href="/rental-analysis"
                className="text-sm font-medium text-accent underline"
              >
                Free Rent Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Related links for internal SEO ---- */}
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-display text-xl font-semibold">
            More from ViVi PM
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/services"
              className="card px-5 py-4 text-sm font-medium transition-colors hover:border-accent"
            >
              Our Property Management Services
            </Link>
            <Link
              href="/pricing"
              className="card px-5 py-4 text-sm font-medium transition-colors hover:border-accent"
            >
              Transparent Pricing: 8-12%
            </Link>
            <Link
              href="/areas"
              className="card px-5 py-4 text-sm font-medium transition-colors hover:border-accent"
            >
              Service Areas Across Tampa Bay
            </Link>
            <Link
              href="/rental-analysis"
              className="card px-5 py-4 text-sm font-medium transition-colors hover:border-accent"
            >
              Get a Free Rent Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Need help managing your rental?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Get a free rental analysis and see what your property could earn
            under professional management.
          </p>
          <Link
            href="/rental-analysis"
            className="mt-10 inline-block rounded-full bg-white px-10 py-4 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
          >
            Get Your Free Rent Analysis
          </Link>
        </div>
      </section>
    </>
  );
}
