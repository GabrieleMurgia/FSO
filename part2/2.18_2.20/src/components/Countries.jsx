
function Countries({countries}) {
    return (
      <ul>
      {countries?.map(country =>{
        return <li key={country.capital[0] + country.fifa}>{country.name.common}</li>
      })}
      </ul>
    )
  }
  
  export default Countries