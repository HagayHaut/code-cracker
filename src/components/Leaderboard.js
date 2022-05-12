import React, { useEffect, useState } from "react";
// import Table from 'react-bootstrap/Table';

function Leaderboard(){
    const [scores, setScores] = useState([])
    const [sortBy, setSortBy] = useState('score')

    useEffect(() => {
        fetch('http://localhost:4000/games')
        .then(r => r.json())
        .then(setScores)
    },[])

    function toTimeFormat(time) {
        return `${Math.floor(time / 60)}:${time % 60 < 10 ? '0' + time % 60: time % 60}`
    }

    function toDateFormat(dateStr){
        return `${dateStr.substr(5,2)}/${dateStr.substr(8,2)}/${dateStr.substr(0,4)}`
    }
    
    let scoresToDisplay;

    if(sortBy === 'date') {
      scoresToDisplay = scores.sort((a, b) => a[sortBy] > b[sortBy] ? -1 : 1)
    }
    else {
      scoresToDisplay = scores.sort((a, b) => a[sortBy] < b[sortBy] ? -1 : 1)
    }

    function Score({username, score, position, time, date}){
        return <tr>
            <td>{username}</td>
            <td>{score} {score > 1 ? 'Guesses' : 'Guess'}</td>
            <td>{toTimeFormat(time)}</td>
            <td>{toDateFormat(date)}</td>
        </tr>
    }

    return <>

    <table className='table'>
        <tbody>
          <tr>
            <th>
              <h3>Username</h3>
            </th>
            <th onClick={e => setSortBy('score')} className='sort'>
              <h3>Guess</h3>
            </th>
            <th onClick={e => setSortBy('time')} className='sort'>
              <h3>Time</h3>
            </th>
            <th onClick={e => setSortBy('date')} className='sort'>
              <h3>Date</h3>
            </th>
          </tr>

          {scoresToDisplay.map((score,i) => {
            return <Score key={score.id} position={i+1} {...score}/>
        })}
          </tbody>
    </table>
    </>

}

export default Leaderboard;