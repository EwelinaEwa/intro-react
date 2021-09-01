import React from "react";

export default function Todo(props) {

    const todos = props.todos;

    const handleChange = () => {
        {todos.map((todo) => {
                if (document.getElementById(todo.id).checked === false) {
                    document.getElementById(todo.id).removeAttribute("checked")
                } else {
                    document.getElementById(todo.id).setAttribute("checked", "true")
                }
            }
        )}
    }

    // console.log(document.getElementById({todo.id]));
    const list = (
        <ul style={{listStyle: "none"}}>
            {todos.map((todo) =>
                <li key={todo.id}>
                    <label>
                        <input type="checkbox" id={todo.id} onChange={handleChange} style={{marginRight: 10}}/>
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