import React, { useState, useEffect, useRef } from 'react'
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

function GuessInput({ addGuess, passwordLength, guesses, handleRandomEvent }) {

    const [guessInput, setGuessInput] = useState('');
    const [helpText, setHelpText] = useState('')

    const guessInputRef = useRef(null);

    useEffect(() => {
        guessInputRef.current.focus()
    }, [])

    function handleGuessSubmit(e) {
        e.preventDefault();
        if(validateGuess(guessInput)) {
            // console.log('success')
            setGuessInput('')

            addGuess({guess: guessInput, random: false}) 
            handleRandomEvent();
        }   

    }

    function validateGuess(guess) {
        if(guesses.includes(guessInput)){
            setHelpText("Uh oh, looks like you've guessed that already.")
            return false;
        }
        if(guess.split('').join('') !== Array.from(new Set(guess.split(''))).join('')) {
            setHelpText('Guesses may not contain repeated digits.')
            return false;
        }
        if(guess.length !== passwordLength) {
            setHelpText(`Your guess isn't the same length as the passcode (${passwordLength}).`)
            return false;
        }
        if(guess.split('').find(char => char > '9')){
            setHelpText('Uh oh, looks like your guess isn\'t a number.')
            return false;
        }
        setHelpText('')
        return true;
    }


  return (
    <>
    <form onSubmit={handleGuessSubmit} autocomplete="off">
        <StyledInput 
            ref={guessInputRef}
            id='guess-input'
            type='text' 
            placeholder='Enter Guess' 
            onChange={e => setGuessInput(e.target.value)}
            value={guessInput}
        />
        {helpText && 
            <p>{helpText}</p>}
        {/* <input type='submit'/> */}
    </form>
    </>
  )
}

export default GuessInput