import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import { useEffect } from 'react'
import axios from 'axios'
import personServices from './services/persons'


const App = () => {
  const {getAll , create} = personServices
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)
  const [filteredPersons, setFilteredPersons] = useState(persons)

  useEffect(() => {
    getAll()
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response)
      setFilteredPersons(response)
    })
  }, [])


  function handleSumbmitNewName(e){
    e.preventDefault()
    if(filteredPersons.filter(person => person.name == newName).length){
      alert(`${newName} is already added to phonebook`)
    }else{
      let newObj = {
        name:newName,
        number:newNumber,
        id:filteredPersons.length + 1
      }

      create(newObj)
      .then(req => {
        req.data
      })
      .then(res => console.log(res))

      setFilteredPersons(filteredPersons.concat(newObj))

      setPersons(filteredPersons.concat(newObj))
    }
  }

  function handleChangeNewValue(e){
    let isInputNumber = e.target.className
    let cValue = e.target.value
    if(isInputNumber === 'inputNumber'){
      if(handleOnlyNumberValues(cValue)){
        setNewNumber(cValue)
      }
    }else{
      setNewName(cValue)
    }
  }

  function handleFilterPersons(e) {
    const cValue = e.target.value.toLowerCase()
    if (cValue === '') {
      setFilteredPersons(persons)
    } else {
      const fPersons = persons.filter(person => person.name.toLowerCase().includes(cValue))
      setFilteredPersons(fPersons)
    }
  }

  function handleOnlyNumberValues(cValue){
  const nonNumericPattern = /[^\d.+-]/;
  if (nonNumericPattern.test(cValue)) {
    return false;
  }
  return true;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text={'filter shown with'} onHandleFilter={handleFilterPersons}/>
      <h2>add a new</h2>
      <PersonForm onSumbitForm={handleSumbmitNewName} number={newNumber} onChangeNumber={handleChangeNewValue} name={newName} onChangeName={handleChangeNewValue}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App