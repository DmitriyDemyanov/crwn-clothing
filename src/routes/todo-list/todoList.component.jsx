
import { useContext,useRef } from 'react';
import { TodoContext } from '../../context/todo.context'

import { TodoListContainer,Input } from './todoList.styles';
import Button,{ BUTTON_TYPE_CLASSES } from '../../components/button/button.component'

const TodoList = () => {
  const { todoGrocery,addToTodoList } = useContext(TodoContext);
  const inputName = useRef(null);
  const inputQuantity = useRef(null);

  const saveProductInput = (event) => {
    event.preventDefault();
    addToTodoList({
      product: inputName.current.value,
      quantity: inputQuantity.current.value
    })
    inputName.current.value = "";
    inputQuantity.current.value = "";
  }

  console.log('todoGrocery===>>',todoGrocery);
  console.log('BUTTON_TYPE_CLASSES===>>',BUTTON_TYPE_CLASSES)
  return (

    <TodoListContainer>
      <div className='wrapper-todo'>
        <form onSubmit={saveProductInput}>
          <Input
            placeholder='input product'
            ref={inputName}
          />
          <Input
            placeholder='input number'
            type='number'
            ref={inputQuantity}
          />
          <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.yellow}>Add to list</Button>
        </form>
      </div>
      <div className='bg-image_pixel'></div>
    </TodoListContainer>
  )
}

export default TodoList;