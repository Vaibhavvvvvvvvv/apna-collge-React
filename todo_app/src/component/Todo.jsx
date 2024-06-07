import React,{useState}from 'react'
import { v4 as uuidv4 } from 'uuid';
const Todo = () => {
    let [toDo,setToDo] = useState([{task:"Eat",id:uuidv4()}])
    let [task,setTask] = useState("")

    function addNewTask (){
      setToDo([...toDo,{task:task , id:uuidv4()}])
      setTask("")
    }

    function updateTodo (e){
        // console.log(e.target.value)
        setTask(e.target.value)
      }
    
    function deleted (id){
        console.log(id)
       setToDo(toDo.filter((toDo)=>toDo.id != id)) 
       
    }

    return (
    <div>
         <input placeholder='Enter Your Task' value={task} onChange={updateTodo}/>
         <button onClick={addNewTask}>Add Task</button>
         <br/><br/>
         <hr/>
         <h4>ToDo Task</h4>
         <ul>
            {
                toDo.map((toDo)=>{
                    return<li key={toDo.id}>
                        <span>{toDo.task}</span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={()=> deleted(toDo.id)}>
                            Delete
                            </button>
                        </li>
                })
            }
         </ul>
    </div>
  )
}

export default Todo
