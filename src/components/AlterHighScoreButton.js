import React, { useState } from 'react'

export default function AlterHighScoreButton({ isScore, setScore, clickCount, setClickCount }) {

    const generateNewScore = () => {
        setScore(isScore + (getRandomNumber()))
        setClickCount(clickCount + 1)
    }

    const getRandomNumber = () => {
        let min = -100
        let max = 100
        return Math.floor(Math.random() * (max - min + 1) + min )
    }

    return (
        <>
        { clickCount <= 10 ?
            <button
                className="button"
                id="generate-new-score-button"
                onClick={generateNewScore}
            >
                Winner Winner Chicken Dinner
            </button>
            : <p>
                Out of clicks!
            </p>
        }
        </>
    )
}
