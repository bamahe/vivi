import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

// --- Rate limiting: simple in-memory tracker keyed by IP ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_MAX = 20; // max messages per window

// Clean up stale entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(key);
  }
}, 10 * 60 * 1000);

// System prompt — baked in server-side, never exposed to client
const SYSTEM_PROMPT = `You are the ViVi PM concierge — a friendly, knowledgeable assistant for property owners considering professional property management across Tampa Bay.

YOUR #1 GOAL IS TO CAPTURE A LEAD. After answering helpfully (2-4 sentences), steer toward action: offer a free rental analysis, invite them to learn about ViVi PM's management services. When the user shows buying intent (asks about cost, fees, services, "how do I start"), invite them to share their info — end your message with [SHOW_LEAD_FORM].

ViVi PM handles: tenant screening, rent collection, maintenance coordination (through Best Bay Services), property inspections, lease management, and financial reporting. Management fees are typically 8-12% of monthly rent collected.

Barrett Henry is the Designated Property Manager with 23+ years of real estate experience. The brokerage is Collective Realty LLC dba ViVi Property Management, with Katie Crider as Broker of Record.

Service area: Hillsborough County, Pinellas County, Pasco County, Polk County, and Manatee County — covering Tampa, St. Petersburg, Clearwater, Lakeland, Bradenton, Valrico, Brandon, Riverview, FishHawk, and surrounding communities.

Keep it warm, plain-English. You are not a real estate agent and do not give real estate buying/selling advice. Stay on property management topics.`;

export async function POST(req: NextRequest) {
  // Check for API key
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        fallback: true,
        message: "Chat is temporarily unavailable. Please leave your info and we'll reach out!",
      },
      { status: 200 }
    );
  }

  // Rate limiting by IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (entry) {
    if (now > entry.resetAt) {
      rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    } else if (entry.count >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: "Too many messages. Please try again in a few minutes." },
        { status: 429 }
      );
    } else {
      entry.count++;
    }
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  }

  // Parse and sanitize messages
  let body: { messages?: Array<{ role: string; content: string }> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const rawMessages = body.messages;
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    return NextResponse.json({ error: "Messages array required" }, { status: 400 });
  }

  // Only allow "user" and "assistant" roles — prevents prompt injection
  const messages = rawMessages
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content.trim(),
    }));

  if (messages.length === 0) {
    return NextResponse.json({ error: "No valid messages" }, { status: 400 });
  }

  // Call Anthropic and stream the response
  const client = new Anthropic({ apiKey });

  try {
    const stream = await client.messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages,
    });

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(new TextEncoder().encode(event.delta.text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err: unknown) {
    console.error("Anthropic API error:", err);
    const message = err instanceof Error ? err.message : "Chat service error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
