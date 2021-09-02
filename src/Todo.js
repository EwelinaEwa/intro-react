import React from "react";

export default function Todo(props) {

    const todos = props.todos;

    const handleChange = () => {
        {todos.map((todo) => {
                if (document.getElementById(todo.id).checked === false) {
                    document.getElementById(todo.id).removeAttribute("checked")
                } else {
                    document.getElementById(todo.id).setAttribute("checked", "")
                }
            }
        )}
    }

    // TODO: substitute handleChange with useEffect???
    // TODO: save the checked values in the local storage

    const list = (
        <ul style={{listStyle: "none"}}>
            {todos.map((todo) =>
                <li key={todo.id}>
                    <label className="container">
                        <input type="checkbox" id={todo.id} onChange={handleChange} className="checkbox"/>
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