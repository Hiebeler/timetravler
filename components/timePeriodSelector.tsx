import { TimePeriodDifficulty } from "../data/timePeriods";

const TimePeriodSelector = ({
  difficulty,
  setDifficulty,
}: {
  difficulty: TimePeriodDifficulty;
  setDifficulty: (difficulty: TimePeriodDifficulty) => void;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as TimePeriodDifficulty;
    setDifficulty(value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <label htmlFor="time-period" className="block text-lg font-medium mb-2">
        Select Difficulty
      </label>
      <select
        id="time-period"
        value={difficulty}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md bg-white text-gray-800"
      >
        <option value={TimePeriodDifficulty.Easy}>Easy Mode</option>
        <option value={TimePeriodDifficulty.Medium}>Medium Mode</option>
        <option value={TimePeriodDifficulty.Hard}>Hard Mode</option>
        <option value={TimePeriodDifficulty.Milestones}>Milestones</option>
        <option value={TimePeriodDifficulty.NineteenHundreds}>1900-2025</option>
      </select>
    </div>
  );
};

export default TimePeriodSelector;
