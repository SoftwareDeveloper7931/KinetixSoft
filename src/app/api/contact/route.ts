import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional().default(""),
  company: z.string().optional().default(""),
  service: z.string().min(1, "Service is required"),
  budget: z.string().min(1, "Budget is required"),
  message: z.string().min(1, "Message is required"),
});

async function sendBrevoEmail(data: z.infer<typeof contactSchema>) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.warn("BREVO_API_KEY not set — skipping email send");
    return;
  }

  const body = {
    sender: { name: "KinetixSoft Website", email: "info@kinetixsoft.com" },
    to: [{ email: "info@kinetixsoft.com", name: "KinetixSoft Team" }],
    replyTo: { email: data.email, name: data.name },
    subject: `New enquiry: ${data.service} — ${data.name}`,
    htmlContent: `
      <h2>New contact form submission</h2>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        <tr><th>Name</th><td>${data.name}</td></tr>
        <tr><th>Email</th><td>${data.email}</td></tr>
        <tr><th>Phone</th><td>${data.phone || "—"}</td></tr>
        <tr><th>Company</th><td>${data.company || "—"}</td></tr>
        <tr><th>Service</th><td>${data.service}</td></tr>
        <tr><th>Budget</th><td>${data.budget}</td></tr>
        <tr><th>Message</th><td>${data.message}</td></tr>
      </table>
    `,
  };

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Brevo error:", err);
    throw new Error("Email delivery failed");
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.errors[0]?.message ?? "Validation error" },
        { status: 400 }
      );
    }

    const data = parsed.data;

    await sendBrevoEmail(data);

    return NextResponse.json({ success: true, message: "Message received. We'll be in touch shortly." });
  } catch (err: any) {
    console.error("Contact route error:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
