import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)
  const [filteredPersons, setFilteredPersons] = useState(persons)


  function handleSumbmitNewName(e){
    e.preventDefault()
    if(filteredPersons.filter(person => person.name == newName).length){
      alert(`${newName} is already added to phonebook`)
    }else{
      setFilteredPersons(filteredPersons.concat({
        name:newName,
        number:newNumber,
        id:filteredPersons.length + 1
      }))

      setPersons(filteredPersons.concat({
        name:newName,
        number:newNumber,
        id:filteredPersons.length + 1
      }))
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