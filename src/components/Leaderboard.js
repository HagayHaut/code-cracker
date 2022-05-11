import React, { useEffect, useState } from "react";

function Leaderboard(){
    const [scores, setScores] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/games')
        .then(r => r.json())
        .then(setScores)
    },[])
    
    const scoresToDisplay = scores.sort((a, b) => a.score - b.score)

    function Score({username, score, position}){
        return <li>
            <p>{position}. {username}: {score} tries</p>
        </li>
    }

    return <ul>
        {scoresToDisplay.map((score,i) => {
            return <Score key={score.id} position={i+1} {...score}/>
        })}
    </ul>
}

export default Leaderboard;