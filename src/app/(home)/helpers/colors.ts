import { shuffle } from "./core";

export function generateColors(complexity: string): any[] {
    switch (complexity) {
        case "Easy":
            return generateGameColor(8);
        case "Medium":
            return generateGameColor(16);
        case "Hard":
            return generateGameColor(24);
        case "Extreme":
            return generateGameColor(24);
        default:
            return generateGameColor(24);
    }
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