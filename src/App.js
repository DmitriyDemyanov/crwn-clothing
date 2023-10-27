import { Routes,Route } from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component'

const Temp = () => <h1>Temp Component</h1>


const App = () => (
  <div>
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='temp' element={<Temp />} />
      </Route>
    </Routes>
  </div>

)

export default App;
