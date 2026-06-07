/**
 * generate-blog-posts.ts
 * ----------------------
 * Generates 12 SEO-optimized blog posts using the Anthropic API
 * and inserts them into the Supabase `blog_posts` table.
 *
 * Prerequisites:
 *   - ANTHROPIC_API_KEY env var set
 *   - NEXT_PUBLIC_SUPABASE_URL env var set
 *   - SUPABASE_SERVICE_ROLE_KEY env var set
 *
 * Run with:
 *   npx tsx scripts/generate-blog-posts.ts
 *
 * If it breaks, check:
 *   1. Are all 3 env vars set? (echo $ANTHROPIC_API_KEY, etc.)
 *   2. Does your Supabase `blog_posts` table exist with the correct columns?
 *   3. Is the Anthropic API key valid and has credits?
 */

import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";

// ============================================
// Config & Environment
// ============================================

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Bail early if missing env vars
if (!ANTHROPIC_API_KEY) {
  console.error("ERROR: Missing ANTHROPIC_API_KEY env var");
  process.exit(1);
}
if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error(
    "ERROR: Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env var"
  );
  process.exit(1);
}

// Initialize clients
const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

// ============================================
// Blog Post Topics — Tampa Bay PM focused
// ============================================

const BLOG_TOPICS = [
  {
    title: "How Much Does Property Management Cost in Tampa Bay? (2026 Guide)",
    slug: "property-management-cost-tampa-bay-2026",
    category: "Pricing",
  },
  {
    title: "Tampa Bay Rental Market Trends: What Landlords Need to Know",
    slug: "tampa-bay-rental-market-trends",
    category: "Market Trends",
  },
  {
    title: "5 Red Flags to Watch for When Screening Tenants in Florida",
    slug: "tenant-screening-red-flags-florida",
    category: "Tenant Screening",
  },
  {
    title: "Self-Managing vs. Hiring a Property Manager: The Real Cost Breakdown",
    slug: "self-managing-vs-property-manager-cost",
    category: "Property Management",
  },
  {
    title: "Florida Landlord-Tenant Law: What Every Property Owner Must Know",
    slug: "florida-landlord-tenant-law-guide",
    category: "Legal",
  },
  {
    title: "How to Maximize Your Rental Income in Hillsborough County",
    slug: "maximize-rental-income-hillsborough-county",
    category: "Investment",
  },
  {
    title: "The Complete Guide to Security Deposits in Florida",
    slug: "security-deposits-florida-guide",
    category: "Legal",
  },
  {
    title: "Why Riverview and Valrico Are Tampa Bay's Best Rental Markets",
    slug: "riverview-valrico-best-rental-markets",
    category: "Market Trends",
  },
  {
    title: "Maintenance Costs Every Tampa Bay Landlord Should Budget For",
    slug: "maintenance-costs-tampa-bay-landlords",
    category: "Maintenance",
  },
  {
    title: "How to Handle Problem Tenants in Florida (Legally)",
    slug: "handle-problem-tenants-florida-legally",
    category: "Legal",
  },
  {
    title: "Is Tampa Bay Still a Good Market for Rental Property Investment?",
    slug: "tampa-bay-rental-property-investment-2026",
    category: "Investment",
  },
  {
    title: "Pet Policies for Rental Properties: A Florida Landlord's Guide",
    slug: "pet-policies-rental-properties-florida",
    category: "Property Management",
  },
];

// ============================================
// System prompt for blog post generation
// ============================================

const SYSTEM_PROMPT = `You are a blog content writer for ViVi Property Management (vivipm.com), a Tampa Bay property management company run by Barrett Henry.

Key facts about Barrett Henry and ViVi PM:
- Barrett Henry is a licensed Florida Broker Associate with REMAX (the real estate brokerage)
- He has 23+ years of real estate experience (do NOT tie this to Tampa Bay specifically — keep it general)
- ViVi PM manages rental properties across 5 Tampa Bay counties: Hillsborough, Pinellas, Pasco, Polk, and Manatee
- Management fee: 8-12% of rent collected
- Maintenance is handled through Best Bay Services (Barrett's maintenance company) — no third-party markup
- Phone: (813) 428-9800
- The NOW Team was formed in 2015
- Service cities include: Tampa, Brandon, Valrico, Riverview, Apollo Beach, Plant City, St. Petersburg, Clearwater, Lakeland, Bradenton, Wesley Chapel, and more

Writing rules:
- 800-1,200 words per post
- Use question-format H2 headings (## heading)
- Provide direct answers in the first 2-4 sentences after each heading
- Include an FAQ section at the end with 3-5 questions using ### headings (these get schema markup)
- Use markdown format: ## for H2, ### for H3, **bold**, - for bullet lists, [link text](/path) for internal links
- NO fluff phrases ("in today's market", "it's important to note", "when it comes to")
- NO AI-sounding transitions
- Say "owners suite" never "master suite"
- Never mention mobile/manufactured homes
- Write in plain English, benefit-driven, punchy
- Include internal links to /services, /pricing, /rental-analysis, /areas, /about where natural
- End with a clear CTA — vary the CTA copy (don't always say "Ready to Make [City] Home?")
- Mention Best Bay Services when discussing maintenance advantages
- Reference specific Tampa Bay cities/areas when relevant

SEO structure:
- Lead with location + topic in intro paragraph
- Use the exact title as H1 (it will be rendered separately, don't include it in the body)
- Question H2s help with AI answer engine optimization (AEO)
- FAQ section at the bottom with ### question headings followed by 2-3 sentence answers

Return ONLY the markdown body content (no title, no frontmatter). Start directly with the intro paragraph.`;

