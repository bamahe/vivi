import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, address, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Send email notification to Barrett
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "ViVi PM <noreply@vivipm.com>",
      to: "barretthenry@gmail.com",
      replyTo: email,
      subject: `New ViVi PM Contact: ${name}`,
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
                <td style="padding:10px 0;color:#5a5a5a;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;vertical-align:top;">Email:</td>
                <td style="padding:10px 0;color:#5a5a5a;"><a href="mailto:${email}" style="color:#7B5CE5;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;vertical-align:top;">Phone:</td>
                <td style="padding:10px 0;color:#5a5a5a;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;vertical-align:top;">Property:</td>
                <td style="padding:10px 0;color:#5a5a5a;">${address || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#1a1a1a;vertical-align:top;">Message:</td>
                <td style="padding:10px 0;color:#5a5a5a;white-space:pre-wrap;">${message}</td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #e8e6e0;margin:24px 0;" />
            <p style="font-size:12px;color:#999;margin:0;">
              Reply directly to this email to respond to ${name}.
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
