import React from "react";

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
    }, 10000);
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


export { useLocalStorage };
