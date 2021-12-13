import React from "react";
import {TodoCounter} from "./Componentes/TodoCounter"
import {TodoSearch} from "./Componentes/TodoSearch"
import {TodoItem} from "./Componentes/TodoItem"
import {TodoList} from "./Componentes/TodoList"
import {CreateTodoButton} from "./Componentes/CreateTodoButton"

// import logo from './logo.svg';
// import './App.css';

const todos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar el Curso a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'LALALALALLallallalala', completed: false},
]

function App(props) {
  return (
    <React.Fragment>
      {/*
        React.Fragment es un componente que reemplaza al div con una etiqueta invisible.  
        React para sus calculos internos necesita que solo enviemos una etiqueta por componente  
        Cuando tengamos que enviar varias etiquetas, elementos, componentes dentro de un mismo componente podemos simplemente envolverlas con React.Fragment 
      */}
    
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key = {todo.text} 
            text={todo.text}
            completed = {todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
