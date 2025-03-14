import Groq from 'groq-sdk';

export class AI {
    private groq;

    constructor() {
        this.groq = new Groq({
            apiKey: Deno.env.get("GROQ_API_KEY")!,
        });
    }

    public async getHint(question: string, startYear: number, endYear: number): Promise<string> {
        const startYearPrefix = startYear >= 0 ? "AD" : "BC"
        const endYearPrefix = endYear >= 0 ? "AD" : "BC"

        try {
            const response = await this.groq.chat.completions.create({
                model: "llama3-8b-8192",
                messages: [
                    {
                        role: "system",
                        content: "Respond with a short sentence providing a hint related to the given time period. Do not mention the year."
                    },
                    { role: "user", content: "Time Period: " + startYear + startYearPrefix + " - " + endYear + endYearPrefix + ". Hint:" + question },
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