import React, { useState, useEffect } from 'react'
import GameBoard from './GameBoard';
import GuessInput from './GuessInput';
 
function Game({ username, settings, setSettings }) {
  const {passwordLength, numberOfGameBoards, showTimer} = settings
 
  const [guesses, setGuesses] = useState([]);
  const [games, setGames] = useState([])
  const [timer, setTimer] = useState(0)
 
  const allGamesIsSolved = games.every(game => game.isSolved)
 
 
  useEffect(()=>{
    generateGames()
  }, [])
 
  useEffect(()=>{
    if(!allGamesIsSolved){
        const intervalId = setInterval( ()=> {
          setTimer(a => a+1)
        }, 1000)
        return () => {clearInterval(intervalId)}
      }
  })
 
  const convertTimer = `${Math.floor(timer / 60)}:${timer % 60 < 10 ? '0' + timer % 60: timer % 60}`
 
  function generateGames(){
    const nums = ['1','2','3','4','5','6','7','8','9','0'];
    let arr = []
    for(let i=0; i < numberOfGameBoards; i++){
      const obj = {};
      obj.gameBoardNum = i+1
      obj.password = shuffle(nums).slice(0,passwordLength).join('');
      obj.isSolved = false
      arr.push(obj)
    }
    setGames(arr)
  }
 
  function addGuess(guess) {
    setGuesses([...guesses, guess])
  }
 
  function handleSolved(boardNum){
    const updatedGames = games.map(game => {
      if(game.gameBoardNum === boardNum){
        return {...game, isSolved: true}
      } return game
    })
    setGames(updatedGames)
  }
 
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
 
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
 
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
 
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
 
    return array;
  }
 
  let arrGameBoards = []
  function loadGames (){
    const arr = games.map((game) =>{
      return <GameBoard
              guesses={guesses}
              timer={timer}
              game={game}
              username={username}
              settings={settings}
              addGuess={addGuess}
              handleSolved={handleSolved}
              shuffle={shuffle}
              key={`board ${game.gameBoardNum+1}`}/>});
    arrGameBoards=arr
  }
  loadGames()
 
  function handleNewGame(){
    setGuesses([])
    generateGames()
    loadGames()
    setTimer(0)
 
  }
 
  return (
    <>
      <div>Hello, {username}</div>
      <GuessInput passwordLength={passwordLength} addGuess={addGuess}/>
      <button onClick={()=>handleNewGame()}>New Game</button>
      {showTimer ? <p>{convertTimer}</p> : null}
      <div className='board-container'>
        {arrGameBoards}
      </div>
    </>
  )
}
 
export default Game
