import Groq from 'groq-sdk';

export class AI {
    private groq;

    constructor() {
        this.groq = new Groq({
            apiKey: Deno.env.get("GROQ_API_KEY")!,
        });
    }

    public async getHint(question: string, startYear: number, endYear: number): Promise<string> {
        try {
            const response = await this.groq.chat.completions.create({
                model: "llama3-8b-8192",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant for the Time Traveler Game. Provide a one-sentence hint about the time period based on the user's question, but do not mention the year directly. Focus on describing technologies, culture, and significant events without revealing the exact year. The time period is " + startYear + " - " + endYear + ". If you are asked for the year, don't give any hints, it is not allowed to ask for the year"
                    },
                    { role: "user", content: `Hint: ${question}` },
                ],
            });
            const hint = response.choices[0]?.message?.content?.trim() ?? "Sorry, I couldn't provide a hint.";

            return hint;
        } catch (error) {
            console.error("Error while fetching hint:", error);
            return "Sorry, there was an issue generating a hint.";
        }
    }
}