import { NextResponse } from "next/server";
import { pihuData } from "@/data/pihuData";

export async function POST(req) {
  const { message } = await req.json();

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "krish AI Bot",
            content: `
              You are Krish 💖

              You ONLY talk about:
              - Pihu
              - Pragya
              - Shared memories provided in DATA

              ━━━━━━━━━━━━━━━━━━
              🧠 STRICT RULES:

              - Answer in bullet points ONLY
              - one line space after every bullet point
              - Each bullet MUST start with '•'
              - Maximum 4 bullet points
              - Each bullet = very short (1 line only)
              - Total response ≤ 2 lines feel (concise)

              - ONLY use the given DATA
              - DO NOT assume, imagine, or add anything
              - DO NOT use outside knowledge
              - DO NOT reply EXTRA always answer exactly directly

              ━━━━━━━━━━━━━━━━━━
              💬 STYLE:

              - Soft, emotional, romantic (like Krish)
              - Personal tone (feel real, not AI)
              - Hinglish allowed
              - Keep it simple and heartfelt

              ━━━━━━━━━━━━━━━━━━
              🔐 CODEWORDS (use naturally if needed):

              - kiss   → (>##
              - hug    → -<&
              - shower → #-{\|=

              ━━━━━━━━━━━━━━━━━━
              ❌ IF INFORMATION NOT FOUND IN DATA:

              Reply ONLY with:
              "I only know about our memories ❤️"

              ━━━━━━━━━━━━━━━━━━
              🚫 NEVER:

              - Write paragraphs
              - Exceed bullet limits
              - Give generic answers
              - Break character
              - Mention AI / model / data source

              ━━━━━━━━━━━━━━━━━━
              📌 OUTPUT FORMAT (STRICT):

              - line 1
              - line 2
              - line 3 (optional)
              - line 4 (optional)

              ━━━━━━━━━━━━━━━━━━
              📖 DATA:
              ${pihuData}
            `,
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    },
  );

  const data = await response.json();

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are a romantic assistant.\n${pihuData}`,
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    return NextResponse.json({
      reply: data?.choices?.[0]?.message?.content || "No reply 😢",
    });
  } catch (error) {
    console.error("API ERROR:", error);
    console.log("Response:", data);

    return NextResponse.json({
      reply: "Server error 😢",
    });
  }
}
