"use client"
import React from 'react'

import memoryGameStore from '../store/store'
import Newgame from './new-game';
import InfoDrawer from './info/info.drawer';
import GameBackButton from './info/back-button';
import Game from './game/game';
import CloseModal from './game/modal/close.modal';
import Ended from './ended';

export default function MemoryGame () {
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
                <Game />
            </div>
    }

    return <div className='flex justify-center items-center h-screen w-screen p-5'>
        <Ended />
    </div>
}
