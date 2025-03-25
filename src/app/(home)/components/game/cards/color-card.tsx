import React, { useEffect } from 'react'
import { Card } from '@/components/ui/card'
import memoryGameStore from '@/app/(home)/store/store';
import { GameCardProp } from '@/app/(home)/types';

export default function ColorCard({ color, index, isMatched, setIsMatched }: GameCardProp) {
    const {
        firstCard,
        setFirstCard,
        secondCard,
        setSecondCard,
        matchedCards,
        complexity,
        gameType
    } = memoryGameStore();

    function handleSelectCard() {
        if (!isMatched) {
            if (firstCard != null) {
                setSecondCard({ index, color })
            }
            else {
                setFirstCard({ index, color });
            }
        }
    }

    useEffect(() => {
        const isSelected = matchedCards.filter((card) => card.index === index).length === 1
        if (isSelected) {
            setIsMatched(true)
        }
        else {
            if (index === firstCard?.index || index === secondCard?.index || isSelected) {
                setIsMatched(true)
            }
            if (firstCard === null) {
                setIsMatched(false)
            }
        }
    }, [firstCard, secondCard])

    if (gameType === 'Emoji') {
        return <div
            className={`${complexity === "Hard" || complexity === "Extreme" ? "h-12 w-12" : "h-16 w-16"} lg:h-20 lg:w-20 hover:scale-105 cursor-pointer transition-all rounded text-[40px] flex items-center justify-center border`}
            onClick={() => { handleSelectCard() }}
        >
            {isMatched && color}
        </div>
    }

    return (
        <Card
            onClick={() => { handleSelectCard() }}
            className={`${complexity === "Hard" || complexity === "Extreme" ? "h-12 w-12" : "h-16 w-16"} lg:h-20 lg:w-20 hover:scale-105 cursor-pointer transition-all rounded`}
        >
            <FlipCard isMatched={isMatched} color={color} />
        </Card>
    )
}

function FlipCard({ isMatched, color, isColor = false }: { isMatched: boolean, color: string, isColor?: boolean }) {
    const {
        gameType
    } = memoryGameStore();
    if (gameType === 'Color') {
        return (
            <div className={`rounded-lg border  text-card-foreground shadow-sm  flip-inner bg-card ${!isMatched ? "flipped" : ""}`}>
                <div style={{ backgroundColor: "white" }} className="flip-front 'h-full w-full rounded'" />
                <div style={{ backgroundColor: color }} className="flip-front 'h-full w-full rounded'" />
            </div>
        )
    }
    return (
        <>
            <div className={`rounded-lg border  text-card-foreground shadow-sm flip-inner bg-card ${isMatched ? "flipped" : ""}`}>
                <div style={{ color: 'gray', backgroundColor: isColor ? color : 'white' }} className="flip-front flex items-center justify-center h-full" />
                <div style={{ color: isColor ? color : 'white', backgroundColor: 'black' }} className="flip-back flex items-center justify-center bg-red-500 text-white">
                    {color}
                </div>
            </div>
        </>
    );
};
