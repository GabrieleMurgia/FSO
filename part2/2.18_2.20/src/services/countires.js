import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'

const getAll = () => {
  return axios.get(`${baseUrl}/api/all`)
             .then(response => response.data)
}

const getOne = (country) => {
    return axios.get(`${baseUrl}/api/name/${country}`)
               .then(response => response.data)
  }
  
const getWeather = (country) =>{
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${apiKey}`;
    return axios.get(weatherUrl)
               .then(response => response.data)
}


export default { getAll , getOne , getWeather}