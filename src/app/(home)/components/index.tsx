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
        return <div className='flex justify-center items-center h-screen w-screen relative'>
            <Newgame />
            <InfoDrawer />
        </div>
    }

    if (gameState === "Playing") {
        return <div className='relative'>
            <div className='flex justify-center items-center h-screen w-screen '>
                <Game />
            </div>
            <div className='space-y-4 pr-5 absolute bottom-8 right-8'>
                <GameBackButton />
                <CloseModal />
            </div>
        </div>
    }

    return <div className='flex justify-center items-center h-screen w-screen '>
        <Ended />
    </div>
}
