import memoryGameStore from '@/app/(home)/store/store';
import { Card } from '@/components/ui/card'
import React, { useEffect } from 'react'

export default function NumberSequenceCard({ color, index, isMatched, setIsMatched }: { color: string, index: number, isMatched: boolean, setIsMatched: any }) {
    const { complexity, matchedCards, setMatchedCards } = memoryGameStore();

    const handleNumberSequenceSelect = () => {
        if (!isMatched) {
            setIsMatched(true)
            setTimeout(() => {
                if (matchedCards.length === 0) {
                    if (color.toString() === "1") {
                        setMatchedCards([...matchedCards, { color, index }])
                    } else {
                        setIsMatched(false)
                    }
                } else {
                    if (color.toString() === (matchedCards.length + 1).toString()) {
                        console.log(color, matchedCards.length)
                        setMatchedCards([...matchedCards, { color, index }])
                        setIsMatched(true);
                    } else {
                        setIsMatched(false)
                    }
                }
            }, 200);
        }
    }

    useEffect(() => {
        const isSelected = matchedCards.filter((card) => card.index === index).length === 1
        if (isSelected) {
            setIsMatched(true)
        }
    }, [matchedCards])

    return <Card
        onClick={handleNumberSequenceSelect}
        className={`${complexity === "Hard" || complexity === "Extreme" ? "h-12 w-12" : "h-16 w-16"} lg:h-20 lg:w-20 hover:scale-105 cursor-pointer transition-all rounded`}
    >
        <div className='flex items-center justify-center h-full'
            style={{
                backgroundColor: isMatched ? "green" : "white",
                color: isMatched ? "white" : "black"
            }}>
            {isMatched && color}
        </div>
    </Card>
}
