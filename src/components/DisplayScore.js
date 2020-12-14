import React from 'react'

export default function DisplayScore({ isScore }) {
    return (
        <p id="current-score">
            {isScore}
        </p>
    )
}
