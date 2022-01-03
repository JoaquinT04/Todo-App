import "./TodoNoChecked.css"
import React from 'react'
import { TodoContext } from "../TodoContext";

function TodoNoChecked(){
	const {
		setTodosNoChecked,
		todosNoChecked
	}= React.useContext(TodoContext)
	function onClickButton(){
		if(!todosNoChecked){
			setTodosNoChecked(true)
		}else{
			setTodosNoChecked(false)
		}
	}
	return(
		<button 
			className="button-check"
			onClick={onClickButton}
		>No completados
		</button>
	);
}

export { TodoNoChecked };