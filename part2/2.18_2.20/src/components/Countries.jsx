function Countries({countries , onHandleDetail}) {
    return (
      <ul>
      {countries?.map(country =>{
        return <li key={country.capital[0] + country.fifa}>{country.name.common} <button onClick={()=>{onHandleDetail(country)}}>show</button></li>
      })}
      </ul>
    )
  }
  
  export default Countries