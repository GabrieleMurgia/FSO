const Paragraph = ({text , counter , percentage}) => {

  return (
    <p>
      {text + " " + counter + " " + (percentage ? percentage : "")}
    </p>
  )
}

export default Paragraph