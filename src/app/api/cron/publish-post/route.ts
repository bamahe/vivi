// ============================================
// Cron: Auto-publish blog post
// Runs weekly (Monday 2PM ET) via Vercel Cron
// Generates a PM-focused blog post via Claude,
// then inserts it into Supabase blog_posts table
// ============================================

import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { generateBlogPost } from "@/lib/anthropic";

// 50 rotating PM-focused blog topics covering Tampa Bay
const BLOG_QUEUE = [
  // --- Pricing & Market ---
  { title: "How much rent can I charge for my Tampa Bay rental in 2026?", angle: "Walk owners through pricing: comps, condition, beds/baths, neighborhood premiums. Warn against overpricing and long vacancy. Reference specific cities — Valrico, Brandon, Riverview, Lakeland.", category: "Market" },
  { title: "Is my rental priced too high? Signs your listing is sitting too long", angle: "Days-on-market benchmarks by area; the real cost of a stale listing; when and how much to adjust.", category: "Market" },
  { title: "Tampa Bay rental market update: what owners need to know", angle: "Inventory, rent trends, time-to-lease across Hillsborough, Pinellas, Pasco, Polk, Manatee. Which areas are hot right now.", category: "Market" },
  { title: "Cash flow vs appreciation: which rental strategy works in Tampa Bay?", angle: "Two strategies, which fits which owner type. Polk for cash flow, Pinellas for appreciation, Hillsborough for balance.", category: "Investing" },
  { title: "Is your rental actually profitable? How to run the numbers", angle: "Cash flow, cap rate, the costs owners forget (vacancy, maintenance, insurance). Simple framework anyone can use.", category: "Investing" },

  // --- Self-manage vs PM ---
  { title: "Self-manage or hire a property manager? An honest breakdown", angle: "Real cost/time math for Tampa Bay owners. When DIY makes sense vs when it costs more than the management fee.", category: "Management" },
  { title: "What does a property manager actually do all day?", angle: "Demystify the management fee — screening, rent collection, maintenance, legal, accounting. The invisible work that protects your investment.", category: "Management" },
  { title: "Questions to ask before hiring any property manager in Florida", angle: "Fees, contract terms, maintenance markup, communication style, references — owner empowerment checklist.", category: "Management" },
  { title: "What to expect in your first 30 days with a property manager", angle: "Onboarding timeline: inspections, tenant communication, portal setup, rent collection transition.", category: "Management" },
  { title: "Why local matters more than national in property management", angle: "Barrett has 23+ years of FL RE experience. Corporate/out-of-area managers miss things. Local knowledge = fewer vacancies, better tenants.", category: "Management" },

  // --- Tenants & Screening ---
  { title: "The true cost of one bad tenant (and how screening prevents it)", angle: "Eviction cost, lost rent, property damage, legal fees — quantify it. Tie to ViVi's screening process.", category: "Screening" },
  { title: "How to screen tenants the right way without breaking fair housing", angle: "Income, credit, rental history, background — a defensible, consistent process that stays legal.", category: "Screening" },
  { title: "Should you allow pets in your rental? The honest math", angle: "70%+ of renters have pets. Larger tenant pool + pet fees vs wear risk. Pet policies that actually protect the home.", category: "Screening" },
  { title: "What makes tenants stay? Reducing turnover the smart way", angle: "Responsiveness, fair renewals, small upgrades. Retention beats re-leasing every time — the math proves it.", category: "Screening" },
  { title: "Why your rental isn't getting applications (and how to fix it)", angle: "Price, photos, listing copy, showing availability, responsiveness. The 5 fixable reasons applications dry up.", category: "Marketing" },

  // --- Legal & Compliance ---
  { title: "Florida landlord-tenant law: the owner's plain-English guide", angle: "Deposits, notice periods, entry rules, what you can and can't do. No legalese, just what owners need to know.", category: "Legal" },
  { title: "Security deposits in Florida: how much, where it goes, and the 15/30-day rule", angle: "Holding requirements, allowable deductions, the claim timeline. Common mistakes that cost owners money.", category: "Legal" },
  { title: "When is a repair the tenant's problem vs yours? Florida rules explained", angle: "Habitability vs tenant-caused damage. Documentation requirements. What the lease should say.", category: "Legal" },
  { title: "How evictions really work in Florida (and how to avoid them)", angle: "Process, timeline, cost in Hillsborough/Pinellas/Pasco/Polk/Manatee. Prevention beats eviction every time.", category: "Legal" },
  { title: "Fair housing for Florida landlords: what you can't say or do", angle: "Protected classes, advertising language, screening pitfalls that trigger complaints.", category: "Legal" },
  { title: "Lease clauses that protect Florida owners (and ones that don't hold up)", angle: "Late fees, pet terms, maintenance responsibility. What FL courts actually enforce.", category: "Legal" },

  // --- Maintenance ---
  { title: "Preventive maintenance that saves Florida rental owners thousands", angle: "HVAC, roof, plumbing, pest — FL-specific stuff. Coordinated through Best Bay Services, our dedicated maintenance partner.", category: "Maintenance" },
  { title: "Florida heat, humidity, and your rental: the maintenance reality", angle: "AC load, mold prevention, exterior wear, pest pressure. Seasonal checklist for Tampa Bay properties.", category: "Maintenance" },
  { title: "What a proper rental turnover actually includes", angle: "Clean, repair, repaint, re-key, photos, list — the checklist. How Best Bay Services handles turnovers.", category: "Maintenance" },
  { title: "Hurricane season prep for rental property owners", angle: "Pre-storm checklist, insurance review, tenant communication, post-storm process. Tampa Bay specific.", category: "Maintenance" },
  { title: "Why maintenance through Best Bay Services saves you more than you think", angle: "No third-party markup, faster response, quality control. How Best Bay Services works inside ViVi PM.", category: "Maintenance" },

  // --- Area-specific ---
  { title: "Renting your Valrico home: demand, rent ranges, and what tenants want", angle: "Neighborhood-specific: Bloomingdale, River Hills, Buckhorn. Tenant profile, typical rents, school zoning premium.", category: "Areas" },
  { title: "Is Riverview a good place to own a rental property?", angle: "Growth, new construction supply, tenant demand, FishHawk premium, I-75 commuter appeal.", category: "Areas" },
  { title: "Brandon rental market: what owners should know", angle: "Inventory, rent trends, time-to-lease, which Brandon neighborhoods move fastest.", category: "Areas" },
  { title: "Wesley Chapel rentals: new construction and high demand", angle: "Fastest-growing area in Pasco. HOA challenges, tenant expectations, rent ranges.", category: "Areas" },
  { title: "Lakeland rental investing: Tampa Bay's best cash flow market?", angle: "Lower prices, strong demand from I-4 corridor growth. Amazon, Publix HQ, spillover from Tampa.", category: "Areas" },
  { title: "St. Petersburg rental market: premium rents and high demand", angle: "Downtown revitalization, waterfront premium, diverse neighborhoods from luxury to cash flow.", category: "Areas" },
  { title: "Bradenton and Lakewood Ranch: Manatee County rental outlook", angle: "Two different markets in one county. HOA/CDD complexity in LWR. Cash flow in Bradenton.", category: "Areas" },
  { title: "Apollo Beach rentals: waterfront property management challenges", angle: "Seawall maintenance, flood insurance, dock inspections. Premium rents with specialized needs.", category: "Areas" },

  // --- Financial ---
  { title: "Rental property tax deductions Florida owners miss", angle: "Depreciation, repairs vs improvements, mileage, management fees, travel to property.", category: "Financial" },
  { title: "How owners get paid: draws, statements, and year-end reporting", angle: "Monthly disbursement timeline, owner portal, 1099 prep. Transparency in action.", category: "Financial" },
  { title: "Should you sell or keep renting? A framework for Florida owners", angle: "Equity, market conditions, hassle factor, tax implications. Decision guide, not a sales pitch.", category: "Financial" },
  { title: "How much does property management actually cost in Tampa Bay?", angle: "Break down the fee: three plans (10% or $299/mo flat), what's included, what competitors charge extra for. Total cost comparison.", category: "Financial" },

  // --- Getting started ---
  { title: "Accidental landlord? What to do when you can't sell and have to rent", angle: "Inherited home, relocation, underwater — how to convert a home to a rental cleanly and quickly.", category: "Getting Started" },
  { title: "First-time rental property owner? Start here", angle: "Complete guide: insurance, lease, screening, pricing, maintenance, accounting. Tampa Bay specific.", category: "Getting Started" },
  { title: "Insurance for rental properties in Florida: what you actually need", angle: "Landlord policy vs homeowner policy, liability, flood zones, requiring tenant renters insurance.", category: "Getting Started" },
  { title: "How to get your home rent-ready in Tampa Bay", angle: "The make-ready checklist: paint, clean, repairs, photos, pricing. What to spend money on and what to skip.", category: "Getting Started" },

  // --- Leasing & operations ---
  { title: "How we lease a home in under 14 days", angle: "Step by step: photos, MLS, 200+ sites, showing strategy, application processing. The ViVi approach.", category: "Leasing" },
  { title: "Lease renewals: when to raise rent and by how much", angle: "Market-based increases, retention math, FL notice requirements. When holding steady is the smart move.", category: "Leasing" },
  { title: "Turnover season in Tampa Bay: timing your vacancy to lease fast", angle: "Best months to list, turnover prep, how to minimize vacancy days between tenants.", category: "Leasing" },
  { title: "Section 8 and housing vouchers in Tampa Bay: should owners participate?", angle: "How it works, pros/cons, inspection requirements, guaranteed rent angle. County-specific details.", category: "Leasing" },
  { title: "How we get rent paid on time every month", angle: "Online portal, autopay enrollment, late fee enforcement, communication cadence. Systems that work.", category: "Operations" },

  // --- Investor education ---
  { title: "New construction vs resale: which makes a better Tampa Bay rental?", angle: "Supply impact, warranty benefits, higher rents vs lower cash flow. When each makes sense.", category: "Investing" },
  { title: "Out-of-state investor? How to buy and manage Tampa Bay rentals remotely", angle: "Finding the right area, building a local team, what to look for in a PM. Written for remote investors.", category: "Investing" },
  { title: "The real cost of vacancy and how to minimize it", angle: "Daily cost math, average vacancy by area, the levers that reduce it. Data-driven, Tampa Bay specific.", category: "Operations" },
];

export async function POST(request: Request) {
  // Verify cron secret — Vercel sends this header automatically
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    // Get count of published posts to pick next topic from the queue
    const { count } = await supabaseAdmin
      .from("blog_posts")
      .select("*", { count: "exact", head: true })
      .eq("status", "published");

    const topicIndex = (count || 0) % BLOG_QUEUE.length;
    const topic = BLOG_QUEUE[topicIndex];

    // Generate blog post content via Claude
    const { body, excerpt, readTime, category } = await generateBlogPost(topic);

    // Generate URL-friendly slug from title
    const slug = topic.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    // Insert into Supabase
    const { data: post, error } = await supabaseAdmin
      .from("blog_posts")
      .insert({
        slug,
        title: topic.title,
        body_mdx: body,
        excerpt,
        hero_image_url: null,
        hero_image_credit: null,
        published_at: new Date().toISOString(),
        status: "published",
        category,
        read_time: readTime,
      })
      .select()
      .single();

    if (error) {
      console.error("Blog insert error:", error);
      return NextResponse.json(
        { error: "Failed to publish post" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      slug: post.slug,
      title: post.title,
    });
  } catch (err) {
    console.error("Blog cron error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
