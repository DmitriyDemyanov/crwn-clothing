import { createContext,useEffect,useState } from "react";

export const AviaContext = createContext({
  sendTicket: {},
  setSendTicket: () => null,

  cities: [],
  setCities: () => null,

  countries: [],
  setCountries: () => null,

  airlines: [],
  setAirlines: () => null,

});

export const AviaProvider = ({ children }) => {

  const [sendTicket,setSendTicket] = useState(null);
  // console.log('FILL FORM====>>>>',sendTicket);

  const [cities,setCities] = useState([]);
  const [countries,setCountries] = useState([]);
  const [airlines,setAirlines] = useState([]);

  useEffect(() => {
    fetch('https://aviasales-api.herokuapp.com/cities')
      .then((response) => response.json())
      .then((itemsCities) => setCities(itemsCities));

    fetch('https://aviasales-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((itemsCountries) => setCountries(itemsCountries));

    fetch('https://aviasales-api.herokuapp.com/airlines')
      .then((response) => response.json())
      .then((itemsAirlines) => setAirlines(itemsAirlines));

  },[])


  const value = { sendTicket,setSendTicket,cities,countries,airlines }
  return (
    <AviaContext.Provider value={value}>
      {children}
    </AviaContext.Provider>
  )
}