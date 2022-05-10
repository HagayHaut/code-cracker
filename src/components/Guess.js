import React, { useEffect } from 'react'

const API = 'http://localhost:4000/games'

function Guess({ 
    guesses, 
    settings, 
    guess, 
    password, 
    index, 
    username, 
    handleBoardWin,
    isSolved 
}) {

    useEffect(() => {
        setTimeout(() => {
            if(!isSolved) {
                if(hits === 4) {
                const body = {
                username: username,
                numberOfGuesses: index + 1,
                settings: settings,
                guesses: guesses
                }
                handleBoardWin()
                fetch(API, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                    .then(r => r.json())
                    .then((d) => console.log(d))
            }
            } 
        }, 250)
    }, [])

    // useEffect(() => {
    //     const body = {
    //         username: username,
    //         numberOfGuesses: index + 1,
    //         settings: settings,
    //         guesses: guesses
    //     };
    //     fetch(API, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(body)
    //     })
    //         .then(r => r.json())
    //         .then(() => {
    //             debugger
    //         })
    // }, [isSolved])

    let hits = 0;
    let misses = 0;

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