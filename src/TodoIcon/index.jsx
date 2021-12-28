import React from "react";
import './TodoIcon.css'
import {ReactComponent as CheckSVG } from'./check.svg';
import {ReactComponent as DeleteSVG } from'./x.svg';
import {ReactComponent as AddSVG } from'./plus.svg';

const iconTypes = {
	"check": color =>(
		<CheckSVG 
		className = "Icon-svg Icon-svg--check" 
		fill = {color}/>
	),
	"delete": color => (
		<DeleteSVG 
		className="Icon-svg Icon-svg--delete"
		fill={color}/>
	),
	"add": color =>(
		<AddSVG 
		className="Icon-svg Icon-svg--add"
		fill={color}/>
	),
}
function TodoIcon({ type, color = "gray", onClick }) {
	
	return (
		<span
		className={`Icon-container Icon-container--${type}`}
		onClick={onClick}>
			{iconTypes[type](color)}
		</span>
	);
}

export { TodoIcon };