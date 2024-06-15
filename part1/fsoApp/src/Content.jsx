import Part from "./Part"

const Content = (props) => {

  const parts = props.parts
  const partsList = parts.map(part => <Part key={part.name+part.exercises} part={part.name} exercise={part.exercises}></Part>)

  return (
    <div>
        {partsList}
    </div>
  )
}

export default Content