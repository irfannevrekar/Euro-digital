import nodemailer from "nodemailer";


  const CONTACT_EMAIL = "sales@eurodigi.ai";
  const SMTP_HOST = "us2.smtp.mailhostbox.com";
  const SMTP_PORT = 587;
  const SMTP_PASSWORD = "EuroDigi@321";


type ContactSubmission = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  contactNumber?: unknown;
  department?: unknown;
  message?: unknown;
  agreeIP?: unknown;
  agreeTerms?: unknown;
};

type RequestLike = {
  method?: string;
  body?: ContactSubmission | string;
};

type ResponseLike = {
  setHeader: (name: string, value: string) => void;
  status: (statusCode: number) => { json: (body: unknown) => void };
};

const GHL_LOCATION_ID = "RQaV6UAgiQa0RMzJtm6R";
const GHL_API_URL = "https://services.leadconnectorhq.com";

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getSmtpTransporter() {
  const user = process.env.SMTP_USER ?? CONTACT_EMAIL;
  const password = SMTP_PASSWORD;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    requireTLS: true,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    auth: { user, pass: password },
  });
}

export default async function handler(request: RequestLike, response: ResponseLike) {
  response.setHeader("Allow", "POST");

  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed." });
    return;
  }

  let body: ContactSubmission;

  try {
    body =
      typeof request.body === "string"
        ? (JSON.parse(request.body) as ContactSubmission)
        : request.body ?? {};
  } catch {
    response.status(400).json({ error: "Invalid request body." });
    return;
  }

  const firstName = asTrimmedString(body.firstName);
  const lastName = asTrimmedString(body.lastName);
  const email = asTrimmedString(body.email).toLowerCase();
  const phone = asTrimmedString(body.contactNumber);
  const department = asTrimmedString(body.department);
  const message = asTrimmedString(body.message);

  if (!firstName || !lastName || !email || !phone || !department || !message) {
    response.status(400).json({ error: "Please complete every required field." });
    return;
  }

  if (!isValidEmail(email)) {
    response.status(400).json({ error: "Please enter a valid email address." });
    return;
  }

  if (body.agreeIP !== true || body.agreeTerms !== true) {
    response.status(400).json({ error: "Please accept the required agreements." });
    return;
  }

  try {
    const transporter = getSmtpTransporter();

    await transporter.sendMail({
      from: CONTACT_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Website enquiry from ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Department: ${department}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    // Keep CRM synchronisation as a best-effort follow-up. Email delivery is
    // the primary success condition for this form.
    const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;

    if (token) {
      try {
        const ghlResponse = await fetch(`${GHL_API_URL}/contacts/`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Version: "v3",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            locationId: GHL_LOCATION_ID,
            source: "EuroDigital website contact form",
            tags: ["Website enquiry", `Department: ${department}`],
          }),
        });

        const ghlData = (await ghlResponse.json().catch(() => null)) as {
          contact?: { id?: string };
        } | null;

        if (ghlResponse.ok && ghlData?.contact?.id) {
          await fetch(`${GHL_API_URL}/contacts/${ghlData.contact.id}/notes`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Version: "v3",
            },
            body: JSON.stringify({
              title: `Website enquiry — ${department}`,
              body: message,
            }),
          });
        }
      } catch (error) {
        console.error("GoHighLevel synchronisation failed:", error);
      }
    }

    response.status(201).json({ success: true });
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    response.status(502).json({
      error: "We could not send your enquiry. Please try again.",
    });
  }
}
