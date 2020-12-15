import React, { useState } from 'react'

export default function SubmitScoreForm({ 
    isScore, 
    setScore, 
    clickCount, 
    setClickCount,
    highScores,
    setHighScores 
}) {

    const [ userName, setUserName ] = useState("")

    const renderName = (event) => {
        setUserName(event.target.value)
    }

    const postScore = () => {
        setHighScores([...highScores, {
            name: userName,
            score: isScore,
            clicks: clickCount
        }])
        postScoreFetch()
        setScore(0)
        setUserName("")
        setClickCount(0)
    }
    
    const postScoreFetch = () => {
        fetch("url", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: userName,
                score: isScore,
                clicks: clickCount
            })
        })
    }

    return (
        <div id="submit-name-container">
            <div id="name-container">
                <label
                    htmlFor="user-name"
                >Name:
                </label>
                <input
                    id="username-input"
                    name="user-name"
                    type="text"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={renderName}
                />
            </div>
            <button
                className="button"
                id="submit-score-button"
                onClick={postScore}
            >
                Send It!
            </button>
        </div>
    )
}
