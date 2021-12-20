import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

function TodoCounter({ total, completed }){


	return(
		<TodoContext.Consumer>
		{({completed, total}) => (
			<h2 className="TodoCounter">Has completado {completed} de {total} Todos's</h2>
		)}
		</TodoContext.Consumer>
	);
}

export { TodoCounter };