"use client"
import React from 'react'
import MemoryGame from './components/index'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function MemoryGamePage() {
  return (
    <TooltipProvider>
        <MemoryGame />
    </TooltipProvider>
  )
}
