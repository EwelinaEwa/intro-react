import React, {useRef, useState, useEffect} from "react";
import Todo from "./Todo";

export default function Form() {

    const inputRef = useRef();
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    function clickHandler() {
        const inputElement = inputRef.current.value;
        if (inputElement === '') return;
        setTodos([...todos, {id: count, text: inputElement}]);
        console.log(inputElement);
        inputRef.current.value = null;
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