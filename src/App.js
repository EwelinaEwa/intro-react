import React, { useState } from "react";

function App() {

    const initialTodos = [
        {id:"1", text:"My first todo", status:false},
        {id:"2", text:"My second todo", status:false},
        {id:"3", text:"My third todo", status:false}
    ];

    const [todos, setTodos] = useState(initialTodos);
    const [checked, setChecked] = useState(
        new Array(todos.length).fill(false)
    );

    const handleChange = () => {
        setChecked(!checked);
    }

    const list = (
        <ul>
            {todos.map((todo) =>
                <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={checked.id} onChange={handleChange} />
                        {todo.text}
                    </label>
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


export default App;