import { Routes,Route } from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component'
import Authenticate from './routes/authenticate/authenticate.component'


// const Hats = () => (
//   <div>
//     <h1>Hats</h1>
//   </div>
// )


const App = () => (
  <div>
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='auth' element={<Authenticate />} />

      </Route>
    </Routes>
  </div>

)

export default App;
