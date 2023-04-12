import logo from './logo.svg';
import './Todo.css';
import Todo from './Todo';

function Todo() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 id="title"> To-Do List </h1>
      <ul className="item-list">
        <li className="listItem">
          <input type="checkbox"/> 
          <span className="itemtext" id="item1">Todo item 1</span>
          <button className="deletebtn"> Delete </button>
        </li>
        </ul>
      </header>
    </div>
  );
}

export default Todo;
