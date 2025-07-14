// --- /app/api/chat/route.ts ---

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const userMessage = body.message;

  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: userMessage }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
          },
          systemInstruction: {
            role: "system",
            parts: [
              {
                text:
                "You are YashBot, a friendly and knowledgeable assistant that answers questions about Yash Kr Choudhary — a full-stack developer, DSA enthusiast, and CSE undergrad at NIT Patna. Yash is passionate about system design, building impactful web apps, and sharing his self-discipline journey online. Respond in a concise, approachable, and professional tone. Feel free to mention Yash's projects (like VibeSpace or PayVault.ai), technical skills (React, Node.js, TypeScript, etc.), or career goals when relevant.If a question is not related to Yash, politely decline to answer."
              },
            ],
          },
        }),
      }
    );

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I don't have a good answer right now.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ reply: "Something went wrong. Please try again later." });
  }
}