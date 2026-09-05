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

export default async function handler(request: RequestLike, response: ResponseLike) {
  response.setHeader("Allow", "POST");

  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed." });
    return;
  }

  const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
  if (!token) {
    response.status(500).json({ error: "The contact form is not configured yet." });
    return;
  }

  const body =
    typeof request.body === "string"
      ? (JSON.parse(request.body) as ContactSubmission)
      : request.body ?? {};
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
      message?: string;
    } | null;

    if (!ghlResponse.ok || !ghlData?.contact?.id) {
      response.status(502).json({
        error: ghlData?.message ?? "We could not send your enquiry. Please try again.",
      });
      return;
    }

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

    response.status(201).json({ success: true });
  } catch {
    response.status(502).json({ error: "We could not send your enquiry. Please try again." });
  }
}
