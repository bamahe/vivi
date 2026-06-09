import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * POST /api/leads/chat — captures leads from the chat concierge.
 * Sends an alert email to Barrett via Resend.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, property_address, need } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    // Send alert email to Barrett
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "ViVi PM <noreply@vivipm.com>",
      to: "barretthenry@gmail.com",
      replyTo: email,
      subject: `Chat Lead: ${name} — ViVi PM`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#0F2B5B;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;font-size:22px;margin:0;">New Chat Concierge Lead</h1>
            <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">ViVi Property Management</p>
          </div>
          <div style="background:#FAFAF7;padding:32px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;width:120px;vertical-align:top;">Name:</td>
                <td style="padding:10px 0;color:#5a5a5a;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;vertical-align:top;">Email:</td>
                <td style="padding:10px 0;color:#5a5a5a;"><a href="mailto:${email}" style="color:#0F2B5B;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;vertical-align:top;">Phone:</td>
                <td style="padding:10px 0;color:#5a5a5a;"><a href="tel:${phone}" style="color:#0F2B5B;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;vertical-align:top;">Property:</td>
                <td style="padding:10px 0;color:#5a5a5a;">${property_address || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;vertical-align:top;">Needs:</td>
                <td style="padding:10px 0;color:#5a5a5a;">${need || "Not specified"}</td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;" />
            <p style="font-size:12px;color:#999;margin:0;">
              Captured via chat concierge on vivipm.com. Reply to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Chat lead error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
