import logo from './logo.svg';
import './Todo.css';

function Todo() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>groupname's ToDo App
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Notes</h2>
        <ul>
          <li>Use CTRL+C or CMD+C to stop your React server.</li>
        </ul>
      </header>
    </div>
  );
}

export default Todo;