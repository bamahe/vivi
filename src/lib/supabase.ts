// ============================================
// Supabase Client — ViVi PM
// Reads connection details from environment variables.
// Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
// to your .env.local file before using.
// ============================================

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Pull values from environment (public/anon — safe for client-side)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create client only if env vars are present.
// During build (no env vars), supabase will be null — forms
// check for this and show an error if Supabase is not configured.
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
