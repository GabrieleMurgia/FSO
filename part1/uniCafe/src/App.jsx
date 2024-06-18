import { useState } from 'react'
import Title from './Title'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleButton(setState) {
    setState(prev => prev + 1)
  }

  const total = good + neutral + bad
  const average = total ? (good - bad) / total : 0
  const positivePercentage = total ? (good / total) * 100 : 0


  return (
    <div>
      <Title text="give feedback"/>
      <Button onClick={() => handleButton(setGood)} text='good' />
      <Button onClick={() => handleButton(setNeutral)} text='neutral' />
      <Button onClick={() => handleButton(setBad)} text='bad' />
      <Title text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positivePercentage={positivePercentage}/>
    </div>
  )
}

export default App
