import { createContext,useState } from "react";

export const TodoContext = createContext({
  todoGrocery: [],
  setTodoGrocery: () => null,
});

export const TodoProvider = ({ children }) => {
  const [todoGrocery,setTodoGrocery] = useState([]);

  const addToTodoList = (item) => {
    item.id = Date.now();
    setTodoGrocery([...todoGrocery,item]);
  }


  const value = { todoGrocery,addToTodoList };

  return (
    <TodoContext.Provider value={value}> {children} </TodoContext.Provider>
  )

}

