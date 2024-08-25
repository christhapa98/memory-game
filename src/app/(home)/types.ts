export type Complexity = "Easy" | "Medium" | "Hard" | "Extreme";

export type GameState = "New" | "Playing" | "Ended" | "Quited";

export type GameType = "Color" | "Image" | "Number" | "Number-Sequence" |"Emoji";

export type GameCardProp={ color: string, index: number, isMatched: boolean, setIsMatched: any }