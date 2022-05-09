import React, { useState } from 'react'

function GuessInput({ addGuess, passwordLength }) {

    const [guessInput, setGuessInput] = useState('');

    function handleGuessSubmit(e) {
        e.preventDefault();
        if(validateGuess(guessInput)) {
            // console.log('success')
            setGuessInput('')
            addGuess(guessInput)
        }
        else {
            // console.log('else')
        }
    }

    function validateGuess(guess) {
        if(guess.split('').join('') !== Array.from(new Set(guess.split(''))).join('')) {
            return false;
        }
        if(guess.length !== passwordLength) {
            return false;
        }
        return true;
    }

  return (
    <form onSubmit={handleGuessSubmit}>
        <input 
            type='number' 
            placeholder='Enter Guess' 
            onChange={e => setGuessInput(e.target.value)}
            value={guessInput}
        />
        <input type='submit'/>
    </form>
  )
}

export default GuessInput