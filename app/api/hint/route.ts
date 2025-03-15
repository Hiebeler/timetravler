import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const aiClient = new Groq({ apiKey: process.env.GROQ_API_KEY });

interface HintRequest {
    startYear: number;
    endYear: number;
    question: string;
}

export async function POST(req: NextRequest) {
    try {
        const { startYear, endYear, question }: HintRequest = await req.json();

        if (!startYear || !endYear) {
            return NextResponse.json({ error: "Missing timePeriod" }, { status: 400 });
        }

        if (!question) {
            return NextResponse.json({ error: "Missing question" }, { status: 400 });
        }

        const startYearPrefix = startYear >= 0 ? "AD" : "BC"
        const endYearPrefix = endYear >= 0 ? "AD" : "BC"


        const aiResponse = await aiClient.chat.completions.create({
            model: "llama3-8b-8192",
            messages: [
                {
                    role: "system",
                    content: "Respond with a short sentence providing a hint related to the given time period. Do not mention the year."
                },
                { role: "user", content: "Time Period: " + startYear + startYearPrefix + " - " + endYear + endYearPrefix + ". Question:" + question },
            ],
        });

        const hint = aiResponse.choices[0]?.message?.content || "No hint available.";
        return NextResponse.json({ hint });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch hint" }, { status: 500 });
    }
}
