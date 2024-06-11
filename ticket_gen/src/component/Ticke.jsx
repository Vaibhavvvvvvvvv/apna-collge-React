import React, { useState } from 'react'

function generateRandomDigit() {
 return Math.floor(Math.random() * 10)
}
generateRandomDigit()

function generateLotteryTicket() {
    const digit1 = generateRandomDigit()
    const digit2 = generateRandomDigit()
    const digit3 = generateRandomDigit()
    return [digit1, digit2, digit3]
}


const Ticket = () => {
    const [ticket, setTicket] = useState([0,0,0]);
    const [message,setMessage] = useState('');

    function handleGenrateTicket() {
        const newTicket = generateLotteryTicket();
        setTicket(newTicket)
        const sum = newTicket.reduce((acc,curr)=>acc+curr,0)
        if(sum === 15){
            setMessage("congratulations! you won the lottery")
        }else{
            setMessage("bettr luck next time")
        }
        console.log(newTicket)
    }


    return (
        <>
    <div className="lottery-game">
      <button onClick={handleGenrateTicket}>Generate Lottery Ticket</button>
      {ticket && (
        <div className="ticket">
          <p>Your Ticket: {ticket.join('')}</p>
          <p>{message}</p>
        </div>
      )}
    </div>
        </>
    )
}

export default Ticket
