import Game from "@/components/game";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col mb-20">
      <div className="flex justify-center py-10">
        <h1 className="text-4xl font-bold">Timetraveler</h1>
      </div>
      <Game />
    </div>
  );
}
