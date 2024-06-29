import React from 'react'

export default function TicTacToeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-blue-800 h-screen w-screen'>
            {children}
        </ div>
    )
}
