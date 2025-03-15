import Game from "@/components/game";

export default function Home() {
  return (
    <div className="w-screen min-h-screen">
      <div className="flex justify-center pt-10">
        <h1 className="text-3xl">Timetraveler</h1>
      </div>
      <Game />
    </div>
  );
}
