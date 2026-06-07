// ============================================
// Blog Listing Page — All published posts
// Fetches from Supabase at request time
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Property Management Blog & Tips",
  description:
    "Property management tips, Tampa Bay rental market updates, landlord guides, and investor insights from ViVi Property Management.",
  alternates: { canonical: "/blog" },
};

// Revalidate every hour so new cron posts show up
export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      {/* ---- Page header ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Property Management Blog
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Tampa Bay rental market insights, landlord guides, and property management tips from Barrett Henry.
          </p>
        </div>
      </section>

      {/* ---- Posts grid ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          {posts.length === 0 ? (
            <div className="mx-auto max-w-lg text-center">
              <p className="text-lg font-medium text-[var(--muted-text)]">
                Blog posts coming soon.
              </p>
              <p className="mt-2 text-sm text-[var(--muted-text)]">
                We publish weekly guides on rental property management, Tampa Bay market trends, and landlord best practices.
              </p>
              <Link
                href="/rental-analysis"
                className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Get Your Free Rent Analysis
              </Link>
            </div>
          ) : (
            <>
              {/* Featured post (latest) */}
              {posts.length > 0 && (
                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="card mb-12 block overflow-hidden transition-colors hover:border-accent"
                >
                  <div className="p-8 sm:p-10">
                    {posts[0].category && (
                      <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        {posts[0].category}
                      </span>
                    )}
                    <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                      {posts[0].title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--muted-text)]">
                      {posts[0].excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-xs text-[var(--muted-text)]">
                      <span>
                        {new Date(posts[0].published_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      {posts[0].read_time && <span>{posts[0].read_time}</span>}
                      <span>By Barrett Henry</span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Rest of posts */}
              {posts.length > 1 && (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.slice(1).map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="card overflow-hidden transition-colors hover:border-accent"
                    >
                      <div className="p-6">
                        {post.category && (
                          <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                            {post.category}
                          </span>
                        )}
                        <h3 className="font-display text-lg font-semibold leading-snug">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)] line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-3 text-xs text-[var(--muted-text)]">
                          <span>
                            {new Date(post.published_at).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          {post.read_time && <span>{post.read_time}</span>}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Want professional management for your rental?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Get a free rental analysis and see what your property could earn.
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
