import { Fragment,useContext,useEffect,useState } from 'react';
import { AviaContext } from '../../context/avia.context';


import AviaTicket from '../avia/avia-ticket.component'

import { AviaPlaceContainer,PaginatedWrapper } from './avia-place.styles';

const AviaPlace = () => {
  const { tickets } = useContext(AviaContext);





  const [currentPage,setCurrentPage] = useState(1);
  const totalItemsOnPage = 4;
  const AllPages = Math.ceil(tickets.length / totalItemsOnPage);

  const [showNumbersPaginated,setShowNumbersPaginated] = useState([]);




  const changeCurrentPage = (symbol) => {
    if (symbol === '+' && currentPage < Math.ceil(tickets.length / 4)) {
      setCurrentPage(currentPage + 1)
    }
    if (symbol === '-' && currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const paginatedTickets = tickets.slice((currentPage - 1) * totalItemsOnPage,((currentPage - 1) * totalItemsOnPage) + totalItemsOnPage);
  console.log('paginatedTickets=>',paginatedTickets)
  console.log('currentPage',currentPage)
  useEffect(() => {

    //нужно переделать логику!!! чтоб после одного переходил показывалась педедущая страница
    setShowNumbersPaginated(
      [currentPage === 1 ? 1 : currentPage < AllPages - 1 ? currentPage - 1 : '...',
      currentPage + 1 === 2 ? 2 : currentPage < AllPages - 1 ? currentPage : '...'
        ,AllPages - 1,
        AllPages])

  },[currentPage,tickets])

  console.log(tickets)
  return (
    <Fragment>
      <AviaPlaceContainer>

        {paginatedTickets.length ? (paginatedTickets.map((el,ind) => (<AviaTicket ticket={el} key={ind} />))) :
          <div> Sorry  Tickets not found!
          </div>}
      </AviaPlaceContainer>
      {paginatedTickets.length ? (
        <PaginatedWrapper >

          <div onClick={(() => changeCurrentPage('-'))} className='paginate-item cursor-item'>&#x3c;</div>


          {paginatedTickets.length ? showNumbersPaginated.map((el,ind) => (<div className={`paginate-item  ${el === currentPage ? "scale-item" : ""}`} key={ind} >{el}</div>)) : ''}


          <div onClick={(() => changeCurrentPage('+'))} className='paginate-item cursor-item'>&#62;</div>

        </PaginatedWrapper>)
        : <span></span>}
    </Fragment>
  )
}

export default AviaPlace;