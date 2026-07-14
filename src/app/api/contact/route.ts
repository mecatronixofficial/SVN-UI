import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function fieldValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = fieldValue(payload.name);
  const email = fieldValue(payload.email);
  const phone = fieldValue(payload.phone);
  const product = fieldValue(payload.product);
  const message = fieldValue(payload.message);

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Name, email, phone and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email.trim();

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const subject = `New enquiry from ${name}${product ? ` - ${product}` : ""}`;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeProduct = escapeHtml(product || "Not specified");
  const safeMessage = escapeHtml(message);

  const text = [
    `New enquiry from ${siteConfig.name}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Product: ${product || "Not specified"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#172033">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;background:#f4f7fb">
        <tr>
          <td align="center" style="padding:32px 16px">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;max-width:680px;overflow:hidden;border-radius:18px;background:#ffffff;box-shadow:0 18px 45px rgba(15,23,42,0.12)">
              <tr>
                <td style="background:#0f2a3f;padding:28px 32px;color:#ffffff">
                  <div style="font-size:12px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:#f3b23a">
                    New Website Enquiry
                  </div>
                  <h1 style="margin:10px 0 0;font-size:26px;line-height:1.25;font-weight:800">
                    ${siteConfig.name}
                  </h1>
                  <p style="margin:8px 0 0;font-size:14px;line-height:1.6;color:#dbe7ef">
                    A customer submitted a machinery enquiry from the website contact form.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:28px 32px">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 10px">
                    <tr>
                      <td style="width:34%;border-radius:12px 0 0 12px;background:#f7fafc;padding:14px 16px;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#64748b">Name</td>
                      <td style="border-radius:0 12px 12px 0;background:#f7fafc;padding:14px 16px;font-size:15px;font-weight:700;color:#0f172a">${safeName}</td>
                    </tr>
                    <tr>
                      <td style="width:34%;border-radius:12px 0 0 12px;background:#f7fafc;padding:14px 16px;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#64748b">Email</td>
                      <td style="border-radius:0 12px 12px 0;background:#f7fafc;padding:14px 16px;font-size:15px;color:#0f172a">
                        <a href="mailto:${safeEmail}" style="color:#0f6fae;text-decoration:none;font-weight:700">${safeEmail}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="width:34%;border-radius:12px 0 0 12px;background:#f7fafc;padding:14px 16px;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#64748b">Phone</td>
                      <td style="border-radius:0 12px 12px 0;background:#f7fafc;padding:14px 16px;font-size:15px;color:#0f172a">
                        <a href="tel:${safePhone}" style="color:#0f6fae;text-decoration:none;font-weight:700">${safePhone}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="width:34%;border-radius:12px 0 0 12px;background:#f7fafc;padding:14px 16px;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#64748b">Product</td>
                      <td style="border-radius:0 12px 12px 0;background:#f7fafc;padding:14px 16px;font-size:15px;font-weight:700;color:#0f172a">${safeProduct}</td>
                    </tr>
                  </table>

                  <div style="margin-top:24px;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden">
                    <div style="background:#fff7e6;border-bottom:1px solid #f4d58d;padding:14px 18px;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:#8a5a00">
                      Customer Message
                    </div>
                    <div style="padding:18px;font-size:15px;line-height:1.7;color:#334155;white-space:pre-wrap">${safeMessage}</div>
                  </div>

                  <div style="margin-top:26px;padding:16px 18px;border-radius:14px;background:#ecfdf5;border:1px solid #bbf7d0;color:#166534;font-size:13px;line-height:1.6">
                    Reply directly to this email to contact the customer, or call the phone number above.
                  </div>
                </td>
              </tr>

              <tr>
                <td style="background:#f8fafc;padding:18px 32px;border-top:1px solid #e2e8f0;color:#64748b;font-size:12px;line-height:1.5">
                  Sent from ${siteConfig.name} website contact form.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      html,
      text,
    }),
  });

  if (!resendResponse.ok) {
    const resendError = await resendResponse.text().catch(() => "");

    return NextResponse.json(
      {
        error: "Unable to send enquiry right now.",
        detail: resendError,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
