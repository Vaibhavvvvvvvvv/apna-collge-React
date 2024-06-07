import React, { useState } from 'react'

const Ludo = () => {
    let [Moves, setMoves] = useState({
        blue: 0, red: 0, green: 0, yellow: 0,
    })
    function updateBlue() {
        setMoves((prevMoves)=>{
         return {...prevMoves, blue: prevMoves.blue + 1,}
        })
    }
    function updateRed() {
        setMoves((prevMoves)=>{
         return {...prevMoves, red: prevMoves.red + 1,}
        })
    }
    function updateGreen() {
        setMoves((prevMoves)=>{
         return {...prevMoves, green: prevMoves.green + 1,}
        })
    }
    function updateYellow() {
        setMoves((prevMoves)=>{
         return {...prevMoves, yellow: prevMoves.yellow + 1,}
        })
    }

    return (
        <div>
            <p>Game Begin</p>
            <div className='board'>
                <p>Blue Moves = {Moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Red Moves = {Moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
                <p>Green Moves = {Moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Yellow Moves = {Moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color:"black"}} onClick={updateYellow}>+1</button>
            </div>
        </div>
    )
}

export default Ludo
