import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './components/CW/current-weather'
import Forecast from './components/Fore/forecast'
import Header from './components/Header/header';
import { WEATHER_API_URL, API_KEY } from "./api";


function App() {

  const [cw, setCW] = useState(null);
  const [f, setF] = useState(null);

  const Search = (searchData) => {
    const [location, setLocation] = useState('')

    const searchLocation = (event) => {
      if (event.key === 'Enter') {

        const splitLoc = location.split(', ');
        const city = (splitLoc[0]);
        const state = (splitLoc[1]);
        const country = (splitLoc[2]);

        const Curl = fetch(`${WEATHER_API_URL}weather?q=${city},${state},${country}&type=accurate&appid=${API_KEY}&units=imperial`);
        const Furl = fetch(`${WEATHER_API_URL}forecast?q=${city},${state},${country}&appid=${API_KEY}&units=imperial`);

        Promise.all([Curl, Furl]).then(async (response) => {
          const weatherRes = await response[0].json();
          const ForecastRes = await response[1].json();

          console.log(weatherRes);
          console.log(ForecastRes);

          setCW(weatherRes);
          setF(ForecastRes);
        })
        setLocation('');
      }
    }

    return (
      <div className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="City, State, Country"
          type="text" className='main_input'/>
      </div>
    );
  }
  return (
    <div className="app">
      <Header />
      <Search />
      {cw && <CurrentWeather data={cw} />}
      {f && <Forecast data={f} />}
    </div>
  );
}

export default App;