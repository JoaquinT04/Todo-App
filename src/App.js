import React from "react";
import {TodoCounter} from "./Componentes/TodoCounter"
import {TodoSearch} from "./Componentes/TodoSearch"
import {TodoItem} from "./Componentes/TodoItem"
import {TodoList} from "./Componentes/TodoList"
import {CreateTodoButton} from "./Componentes/CreateTodoButton"

// import logo from './logo.svg';
// import './App.css';


const defaultTodos = [
  {text: 'Cortar Cebolla', completed: false},
  {text: 'Tomar el Curso a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'LALALALALLallallalala', completed: false},
]

function App(props) {
  // puedo mandar un array vacio tambien 

  
  const [todoItem, setTodoItem] = React.useState()
  const [todos, setTodos] = React.useState(defaultTodos)
  
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  
  /* Mi intento de hacer el Reto
  const [todoSearchValue, setTodoSearchValue] = React.useState('')
  
  console.log("searchValue = ",searchValue)
  
  // const searchValueFilter = ()=>{
    //   let i = 0
    //   console.log(todos.length)
    //   while( i < todos.length && searchValue != todos[i].text ){
      //     console.log(todos[i].text)
      //     i++
      //     console.log("i = "+i)
  //   }
  //   if(i < todos.length && searchValue === todos[i].text){
    //     console.log(searchValue + " = " + todos[i].text)
    //     setTodoSearchValue(searchValue)
    //   }
    // }
    
    searchValueFilter() */
    
    // SOLUCIÓN DE PROFE
    
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
            item = {todo}
            key = {todo.text} 
            text={todo.text}
            completed = {todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {/* <p>{todoSearchValue}</p> */}
    </React.Fragment>
  );
}

export default App;
