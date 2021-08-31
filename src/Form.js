import React, {useRef, useState} from "react";
import Todo from "./Todo";

export default function Form() {
    const initialTodos = []

    const inputRef = useRef();

    const [todos, setTodos] = useState(initialTodos);

    const [count, setCount] = useState(0)

    function clickHandler() {
        const inputElement = inputRef.current.value;
        setTodos([...todos, {id: count, text: inputElement, state: false}])
        console.log(inputElement)
    }
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Write a new todo" />
            <br />
            <button onClick={() => {clickHandler(); setCount(count+1);}}>Add todo</button>
            <Todo todos={todos}/>
        </div>
    );
}