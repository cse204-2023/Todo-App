import './Todo.css';
import { useState } from 'react';

function Todo(props) {
  const [items, setItems] = useState([{id:1, text: props.text, checked:false}]);

  const handleDelete = (id)=>{
    setItems(items.filter((item,index)=>index !== id));
  }

  const handleCheck = (id) =>{
    const updatedItems = items.map((item) =>{
      if(item.id === id){
        return {
          ...item, 
          checked: !item.checked, 
          text: item.text,
          // <span style={{textDecoration: "line-through"}}>{item.text}</span>
          textDecoration: item.checked ? "none" : "line-through"
        };
      }
      return item;
    });
    setItems(updatedItems);
  }

  return (
    <div className="TodoList">
      <ul className="item-list">
        {items.map((item, index)=>(
          <li className="listItem" key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} /> 
            <span className={item.checked ? "itemtext checked" : "itemtext"} id={item.id} style={{textDecoration: item.textDecoration}}>{item.text}</span>
            <button className="deletebtn" onClick={()=> handleDelete(index)}> Delete </button>
          </li>
        ))}
        </ul>
    </div>
  );
}

export default Todo;
