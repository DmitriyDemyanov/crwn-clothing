import { Routes,Route } from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component'
import Authenticate from './routes/authenticate/authenticate.component'
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Favorites from './routes/favor/favorites.component';
import TvMain from './routes/tv/tv.component';
import TodoList from './routes/todo-list/todoList.component';
import MainWeather from './routes/weather/weather.component';
import Avia from './routes/avia/avia.component';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='auth' element={<Authenticate />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='favor' element={<Favorites />} />
          <Route path='tv' element={<TvMain />} />
          <Route path='todo' element={<TodoList />} />
          <Route path='weather' element={<MainWeather />} />
          <Route path='avia/*' element={<Avia />} />
        </Route>
      </Routes>
    </div>

  )
}

export default App;
