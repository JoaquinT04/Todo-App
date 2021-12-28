import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css"

function TodoItem(props) {

  // const [check, setCheck] = React.useState(todoItem.completed)


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


  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
       {/* <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        √
      </span> */}
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      
      <DeleteIcon
          onDelete={props.onDelete}
      />
      {/* <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span> */}
    </li>
  );
}

export { TodoItem };
