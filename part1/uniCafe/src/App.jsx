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

  function getTotal(){
    const totalSum = bad + good + neutral
    return totalSum
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
      <Paragraph text="all" counter={getTotal()}/>
      <Paragraph text="average" counter={((good - bad)/getTotal())}/>
      <Paragraph percentage="%" text="positive" counter={(good / getTotal()) * 100}/>
    </div>
  )
}

export default App
