import React from 'react'

function Guess({ guess, passwordLength, password, index, username }) {

    let hits = 0;
    let misses = 0;

    function checkGuess() {

        for (let i = 0; i < passwordLength; i++){
            if (guess[i] === password[i]){
                hits++
            }
            for (let j = 0; j < passwordLength; j++){
                if(guess[i] === password[j]){
                    misses++
                }
            }
        }
        misses -= hits;
        
    }

    checkGuess();

    if(hits === 4) {
        const body = {
            username: username,
            numberOfGuesses: index + 1
        }
        // POST body

        
    }

    return (
        <li> 
            
            <p>{index+1}. Guess: {guess}, Hits: {hits}, Misses: {misses}</p>
            {hits === 4 && 
                <p>You won! It took you {index + 1} guesses!</p>}
            
        </li>
    )
}

export default Guess