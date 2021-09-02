// import React from "react";
//
// export default function Todo(props) {
//
//     const todos = props.todos;
//
//     const handleChange = () => {
//         {todos.map((todo) => {
//                 if (document.getElementById(todo.id).checked === false) {
//                     document.getElementById(todo.id).removeAttribute("checked")
//                 } else {
//                     document.getElementById(todo.id).setAttribute("checked", "")
//                 }
//             }
//         )}
//     }
//
//     // TODO: substitute handleChange with useEffect???
//     // TODO: save the checked values in the local storage
//
//     const list = (
//         <ul style={{listStyle: "none"}}>
//             {todos.map((todo) =>
//                 <li key={todo.id}>
//                     <label>
//                         <input type="checkbox" id={todo.id} onChange={handleChange} className="checkbox"/>
//                         {todo.text}
//                     </label>
//                 </li>
//             )}
//         </ul>
//     );
//
//     return (
//         <div>
//             {list}
//         </div>
//     );
// }

// import React, {useRef, useState, useEffect} from "react";
// import Todo from "./Todo";
//
// const LOCAL_STORAGE_KEY = "todoApp.todos";
// const initialcount = 1;
//
// export default function Form() {
//
//     const inputRef = useRef();
//     const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
//
//     const [count, setCount] = useState(initialcount);
//
//     useEffect(() => {
//         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
//     }, [todos]);
//
//     function addTodo() {
//         const inputElement = inputRef.current.value;
//         if (inputElement === '') return;
//         setTodos([...todos, {id: count, text: inputElement, state: false}]);
//         inputRef.current.value = null;
//     }
//
//     return (
//         <div className="container" >
//             <input ref={inputRef} type="text" placeholder="Write a new todo" className="new_todo"/>
//             <button className="submit" onClick={() => {addTodo(); setCount(count+1)}}>Add todo</button>
//             <Todo todos={todos}/>
//             {/*{console.log(todos)}*/}
//         </div>
//     );
// }

import React from "react";

export default function Todo({todo, toggleTodo}) {

    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label htmlFor="">
                <input type="checkbox" className="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}
            </label>
        </div>
    )
}