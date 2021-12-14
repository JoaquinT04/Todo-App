import React from "react";
import '../Css/TodoCounter.css';

function TodoCounter({ total, completed }){

	return(
		<h2 className="TodoCounter">Has completado {completed} de {total} Todos's</h2>
	);
}

export { TodoCounter };