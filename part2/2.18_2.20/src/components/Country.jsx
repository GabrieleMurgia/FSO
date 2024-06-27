import { useEffect } from "react"
import { useState } from "react"
import Weather from "./Weather";

function Country({country , handleGetWeather}) {

    const [weather , setWeather] = useState(null)

    useEffect(()=>{
        handleGetWeather(country)
        .then(response => {
            setWeather(response.current)
            debugger
        })
    },[])

    const countryLangs = Object.entries(country.languages)
    return (
     <div>
        <h2>{country.name.common}</h2>
        <div>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
        </div>
        <b>languages:</b>
        <ul>
            {countryLangs.map(lang =>{
                return <li key={lang[0]}>{lang[1]}</li>
            })}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt}/>

       {weather ?  <Weather country={country} weather={weather}/> : null}
     </div>
    )
  }
  
  export default Country