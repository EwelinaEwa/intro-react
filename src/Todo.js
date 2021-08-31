import React, {useState} from "react";

export default function Todo() {

const initialTodos = [
    {id:"1", text:"My first todo", status:false},
    {id:"2", text:"My second todo", status:false},
    {id:"3", text:"My third todo", status:false}
];

const [todos, setTodos] = useState(initialTodos);
// const [todos, setTodos] = useState([{id:'', text:'', status:false}]);
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