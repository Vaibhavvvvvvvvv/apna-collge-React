import React,{useState} from 'react'
import {generateRandomTicket} from './Helper'
import Ticket from './Ticke';
import Button from './Button';
const Lottery = ({n = 3,winnigCondition}) => {
    let [ticket,setTicket] = useState (generateRandomTicket(n));
    let isWinning = winnigCondition(ticket)

    function buyTicket(){
        setTicket(generateRandomTicket(3))
    }
    return (
    <div>
    <h1>Lottery Game!</h1> 
    <div>
      <Ticket ticket={ticket}/>
    </div> 
    <Button action={buyTicket}/>
    <h3>{isWinning && "Congratulatuon , you Won Lottery!"} </h3>
    </div>
  )
}

export default Lottery
