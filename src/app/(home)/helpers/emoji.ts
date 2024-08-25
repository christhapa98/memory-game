import { shuffle } from "./core";

export default function generateEmojis(complexity: string): any[] {
    switch (complexity) {
        case "Easy":
            return generateGameEmojis(8);
        case "Medium":
            return generateGameEmojis(16);
        case "Hard":
            return generateGameEmojis(32);
        case "Extreme":
            return generateGameEmojis(32);
        default:
            return generateGameEmojis(32);
    }
}

function generateGameEmojis(length: number) {
    const emoji = getRandomUniqueEmojis(length);
    const gameEmojis = shuffle([...emoji, ...emoji]);
    return gameEmojis
};

function getRandomUniqueEmojis(length: number) {
    const emojis = [
        "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣",
        "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰",
        "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜",
        "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩", "🥳",
        "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️",
        "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤"
    ];

    // If the requested length is greater than the number of available emojis, return the full set
    if (length > emojis.length) {
        length = emojis.length;
    }

    // Shuffle the emojis array to ensure randomness
    const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);

    // Return the first `length` number of emojis from the shuffled array
    return shuffledEmojis.slice(0, length);
}