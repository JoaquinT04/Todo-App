import React from "react";
import { AppUI } from "./AppUI";

// const parsedTodos = [
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'Tomar el Curso a React', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'LALALALALLallallalala', completed: false},
// ]

function App(props) {
  // puedo mandar un array vacio tambien 

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else {
    parsedTodos = JSON.parse(localStorageTodos)
  }
  
  const [todoItem, setTodoItem] = React.useState()
  const [todos, setTodos] = React.useState(parsedTodos)
  
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
  
  // setTodoItem(todos[0])
 
  const saveTodos = (newTodos) => {
    const stringifiedTodos =  JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);   
  };

  // Creando la funcion para que al dar check se tache de la lista la tarea

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos];
    let completed = newTodos[todoIndex].completed;
    // otra forma de acceder a la propiedad completed
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
    
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


  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo= {completeTodo}
      deleteTodo= {deleteTodo}
    />
  );
}

export default App;
