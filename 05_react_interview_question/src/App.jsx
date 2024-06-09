import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  function Increase() {
    if (counter < 30) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  }

  function Decrease() {
    if (counter > 0) {
      setCounter((prevCounter) => {
        return prevCounter - 1;
      });
      setCounter((prevCounter) => {
        return prevCounter - 1;
      });
      setCounter((prevCounter) => {
        return prevCounter - 1;
      });
      setCounter((prevCounter) => {
        return prevCounter - 1;
      });
      setCounter((prevCounter) => {
        return prevCounter - 1;
      });
    }
  }

  return (
    <>
      <div className="bg-slate-600 h-screen flex justify-center items-center flex-col gap-12 text-white">
        <h1 className="font-black text-9xl">Counter App</h1>
        <p className="font-bold text-7xl bg-gray-700 p-5 rounded-full">
          Counter: {counter}
        </p>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={Increase}
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-4xl px-10 py-5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Increase
          </button>
          <button
            type="button"
            onClick={Decrease}
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-4xl px-10 py-5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Decrease
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
