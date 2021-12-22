import React from 'react';
import { useLocalStorage } from './useLocalStorage';



// esta es la herramienta de react que nos permite crear contextos
const TodoContext = React.createContext();
// const { Provider, Consumer } = React.createContext();

// Puente
function TodoProvider(props){
	// puedo mandar un array vacio tambien 
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage('TODOS_V1',[]);
	
	// const [name, saveName] = useLocalStorage('NOMBREULTRAIMPORTANTE','Fernando');
	const [todoItem, setTodoItem] = React.useState()

	// EStado para el Modal
	const[openModal, setOpenModal] = React.useState(false);

	const [searchValue, setSearchValue] = React.useState('');
	
	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;
	
	let searchedTodos = [];
	
	if(!searchValue.length >= 1){
		searchedTodos = todos
	}else {
		searchedTodos = todos.filter(todo =>{
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		});
	}
	
	
	// Creando la funcion para que al dar check se tache de la lista la tarea

	const addTodo = (text) => {
		const newTodos = [...todos];
		
		newTodos.push({
			completed: false,
			text
		});
		
		saveTodos(newTodos)
	};

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		
		const newTodos = [...todos];
		let completed = newTodos[todoIndex].completed;
		
		if(!completed){
			completed = true
		} else {
			completed = false
		}

		newTodos[todoIndex].completed = completed
		
		// Actualizamos el estado, para actualizar la lista de todos y asi avisar a todos nuestros componentes
		saveTodos(newTodos)
	};
	
	const deleteTodo = (text) => {
		
		const todoIndex = todos.findIndex(todo => todo.text === text);
		
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos)
	};
	
	
	
	return(
		<TodoContext.Provider value={{
			loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
			addTodo,
      deleteTodo,
			openModal,
			setOpenModal,
		}}>
			{/* Hay que decirle al provider cual  */}
			{/* aqui estara cualquier componente que llame a TodoProvider, y estos componentes podran usar nuestro consumidor */}
			{ props.children }
		</TodoContext.Provider>
	);
}


{/* <Provider></Provider>
<Consumer></Consumer> */}


export { TodoContext, TodoProvider };


