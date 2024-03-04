import { createContext,useEffect,useState } from "react";

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=50.404815&lon=30.651682&units=metric&lang=ru&appid=4a181470a6cb181dfbf7ea732910d5c2';

export const WeatherContext = createContext({
  weather: {},
  setWeather: () => { }
});

export const WeatherProvider = ({ children }) => {
  const [weather,setWeather] = useState(null);
  const data = { weather };

  useEffect(() => {
    fetch(WEATHER_URL)
      .then((response) => response.json())
      .then((currentWeather) => setWeather(currentWeather));
  },[]);

  // console.log('AFTER FETCH:::',weather);

  return (
    <WeatherContext.Provider value={data}>
      {children}
    </WeatherContext.Provider>
  )
}
