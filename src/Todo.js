import './Todo.css';
import { useState } from 'react';

function Todo(props) {
  const [items, setItems] = useState([{ text: props.text, checked:false}]);

  const handleDelete = (id)=>{
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", `https://cse204.work/todos/${id}`, true);
    xhttp.setRequestHeader("x-api-key", "5edab9-265ea3-6c36e5-5e2fcb-7da37d");
    xhttp.send();
    setItems(items.filter((id)=>id !== id));
    console.log("Items:", items);
  }

  const handleCheck = (id) => {
    const index = items.findIndex(item => item.id === id);
    const updatedItem = {
      ...items[index],
      checked: !items[index].checked,
      textDecoration: items[index].checked ? "none" : "line-through"
    };

    const updatedItems = [
      ...items.slice(0, index),
      updatedItem,
      ...items.slice(index + 1)
    ];
    setItems(updatedItems);

    const xhttp = new XMLHttpRequest();
    xhttp.open("PUT", `https://cse204.work/todos/${id}`, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("x-api-key", "5edab9-265ea3-6c36e5-5e2fcb-7da37d");
    xhttp.send(JSON.stringify(updatedItem));
    console.log("Items:", items);

  };
  
  return (
    <div className="TodoList">
      <ul className="item-list">
        {items.map((item, index)=>(
          <li className="listItem" key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
            <span className={item.checked ? "itemtext checked" : "itemtext"} id={item.id} style={{textDecoration: item.checked ? "line-through" : "none"}}>{item.text}</span>
            <button className="deletebtn" onClick={()=> handleDelete(props.id)}> Delete </button>
          </li>
        ))}
        </ul>
    </div>
  );
}

export default Todo;