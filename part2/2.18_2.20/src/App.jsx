import { useState } from 'react'
import { useEffect } from 'react'
import countryServices from './services/countires'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'


function App() {

  const { getAll , getWeather } = countryServices
  const [showMessage,setShowMessage] = useState('')
  const [countries,setCountries] = useState([])
  const [countriesList, setCountriesList] = useState([])
  const [isInputAbled , setIsInputAbled] = useState(false)
  const [ showDetailCountry , setShowDetailCountry] = useState(false)


  useEffect(() => {
    getAll()
    .then(response => {
      setCountries(response)
      setIsInputAbled(true)
    })
  }, [])

  function handleSinlgeDetail(country){
    setShowDetailCountry(true)
    setCountriesList([country])
  }

  function handleSearchCountry(e) {
    const filterValue = e.target.value.trim().toLowerCase();

    if (filterValue === '') {
        setCountriesList([]);
        setShowMessage('');
        setShowDetailCountry(false);
        return;
    }

    const filteredCountries = countries.filter(country => 
        country.name.official.toLowerCase().includes(filterValue) ||
        country.name.common.toLowerCase().includes(filterValue)
    );

    if (filteredCountries.length > 10) {
        setCountriesList([]);
        setShowMessage('Too many matches, specify another filter');
        setShowDetailCountry(false);
    } else if (filteredCountries.length > 0 && filteredCountries.length <= 10) {
        setCountriesList(filteredCountries);
        setShowMessage('');
        setShowDetailCountry(filteredCountries.length === 1);
    } else {
        setCountriesList([]);
        setShowMessage('Country not found. Please check your input and try again.');
        setShowDetailCountry(false);
    }
}
 
  return (
    <>
    <Filter abled={isInputAbled} messageText={showMessage} onSearchCountry={handleSearchCountry}/>
    {!showDetailCountry ? <Countries onHandleDetail={handleSinlgeDetail} countries={showMessage === '' ? countriesList : []}/> : <Country handleGetWeather={getWeather} country={countriesList[0]}/>}
    </>
  )
}

export default App