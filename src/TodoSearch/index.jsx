import React from "react";
import "./TodoSearch.css"

/* Antes 
class Componente extends React.Component{
	constructor() {
		this.state = {
			patito:"joaquin"
		};
	}

	render(){
		return(
			<div onClick={() => this.setState("Enrique")}>{this.state.patito}</div>
		)
	}
}
*/
function TodoSearch({ searchValue, setSearchValue }){
	const onSearchValueChange = (event) => {
		console.log(event.target.value)
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

export { TodoSearch };