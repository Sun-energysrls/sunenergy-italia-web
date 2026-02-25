import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// Simple in-memory rate limiter (per instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

// Sanitize string: strip newlines (prevent header injection) and trim
function sanitize(str: string): string {
  return str.replace(/[\r\n]/g, "").trim();
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: "Troppe richieste. Riprova più tardi." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();

    // Server-side validation
    const name = typeof body.name === "string" ? sanitize(body.name).slice(0, 100) : "";
    const company = typeof body.company === "string" ? sanitize(body.company).slice(0, 100) : "";
    const email = typeof body.email === "string" ? sanitize(body.email).slice(0, 255) : "";
    const phone = typeof body.phone === "string" ? sanitize(body.phone).slice(0, 20) : "";
    const message = typeof body.message === "string" ? body.message.trim().slice(0, 1000) : "";
    const page = typeof body.page === "string" ? sanitize(body.page).slice(0, 100) : "";

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Campi obbligatori mancanti" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Email non valida" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate phone format if provided
    if (phone && !/^[+\d\s()-]*$/.test(phone)) {
      return new Response(
        JSON.stringify({ error: "Formato telefono non valido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!RESEND_API_KEY) {
      console.error("[Contact Form] Email service not configured");
      return new Response(
        JSON.stringify({ error: "Servizio temporaneamente non disponibile." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailBody = `Nome: ${name}
Azienda: ${company || "N/A"}
Email: ${email}
Telefono: ${phone || "N/A"}
Pagina: ${page || "N/A"}
Messaggio:
${message}`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Sun Energy <onboarding@resend.dev>",
        to: ["s.energysrls@gmail.com"],
        subject: "Nuova richiesta dal sito Sun Energy",
        text: emailBody,
        reply_to: email,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("[Contact Form] Send failed", res.status);
      return new Response(
        JSON.stringify({ error: "Impossibile inviare il messaggio. Riprova più tardi." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[Contact Form] Unexpected error");
    return new Response(
      JSON.stringify({ error: "Impossibile inviare il messaggio. Riprova più tardi." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
