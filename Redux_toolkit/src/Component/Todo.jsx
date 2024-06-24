import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddForm from './AddForm';
import { deleteTodo, markAsDone } from '../features/todoApp/TodoSlice';

const Todo = () => {
    const todos = useSelector((state) => state.todo.todos);
    console.log(todos);

    const dispatch = useDispatch();

    function clickHandler(id) {
        console.log("deleted");
        dispatch(deleteTodo(id));
    }

    function markDone(id) {
        console.log("mark as done");
        dispatch(markAsDone(id));
    }

    return (
        <div>
            <AddForm />
            <h1>Todo's</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.isDone ? 'completed' : ''}>
                        {todo.task}
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        <button onClick={() => markDone(todo.id)}>Done</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
