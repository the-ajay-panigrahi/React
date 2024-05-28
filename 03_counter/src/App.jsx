import { useState } from 'react'
import './App.css' 

function App() {
  let [counter,setCounter]=useState(10)

   function addValue() {
    if(counter<20){
      setCounter(counter+1)
      // console.log(counter)
    }
  }

   function decreaseValue() {
    if(counter>0){
      setCounter(counter-1)
    //  console.log(counter);
    }
  }
  return (
    <>
     <h1>Learn React</h1>
     <h2>Counter : {counter}</h2>
     <button onClick={addValue}>Add</button>
     <br />
     <br />
     <button onClick={decreaseValue}>Subtract</button>
    </>
  )
}

export default App
