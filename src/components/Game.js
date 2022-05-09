import React, { useState } from 'react'
import GameBoard from './GameBoard';
import GuessInput from './GuessInput';

function Game({ username }) {

  const [guesses, setGuesses] = useState([]);
  const [passwordLength, setPasswordLength] = useState(4);

  function addGuess(guess) {
    setGuesses([...guesses, guess])
  }

  return (
    <>
      <div>Hello, {username}</div>
      <GuessInput passwordLength={passwordLength} addGuess={addGuess}/>
      <GameBoard 
        addGuess={addGuess} 
        guesses={guesses} 
        passwordLength={passwordLength}
        username={username}
      />
    </>
  )
}

export default Game