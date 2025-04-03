import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);
  return (
    <>
      <div>
        <h1>Counter: {counter}</h1>
        <button
          onClick={() => {
            if (counter < 20) {
              setCounter(++counter);
            }
          }}
        >
          Increase :: {counter}
        </button>
        <button
          onClick={() => {
            if (counter > 0) {
              setCounter(--counter);
            }
          }}
        >
          Decrease :: {counter}
        </button>
      </div>
    </>
  );
}

export default App;
