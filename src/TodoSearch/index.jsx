import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext";

function TodoSearch({ searchValue, setSearchValue }){
	
	return(
		<TodoContext.Consumer>
			{
				({searchValue, setSearchValue}) => {
					
					const onSearchValueChange = (event) => {
						setSearchValue(event.target.value)
					}
					
					return(
						<input 
							className="TodoSearch" 
							type="text" 
							placeholder="Cebolla" 
							value={searchValue}
							onChange={onSearchValueChange}
						/>
					)
				}
			}
		</TodoContext.Consumer>
	)
}

export { TodoSearch };