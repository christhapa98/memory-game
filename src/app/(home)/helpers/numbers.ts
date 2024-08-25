import { shuffle } from "./core";

export default function generateNumbers(complexity: string): any[] {
    switch (complexity) {
        case "Easy":
            return generateGameNumbers(8);
        case "Medium":
            return generateGameNumbers(16);
        case "Hard":
            return generateGameNumbers(32);
        case "Extreme":
            return generateGameNumbers(32);
        default:
            return generateGameNumbers(32);
    }
}

function generateGameNumbers(length: number) {
    const color = generateRandomNumbersArray(length);
    const gameColors = shuffle([...color, ...color]);
    return gameColors
};

function generateRandomNumbersArray(length: number) {
    const numbersArray = [];
    for (let i = 0; i < length; i++) {
        numbersArray.push(getRandomNumber());
    }
    return numbersArray;
}

function getRandomNumber(): number {
    return Math.floor(Math.random() * 24) + 1;
}