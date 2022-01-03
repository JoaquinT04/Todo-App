import React from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from "../TodoCounter"
import {TodoSearch} from "../TodoSearch"
import {TodoItem} from "../TodoItem"
import { TodoForm } from "../TodoForm";
import {TodoList} from "../TodoList"
import {CreateTodoButton} from "../CreateTodoButton"
import { TodoNoChecked } from "../TodoNoChecked";
import { Modal } from "../Modal";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    noCheckedTodos,
    todosNoChecked,
  } = React.useContext(TodoContext);

	return (
  <React.Fragment>
    <TodoCounter />
    <TodoSearch />
    <TodoNoChecked />
    <TodoList>
      {error && <TodosError error={error}/>}
      {loading && <TodosLoading />}
      {(!loading && !searchedTodos.length) && <EmptyTodos/>}
      {/* /**** */}
      
      {!todosNoChecked && searchedTodos.map(todo => (
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

      {todosNoChecked && noCheckedTodos.map(todo => (
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
    
    {/* {openModal} esto va a ser tru si existe openModal, que en este caso siempre existe, por eso usamos la condición de abajo para preguntar si el valor de openModal es true */}
    {!!openModal && (
      <Modal>
        <TodoForm/>
        {/* Mi solución al reto 
        <CreateTodoButton 
          openModal={openModal}
          setOpenModal={setOpenModal}
        /> */}
      </Modal>
    )}
    
    <CreateTodoButton 
      setOpenModal={setOpenModal}
    />

  </React.Fragment>
	);
}

export { AppUI };