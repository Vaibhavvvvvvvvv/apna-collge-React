import React, { useEffect, useState } from 'react'


const Jokes = () => {
    const [joke,setJoke] = useState({})
    
    let url = 'https://official-joke-api.appspot.com/random_joke'
    const getApiData = async ()=>{
       const response = await fetch (url)
       const data = await response.json()
       console.log(data)
       setJoke({setup : data.setup , punchline : data.punchline})
    }
    
    useEffect(()=>{async function  getFirstJoke(){
        const response = await fetch (url)
        const data = await response.json()
        setJoke({setup : data.setup , punchline : data.punchline})   
    }
    getFirstJoke()
},[])

  return (
    <div>
        <h3>Jokes</h3>
      <h4>{joke.setup}</h4>  
      <h4>{joke.punchline}</h4>
      <button onClick={getApiData}>genrate new joke</button>
    </div>
  )
}

export default Jokes
