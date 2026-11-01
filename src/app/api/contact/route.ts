import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().default(""),
  company: z.string().optional().default(""),
  service: z.string().min(1, "Service selection is required"),
  budget: z.string().min(1, "Budget bracket is required"),
  message: z.string().min(1, "Project summary is required"),
});

type ContactData = z.infer<typeof contactSchema>;

/**
 * Brevo SMTP Transactional Email sender with detailed error logging
 */
async function sendBrevoEmail(data: ContactData, recipientEmail: string, senderEmail: string) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return { ok: false, error: "BREVO_API_KEY environment variable is not configured" };
  }

  const payload = {
    sender: { name: "KinetixSoft Website", email: senderEmail },
    to: [{ email: recipientEmail, name: "KinetixSoft Engineering" }],
    replyTo: { email: data.email, name: data.name },
    subject: `🚀 New Project Inquiry: ${data.service} — ${data.name}`,
    htmlContent: `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:620px;margin:0 auto;padding:28px;background:#0d0f12;color:#f3f4f6;border-radius:12px;border:1px solid #222630">
        <div style="border-bottom:1px solid #222630;padding-bottom:16px;margin-bottom:20px">
          <span style="font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:1.5px;color:#00A3DE;font-weight:700">KINETIXSOFT INBOUND LEAD</span>
          <h2 style="color:#ffffff;margin:8px 0 0 0;font-size:22px;font-weight:700">New Client Brief Received</h2>
        </div>

        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#cbd5e1;margin-bottom:20px">
          <tbody>
            <tr style="border-bottom:1px solid #1a1d24">
              <td style="padding:10px 0;width:140px;color:#94a3b8;font-weight:600">Client Name:</td>
              <td style="padding:10px 0;color:#ffffff;font-weight:bold">${data.name}</td>
            </tr>
            <tr style="border-bottom:1px solid #1a1d24">
              <td style="padding:10px 0;color:#94a3b8;font-weight:600">Work Email:</td>
              <td style="padding:10px 0"><a href="mailto:${data.email}" style="color:#00A3DE;text-decoration:none;font-weight:600">${data.email}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #1a1d24">
              <td style="padding:10px 0;color:#94a3b8;font-weight:600">Phone / WhatsApp:</td>
              <td style="padding:10px 0;color:#ffffff">${data.phone ? `<a href="tel:${data.phone}" style="color:#f3f4f6;text-decoration:none">${data.phone}</a>` : "—"}</td>
            </tr>
            <tr style="border-bottom:1px solid #1a1d24">
              <td style="padding:10px 0;color:#94a3b8;font-weight:600">Company / Project:</td>
              <td style="padding:10px 0;color:#ffffff">${data.company || "—"}</td>
            </tr>
            <tr style="border-bottom:1px solid #1a1d24">
              <td style="padding:10px 0;color:#94a3b8;font-weight:600">Primary Service:</td>
              <td style="padding:10px 0;color:#FF5CAE;font-weight:700">${data.service}</td>
            </tr>
            <tr style="border-bottom:1px solid #1a1d24">
              <td style="padding:10px 0;color:#94a3b8;font-weight:600">Estimated Budget:</td>
              <td style="padding:10px 0;color:#10b981;font-weight:700">${data.budget}</td>
            </tr>
          </tbody>
        </table>

        <div style="background:#16181d;padding:18px;border-radius:10px;border:1px solid #222630;margin-bottom:20px">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;font-weight:700;margin-bottom:8px">Project Summary & Requirements:</div>
          <div style="font-size:14px;line-height:1.65;white-space:pre-wrap;color:#f3f4f6">${data.message}</div>
        </div>

        <div style="border-top:1px solid #222630;padding-top:16px;font-size:12px;color:#64748b;display:flex;justify-content:space-between;align-items:center">
          <span>Submitted via kinetixsoft.com/contact</span>
          <span>Reply directly to this email to respond</span>
        </div>
      </div>
    `,
  };

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text();
      return { ok: false, status: res.status, error: errText };
    }

    return { ok: true };
  } catch (err: any) {
    return { ok: false, error: err?.message || String(err) };
  }
}

/**
 * Dispatches notification with intelligent sender fallback (handles unverified domain in Brevo)
 */
async function dispatchEmailNotification(data: ContactData) {
  const recipientEmail = process.env.CONTACT_EMAIL || "softwaredevelopers7931@gmail.com";
  const primarySender = process.env.BREVO_SENDER_EMAIL || "info@kinetixsoft.com";
  const fallbackSender = process.env.CONTACT_EMAIL || "softwaredevelopers7931@gmail.com";

  // Attempt 1: send with primary configured sender
  const attempt1 = await sendBrevoEmail(data, recipientEmail, primarySender);
  if (attempt1.ok) {
    return { success: true, provider: "brevo", sender: primarySender };
  }

  console.warn(`[CONTACT_API] Primary Brevo sender (${primarySender}) failed:`, attempt1.error);

  // Attempt 2: if primary failed (e.g. sender email not verified in Brevo), retry with fallback account email
  if (fallbackSender && fallbackSender.toLowerCase() !== primarySender.toLowerCase()) {
    console.log(`[CONTACT_API] Retrying email delivery with fallback sender (${fallbackSender})...`);
    const attempt2 = await sendBrevoEmail(data, recipientEmail, fallbackSender);
    if (attempt2.ok) {
      return { success: true, provider: "brevo-fallback", sender: fallbackSender };
    }
    console.error(`[CONTACT_API] Fallback Brevo sender (${fallbackSender}) also failed:`, attempt2.error);
    return { success: false, error: attempt2.error };
  }

  return { success: false, error: attempt1.error };
}

/**
 * GET healthcheck / diagnostics for contact configuration
 */
export async function GET() {
  const hasBrevoKey = Boolean(process.env.BREVO_API_KEY);
  const contactEmail = process.env.CONTACT_EMAIL || "softwaredevelopers7931@gmail.com";
  const senderEmail = process.env.BREVO_SENDER_EMAIL || "info@kinetixsoft.com";

  return NextResponse.json({
    status: "healthy",
    configured: {
      hasBrevoKey,
      recipient: contactEmail,
      primarySender: senderEmail,
      hasWebhook: Boolean(process.env.LEAD_WEBHOOK_URL),
    },
  });
}

/**
 * POST handler for inbound client brief submission
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.errors[0]?.message ?? "Please check all required fields." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 1. CRITICAL: Always log inbound lead payload to stdout so no lead is ever lost in Vercel logs
    console.log("[INBOUND_LEAD_CAPTURED]", JSON.stringify({
      ...data,
      receivedAt: new Date().toISOString(),
    }));

    // 2. Dispatch email notification with automatic fallback
    const emailResult = await dispatchEmailNotification(data);

    if (!emailResult.success) {
      console.error("[CONTACT_API] Email delivery warning (lead is preserved):", emailResult.error);
    }

    // 3. Check for diagnostic flag
    const isDebug = req.nextUrl.searchParams.get("debug") === "true";

    // 4. Return success 200 - user brief has been safely received
    return NextResponse.json({
      success: true,
      message: "Message received. A senior engineer will review your brief and contact you within 24 hours.",
      ...(isDebug ? { debug: emailResult } : {}),
    });
  } catch (err: any) {
    console.error("Contact route unexpected error:", err);
    return NextResponse.json(
      { message: "Unable to process submission. Please email us directly at info@kinetixsoft.com or reach out via WhatsApp." },
      { status: 500 }
    );
  }
}
