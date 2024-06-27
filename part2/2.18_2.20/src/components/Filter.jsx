
function Filter({onSearchCountry , messageText , abled}) {
  return (
    <>
    <p>find countries <input disabled={!abled} onChange={onSearchCountry}/></p>
    <p>{messageText}</p>
    </>
  )
}

export default Filter