import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton({
		setOpenModal,
		// openModal
	}){
	const onClickButton= () => {
		// mi solución al reto 
		// if(!openModal){
		// 	setOpenModal(true);
		// }else{
		// 	setOpenModal(false);
		// }
		
		// SOLUCIÓN DEL PROFE
		setOpenModal(prevState => !prevState)
	}

	return(
		<button 
			className="CreateTodoButton"
			onClick={onClickButton}
		>
			+
		</button>
	);
}

export { CreateTodoButton };