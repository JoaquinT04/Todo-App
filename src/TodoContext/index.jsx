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
	

	// EStado para el Modal
	const[openModal, setOpenModal] = React.useState(false);

	const [todosNoChecked, setTodosNoChecked] = React.useState(false)

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
	
	let noCheckedTodos = []
	noCheckedTodos = todos.filter(todo=>{
		return todo.completed === false
	})

	
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
			noCheckedTodos,
			todosNoChecked,
			setTodosNoChecked,
		}}>
			{/* Hay que decirle al provider cual  */}
			{/* aqui estara cualquier componente que llame a TodoProvider, y estos componentes podran usar nuestro consumidor */}
			{ props.children }
		</TodoContext.Provider>
	);
}




export { TodoContext, TodoProvider };
