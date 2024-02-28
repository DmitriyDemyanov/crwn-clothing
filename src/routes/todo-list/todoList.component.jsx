
import { useContext,useRef } from 'react';
import { TodoContext } from '../../context/todo.context'

import { TodoListContainer,Input } from './todoList.styles';
import Button,{ BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import TodoItem from '../../components/todo/todo-item.component'

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
        <div className='todo-title'>shopping list</div>

        <form className='wrapper-form' onSubmit={saveProductInput}>
          <Input
            placeholder='Title...'
            ref={inputName}
          />
          <Input
            placeholder=''
            type='number'
            ref={inputQuantity}
          />
          <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.yellow}>Add</Button>
        </form>


        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </div>

      <div className='bg-image_pixel'></div>
    </TodoListContainer>
  )
}

export default TodoList;