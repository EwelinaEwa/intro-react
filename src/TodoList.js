// import './App.css';
import React, { useState } from "react";


// const todos = ["My first todo", "My second todo"];


function TodoList() {

    const initialTodos = [
        {id:"1", text:"My first todo", status:"todo"},
        {id:"2", text:"My second todo", status:"todo"}
    ];

    const [todos, setTodos] = useState(initialTodos);

    const list = (
        <ul>
            {todos.map((todo) =>
                <li key={todo.id}>
                    <input type="checkbox" /> {todo.text}
                </li>
            )}
        </ul>
    );

    return (
        <div>
            {list}
        </div>
    );
}


export default TodoList;