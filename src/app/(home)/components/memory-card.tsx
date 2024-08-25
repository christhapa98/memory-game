import { Card } from '@/components/ui/card'
import React, { useEffect, useState, useTransition } from 'react'
import memoryGameStore from '../store/store';

export default function MemoryCard({ color, index }: { color: string, index: number }) {
    const { firstCard, setFirstCard, secondCard, setSecondCard, matchedCards, complexity, gameType } = memoryGameStore();
    const [isMatched, setIsMatched] = useState(false)
    const [_, setTransition] = useTransition()

    function handleSelectCard() {
        if (firstCard != null) {
            setSecondCard({ index, color })
        }
        else {
            setFirstCard({ index, color });
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

    useEffect(() => {
        setIsMatched(true);
        setTransition(() => {
            setTimeout(() => {
                setIsMatched(false);
            },
                complexity === "Easy" ? 300 : complexity === "Medium" ? 500 : complexity === "Hard" ? 3000 : 6000
            );
        })
    }, [])

    return (
        <Card
            onClick={() => { handleSelectCard() }}
            className={`${complexity === "Hard" || complexity === "Extreme" ? "h-12 w-12" : "h-16 w-16"} lg:h-20 lg:w-20 hover:scale-105 cursor-pointer transition-all rounded`}
        >
            {gameType === 'Color' && <div
                className='h-full w-full rounded'
                style={{
                    backgroundColor: !isMatched ? "white" : color
                }} ></div>}
            {gameType === 'Number' &&
                <div className='flex items-center justify-center h-full'
                    style={{
                        backgroundColor: isMatched ? "gray" : "white",
                        color: isMatched ? "white" : "black"
                    }}>
                    {isMatched && color}
                </div>}
        </Card>
    )
}

