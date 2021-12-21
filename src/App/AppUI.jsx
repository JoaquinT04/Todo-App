import React from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from "../TodoCounter"
import {TodoSearch} from "../TodoSearch"
import {TodoItem} from "../TodoItem"
import {TodoList} from "../TodoList"
import {CreateTodoButton} from "../CreateTodoButton"
import { Modal } from "../Modal";



function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
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
    
    {/* {openModal} esto va a ser tru si existe openModal, que en este caso siempre existe, por eso usamos la condición de abajo para preguntar si el valor de openModal es true */}
    {!!openModal && (
      <Modal>
        <p>{searchedTodos[0]?.text}</p>
        <CreateTodoButton 
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </Modal>
    )}
    
    <CreateTodoButton 
      openModal={openModal}
      setOpenModal={setOpenModal}
    />

  </React.Fragment>
	);
}

export { AppUI };