import { Fragment,useContext } from 'react';
import { AviaContext } from '../../context/avia.context';
import { AviaTicketContainer } from './avia-ticket.styles'


const AviaTicket = ({ ticket }) => {
  const { cities } = useContext(AviaContext);

  const showCityName = (code) => cities.filter((el) => el.code === code)[0].name;
  
  const {
    airline,
    origin,
    destination,
    departure_at,
    price,
    flight_number,
    transfers
  } = ticket;

  return (
    <Fragment>
      {ticket ? (<AviaTicketContainer>
        <div className='item-ticket'>
          <div className='icon-logo'>
            <img src={`http://pics.avs.io/200/200/${airline}.png`} alt="icon-logo" />
            <span className='title-airline'> ITA Airways</span>
          </div>

          <div className='wrapper-destination'>
            <div style={{ display: 'flex',alignItems: 'center' }}>
              <span className='destination-title'>{showCityName(origin)}</span>
              <img src={require('../../assets/image/plane/airplane.png')} alt="#" />
            </div>

            <div style={{ display: 'flex',alignItems: 'center' }}>
              <img src={require('../../assets/image/plane/airplane.png')} alt="#" />
              <span className='destination-title'> {showCityName(destination)} </span>
            </div>
          </div>
          <div className='wrapper-time-price'>
            <span className='time-date'>{departure_at}</span>
            <span className='price-title'><span>$</span>{price}</span>
          </div>
          <div className='wrapper-info'>
            <span>Пересадок: {transfers} </span>
            <span>Номер рейса: {flight_number} </span>

          </div>

        </div>
      </AviaTicketContainer>) : ''
      }
    </Fragment>
  )
};

export default AviaTicket;