import { useEffect, useState } from "react";
import memoryGameStore from "../store/store";

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

    const [gameCards, setGameCards] = useState<any[]>([]);


    function endGame() {
        setGameState("Ended")
        setEndTime(new Date().toISOString())
    }

    useEffect(() => {
        if (gameType === "color") {
            setGameCards(generateCards(complexity))
        } else {
            setGameCards(generateCards(complexity));
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

function generateCards(complexity: string): any[] {
    switch (complexity) {
        case "Easy":
            return generateGameColor(8);
        case "Medium":
            return generateGameColor(16);
        case "Hard":
            return generateGameColor(32);
        case "Extreme":
            return generateGameColor(32);
        default:
            return generateGameColor(32);
    }
}


function shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateRandomColorsArray(length: number) {
    const colorsArray = [];
    for (let i = 0; i < length; i++) {
        colorsArray.push(getRandomColor());
    }
    return colorsArray;
}

function generateGameColor(length: number) {
    const color = generateRandomColorsArray(length);
    const gameColors = shuffle([...color, ...color]);
    return gameColors
};