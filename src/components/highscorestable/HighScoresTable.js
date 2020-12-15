import React from 'react'

export default function HighScoresTable({ highScores }) {

    const createHighScoreRow = () => {
        sortScores(highScores)
        return highScores.map((person, index) => {
            if (index < 10) {
                return (
                    <tr key={index}>
                        <td>{person.name}</td>
                        <td>{person.score}</td>
                        <td>{person.clicks}</td>
                        <td>{averageClicks(person)}</td>
                    </tr>
                )
            }
        })
    }

    //could refactor to not use .sort if time is a concern. currently worst-case O(n2)
    const sortScores = (scores) => {
        return scores.sort( ( a, b ) => b.score - a.score)
    }

    const averageClicks = (person) => {
        return (person.score/person.clicks).toFixed(2)
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
