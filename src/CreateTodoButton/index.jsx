import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton({setOpenModal, openModal}){
	const onClickButton= () => {
		if(!openModal){
			setOpenModal(true);
		}else{
			setOpenModal(false);
		}
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