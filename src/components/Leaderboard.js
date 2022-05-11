import React, { useEffect, useState } from "react";

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
    
    const scoresToDisplay = scores.sort((a, b) => a.score - b.score)

    function Score({username, score, position, time}){
        return <li>
            <p>{position}. {username}: {score} {score > 1 ? 'tries' : 'try'} {toTimeFormat(time)}</p>
        </li>
    }

    return <ul>
        {scoresToDisplay.map((score,i) => {
            return <Score key={score.id} position={i+1} {...score}/>
        })}
    </ul>
}

export default Leaderboard;