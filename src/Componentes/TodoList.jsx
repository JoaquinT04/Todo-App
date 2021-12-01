import React from "react";

function TodoList(props){
	return(
		<section>
			<ul>
				{props.children}
				{/* Con este props.children vamos a mandar todo lo que coloquemos dentro del componente: 
				<TodoList>
					Todo esto 
				</TodoList> */}
			</ul>
		</section>
	);
}

export { TodoList };