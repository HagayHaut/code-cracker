import React from 'react'

function Guess({ guessObj, password, index}) {
    const {guess, random} = guessObj

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

    const guessClass = random ? 'random' : '';

    return (
        <div> 
            <p className={guessClass}>{index+1}. {guess} {multiplyString(hitIcon,hits)}{multiplyString(missIcon,misses)} {random && 'ಠﭛಠ'}</p>
            {hits === 4 && 
                <p>You won! It took you {index + 1} {index + 1 > 1 ? 'guesses' : 'guess'}!</p>}
            
        </div>
    )
}

export default Guess