import Chai from "./Chai"

function App() {
  const myName="My name is Ajay"
  // {myName} => it is called evaluated expression
  return (
    <>
      <h1>RAM</h1>
    <Chai/>
    <p>{myName}</p>
    </>
  )
}

export default App
