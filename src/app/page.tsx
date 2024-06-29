import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/memory-game">
        <button className="bg-slate-700 rounded-md px-4 py-3 hover:scale-105 transition-all">
          MemoryGame
        </button>
      </Link>
    </main>
  );
}
