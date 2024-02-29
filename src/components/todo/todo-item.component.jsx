import { useContext } from 'react';
import { TodoContext } from '../../context/todo.context';

import { ReactComponent as CrossImg } from '../../assets/image/cross.svg';

import { ItemContainer } from './todo-item.styles'



const TodoItem = ({ item }) => {
  const { id,product,quantity } = item;

  const { deleteTodoGrocery } = useContext(TodoContext);

  return (
    <ItemContainer>
      <div style={{ display: 'flex',marginBottom: '6px' }}>
        <span className='quantity-item'>{quantity}</span>
        <span className='name-item'>{product}</span>
      </div>
      <div style={{ padding: '5px' }} onClick={() => deleteTodoGrocery(id)}>
        <CrossImg />
      </div>
    </ItemContainer>
  )
}

export default TodoItem;