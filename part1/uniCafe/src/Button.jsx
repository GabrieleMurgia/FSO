const Button = ({text , onNextAnecdotes }) => {

  return (
    <button onClick={onNextAnecdotes}>
      {text}
    </button>
  )
}

export default Button