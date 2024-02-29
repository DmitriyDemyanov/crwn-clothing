import { createContext,useState } from "react";

export const TodoContext = createContext({
  todoGrocery: [],
  setTodoGrocery: () => null,
  deleteTodoGrocery: () => null,
});

export const TodoProvider = ({ children }) => {
  const [todoGrocery,setTodoGrocery] = useState([]);

  const addToTodoList = (item) => {

    if (item.product && item.quantity) {
      item.id = Date.now();
      setTodoGrocery([...todoGrocery,item]);
    }
  }
  const deleteTodoGrocery = (id) => {
    setTodoGrocery(todoGrocery.filter((item) => item.id !== id))
  }

  const value = { todoGrocery,addToTodoList,deleteTodoGrocery };

  return (
    <TodoContext.Provider value={value}> {children} </TodoContext.Provider>
  )

}

