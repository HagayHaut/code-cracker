import React, { useState, useEffect } from 'react';
import Guess from './Guess';
 
function GameBoard({ game, guesses, addGuess, username , shuffle, settings, handleSolved, timer}) {
  const {password, gameBoardNum, isSolved} = game
  const {randomEventsLimit} = settings
 
  const [randomEventsCount, setRandomEventsCount] = useState(0)
 
 
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
  function checkWin() {
    renderDisplayGuesses()
 
    if (!isSolved && guesses.includes(password)) {
      handleBoardWin()
    }
  }
 
  checkWin()
 
  function renderDisplayGuesses(){
    for(let i = 0; i < guesses.length; i++) {
      displayGuesses.push(guesses[i]);
      if(guesses[i] === password) break;
    }
  }
 
  function handleBoardWin(){
    console.log(gameBoardNum, 'solved')
    handleSolved(gameBoardNum)
    //fetch call here
    const body = {
      username: username,
      score: displayGuesses.length,
      settings: settings,
      password: password,
      guesses: guesses,
      time: timer
    }
    fetch('http://localhost:4000/games',{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(r => r.json())
    .then(d => {
      console.log('fetch', d)
    })
  }
 
  const guessList = displayGuesses.map((guess,i) => {
    return <Guess
            index={i}
            key={guess}
            guess={guess}
            password={password}
            boardNum={gameBoardNum}
          />
  })
 
 
  // add classname for solved/unsolved boards.
  return (
    <div className="board">Board {gameBoardNum}
    {/* {password} */}
    {/* {isSolved? 'solved':'inprogress'} */}
      <ul style={{listStyleType: 'none'}}>
          {guessList}
      </ul>
    </div>
  )
}
 
export default GameBoard
