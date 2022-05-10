import React, { useEffect, useState } from "react";

function Leaderboard(){
    const [scores, setScores] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/games')
        .then(r => r.json())
        .then(setScores)
    },[])
    
    const scoresToDisplay = scores.sort((a, b) => a.score - b.score)

    function Score({username, score}){
        return <li>
            <p>{username}: {score}</p>
        </li>
    }

    return <ol>
        {scoresToDisplay.map(score => {
            return <Score key={score.id} {...score}/>
        })}
    </ol>
}

export default Leaderboard;