import { create } from "zustand";

type Complexity = "Easy" | "Medium" | "Hard" | "Extreme";

type GameState = "New" | "Playing" | "Ended" | "Quited";

type MemoryGameStore = {
    playerName: string;
    complexity: Complexity;
    gameState: GameState;
    gameType: string;
    startTime: string | null;
    endTime: string | null;
    hasGameTimer: boolean;
    gameTimer: string | null;
    firstCard: { index: number, color: string } | null;
    secondCard: { index: number, color: string } | null;
    matchedCards: { index: number, color: string }[];
    setGameTimer: (gameTimer: string) => void;
    setGameType: (gameType: string) => void;
    setPlayerName: (playerName: string) => void;
    setComplexity: (complexity: Complexity) => void;
    setGameState: (gameState: GameState) => void;
    setStartTime: (startTime: string | null) => void;
    setEndTime: (endTime: string | null) => void;
    setHasGameTimer: (hasGameTimer: boolean) => void;
    setFirstCard: (firstCard: { index: number, color: string } | null) => void;
    setSecondCard: (firstCard: { index: number, color: string } | null) => void;
    setMatchedCards: (matchedCards: { index: number, color: string }[]) => void;
}

const memoryGameStore = create<MemoryGameStore>((set) => ({
    playerName: "Player",
    complexity: "Easy",
    gameType: "color",
    gameState: "New",
    hasGameTimer: false,
    startTime: null,
    endTime: null,
    matchedCards: [],
    firstCard: null,
    secondCard: null,
    gameTimer: "3",
    setGameType: (gameType: string) => set({ gameType }),
    setGameTimer: (gameTimer: string) => set({ gameTimer }),
    setPlayerName: (playerName: string) => set({ playerName }),
    setComplexity: (complexity: Complexity) => set({ complexity }),
    setHasGameTimer: (hasGameTimer: boolean) => set({ hasGameTimer }),
    setGameState: (gameState: GameState) => set({ gameState }),
    setStartTime: (startTime: string | null) => set({ startTime }),
    setEndTime: (endTime: string | null) => set({ endTime }),
    setMatchedCards: (matchedCards: { index: number, color: string }[]) => set({ matchedCards }),
    setFirstCard: (firstCard: { index: number, color: string } | null) => set({ firstCard }),
    setSecondCard: (secondCard: { index: number, color: string } | null) => set({ secondCard }),
}))

export default memoryGameStore;
