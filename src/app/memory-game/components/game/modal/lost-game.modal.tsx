
import React from 'react'
import { PowerIcon } from 'lucide-react'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button';

export default function CloseModal() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <div className='bg-white p-2 rounded-full cursor-pointer hover:scale-105 h-10 w-10 items-center flex'>
                    <PowerIcon className='text-red-500' />
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Your time has ended</DialogTitle>
                </DialogHeader>
                <div className='flex flex-row-reverse gap-3'>
                    <Button onClick={() => {
                    }}>Yes</Button>
                    <Button>No</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
