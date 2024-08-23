import React from 'react'
import { ChevronLeft } from 'lucide-react';
import memoryGameStore from '../../store/store';

export default function GameBackButton() {
    const {
        setFirstCard,
        setSecondCard,
        setMatchedCards,
        setGameState
    } = memoryGameStore();
    return (
        <div onClick={() => {
            setFirstCard(null)
            setSecondCard(null)
            setMatchedCards([])
            setGameState("New")
        }}
            className='bg-white p-2 rounded-full cursor-pointer hover:scale-105 h-10 w-10 items-center flex'>
            <ChevronLeft size={30} />
        </div>
    )
}
