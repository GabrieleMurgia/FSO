import { useState } from 'react'
import Button from './Button'

const App = () => {
  const anecdotes =  [
    { text: 'If it hurts, do it more often.', vote: 0 },
    { text: 'Adding manpower to a late software project makes it later!', vote: 0 },
    { text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', vote: 0 },
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', vote: 0 },
    { text: 'Premature optimization is the root of all evil.', vote: 0 },
    { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', vote: 0 },
    { text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', vote: 0 },
    { text: 'The only way to go fast, is to go well.', vote: 0 }
  ]
   
  const [selected, setSelected] = useState(0)
  const [sAnecdotes , setsAnecdotes] = useState(anecdotes)

  function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleAnedocte(){
    let randomNumber = getRandomNumberInRange(0,(anecdotes.length) - 1)
    setSelected(randomNumber)
  }

  function handleVote(){
    const updatedAnecdotes = sAnecdotes.map((anecdote, index) => {
      if (index === selected) {
        return { ...anecdote, vote: anecdote.vote + 1 }
      }
      return anecdote
    });
    setsAnecdotes(updatedAnecdotes)
  }

  function getMostVotedAnecdote(){
    let higherVote = 0
    sAnecdotes.forEach(item => {
      if(item.vote > higherVote){
        higherVote = item.vote
      }
    })

    return sAnecdotes.filter(item => item.vote == higherVote)[0]
  }



  return (
    <>
    <h2>Anecdote of the day</h2>
    <div>
      {sAnecdotes[selected].text}
    </div>
    <div>
      {sAnecdotes[selected].vote}
    </div>
    <Button text="vote" onVote={handleVote}/>
    <Button text="next anecdote" onNextAnecdotes={handleAnedocte}/>
    <h2>Anecdote with most votes</h2>
    <p>{getMostVotedAnecdote().text}</p>
    </>
    
  )
}

export default App