import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './context/user.context';
import { CategoriesProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context';
import { FavorProvider } from './context/favorites.context';
import { TodoProvider } from './context/todo.context';
import { WeatherProvider } from './context/weather.context';
import { AviaProvider } from './context/avia.context';

import './index.scss';

// https://api.tvmaze.com/search/shows?q=postman

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <FavorProvider>
              <TodoProvider>
                <WeatherProvider>
                  <AviaProvider>
                    <App />
                  </AviaProvider>
                </WeatherProvider>
              </TodoProvider>
            </FavorProvider>
          </CartProvider>
        </CategoriesProvider>

      </UserProvider>

    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




//'https://aviasales-api.herokuapp.com'   /cities; /countries; /airlines; /prices/cheap;