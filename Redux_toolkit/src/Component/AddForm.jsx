import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoApp/TodoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    function submitHandler(evt) {
        evt.preventDefault();
          dispatch(addTodo(task));
            setTask(""); // Clear the input after adding the task
        

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}