// ============================================
// Generate a single blog post using Claude
// ============================================

async function generatePost(topic: {
  title: string;
  slug: string;
  category: string;
}): Promise<{ body_mdx: string; excerpt: string; read_time: string }> {
  console.log(`  Generating: "${topic.title}"...`);

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: `Write a blog post with this title: "${topic.title}"

Category: ${topic.category}

Requirements:
- 800-1,200 words
- SEO-optimized for Tampa Bay property management searches
- Include 3-5 FAQ items at the end (### Question? format)
- Internal links to /services, /pricing, /rental-analysis, /areas where natural
- Mention ViVi Property Management and Barrett Henry naturally (not forced)
- Reference specific Tampa Bay cities when relevant

Return ONLY the markdown body. No title heading, no frontmatter.`,
      },
    ],
    system: SYSTEM_PROMPT,
  });

  // Extract text from the response
  const body_mdx =
    message.content[0].type === "text" ? message.content[0].text : "";

  // Calculate read time (~225 words per minute)
  const wordCount = body_mdx.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 225);
  const read_time = `${minutes} min read`;

  // Generate excerpt (first 150-160 chars of first paragraph)
  const firstParagraph = body_mdx
    .split("\n")
    .find((line) => line.trim() && !line.startsWith("#") && !line.startsWith("-"));
  const excerpt = firstParagraph
    ? firstParagraph.replace(/\*\*/g, "").replace(/\[(.+?)\]\(.+?\)/g, "$1").slice(0, 155).trim() + "..."
    : `${topic.title} — Expert tips from ViVi Property Management.`;

  return { body_mdx, excerpt, read_time };
}

// ============================================
// Insert a blog post into Supabase
// ============================================

async function insertPost(
  topic: { title: string; slug: string; category: string },
  content: { body_mdx: string; excerpt: string; read_time: string },
  publishDate: string
) {
  const { error } = await supabase.from("blog_posts").insert({
    slug: topic.slug,
    title: topic.title,
    body_mdx: content.body_mdx,
    excerpt: content.excerpt,
    category: topic.category,
    read_time: content.read_time,
    status: "published",
    published_at: publishDate,
    hero_image_url: null,
    hero_image_credit: null,
  });

  if (error) {
    console.error(`  ERROR inserting "${topic.title}":`, error.message);
    return false;
  }

  console.log(`  Inserted: "${topic.title}"`);
  return true;
}

// ============================================
// Main execution
// ============================================

async function main() {
  console.log("=".repeat(50));
  console.log("ViVi PM Blog Post Generator");
  console.log("=".repeat(50));
  console.log(`Generating ${BLOG_TOPICS.length} blog posts...\n`);

  let successCount = 0;
  let failCount = 0;

  // Stagger published_at dates so posts appear over last 3 months
  // This makes the blog look established, not like everything was posted at once
  const now = new Date();

  for (let i = 0; i < BLOG_TOPICS.length; i++) {
    const topic = BLOG_TOPICS[i];

    // Space posts ~7 days apart, most recent first
    const daysAgo = i * 7;
    const publishDate = new Date(
      now.getTime() - daysAgo * 24 * 60 * 60 * 1000
    ).toISOString();

    try {
      // Generate content with Claude
      const content = await generatePost(topic);

      // Insert into Supabase
      const success = await insertPost(topic, content, publishDate);

      if (success) {
        successCount++;
      } else {
        failCount++;
      }
    } catch (err) {
      console.error(`  FAILED: "${topic.title}" —`, (err as Error).message);
      failCount++;
    }

    // Small delay between API calls to avoid rate limiting
    if (i < BLOG_TOPICS.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  // Summary
  console.log("\n" + "=".repeat(50));
  console.log(`Done! ${successCount} posts created, ${failCount} failed.`);
  console.log("=".repeat(50));

  if (failCount > 0) {
    process.exit(1);
  }
}

// Run it
main();
