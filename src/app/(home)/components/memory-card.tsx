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
                complexity === "Easy" ? 300 : complexity === "Medium" ? 500 : complexity === "Hard" ? 2000 : 4000
            );
        })
    }, [])

    return (
        <Card
            onClick={() => { handleSelectCard() }}
            className='h-20 w-20 hover:scale-105 cursor-pointer transition-all'
        >
            {gameType === 'color' && <div
                style={{
                    backgroundColor: !isMatched ? "white" : color
                }} />}
            {gameType === 'number' &&
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

