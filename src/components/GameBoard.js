import React, { useState, useEffect } from 'react';
import Guess from './Guess';

function GameBoard({ password, guesses, addGuess, username, randomEventsLimit, id , shuffle}) {

  const [randomEventsCount, setRandomEventsCount] = useState(0)
  const [isSolved, setIsSolved] = useState(false)


  if(randomEventsCount < randomEventsLimit) {
    const nums = ['1','2','3','4','5','6','7','8','9','0'];
    const rand = Math.floor(Math.random() * 10)
    if(rand === 1) {
      setRandomEventsCount(pre => pre + 1)
      const forceGuess = shuffle(nums).slice(0, password.length).join('')
      addGuess(forceGuess)
    }
  } 

  let displayGuesses = []
  function upToPassword() {
    for(let i = 0; i < guesses.length; i++) {
      displayGuesses.push(guesses[i]);
      if(guesses[i] === password) break;
    }
  }
  upToPassword()

  function handleBoardWin(){
    setIsSolved(true)
  }

  const guessList = displayGuesses.map((guess,i) => {
    return <Guess 
            index={i}
            password={password} 
            key={guess} 
            guess={guess}
            username={username}
            handleBoardWin={handleBoardWin}
          />
  })

  return (

    <div className="board">GameBoard {id} - {password}
      <ul style={{listStyleType: 'none'}}>
          {guessList}
      </ul>
    </div>

  )
}

export default GameBoard