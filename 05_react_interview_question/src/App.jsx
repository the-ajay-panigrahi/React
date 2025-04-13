import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(15);

  function addFn() {
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
  }
  function subFn() {
    setCount(--count);
  }

  return (
    <>
      <button>Count: {count}</button>
      <br />
      <br />
      <div>
        <button onClick={addFn}>Add</button>
        <button onClick={subFn}>Sub</button>
      </div>
    </>
  );
}

export default App;
