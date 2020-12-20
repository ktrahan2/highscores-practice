import React from 'react'
import {averageClicks} from '../../utils/averageScore'


export default function HighScoresTable({ highScores }) {

    const createHighScoreRow = () => {
        sortScores(highScores)
        let slicedHighScores = highScores;
        if (highScores.length > 10 ) {
            slicedHighScores = highScores.slice(9)
        }

        return slicedHighScores.map((person, index) => {
            return (
                <tr key={index}>
                    <td>{person.name}</td>
                    <td>{person.score}</td>
                    <td>{person.clicks}</td>
                    <td>{averageClicks(person)}</td>
                </tr>
            )
        })
    }

    //could refactor to not use .sort if time is a concern. currently worst-case O(n2)
    const sortScores = (scores) => {
        return scores.sort( ( a, b ) => b.score - a.score)
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
