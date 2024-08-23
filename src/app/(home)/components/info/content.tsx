import React from 'react'

export default function GameInfoContent() {
    return (
        <>
            <p>Memory Match Game is a fun and challenging color card-matching game designed to test and improve your memory skills. The game features four levels of difficulty: Easy, Medium, Hard, and Extreme. Each level increases in complexity and offers a unique challenge to keep players engaged.</p>

            <h2>Levels</h2>
            <ul>
                <li><strong>Easy (16 boxes):</strong> Perfect for beginners, this level contains 16 boxes (8 pairs). Match all pairs to win.</li>
                <li><strong>Medium (32 boxes):</strong> A moderate challenge with 32 boxes (16 pairs). Requires more focus and memory.</li>
                <li><strong>Hard (64 boxes):</strong> For advanced players, this level has 64 boxes (32 pairs). A true test of your memory skills.</li>
                <li><strong>Extreme (64 boxes with reset):</strong> The ultimate challenge! This level also has 64 boxes (32 pairs), but with a twist. If a match is not made, the entire board resets, demanding impeccable memory and strategy.</li>
            </ul>

            <h2>How to Play</h2>
            <ul>
                <li>Select a level to start the game.</li>
                <li>Click on two boxes to reveal their color.</li>
                <li>If the color match, they remain uncovered. If not, they are hidden again.</li>
                <li>Continue matching pairs until all pairs are found.</li>
                <li>In the Extreme level, make sure to match pairs correctly, or the board will reset!</li>
            </ul>

            <h2>Features</h2>
            <ul>
                <li>Engaging gameplay with increasing difficulty</li>
                <li>Four unique levels to cater to different skill levels</li>
                <li>Beautifully designed cards and intuitive interface</li>
                <li>Challenge your memory and improve your cognitive skills</li>
            </ul>
            <p>Get ready to test your memory and have fun with Memory Match Game!</p>
        </>
    )
}
