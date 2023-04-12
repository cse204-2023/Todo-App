import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section class="container">
          <h1 id="title"> To-Do List </h1>
          <NewTodo></NewTodo>
          <Todo />
        </section>
      </header>
    </div>
  );
}

export default App;
