import React, { useState, useEffect } from 'react'
import './App.css';
import AlterHighScoreButton from './components/AlterHighScoreButton'
import DisplayScore from './components/DisplayScore'
import SubmitScoreForm from './components/SubmitScoreForm'
import HighScoresTable from './components/highscorestable/HighScoresTable'
import DummyData, { dummyData } from './DummyData'
function App() {

  const [ isScore, setScore ] = useState(0)
  const [ clickCount, setClickCount ] = useState(0)
  const [ highScores, setHighScores ] = useState([])
  
  useEffect( () => {
    // fetch('url')
    // .then(response => response.json())
    // .then(data => {
    //  setHighScores(data)
    // })
    setHighScores(dummyData) 
  }, []
  )

  return (
    <div className="App">
      <div id="score-container">
        {/* probably dont need component to display, its just a p tag? */}
        <DisplayScore
          isScore={isScore}
        />
        <AlterHighScoreButton
          isScore={isScore}
          setScore={setScore}
          clickCount={clickCount}
          setClickCount={setClickCount}  
        />
      </div> 
      <SubmitScoreForm
        isScore={isScore}
        setScore={setScore}
        clickCount={clickCount}
        setClickCount={setClickCount}
        highScores={highScores}
        setHighScores={setHighScores}
      />
      <>
        <HighScoresTable
          highScores={highScores}
        />
      </>
    </div>
  );
}

export default App;
