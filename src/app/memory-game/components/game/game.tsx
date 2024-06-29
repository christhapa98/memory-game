import React from 'react'

import { Card } from '@/components/ui/card'
import Timer from '@/components/game-timer';

import CountdownTimer from './countdown-timer';
import memoryGameStore from '../../store/store';
import useMemoryGame from '../../hook/memory-game.hook';
import MemoryCard from '../memory-card';

export default function Game() {
    const { complexity } = memoryGameStore();
    const { gameCards } = useMemoryGame();

    return (
        <div className='space-y-6 relative'>
            <GameHeader />
            <Card className='p-5 bg-white bg-opacity-70'>
                <div className={`grid ${complexity === "Easy" ? "grid-cols-4" : "grid-cols-8"} gap-5`}>
                    {gameCards.map((color, index) => (
                        <MemoryCard key={index} index={index} color={color} />
                    ))}
                </div>
            </Card>
        </div>
    )
}

const GameHeader = () => {
    const {
        startTime,
        hasGameTimer,
        gameTimer,
    } = memoryGameStore();

    return <div className='pb-4'>
        {hasGameTimer ?
            <div>
                <CountdownTimer onComplete={(completed) => {
                    if (completed) {
                    }
                }} time={+gameTimer!} />
            </div>
            :
            <div className='flex justify-between'>
                <p>Started on :  </p>
                <div>
                    <Timer startDate={startTime} />
                </div>
            </div>}
    </div>
}