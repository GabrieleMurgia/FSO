const Statistics = ({good,neutral,bad,total,average,positivePercentage}) => {

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average  {average}</p>
      <p>positive  {positivePercentage} %</p>
    </>
  )
}

export default Statistics
