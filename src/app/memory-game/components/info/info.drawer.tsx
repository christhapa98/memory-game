import React from 'react'
import { InfoIcon } from 'lucide-react'

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'

import GameInfoContent from './content'

export default function InfoDrawer() {
    return (
        <Drawer>
            <DrawerTrigger>
                <div className='bg-white p-2 rounded-full cursor-pointer hover:scale-105 h-10 w-10 items-center flex absolute right-4 bottom-4'>
                    <InfoIcon />
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Memory Match Game</DrawerTitle>
                    <DrawerDescription className='space-y-3 py-3'>
                       <GameInfoContent/>
                    </DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    )
}
