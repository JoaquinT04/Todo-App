import React from "react";
import {TodoCounter} from "../TodoCounter"
import {TodoSearch} from "../TodoSearch"
import {TodoItem} from "../TodoItem"
import {TodoList} from "../TodoList"
import {CreateTodoButton} from "../CreateTodoButton"


function AppUI({
	totalTodos,
	completedTodos,
	searchValue,
	setSearchValue,
	searchedTodos,
	completeTodo,
	deleteTodo
}) {
	return (
    <React.Fragment>
    {/*
      React.Fragment es un componente que reemplaza al div con una etiqueta invisible.  
      React para sus calculos internos necesita que solo enviemos una etiqueta por componente  
      Cuando tengamos que enviar varias etiquetas, elementos, componentes dentro de un mismo componente podemos simplemente envolverlas con React.Fragment 
    */}
  
    <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />
    <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
    <TodoList>
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