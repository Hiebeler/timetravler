import { Game } from "./game.ts";
import { timePeriods } from "./timePeriodsList.ts";

console.log(Deno.env.get("OPENAI_API_KEY"));
const game = new Game(timePeriods)

game.startGame()