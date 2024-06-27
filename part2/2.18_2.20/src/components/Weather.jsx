function Weather({country , weather}) {
    const tempKelvin = 273.15;
    return (
        <div>
        <h2>Weather in {country.capital[0]}</h2>
        <p>temperature {(weather.temp - tempKelvin).toFixed(2)} Celcius</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
        <p>wind {weather.wind_speed} m/s</p>
        </div> 
    )
  }
  
  export default Weather