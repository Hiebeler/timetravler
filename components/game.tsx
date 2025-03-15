"use client";

import { timePeriods } from "@/data/timePeriods";
import { GameStatus } from "@/interfaces/gamestatus.enum";
import { Hint } from "@/interfaces/hint.interface";
import { TimePeriod } from "@/interfaces/timePeriod.interface";
import { HintService } from "@/services/hint.service";
import { useMutation } from "@tanstack/react-query";

import { useState } from "react";

const Game = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Pending);
  const [timePeriod, setTimePeriod] = useState<TimePeriod | undefined>(
    undefined
  );
  const [hints, setHints] = useState<Hint[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [guess, setGuess] = useState<string>("");

  const startGame = () => {
    setTimePeriod(getRandomTimePeriod());
    setGameStatus(GameStatus.InProgress);
  };

  const getRandomTimePeriod = (): TimePeriod => {
    const randomIndex = Math.floor(Math.random() * timePeriods.length);
    return timePeriods[randomIndex];
  };

  const getHint = (question: string) => {
    getHintMutation.mutate(question);
  };

  const getHintMutation = useMutation({
    mutationFn: (question: string) =>
      HintService.getHint(timePeriod!.startYear, timePeriod!.endYear, question),
    onSuccess: (data: string) => {
      setHints((prev) => [...prev, { question: question, hint: data }]);
      setQuestion("");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const submitGuess = () => {
    const year = Number(guess)
    if (year >= timePeriod!.startYear && year <= timePeriod!.endYear) {
        setGameStatus(GameStatus.Won);
    } else {
        setGuess("");
    }
  }

  if (gameStatus == GameStatus.Won) {
    return <div>
        <h2 className="text-2xl">Won</h2>
        <p>{timePeriod?.name}</p>
        <p>{timePeriod?.startYear} - {timePeriod?.endYear}</p>
    </div>
  }

  if (gameStatus == GameStatus.Pending) {
    return (
      <div>
        <button onClick={startGame}>Start</button>
      </div>
    );
  }

  return (
    <div>
      <div className="">
        <label htmlFor="guess">Guess</label>
        <input
          placeholder="2025"
          id="guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={submitGuess}>Guess</button>
      </div>

      <div>
        {hints.map((hint: Hint, index: number) => {
          return (
            <div key={index}>
              <p>Question: {hint.question}</p>
              <p>Hint: {hint.hint}</p>
            </div>
          );
        })}
      </div>

      <div>
        <label htmlFor="">Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={() => getHint(question)}>Submit</button>
      </div>
    </div>
  );
};

export default Game;
