"use client"
import React from 'react'

import memoryGameStore from '../store/store'
import Newgame from './new-game';
import InfoDrawer from './info/info.drawer';
import Game from './game/game';
import Ended from './ended';

export default function MemoryGame() {
    const {
        gameState,
    } = memoryGameStore();

    if (gameState === "New") {
        return <div className='flex justify-center items-center h-screen w-screen relative p-5 lg:p-0'>
            <Newgame />
            <InfoDrawer />
        </div>
    }

    if (gameState === "Playing") {
        return <div className='relative p-5 h-screen w-screen'>
            <div className='space-y-6 relative h-full flex flex-col justify-center w-full items-center'>
                <Game />
            </div>
        </div>
    }

    return <div className='flex justify-center items-center h-screen w-screen p-5'>
        <Ended />
    </div>
}
