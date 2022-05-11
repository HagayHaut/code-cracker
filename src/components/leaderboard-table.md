import React, { useEffect, useState } from "react";
// import styled from "styled-components";

function Leaderboard(){
    const [scores, setScores] = useState([])

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
    
    const scoresToDisplay = scores.sort((a, b) => a.score - b.score)

    function Score({username, score, position, time, date}){
        return <tr>
            <td className="table-data">{username}</td>
            <td className="table-data">{score} {score > 1 ? 'Guesses' : 'Guess'}</td>
            <td className="table-data">{toTimeFormat(time)}</td>
            <td className="table-data">{toDateFormat(date)}</td>
            {/* <p>{position}. {username}: {score} {score > 1 ? 'tries' : 'try'} {toTimeFormat(time)} {toDateFormat(date)}</p> */}
        </tr>
    }

    return <>
    {/* <ul>
        {scoresToDisplay.map((score,i) => {
            return <Score key={score.id} position={i+1} {...score}/>
        })}
    </ul> */}
    <table className="table">
        <tbody>
          <tr>
            <th>
              <h3 className="table-header">Username</h3>
            </th>
            <th>
              <h3 className="table-header">Guess</h3>
            </th>
            <th>
              <h3 className="table-header">Time</h3>
            </th>
            <th>
              <h3 className="table-header">Date</h3>
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