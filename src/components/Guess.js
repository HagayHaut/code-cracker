import React from 'react'

function Guess({ guess, password, index, boardNum}) {
    let hits = 0;
    let misses = 0;
    // console.log(boardNum, guess)

    function checkGuess() {
        for (let i = 0; i < password.length; i++){
            if (guess[i] === password[i]){
                hits++
            }
            for (let j = 0; j < password.length; j++){
                if(guess[i] === password[j]){
                    misses++
                }
            }
        }
        misses -= hits;
    }

    checkGuess();

    return (
        <li>  
            <p>{index+1}. Guess: {guess}, Hits: {hits}, Misses: {misses}</p>
            {hits === 4 && 
                <p>You won! It took you {index + 1} guesses!</p>}
            
        </li>
    )
}

export default Guess