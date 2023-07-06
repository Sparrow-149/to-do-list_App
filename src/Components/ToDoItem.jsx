import React from "react";

function ToDoItem(props) {
//   const [strikee, makestrike] = useState(false);

//   function handleClick() {
//     makestrike(!strikee);
//   }
  return (
      <li onClick={()=>{
        props.onChecked(props.id);
      }}>
        {props.text}
      </li>
  );
}

export default ToDoItem;
