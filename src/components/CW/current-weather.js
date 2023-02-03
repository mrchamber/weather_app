import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weatherContainer">
      <div className="current-top">
        <div>
          <p className="location">{data.name}, {data.sys.country}</p>
          <p className="weatherDescription">{data.weather[0].description.toUpperCase(1)}</p>
        </div>
        <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`}/>
      </div>
      <div className="current-bottom">
        <p className="temp">{Math.round(data.main.temp)}°F</p>
        <div className="current-details">
          <div className="row">
            <span className="label-d">Details:</span>
          </div>
          <div className="row">
            <span className="label">Feels like:</span>
            <span className="value">{Math.round(data.main.feels_like)}°F</span>
          </div>
          <div className="row">
            <span className="label">Wind:</span>
            <span className="value">{Math.round(data.wind.speed)} mph</span>
          </div>
          <div className="row">
            <span className="label">Humidity:</span>
            <span className="value">{data.main.humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
    
}

export default CurrentWeather;