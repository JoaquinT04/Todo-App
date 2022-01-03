import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext";

function TodoSearch(){
	const { searchValue, setSearchValue} = React.useContext(TodoContext)
	
	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value)
	}

	return(
		<div className="InputSearch">
			<label className="todoSearchLabel" htmlFor="todoSearch">Buscar Tarea</label>
			<input 
				id="todoSearch"
				className="TodoSearch" 
				type="text" 
				placeholder="Cebolla" 
				value={searchValue}
				onChange={onSearchValueChange}
			/>
		</div>
	)
}

export { TodoSearch };