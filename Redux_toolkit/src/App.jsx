import './App.css'
import Todo from './Component/Todo'
import { Provider } from 'react-redux'
import {store} from "./reduxSetup/Store"
function App() {

  return (
    <>
    <Provider store={store}>
 <Todo/>
 </Provider>
    </>
  )
}

export default App
