import React from 'react';
import Guess from './Guess';
 
function GameBoard({ game, guesses, username , settings, handleSolved, timer}) {
  const {password, gameBoardNum, isSolved} = game

  const guessArr = guesses.map(guess => guess.guess)

  let displayGuesses = []
 
  function checkWin() {
    renderDisplayGuesses()

    if (!isSolved && guessArr.includes(password)) {
      handleBoardWin()
    }
  }
 
  checkWin()
 
  function renderDisplayGuesses(){
    for(let i = 0; i < guessArr.length; i++) {
      displayGuesses.push(guesses[i]);
      if(guessArr[i] === password) break;
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
      time: timer,
      date: new Date()
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
            key={guess.guess}
            guessObj={guess}
            password={password}
            boardNum={gameBoardNum}
          />
  })
 
 
  // add classname for solved/unsolved boards.
  return (
    <div className={isSolved ? 'solved' : 'board'}>Board {gameBoardNum}
      <div style={{listStyleType: 'none'}}>
          {guessList}
      </div>
    </div>
  )
}
 
export default GameBoard
