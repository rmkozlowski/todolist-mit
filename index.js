function App(){
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false,
        },
        {
            text: 'meet Nicki for brunch',
            isCompleted: false,
        },
        {
            text: 'build todo app',
            isCompleted: false,
        },
        {
            text: 'get dogs groomed',
            isCompleted: false,
        },
        {
            text: 'clean the house',
            isCompleted: false,
        },
    ]);
    
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        const newTodos = [...todos, {text:value, isCompleted:false}];
        setTodos(newTodos);
        setValue('');
    }

    const removeTodo = e => {
        const index = Number(e.target.id);
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp); 
    }
    return (<></>);
        {todos.map((todo, i) => 
        <div className="todo" key={i} id={i} onClick={removeTodo}> {todo.text}</div>)};

}

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
