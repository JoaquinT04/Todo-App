import React from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from "../TodoCounter"
import {TodoSearch} from "../TodoSearch"
import {TodoItem} from "../TodoItem"
import {TodoList} from "../TodoList"
import {CreateTodoButton} from "../CreateTodoButton"


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext);

	return (
  <React.Fragment>
    <TodoCounter />
    <TodoSearch />
    <TodoList>
      {error && <p>Desesperate, hubo un error ...</p>}
      {loading && <p>Estamos cargando, no desesperes ...</p>}
      {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!!!</p>}
      {searchedTodos.map(todo => (
        <TodoItem 
          // todoItem ={todoItem} 
          // setTodoItem ={setTodoItem}
          key = {todo.text} 
          text={todo.text}
          completed = {todo.completed}
          onComplete = {() => {
            // USamos una arrow function porque vamos a llamar a otra función
            completeTodo(todo.text)
          }}
          onDelete = {() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>
    
    
    <CreateTodoButton />
    {/* <p>{todoSearchValue}</p> */}

  </React.Fragment>
	);
}

export { AppUI };