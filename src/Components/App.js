import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
 
  const [inputText,setInputText] = useState("");
  const [listArray,setListArray] = useState([]);

  function handleInput(event) {
    const newValue = event.target.value;
    if(newValue !== "")
      setInputText(newValue);
  }



  function handleClick() {
    if(inputText !== "")
    {
      setListArray((prevValue) => {
        return [...prevValue,inputText];
      });
      setInputText("");
    }
  }

  function deleteItem(id) {
    setListArray(prevItems =>{
      return prevItems.filter((item,index) => {
        return index !== id;
      }
      );
    })
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInput} value={inputText}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listArray.map((item,key) => (
            <ToDoItem  key={key} id={key} text={item} onChecked={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
