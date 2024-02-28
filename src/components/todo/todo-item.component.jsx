import { ItemContainer } from './todo-item.styles'
import { ReactComponent as CrossImg } from '../../assets/image/cross.svg';

const TodoItem = () => {
  return (
    <ItemContainer>
      <div style={{ display: 'flex',marginBottom: '6px' }}>
        <span className='quantity-item'>14</span>
        <span className='name-item'>Buy Bananas</span>
      </div>
      <div style={{ padding: '5px' }} onClick={() => console.log('id')}>
        <CrossImg />
      </div>
    </ItemContainer>
  )
}

export default TodoItem;