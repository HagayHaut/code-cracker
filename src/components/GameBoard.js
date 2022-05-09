import React, { useState, useEffect } from 'react';
import Guess from './Guess';

function GameBoard({ passwordLength, guesses, addGuess, username }) {

  const [password, setPassword] = useState('');
  const [randomEventsCount, setRandomEventsCount] = useState(0)

  useEffect(() => {
    passwordGenerate()
  }, [])

  const nums = ['1','2','3','4','5','6','7','8','9','0'];

  if(randomEventsCount < 1) {
    const rand = Math.floor(Math.random() * 10)
    if(rand === 1) {
      setRandomEventsCount(pre => pre + 1)
      const forceGuess = shuffle(nums).slice(0,passwordLength).join('')
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

  const guessList = displayGuesses.map((guess,i) => {
    return <Guess 
            index={i}
            password={password} 
            passwordLength={passwordLength}
            key={guess} 
            guess={guess}
            username={username}
          />
  })

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

  function passwordGenerate() {
    setPassword(shuffle(nums).slice(0,passwordLength).join(''))
  }

  return (
    <>
      <div>GameBoard</div>
      <ul style={{listStyleType: 'none'}}>
          {guessList}
      </ul>
    </>
  )
}

export default GameBoard