import logo from './logo.svg';
import './NewTodo.css';
import { useState } from 'react';


function NewTodo(props) {
  const [todoText, setTodoText] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = { id: Math.random().toString(), text: todoText };
    props.onAddTodo(newTodo);
    setTodoText('');
  }

  const textChangeHandler = (event) => {
    setTodoText(event.target.value);
  }

  return (
    <div className="NewTodo">
      <form onSubmit={submitHandler}>
          <input type="text" value={todoText} placeholder="Add new item" onChange={textChangeHandler}/> 
          <button id="addBtn" type="submit"> Add </button>
      </form>
    </div>
  );
}

export default NewTodo;