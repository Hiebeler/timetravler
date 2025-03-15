const StartGame = ({ start }: { start: () => void }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-lg text-gray-300 max-w-md text-center mb-6">
        You have been transported to an unknown time period. Ask questions to
        uncover when you are!
      </p>
      <div>
        <button onClick={start} className="button">
          Start
        </button>
      </div>
    </div>
  );
};

export default StartGame;
