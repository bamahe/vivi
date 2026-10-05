import { NextResponse } from "next/server";
import { checkSpam } from "@/lib/spam-filter";

// Shared bot/spam guard for public lead + contact endpoints.
//
// Deliberately requires NO client changes and NO Turnstile, so it can protect
// an endpoint immediately. Turnstile is a stronger second layer to add on top
// where the domain is allowlisted on a Cloudflare widget.
//
// Usage at the top of a route's POST, right after parsing the body:
//
//   const blocked = guardLead(request, body);
//   if (blocked) return blocked;

const MIN_FILL_SECONDS = 3;
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const stamps = (recentSubmissions.get(ip) || []).filter((t) => t > cutoff);
  stamps.push(now);
  recentSubmissions.set(ip, stamps);
  if (recentSubmissions.size > 5000) {
    for (const [k, v] of recentSubmissions) {
      if (v.every((t) => t <= cutoff)) recentSubmissions.delete(k);
    }
  }
  return stamps.length > RATE_LIMIT_MAX;
}

type AnyBody = Record<string, unknown>;

/**
 * Returns a response to send back when the submission should be rejected,
 * or null when it looks legitimate and the caller should continue.
 *
 * Blocked submissions get a 200 that looks like success, so bots move on
 * instead of probing for a bypass. Every block is logged for auditing.
 */
export function guardLead(
  request: Request,
  body: AnyBody
): NextResponse | null {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";

  const block = (reason: string, detail?: unknown) => {
    console.warn(
      `[lead:blocked] ${reason} — ip=${ip}`,
      detail ? JSON.stringify(detail) : ""
    );
    return NextResponse.json({ success: true });
  };

  // Honeypot — a hidden field real visitors never see. Harmless if the form
  // does not render one yet; it simply never triggers.
  const hp = body.website;
  if (typeof hp === "string" && hp.trim().length > 0) {
    return block("honeypot filled", { name: body.name });
  }

  // Submitted faster than a human could type it.
  const loadedAt = Number(body.formLoadedAt);
  if (Number.isFinite(loadedAt) && loadedAt > 0) {
    const elapsed = (Date.now() - loadedAt) / 1000;
    if (elapsed < MIN_FILL_SECONDS) {
      return block("submitted too fast", { elapsed });
    }
  }

  // Too many submissions from one address.
  if (ip !== "unknown" && isRateLimited(ip)) {
    return block("rate limit exceeded", { name: body.name });
  }

  // Content heuristics: gibberish names, undialable phone numbers,
  // digits-only messages, link drops.
  const spam = checkSpam({
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    phone: String(body.phone ?? ""),
    message: String(body.message ?? body.notes ?? body.comments ?? ""),
  });
  if (spam.isSpam) {
    return block("spam heuristics", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      score: spam.score,
      reasons: spam.reasons,
    });
  }

  return null;
}
