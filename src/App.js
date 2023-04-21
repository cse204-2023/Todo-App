import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';
import { useState, useEffect } from 'react';
import Sort from './Sort';

function App() {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("x-api-key", "5edab9-265ea3-6c36e5-5e2fcb-7da37d");
  
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const todos = JSON.parse(this.responseText);
        setTodos(todos);
     }
    };
    xhttp.send();
  },[]);

  const addTodoHandler = (todo) => {
    setTodos(prevTodos => [...prevTodos, todo]);

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", "5edab9-265ea3-6c36e5-5e2fcb-7da37d");
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("New todo added to server!");
      }
    };
  
    xhttp.send(JSON.stringify({ text: todo.text }));
  }

  const sortedTodos = [...todos].sort((a, b) => {
    if (sortOrder === "alphabetical") {
      return a.text.localeCompare(b.text);
    } else {
      return 0;
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <section class="container">
          <h1 id="title"> To-Do List </h1>
          <NewTodo onAddTodo={addTodoHandler} />
          {/* <Sort></Sort> */}
          <Sort onSort={() => setSortOrder("alphabetical")} />
          <ul className='item-list'>
            {sortedTodos.map((todo) => (
              <Todo key={todo.id} text={todo.text} id={todo.id} />
            ))}
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
