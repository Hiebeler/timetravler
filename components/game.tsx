"use client";

import { timePeriods } from "@/data/timePeriods";
import { GameStatus } from "@/interfaces/gamestatus.enum";
import { Hint } from "@/interfaces/hint.interface";
import { TimePeriod } from "@/interfaces/timePeriod.interface";
import { HintService } from "@/services/hint.service";
import { useMutation } from "@tanstack/react-query";

import { useState } from "react";
import StartGame from "./startGame";
import Guess from "./guess";
import Question from "./question";
import HintBox from "./hintBox";
import toast from "react-hot-toast";

const Game = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Pending);
  const [timePeriod, setTimePeriod] = useState<TimePeriod | undefined>(
    undefined
  );
  const [hints, setHints] = useState<Hint[]>([]);
  const [question, setQuestion] = useState<string>("");

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

  const submitGuess = (guess: string) => {
    const year = Number(guess);
    if (year >= timePeriod!.startYear && year <= timePeriod!.endYear) {
      setGameStatus(GameStatus.Won);
    } else {
      const distance = Math.min(
        Math.abs(timePeriod!.startYear - year),
        Math.abs(timePeriod!.endYear - year)
      );
      if (distance <= 100) {
        toast.error("You are close by");
      } else {
        toast.error("Wrong");
      }
    }
  };

  if (gameStatus == GameStatus.Won) {
    return (
      <div>
        <h2 className="text-2xl">Won</h2>
        <p>{timePeriod?.name}</p>
        <p>
          {timePeriod?.startYear} - {timePeriod?.endYear}
        </p>
      </div>
    );
  }

  if (gameStatus == GameStatus.Pending) {
    return <StartGame start={startGame} />;
  }

  return (
    <div>
      <Guess submitGuess={submitGuess} />

      <div className="w-full space-y-4 justify-center items-center flex flex-col mt-10">
        {hints.map((hint: Hint, index: number) => (
          <div key={index}>
            <HintBox hint={hint} />
          </div>
        ))}
      </div>

      <Question getHint={getHint} />
    </div>
  );
};

export default Game;
