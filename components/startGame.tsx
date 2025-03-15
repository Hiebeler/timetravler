"use client";

import { TimePeriodDifficulty } from "@/data/timePeriods";
import TimePeriodSelector from "./timePeriodSelector";
import { useState } from "react";

const StartGame = ({
  start,
  timePeriodMode,
  setTimePeriodMode,
}: {
  start: () => void;
  timePeriodMode: TimePeriodDifficulty;
  setTimePeriodMode: (timePeriodMode: TimePeriodDifficulty) => void;
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-lg text-gray-300 max-w-md text-center mb-6">
        You have been transported to an unknown time period. Ask questions to
        uncover when you are!
      </p>
      <TimePeriodSelector
        difficulty={timePeriodMode}
        setDifficulty={setTimePeriodMode}
      />
      <div>
        <button onClick={start} className="button">
          Start
        </button>
      </div>
    </div>
  );
};

export default StartGame;
