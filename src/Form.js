import React, {useRef, useState, useEffect} from "react";
import Todo from "./Todo";

const LOCAL_STORAGE_KEY = "todoApp.todos"

export default function Form() {

    const inputRef = useRef();
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
    const [count, setCount] = useState(0);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function addTodo() {
        const inputElement = inputRef.current.value;
        if (inputElement === '') return;
        setTodos([...todos, {id: count, text: inputElement, state: false}]);
        inputRef.current.value = null;
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Write a new todo" className="new_todo"/>
            <button className="submit" onClick={() => {addTodo(); setCount(count+1)}}>Add todo</button>
            <Todo todos={todos}/>
            {/*{console.log(todos)}*/}
        </div>
    );
}