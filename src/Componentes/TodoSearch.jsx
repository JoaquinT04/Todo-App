import React from "react";
import "../Css/TodoSearch.css"

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
function TodoSearch(){
	// const [patito, setPatito] = React.useState("Joaquin");
	const [searchValue, setSearchValue] = React.useState('');

	const onSearchValueChange = (event) => {
		// console.log(event)
		console.log(event.target.value)
		setSearchValue(event.target.value)
	}

	// Se puede retornar un array
/*	return[
		<input 
			className="TodoSearch" 
			type="text" 
			placeholder="Cebolla" 
			onChange={() => setPatito("Enrique")}
		/>,
		<p>{patito}</p>
	];*/

	return[
		<input 
			className="TodoSearch" 
			type="text" 
			placeholder="Cebolla" 
			value={searchValue}
			onChange={onSearchValueChange}
		/>,
		<p>{searchValue}</p>
	]
}

export { TodoSearch };