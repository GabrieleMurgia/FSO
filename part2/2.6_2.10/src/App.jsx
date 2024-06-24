import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)

  function handleSumbmitNewName(e){
    e.preventDefault()
    if(persons.filter(person => person.name == newName).length){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat({
        name:newName,
        number:newNumber
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
      <form>
        <div>
          name: <input value={newName} onChange={handleChangeNewValue}/>
        </div>
        <div>
          number: <input value={newNumber} className="inputNumber" onChange={handleChangeNewValue}/>
        </div>
        <div>
          <button onClick={handleSumbmitNewName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>{
        return <p key={person.name + Math.random()}>{person.name} {person.number}</p>
      })}
    </div>
  )
}

export default App