import React from 'react'

function Help() {
  return (
    <div className='how-to'>
      {/* <p>Guessing a random 4-digit number is difficult so I will prepare you hints for solving the passcode.</p> */}
      <h1>How to play</h1>
      <p>Guess the passcode in as few tries possible. <br></br> 
        Each passcode will contain unique numbers only. <br></br> 
        After each guess, you will be given number of hits and misses for that guess. <br></br> 
        Hit (🟢) represent the number of guessed digits in the correct position. <br></br> 
        Miss (🟡) represent the number of guessed digits present in the passcode, but in an incorrect position. </p>

      <ul><h3 style={{textDecoration: 'underline'}}>Example: Passcode is '1836'</h3>
        <li><h4>1234 will result in 🟢🟢 (1 and 3 are hits)</h4></li>
          
        <li><h4>4567 will result in 🟡 (6 is a miss)</h4></li>

        <li><h4>3618 will result in 🟡🟡🟡🟡.</h4>
          <p>(Each digit is part of the passcode but in the wrong position)</p>
        </li>

        <li><h4>1836 will result in 🟢🟢🟢🟢.</h4>
          <p>(Each digit is part of the passcode and in the right position)</p>
        </li>

      </ul>
      <h3 style={{textDecoration: 'underline'}}>Ahh! Random Guesses!</h3>
      <p>To ~help~ you along, this game will auto-guess for you as you play. You can tell an auto-guess from a normal guess by the red color. Each turn has a 10% change of being an auto-guess! You can adjust the maximum number of auto-guesses in Settings <i class="fa fa-cog" aria-hidden="true"></i>.</p>
    </div>
  )
}

export default Help