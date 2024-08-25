import { useEffect, useState } from "react";
import memoryGameStore from "../store/store";
import { GameType } from "../types";
import generateNumbers from "../helpers/numbers";
import { generateColors } from "../helpers/colors";
import generateNumberSequence from "../helpers/numbers-sequence";

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
        }
        else if (gameType === "Number-Sequence") {
            setGameCards(generateNumberSequence(complexity))
        } else {
            setGameCards(generateColors(complexity));
        }
    }, [])

    useEffect(() => {
        if (secondCard && gameType !== "Number-Sequence") {
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
        } else {

        }
    }, [secondCard])

    useEffect(() => {
        if (gameType === "Number-Sequence") {
            const matchCounts = {
                "Easy": 16,
                "Medium": 32,
                "Hard": 48,
                "Extreme": 48
            };

            if (matchedCards.length === matchCounts[complexity]) {
                endGame();
            }
        }
        else {
            const matchCounts = {
                "Easy": 8,
                "Medium": 16,
                "Hard": 24,
                "Extreme": 24
            };

            if (matchedCards.length === matchCounts[complexity] * 2) {
                endGame();
            }
        }
    }, [matchedCards])

    return { gameCards }
}
