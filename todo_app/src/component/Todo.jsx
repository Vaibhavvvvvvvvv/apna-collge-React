import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
    let [toDo, setToDo] = useState([{ task: "Eat", id: uuidv4(), isDone: false }]);
    let [task, setTask] = useState("");
    let [editId, setEditId] = useState(null);

    function addNewTask() {
        setToDo([...toDo, { task: task, id: uuidv4(), isDone: false }]);
        setTask("");
    }

    function updateTodo(e) {
        setTask(e.target.value);
    }

    function deleted(id) {
        setToDo(toDo.filter((toDo) => toDo.id !== id));
    }

    function upperCase() {
        setToDo(
            toDo.map((todo) => {
                return {
                    ...todo,
                    isDone: true
                }
            })
        );
    }

    function upperCaseOne(id) {
        setToDo(
            toDo.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true
                    };
                } else {
                    return todo;
                }
            })
        );
    }

    function editTask(id, task) {
        setEditId(id); // Set the id of the task being edited
        setTask(task); // Set the task value in the input field
    }

    function saveEditedTask(id) {
        setToDo(
            toDo.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: task
                    };
                } else {
                    return todo;
                }
            })
        );
        setEditId(null); // Reset editId after editing
    }

    return (
        <div>
            <input placeholder='Enter Your Task' value={task} onChange={updateTodo} />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br />
            <hr />
            <h4>ToDo Task</h4>
            <ul>
                {toDo.map((toDoItem) => {
                    return (
                        <li key={toDoItem.id}>
                            {editId === toDoItem.id ? (
                                <input
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                />
                            ) : (
                                <span style={toDoItem.isDone ? { textDecorationLine: "line-through" } : {}}>
                                    {toDoItem.task}
                                </span>
                            )}
                            &nbsp; &nbsp; &nbsp;
                            <button onClick={() => deleted(toDoItem.id)}>Delete</button>
                            <button onClick={() => upperCaseOne(toDoItem.id)}>Mark As Done</button>
                            {editId === toDoItem.id ? (
                                <button onClick={() => saveEditedTask(toDoItem.id)}>Save</button>
                            ) : (
                                <button onClick={() => editTask(toDoItem.id, toDoItem.task)}>Edit Task</button>
                            )}
                        </li>
                    );
                })}
            </ul>
            <br />
            <button onClick={upperCase}>Done All</button>
        </div>
    );
};

export default Todo;
