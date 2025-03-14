import { AI } from "./ai.ts";
import { Player } from "./player.ts";
import { TimePeriod } from "./timePeriod.ts";

export class Game {
    private timePeriods: TimePeriod[];
    private selectedTimePeriod: TimePeriod | undefined = undefined;
    private ai: AI = new AI();
    private player: Player = new Player();

    constructor(timePeriods: TimePeriod[]) {
        this.timePeriods = timePeriods;
    }

    public startGame() {
        console.log("Game started")
        this.selectedTimePeriod = this.getRandomTimePeriod();
        this.player = new Player();
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
                    this.player.guesses++;
                    if (!yearGuess) continue;
                    const yearGuessNumber = Number(yearGuess);
                    const isCorrect = this.guess(yearGuessNumber);
                    if (isCorrect) {
                        this.won();
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
        this.player.hints++;
        return this.ai.getHint(question, this.selectedTimePeriod?.startYear!, this.selectedTimePeriod?.endYear!);
    }

    private guess(year: number): boolean {
        const startYear = this.selectedTimePeriod!.startYear;
        const endYear = this.selectedTimePeriod!.endYear;
    
        if (year >= startYear && year <= endYear) {
            return true;
        } 
        
        if (Math.abs(year - startYear) <= 20 || Math.abs(year - endYear) <= 20) {
            console.log("You're close! The year is near the boundaries of the time period.");
        }
        
        return false;
    }

    private won() {
        console.log("won");
        console.log(this.selectedTimePeriod?.name);
        console.log("hints: " + this.player.hints);
        console.log("guesses: " + this.player.guesses);
    }
    
}