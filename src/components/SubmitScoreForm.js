import React, { useState } from 'react'

export default function SubmitScoreForm({ isScore, setScore, clickCount, setClickCount }) {

    const [ userName, setUserName ] = useState("")

    const renderName = (event) => {
        setUserName(event.target.value)
    }

    const postScore = () => {
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
        console.log("im post fetching")
        setScore(0)
        setUserName("")
        setClickCount(0)
    }

    return (
        <>
            <div id="submit-name-input">
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
                Submit Score
            </button>
        </>
    )
}
