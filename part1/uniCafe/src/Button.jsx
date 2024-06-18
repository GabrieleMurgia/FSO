const Button = ({text , counter , onClick}) => {

  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default Button