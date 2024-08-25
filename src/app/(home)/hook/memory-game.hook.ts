import { useEffect, useState } from "react";
import memoryGameStore from "../store/store";
import { GameType } from "../types";
import generateNumbers from "../helpers/numbers";
import { generateColors } from "../helpers/colors";

export default function useMemoryGame() {
    const { complexity,
        firstCard,
        matchedCards,
        setGameState,
        secondCard,
        setMatchedCards,
        setFirstCard,
        setSecondCard,
        setEndTime,
        gameType
    } = memoryGameStore();

    const [gameCards, setGameCards] = useState<GameType[]>([]);


    function endGame() {
        setGameState("Ended")
        setEndTime(new Date().toISOString())
    }

    useEffect(() => {
        if (gameType === "Color") {
            setGameCards(generateColors(complexity))
        } else if (gameType === "Number") {
            setGameCards(generateNumbers(complexity))
        } else {
            setGameCards(generateColors(complexity));
        }
    }, [])

    useEffect(() => {
        if (secondCard) {
            setTimeout(() => {
                if (firstCard!.color === secondCard!.color) {
                    setMatchedCards([...matchedCards, firstCard!, secondCard])
                } else {
                    if (complexity === "Extreme") {
                        setMatchedCards([])
                    }
                }
                setFirstCard(null)
                setSecondCard(null)
            }, 300);
        }
    }, [secondCard])

    useEffect(() => {
        const matchCounts = {
            "Easy": 8,
            "Medium": 16,
            "Hard": 32,
            "Extreme": 32
        };

        if (matchedCards.length === matchCounts[complexity] * 2) {
            endGame();
        }
    }, [matchedCards])

    return { gameCards }
}
