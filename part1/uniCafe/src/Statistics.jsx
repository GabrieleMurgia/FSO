import StatisticLine from "./StatisticLine"


const Statistics = ({good,neutral,bad,total,average,positivePercentage}) => {

  return (
    <>
      <StatisticLine text="good"  value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="total" value ={total} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive"  value ={positivePercentage +" " + "%"} />
    </>
  )
}

export default Statistics
