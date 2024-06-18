import { useState } from 'react'
import Title from './Title'
import Button from './Button'
import Paragraph from './Paragraph'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleButton(setState) {
    setState(prev => prev + 1)
  }

  return (
    <div>
      <Title text="give feedback"/>
      <Button onClick={() => handleButton(setGood)} text='good' />
      <Button onClick={() => handleButton(setNeutral)} text='neutral' />
      <Button onClick={() => handleButton(setBad)} text='bad' />
      <Title text="statistics"/>
      <Paragraph text="good" counter={good}/>
      <Paragraph text="neutral" counter={neutral}/>
      <Paragraph text="bad" counter={bad}/>
    </div>
  )
}

export default App