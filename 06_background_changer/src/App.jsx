import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");
  return (
    <>
      <div
        className="w-full h-screen flex items-end justify-center flex-wrap duration-500 px-3"
        style={{ backgroundColor: color }}
      >
        <div className="bg-white rounded-xl mb-12 flex justify-center items-center flex-wrap">
          <button
            onClick={() => setColor("#9400D3")}
            className="mx-4 my-2 rounded-full text-white px-6 py-2 text-lg font-bold"
            style={{ backgroundColor: "#9400D3" }}
          >
            Violet
          </button>
          <button
            onClick={() => setColor("#4B0082")}
            className="mx-4 my-2 rounded-full text-white px-6 py-2 text-lg font-bold"
            style={{ backgroundColor: "#4B0082" }}
          >
            Indigo
          </button>
          <button
            onClick={() => setColor("#0000FF")}
            className="mx-4 my-2 rounded-full text-white px-6 py-2 text-lg font-bold"
            style={{ backgroundColor: "#0000FF" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#00FF00")}
            className="mx-4 my-2 rounded-full text-white px-6 py-2 text-lg font-bold"
            style={{ backgroundColor: "#00FF00" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("#FFFF00")}
            className="mx-4 my-2 rounded-full text-black px-6 py-2 text-lg font-bold"
            style={{ backgroundColor: "#FFFF00" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#FF7F00")}
            className="mx-4 my-2 rounded-full text-white px-6 py-2 text-lg font-bold"
            style={{ backgroundColor: "#FF7F00" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("#FF0000")}
            className="mx-4 my-2 rounded-full text-white px-6 py-2 text-lg font-bold"
            style={{ backgroundColor: "#FF0000" }}
          >
            Red
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
