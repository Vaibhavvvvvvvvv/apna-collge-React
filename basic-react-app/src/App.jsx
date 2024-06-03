import './App.css'
import Products from './Component/products'
function App() {

  return (
    <>
    <Products title="mobile" price={20000}/>
    <Products title="laptop" price={60000}/>
    <Products title="I-Pad" price={80000}/>
    </>
  )
}

export default App
