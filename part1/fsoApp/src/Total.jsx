const Total = (props) => {

  const parts = props.parts
  let total = 0
  parts.forEach(element => {
    let exercise = element.exercises
    total += exercise
  });

  return (
    <div>
       <p>Number of exercises {total}</p>
    </div>
  )
}

export default Total