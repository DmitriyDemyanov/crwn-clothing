import { useState } from 'react';

import { AviaTicketsContainer } from './avia-tickets.styles';

const AviaTickets = () => {

  const [currency,setCurrency] = useState('US');//  не знаю где посмотреть как записать евро?
  const [currentDropDown,setCurrentDropDown] = useState(true);


  const toggleDropDown = () => setCurrentDropDown(!currentDropDown);
  const currencySelection = (cur) => {
    setCurrency(cur);
    setCurrentDropDown(false);
  }

  console.log(currentDropDown)

  return (
    <AviaTicketsContainer>

      <a href='/' className='wrapper-logo' >
        <img src={require('../../assets/image/plane/airplane.png')} alt='logo' />
        <div>Avia-Tickets</div>
      </a>

      <div className='currency-wrapper' onClick={() => toggleDropDown()}>{currency === 'US' ? '$ US Dollar' : '₴ Euro'}
        <div className={`drop-down-currency ${currentDropDown ? 'hide' : ''}`}>
          <div onClick={() => currencySelection('US')} >$ US Dollar</div>
          <div onClick={() => currencySelection('EURO')} >₴ EURO</div>
        </div>
      </div>


    </AviaTicketsContainer>
  )
};

export default AviaTickets;