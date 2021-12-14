import React, { useDebugValue } from "react";
import "../Css/TodoItem.css"

function TodoItem({ item }) {

  // const [check, setCheck] = React.useState(todoItem.completed)

  const onComplete = () =>{
    alert("Completaste el TODO "+ item.text)  
  }

  // const onComplete = () =>{
  //   console.log("antes del if = " + check)
  //   if(check){
  //     setCheck(false)
  //   } else {
  //     setCheck(true)
  //   }
  //   setTodoItem({...todoItem,completed:check})
  //   console.log(item)
  // }

  const onDelete = () =>{
    alert("Borraste el TODO "+ item.text)
  }


  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${item.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${item.completed && 'TodoItem-p--complete'}`}>
        {item.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
