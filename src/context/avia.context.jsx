import { createContext,useState } from "react";

export const AviaContext = createContext({
  sendTicket: {},
  setSendTicket: () => null,
});

export const AviaProvider = ({ children }) => {

  const [sendTicket,setSendTicket] = useState(null);
  console.log('FILL FORM====>>>>',sendTicket)
  const value = { sendTicket,setSendTicket }
  return (
    <AviaContext.Provider value={value}>
      {children}
    </AviaContext.Provider>
  )
}