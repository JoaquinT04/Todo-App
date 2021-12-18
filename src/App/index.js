import React from "react";
import { AppUI } from "./AppUI";

// const parsedTodos = [
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'Tomar el Curso a React', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'LALALALALLallallalala', completed: false},
// ]

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [item, setItem] = React.useState(initialValue);
  
  
  React.useEffect(()=>{
    // Vamos a simular que estamos trayendo información de una API
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;  
        
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else {
          parsedItem = JSON.parse(localStorageItem)
        }
  
        setItem(parsedItem);
        setLoading(false);
      } catch(e){

        setError(error)
      }
    }, 1000);
  })
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem =  JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);   
      
    } catch (error) {
      setError(error)    
    }
  };

  // para retornar más de tres cosas, usaremos un objeto

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App(props) {
  // puedo mandar un array vacio tambien 
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODO_V1',[]);
  
  // const [name, saveName] = useLocalStorage('NOMBREULTRAIMPORTANTE','Fernando');
  const [todoItem, setTodoItem] = React.useState()
  
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


  /* React.useEffect(Primer argumento: una función para encapsular todo el codigo que querramos ejecutar justo antes de el Render, osea cuando ya reacto termino de hacer todos sus calculos internos. , Segundo argumento: un array que nos permite definir cuando debemos usar nuestro useEffect, es decir que sin importar la cantidad de veces que se renderize nuestro componente. Si enviamos un array vacio nuestro efecto se va a ejecutar solo una vez, la primera vez que se renderize nuestro componente. Tambien podemos escuchar desde nuestro efecto todas las veces que haya cambios en las variables o lo que sea que le pasemos a dicho array ); 
  
  console.log("Render antes del useEffect");
  
  React.useEffect(()=>{
    console.log("aqui llamammos al codigo de useEffect");
  }, [totalTodos]);

  console.log("Render luego del useEffect");
  */
  
  return (
    <AppUI
      loading={loading}
      error={error}
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
