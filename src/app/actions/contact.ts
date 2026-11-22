"use server";

export type ContactState = { status: "idle" | "success" | "error"; message?: string };

const TO = "contato@trilhafinance.com.br";
// The sender must belong to the domain verified in Resend (set by the Vercel integration).
const FROM =
  process.env.CONTACT_FROM_EMAIL ??
  `Site Trilha Finance <site@${process.env.RESEND_EMAIL_DOMAIN ?? "trilhafinance.com.br"}>`;

const field = (data: FormData, name: string, max: number) =>
  String(data.get(name) ?? "").trim().slice(0, max);

const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Sends the contact form to the Trilha Finance inbox through the Resend API. */
export async function sendContact(_prev: ContactState, data: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field; bots usually do.
  if (field(data, "company", 200)) return { status: "success" };

  const name = field(data, "name", 120);
  const email = field(data, "email", 200);
  const phone = field(data, "phone", 40);
  const message = field(data, "message", 5000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Preencha seu nome e um e-mail válido." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return { status: "error", message: "Não foi possível enviar agora. Escreva para " + TO + "." };
  }

  const rows: [string, string][] = [
    ["Nome", name],
    ["E-mail", email],
    ["Telefone", phone || "Não informado"],
    ["Mensagem", message || "Sem mensagem"],
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Novo contato pelo site: ${name}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
      html: rows
        .map(
          ([label, value]) =>
            `<p><strong>${label}:</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`,
        )
        .join(""),
    }),
  });

  if (!response.ok) {
    console.error("[contact] Resend error", response.status, await response.text());
    return { status: "error", message: "Não foi possível enviar agora. Escreva para " + TO + "." };
  }

  return { status: "success" };
}
