import { shuffle } from "./core";

export default function generateNumberSequence(complexity: string): any[] {
    switch (complexity) {
        case "Easy":
            return generateGameNumbers(16);
        case "Medium":
            return generateGameNumbers(24);
        case "Hard":
            return generateGameNumbers(48);
        case "Extreme":
            return generateGameNumbers(48);
        default:
            return generateGameNumbers(48);
    }
}

function generateGameNumbers(length: number) {
    const color = generateNumber(1, length);
    const gameColors = shuffle([...color]);
    return gameColors
};

function generateNumber(start: number, end: number) {
    const numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}
