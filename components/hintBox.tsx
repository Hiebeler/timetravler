import { Hint } from "@/interfaces/hint.interface";

const HintBox = ({ hint }: { hint: Hint }) => {
  return (
    <div className="p-4 border border-gray-600 bg-gray-800 text-white rounded-md shadow-md max-w-lg">
      <p className="text-blue-400 font-semibold">
        Question: <span className="text-gray-300">{hint.question}</span>
      </p>
      <p className="text-green-400 font-semibold">
        Hint: <span className="text-gray-300">{hint.hint}</span>
      </p>
    </div>
  );
};

export default HintBox;
