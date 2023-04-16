import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    setTodos(prevTodos => [...prevTodos, todo]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <section class="container">
          <h1 id="title"> To-Do List </h1>
          <NewTodo onAddTodo={addTodoHandler} />
          {todos.map((todo) => (
            <Todo key={todo.id} text={todo.text} id={todo.id} />
          ))}
        </section>
      </header>
    </div>
  );
}

export default App;
