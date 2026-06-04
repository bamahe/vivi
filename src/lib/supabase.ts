// ============================================
// Supabase Client — ViVi PM
// Browser client (anon key) for client components
// Admin client (service role) for API routes/cron
//
// Required env vars:
//   NEXT_PUBLIC_SUPABASE_URL
//   NEXT_PUBLIC_SUPABASE_ANON_KEY
//   SUPABASE_SERVICE_ROLE_KEY (server only)
// ============================================

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

// Browser client — uses anon key, respects RLS
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Admin client — uses service role key, bypasses RLS
// Only use in Server Components, Route Handlers, and cron jobs
export const supabaseAdmin: SupabaseClient | null =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

/* ------------------------------------------------------------------ */
/*  Blog post types                                                   */
/* ------------------------------------------------------------------ */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  body_mdx: string;
  excerpt: string;
  hero_image_url: string | null;
  hero_image_credit: string | null;
  published_at: string;
  status: "draft" | "published";
  category: string | null;
  read_time: string | null;
}

// Fetch all published blog posts, newest first
export async function getBlogPosts(): Promise<BlogPost[]> {
  // Use admin client for server-side fetching (no RLS issues)
  const client = supabaseAdmin || supabase;
  if (!client) return [];

  const { data, error } = await client
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error.message);
    return [];
  }

  return data ?? [];
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const client = supabaseAdmin || supabase;
  if (!client) return null;

  const { data, error } = await client
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    console.error("Error fetching blog post:", error.message);
    return null;
  }

  return data;
}
