"use client";

import { useState } from "react";

const Guess = ({ submitGuess }: { submitGuess: (guess: string) => void }) => {
  const [guess, setGuess] = useState<string>("");

  return (
    <div className="flex flex-col items-center space-y-4">
      <label htmlFor="guess" className="text-lg font-semibold text-white">
        Enter Your Guess
      </label>
      <input
        className="input w-64"
        placeholder="e.g., 2025"
        id="guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button
        onClick={() => submitGuess(guess)}
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md transition duration-300"
      >
        Guess
      </button>
    </div>
  );
};

export default Guess;
