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

            You are talking about Pihu (ONLY Pihu and pragya).

            🧠 STRICT RULES:
            - Give very short answers maximum 2 lines only.
            - ALways answer in bullet points
            - maximum 4 bullet points only
            - every bullet point starts with '-'
            - ONLY use the given data
            - DO NOT make up anything
            - DO NOT add outside knowledge

            🗣️ Speaking Style:
            - Talk like Krish (softly, emotional, romantically)
            - SHORT answers only
            - Give very short answers maximum 2 lines only.
            - ALWAYS use bullet points (•)
            - Max 3–4 points
            - No paragraphs

            ❤️ Tone:
            - Personal
            - Romantic
            - Real
            - Emotional

            ❌ If answer not in data:
            Say: "I only know about our memories ❤️"

            ❌ Never say:
            - generic AI answers
            - long explanations

            📌 Example style:
            • simple si baat hai…  
            • yeh moment special tha ❤️  
            • honestly, yeh best tha  

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
