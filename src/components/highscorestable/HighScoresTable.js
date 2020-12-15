import React from 'react'

export default function HighScoresTable({ highScores }) {
    //need this to only show the top 10 scores
    const createHighScoreRow = () => {
        return highScores
            .sort((a, b) => b.score - a.score)
            .map((person, index) => {
                if (index < 10) {
                    return (
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.score}</td>
                            <td>{person.clicks}</td>
                            <td>{person.score/person.clicks}</td>
                        </tr>
                    )
                }
        })
    }
    return (
        <table id="high-scores-table">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Clicks</th>
                    <th>Avg Score Per Click</th>
                </tr>
                {createHighScoreRow()}
            </tbody>
        </table>
    )
}
