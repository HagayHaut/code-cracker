import React, { useState } from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
background: #f0f4f8;
height: 22px;
color: #102a43;
font-weight: bolder;

&&:focus {
  border: 2px solid #d9e2ec
}
`

function GuessInput({ addGuess, passwordLength, guesses }) {

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
        console.log(passwordLength)
        if(guesses.includes(guessInput)) {
            return false;
        }
        if(guess.split('').join('') !== Array.from(new Set(guess.split(''))).join('')) {
            console.log('uniques')
            return false;
        }
        if(guess.length !== passwordLength) {
            console.log('length')
            return false;
        }
        return true;
    }

  return (
    <>
    <form onSubmit={handleGuessSubmit}>
        <StyledInput 
            type='number' 
            placeholder='Enter Guess' 
            onChange={e => setGuessInput(e.target.value)}
            value={guessInput}
        />
        {/* <input type='submit'/> */}
    </form>
    </>
  )
}

export default GuessInput