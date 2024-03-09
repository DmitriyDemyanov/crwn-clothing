import { Routes,Route } from "react-router-dom";

import AviaTickets from "../../components/avia/avia-tickets.component";
import AviaPlace from "../../components/avia/avia-place.component";

const Avia = () => {
  return (
    <Routes>
      <Route index element={<AviaTickets />}></Route>
      <Route path='avia-place' element={<AviaPlace />}></Route>
    </Routes>
  );
}

export default Avia;