import React, { useEffect, useState, useTransition } from 'react'
import memoryGameStore from '../../../store/store';
import NumberSequenceCard from './number-sequnce.card';
import ColorCard from './color-card';

export default function MemoryCard({ color, index }: { color: string, index: number }) {
    const {
        complexity,
        gameType
    } = memoryGameStore();

    const [isMatched, setIsMatched] = useState(false)
    const [_, setTransition] = useTransition()

    // initial transition
    useEffect(() => {
        setIsMatched(true);
        setTransition(() => {
            setTimeout(() => {
                setIsMatched(false);
            },
                gameType === "Number-Sequence" ?
                    complexity === "Easy" ? 500 : complexity === "Medium" ? 1000 : complexity === "Hard" ? 3000 : 6000
                    : complexity === "Easy" ? 300 : complexity === "Medium" ? 500 : complexity === "Hard" ? 3000 : 6000
            );
        })
    }, [])

    if (gameType === "Number-Sequence") {
        return <NumberSequenceCard color={color} index={index} isMatched={isMatched} setIsMatched={setIsMatched} />
    }

    return <ColorCard color={color} index={index} isMatched={isMatched} setIsMatched={setIsMatched} />
}

