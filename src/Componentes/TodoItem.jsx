import React from "react";

function TodoItem(props){
	return(
		<section>
			<li>
				<span>C</span>
				<p>{props.text}</p>
				<span>X</span>
			</li>
		</section>
	);
}

export { TodoItem };