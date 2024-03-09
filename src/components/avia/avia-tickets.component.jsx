import { Fragment,useContext,useState } from 'react';

import { AviaContext } from '../../context/avia.context';

import AviaCard from './avia-card.component';
import { AviaTicketsContainer } from './avia-tickets.styles';

const AviaTickets = () => {

  const [currency,setCurrency] = useState('US');//  не знаю где посмотреть как записать евро?
  const [currentDropDown,setCurrentDropDown] = useState(true);

  const { fetchTickets } = useContext(AviaContext)
  const toggleDropDown = () => setCurrentDropDown(!currentDropDown);
  const currencySelection = (cur) => {
    setCurrency(cur);
    setCurrentDropDown(false);
  }

  const submitForm = (item) => {
    fetchTickets({ ...item,currency: currency })
  }

  return (

    <Fragment>
      <AviaTicketsContainer>

        <a href='/' className='wrapper-logo' >
          <img src={require('../../assets/image/plane/airplane.png')} alt='logo' />
          <div>Avia-Tickets</div>
        </a>

        <div className='currency-wrapper' onClick={() => toggleDropDown()}>{currency === 'US' ? '$ US Dollar' : '₴ Euro'}
          <div className={`drop-down-currency ${currentDropDown ? 'hide' : ''}`}>
            <div className={`currency-hover ${currency === 'US' ? 'active-currency' : ''}`}

              onClick={() => currencySelection('US')} >$ US Dollar</div>
            <div className={`currency-hover ${currency === 'EURO' ? 'active-currency' : ''}`}
              onClick={() => currencySelection('EURO')} >₴ EURO</div>
          </div>
        </div>

      </AviaTicketsContainer>
      <AviaCard getForm={submitForm} />
    </Fragment>
  )
};

export default AviaTickets;