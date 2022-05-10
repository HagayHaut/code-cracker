import React from 'react'

function Help() {
  return (
    <div >
      {/* <p>Guessing a random 4-digit number is difficult so I will prepare you hints for solving the passcode.</p> */}
      <h1>How to play:</h1>
      <p>Guess the passcode in as few tries possible. <br></br> 
        Each passcode will contain unique numbers only. <br></br> 
        After each guess, you will be given number of hits and misses for that guess. <br></br> 
        Hit represent the number of guessed digits in the correct position. <br></br> 
        Miss represent the number of guessed digits in an incorrect position. </p>

      <ul><h3>Example if the hidden passcode is '1836'</h3>
        <li><h4>1234 will result in 2 hit, 0 miss.</h4>
          <p>1 and 3 are hits. </p>
        </li>
          
        <li><h4>4567 will result in 0 hit, 1 miss.</h4>
          <p>6 is a miss.</p>
        </li>

        <li><h4>3618 will result in 0 hit, 4 miss.</h4>
          <p>Each digit is part of the passcode but in the wrong position.</p>
        </li>

        <li><h4>1836 will result in 4 hit, 0 miss.</h4>
          <p>Each digit is part of the passcode and in the right position.</p>
        </li>

      </ul>
    </div>
  )
}

export default Help