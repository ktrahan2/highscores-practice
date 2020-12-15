import React from 'react'

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
            <>
                <p>{(10 - clickCount) + " " + `Clicks remaining!`}</p>
                <button
                    className="button"
                    id="generate-new-score-button"
                    onClick={generateNewScore}
                >
                    Try Your Luck!
                </button>
                </>
                : <p id="out-of-clicks">
                    Out of clicks!
                </p>
            }
        </>
    )
}
