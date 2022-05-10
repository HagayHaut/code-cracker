import React, { useState, useEffect } from 'react'
import GameBoard from './GameBoard';
import GuessInput from './GuessInput';

function Game({ username, settings }) {
  const {passwordLength, randomEventsLimit, numberOfGameBoards, showTimer} = settings

  const [guesses, setGuesses] = useState([]);
  const [passwords, setPasswords] = useState([]);

  useEffect(()=>{
    generatePasswords()
  }, [])

  function generatePasswords(){
    const nums = ['1','2','3','4','5','6','7','8','9','0'];
    let arr = []
    for(let i=0; i < numberOfGameBoards; i++){
      arr.push(shuffle(nums).slice(0,passwordLength).join(''))
    }
    setPasswords(arr)
  }
  
  function addGuess(guess) {
    setGuesses([...guesses, guess])
  }
  

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const arrGameBoards = passwords.map((password,i) =>{
    return <GameBoard 
    addGuess={addGuess} 
    guesses={guesses} 
    password={password}
    username={username}
    settings={settings}
    randomEventsLimit={randomEventsLimit}
    shuffle={shuffle}
    key={`board ${i+1}`}
    id={i+1}/>
  })

  function handleNewGame(){
    generatePasswords()
    setGuesses([])
  }

  return (
    <>
      <div>Hello, {username}</div>
      <GuessInput passwordLength={passwordLength} addGuess={addGuess}/>
      <button onClick={()=>handleNewGame()}>New Game</button>
      <div className='board-container'>
        {arrGameBoards}
      </div>
    </>
  )
}

export default Game