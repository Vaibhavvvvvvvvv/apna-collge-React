import Lottery from './component/Lottery'
import './App.css'

function App() {

  let winnigCondition = (ticket)=>{
        return ticket[0] === 0;
  }
    return (
    <>
    <Lottery n={3} winnigCondition={winnigCondition}/>
    </>
  )
}

export default App
