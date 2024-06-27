
function Country({country}) {
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
     </div>
    )
  }
  
  export default Country