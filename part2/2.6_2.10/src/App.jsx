import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  function handleSumbmitNewName(e){
    e.preventDefault()

    if(getStringPersons().includes(JSON.stringify({"name":newName}))){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat({
        name:newName
      }))
    }
  }

  function handleChangeNewName(e){
    setNewName(e.target.value)
  }

  function getStringPersons(){
    const stringPersons = persons.map(person => JSON.stringify(person))
    return stringPersons
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChangeNewName}/>
        </div>
        <div>
          <button onClick={handleSumbmitNewName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>{
        return <p key={person.name + Math.random()}>{person.name}</p>
      })}
    </div>
  )
}

export default App