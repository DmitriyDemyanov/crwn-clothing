import { createContext,useEffect,useState } from "react";

export const AviaContext = createContext({
  sendTicket: {},
  setSendTicket: () => null,

  cities: [],
  setCities: () => null,

  countries: {},
  setCountries: () => null,

  airlines: [],
  setAirlines: () => null,

  allTickets: [],
  setAllTickets: () => null

});

export const AviaProvider = ({ children }) => {
  const [cities,setCities] = useState([]);
  const [countries,setCountries] = useState({});
  const [airlines,setAirlines] = useState([]);
  const [tickets,setTickets] = useState([]);

  const fetchTickets = () => {
    fetch(`https://aviasales-api.herokuapp.com/prices/cheap?origin=LON&destination=NYC&depart_date=2024-03&return_date=2024-03&currency=USD`)
      .then((result) => result.json())
      .then((response) => {

        const tickets = Object.entries(response.data).map(([_,ticket]) => ticket);
        console.log('>>>>>>>>>>>FETCH>>>>>>',tickets);
        setTickets(tickets);
      })
  }

  useEffect(() => {

    fetch('https://aviasales-api.herokuapp.com/cities')
      .then((response) => response.json())
      .then((itemsCities) => {
        setCities(itemsCities);

      });

    fetch('https://aviasales-api.herokuapp.com/countries')
      // let testCountries = [];
      .then((response) => response.json())
      .then((countries) => {
        const countriesObj = {};
        countries.forEach(el => {
          countriesObj[el.code] = el.name;
        });
        setCountries(countriesObj);
      });


    fetch('https://aviasales-api.herokuapp.com/airlines')
      .then((response) => response.json())
      .then((itemsAirlines) => setAirlines(itemsAirlines));
  },[]);


  const value = { cities,countries,airlines,tickets,fetchTickets };
  return (
    <AviaContext.Provider value={value}>
      {children}
    </AviaContext.Provider>
  )
}