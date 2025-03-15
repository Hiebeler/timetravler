import { useState } from "react";

const Question = ({ getHint }: { getHint: (question: string) => void }) => {
  const [question, setQuestion] = useState<string>("");

  const submit = (question: string) => {
    setQuestion("");
    getHint(question);
  }

  return (
    <div className="flex flex-col items-center space-y-4 mt-10">
      <label htmlFor="question" className="text-lg font-semibold text-white">
        Ask a Question:
      </label>
      <input
        type="text"
        id="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-80 px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        placeholder="e.g., What major events happened?"
      />
      <button
        onClick={() => submit(question)}
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md transition duration-300"
      >
        Ask
      </button>
    </div>
  );
};

export default Question;