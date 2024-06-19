const Button = ({text , onNextAnecdotes , onVote }) => {

  return (
    <button onClick={onNextAnecdotes ? onNextAnecdotes : onVote}>
      {text}
    </button>
  )
}

export default Button