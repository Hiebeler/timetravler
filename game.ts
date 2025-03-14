import { AI } from "./ai.ts";
import { TimePeriod } from "./timePeriod.ts";

export class Game {
    private timePeriods: TimePeriod[];
    private selectedTimePeriod: TimePeriod | undefined = undefined;
    private ai: AI;
    constructor(timePeriods: TimePeriod[]) {
        this.timePeriods = timePeriods
        this.ai = new AI();
    }

    public startGame() {
        console.log("Game started")
        this.selectedTimePeriod = this.getRandomTimePeriod();
        this.play();
    }

    private getRandomTimePeriod(): TimePeriod {
        const randomIndex = Math.floor(Math.random() * this.timePeriods.length);
        return this.timePeriods[randomIndex]
    }

    public async play() {
        let isGuessedCorrectly = false;
        while (!isGuessedCorrectly) {
            const action = prompt("Do you want to ask a question or gues, type 'q', or 'g', or 'quit' to end the game")
            switch (action) {
                case "q": {
                    const question = prompt("type your question");
                    if (!question) continue;
                    const answer = await this.question(question);
                    console.log(answer);
                    break;
                }
                case "g": {
                    const yearGuess = prompt("guess a year: ")
                    if (!yearGuess) continue;
                    const yearGuessNumber = Number(yearGuess);
                    const isCorrect = this.guess(yearGuessNumber);
                    if (isCorrect) {
                        console.log("you won")
                        isGuessedCorrectly = true;
                    } else {
                        console.log("wrong")
                        continue;
                    }
                    break;
                }
                case "tell": {
                    console.log(this.selectedTimePeriod?.name)
                    break;
                }
            }
        }
    }

    private question(question: string): Promise<string> {
        return this.ai.getHint(question, this.selectedTimePeriod?.startYear!, this.selectedTimePeriod?.endYear!);
    }


    private guess(year: number): boolean {
        if (year >= this.selectedTimePeriod!.startYear && year <= this.selectedTimePeriod!.endYear) {
            return true;
        } else {
            return false;
        }
    }
}