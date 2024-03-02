import { Fragment,useContext } from 'react';

import { WeatherContext } from '../../context/weather.context';

import SunIcon from '../../assets/image/weather/sun.svg';





import SunriseIcon from '../../assets/image/weather/sunrise.svg';
import Sunset from '../../assets/image/weather/sunset.svg';
import Humidity from '../../assets/image/weather/humidity.svg';
import Wind from '../../assets/image/weather/wind.svg';
import Pressure from '../../assets/image/weather/pressure.svg';
import Uv from '../../assets/image/weather/uv.svg';


import { MainWeatherContainer } from './weather.styles';


const MainWeather = () => {



  const { weather } = useContext(WeatherContext);
  console.log('weather=>=>=>',weather);


  const testWeather = () => {
    return SunIcon;
  }


  return (
    <Fragment>
      <h1 style={{ textAlign: 'center',}}>{weather.name}!</h1>
      <MainWeatherContainer>
        <div className='column-1'>
          <div>
            <div className='main-temperature'> {Math.round(weather.main.temp)} &#8451;</div>
            <div className='feel-temperature'>Feels like: <span >{weather.main.feels_like} &#8451;</span></div>
          </div>

          <div className='solar-cycle-container'>

            <div className='solar-item' >
              <img src={SunriseIcon} alt='icon' />
              <div>
                <div>Sunrise</div>
                <div className='solar-time'> 06: 37 AM</div>
              </div>

            </div>

            <div className='solar-item' >
              <img src={Sunset} alt='icon' />
              <div>
                <div>Sunset</div>
                <div className='solar-time'> 06: 37 PM</div>
              </div>

            </div>

          </div>

        </div>

        <div className='column-2'>
          <img src={testWeather()} alt='icon-weather' />
          <div>{weather.weather[0].main}</div>
        </div>


        {/* {require(`../../assets/image/weather/${testWeather()}.png`) */}

        <div className='column-3'>
          <div className='item-container'>
            <img src={Humidity} alt='icon' />
            <div>{weather.main.humidity}%</div>
            <div>humidity</div>
          </div>
          <div className='item-container'>
            <img src={Wind} alt='icon' />
            <div>{weather.wind.speed} km/h</div>
            <div>Wind speed</div>
          </div>
          <div className='item-container'>
            <img src={Pressure} alt='icon' />
            <div>{weather.main.pressure} hPa</div>
            <div>Pressure</div>
          </div>
          <div className='item-container'>
            <img src={Uv} alt='icon' />
            <div>{weather.sys.type}</div>
            <div>UV</div>
          </div>

        </div>

      </MainWeatherContainer>

    </Fragment>
  )
}

export default MainWeather;

// Weather
//   < div > { weather? weather.weather[0].description : < h2 > page loading</ >}</ >