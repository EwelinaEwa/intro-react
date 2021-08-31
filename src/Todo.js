import React, {useState} from "react";

export default function Todo(props) {

    const todos =props.todos;

    const [checked, setChecked] = useState(
        new Array(todos.length).fill(false)
    );

    const handleChange = () => {
        setChecked(!checked);
    }

    const list = (
        <ul style={{listStyle: "none"}}>
            {todos.map((todo) =>
                <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={checked.id} onChange={handleChange} style={{marginRight: 10}}/>
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