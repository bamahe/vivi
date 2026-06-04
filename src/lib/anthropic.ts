// ============================================
// Anthropic API client — blog content generation
// Used by the cron auto-publisher to generate
// PM-focused blog posts for vivipm.com
// ============================================

import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function generateBlogPost(topic: {
  title: string;
  angle: string;
  category: string;
}): Promise<{ body: string; excerpt: string; readTime: string; category: string }> {
  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4000,
    system: `You are Barrett Henry, the property manager behind ViVi Property Management. You have 23+ years of Florida real estate experience and manage rental properties across five Tampa Bay counties: Hillsborough, Pinellas, Pasco, Polk, and Manatee. You co-run Best Bay Services, your maintenance partner.

Write a blog post (1000-1400 words) that is:
- Specific to Tampa Bay / Florida with real local detail
- Written in your direct, no-BS, owner-to-owner voice
- Practical and actionable for rental property owners and investors
- Structured with 3-5 key takeaways at the top in a bullet list
- Has H2 headings as questions where natural
- Ends with a 3-question FAQ section formatted as:
  ## Frequently Asked Questions
  ### [Question]?
  [Answer paragraph]
- Includes 3-5 internal links to relevant pages on vivipm.com:
  - /areas (service areas)
  - /areas/[city] (city pages like /areas/valrico, /areas/tampa, /areas/lakeland)
  - /services (services overview)
  - /pricing (pricing page)
  - /rental-analysis (free rent analysis)
  - /owners (owner info)
- Author line at the end: "Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience."

Return ONLY the markdown content. No frontmatter, no code fences.
Use ## for H2, ### for H3. Use **bold** for emphasis.
Always say "owners suite" never "master suite".
Never mention mobile/manufactured homes.
Never mention AC in attic.
Always spell REMAX without a slash.`,
    messages: [
      {
        role: "user",
        content: `Write a blog post titled: "${topic.title}"\n\nAngle: ${topic.angle}`,
      },
    ],
  });

  const block = response.content[0];
  const body = block.type === "text" ? block.text : "";

  // Generate excerpt from first paragraph (strip markdown)
  const firstParagraph = body
    .split("\n\n")
    .find((p) => p.trim() && !p.startsWith("#") && !p.startsWith("-") && !p.startsWith("*"));
  const excerpt = firstParagraph
    ? firstParagraph.replace(/[#*\[\]()]/g, "").trim().slice(0, 200) + "..."
    : body.slice(0, 200).replace(/[#*\n]/g, "").trim() + "...";

  // Estimate read time (~200 words per minute)
  const wordCount = body.split(/\s+/).length;
  const minutes = Math.max(3, Math.ceil(wordCount / 200));
  const readTime = `${minutes} min read`;

  return { body, excerpt, readTime, category: topic.category };
}
