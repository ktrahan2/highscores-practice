import React, { useState } from 'react'

export default function SubmitScoreForm({ isScore, setScore, clickCount }) {

    const [ userName, setUserName ] = useState("")

    const renderName = (event) => {
        setUserName(event.target.value)
    }

    const postScore = () => {
        console.log(userName, isScore, clickCount)
        // fetch("url", {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         name: userName,
        //         score: isScore,
        //         clicks: clickCount
        //     })
        // })
        // setScore(0)
    }

    return (
        <form id="submit-score-form">
            <div id="submit-name-input">
                <label
                    htmlFor="user-name"
                >Name:
                </label>
                <input
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
        </form>
    )
}
