import logo from './logo.svg';
import './NewTodo.css';

function NewTodo() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="TodoForm">
            <form id="addItem">
                <input id="newItem" type="text" placeholder="Add new item"/> 
                <button id="addBtn" type="submit"> Add </button>
            </form>
        </div>
      </header>
    </div>
  );
}

export default NewTodo;