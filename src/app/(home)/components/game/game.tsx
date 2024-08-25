import React from 'react'

import { Card } from '@/components/ui/card'

import memoryGameStore from '../../store/store';
import useMemoryGame from '../../hook/memory-game.hook';
import MemoryCard from './cards/memory-card';
import { GameHeader } from './header';

export default function Game() {
    const { complexity } = memoryGameStore();
    const { gameCards } = useMemoryGame();

    return (
        <div className='w-fit'>
            <GameHeader />
            <Card className='p-5 bg-white bg-opacity-70'>
                <div className={`grid ${complexity === "Easy" ? "grid-cols-4" : complexity === "Medium" ? "grid-cols-4 md:grid-cols-8" : "grid-cols-6 lg:grid-cols-8"} gap-5`}>
                    {gameCards.map((color, index) => (
                        <MemoryCard key={index} index={index} color={color} />
                    ))}
                </div>
            </Card>
        </div>
    )
}
