import React, { useState } from 'react'
import './App.css';
import AlterHighScoreButton from './components/AlterHighScoreButton'
import DisplayScore from './components/DisplayScore'
import SubmitScoreForm from './components/SubmitScoreForm'

function App() {

  const [ isScore, setScore ] = useState(0)
  const [ clickCount, setClickCount ] = useState(0)

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
      />
      <div id="high-scores">

      </div>
    </div>
  );
}

export default App;
