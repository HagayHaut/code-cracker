import React from 'react'

function Guess({ guess, password, index, boardNum}) {

    let hits = 0;
    let misses = 0;

    const hitIcon = '🟢'
    const missIcon = '🟡'

    function multiplyString(str,num) {
        let result = ''
        for(let i = 0; i < num; i++) {
            result += str;
        }
        return result;
    }
    // console.log(boardNum, guess)

    function checkGuess() {
        for (let i = 0; i < password.length; i++){
            if (guess.guess[i] === password[i]){
                hits++
            }
            for (let j = 0; j < password.length; j++){
                if(guess.guess[i] === password[j]){
                    misses++
                }
            }
        }
        misses -= hits;
    }

    checkGuess();

    const guessClass = guess.random ? 'random' : '';



    return (
        <div> 
            <p className={guessClass}>{index+1}. {guess.guess} {multiplyString(hitIcon,hits)}{multiplyString(missIcon,misses)}</p>
            {hits === 4 && 
                <p>You won! It took you {index + 1} {index + 1 > 1 ? 'guesses' : 'guess'}!</p>}
            
        </div>
    )
}

export default Guess