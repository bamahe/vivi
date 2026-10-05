import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkSpam } from "@/lib/spam-filter";

// Humans need a few seconds to fill a form in. Bots post instantly.
const MIN_FILL_SECONDS = 3;

// Simple in-memory rate limit. Vercel Fluid Compute reuses instances, so this
// holds across requests on the same instance. A backstop, not the main defense.
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

/**
 * Escape user input before it goes into the notification email.
 * Without this, anything submitted is injected raw into the HTML body.
 */
function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Looks like a 200 to a bot, but nothing is sent. */
function silentDiscard(reason: string, detail: unknown) {
  console.warn(`[contact:blocked] ${reason}`, JSON.stringify(detail));
  return NextResponse.json({ success: true });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, address, message, turnstileToken, website, formLoadedAt } =
      body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";

    // ---- LAYER 1: Turnstile (mandatory, fails closed) -----------------
    // Strip a trailing literal backslash-n — stored env values have been
    // corrupted that way and Cloudflare rejects a secret with trailing junk.
    const secret = process.env.TURNSTILE_SECRET_KEY?.replace(/(\\n|\s)+$/, "");
    if (!secret) {
      console.error("[contact:blocked] TURNSTILE_SECRET_KEY not set — rejecting");
      return NextResponse.json(
        { error: "Verification unavailable" },
        { status: 503 }
      );
    }
    if (!turnstileToken) {
      console.warn(`[contact:blocked] missing turnstile token — ip=${ip}`);
      return NextResponse.json(
        { error: "Bot verification required" },
        { status: 403 }
      );
    }
    const tsRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: String(turnstileToken).trim(),
          remoteip: ip,
        }),
      }
    );
    const tsData = await tsRes.json();
    if (!tsData.success) {
      console.warn(
        `[contact:blocked] turnstile failed — ip=${ip}`,
        JSON.stringify(tsData["error-codes"] || [])
      );
      return NextResponse.json(
        { error: "Bot verification failed" },
        { status: 403 }
      );
    }

    // ---- LAYER 2: Honeypot --------------------------------------------
    if (typeof website === "string" && website.trim().length > 0) {
      return silentDiscard("honeypot filled", { ip, name });
    }

    // ---- LAYER 3: Submission timing -----------------------------------
    if (formLoadedAt) {
      const loadedAt = Number(formLoadedAt);
      if (Number.isFinite(loadedAt) && loadedAt > 0) {
        const elapsed = (Date.now() - loadedAt) / 1000;
        if (elapsed < MIN_FILL_SECONDS) {
          return silentDiscard("submitted too fast", { ip, elapsed });
        }
      }
    }

    // ---- LAYER 4: Rate limit ------------------------------------------
    if (ip !== "unknown" && isRateLimited(ip)) {
      return silentDiscard("rate limit exceeded", { ip, name });
    }

    // ---- LAYER 5: Content heuristics ----------------------------------
    // Catches the signature that was getting through: gibberish name,
    // gibberish message, undialable phone.
    const spam = checkSpam({
      name: String(name),
      email: String(email),
      phone: String(phone || ""),
      message: String(message || ""),
    });
    if (spam.isSpam) {
      return silentDiscard("spam heuristics", {
        ip,
        name,
        email,
        phone,
        score: spam.score,
        reasons: spam.reasons,
      });
    }

    // ---- Legitimate — send the notification ---------------------------
    const resend = new Resend(process.env.RESEND_API_KEY?.replace(/(\\n|\s)+$/, ""));
    await resend.emails.send({
      from: "ViVi PM <noreply@vivipm.com>",
      to: "barretthenry@gmail.com",
      replyTo: String(email),
      subject: `New ViVi PM Contact: ${esc(name)}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#7B5CE5;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;font-size:22px;margin:0;">New Contact Form Submission</h1>
            <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">ViVi Property Management</p>
          </div>
          <div style="background:#f9f9f7;padding:32px;border:1px solid #e8e6e0;border-top:none;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;width:120px;vertical-align:top;">Name:</td>
                <td style="padding:10px 0;color:#5a5a5a;">${esc(name)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;vertical-align:top;">Email:</td>
                <td style="padding:10px 0;color:#5a5a5a;"><a href="mailto:${esc(email)}" style="color:#7B5CE5;">${esc(email)}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;vertical-align:top;">Phone:</td>
                <td style="padding:10px 0;color:#5a5a5a;">${esc(phone) || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;vertical-align:top;">Property:</td>
                <td style="padding:10px 0;color:#5a5a5a;">${esc(address) || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;vertical-align:top;">Message:</td>
                <td style="padding:10px 0;color:#5a5a5a;white-space:pre-wrap;">${esc(message)}</td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #e8e6e0;margin:24px 0;" />
            <p style="font-size:12px;color:#999;margin:0;">
              Reply directly to this email to respond to ${esc(name)}.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
