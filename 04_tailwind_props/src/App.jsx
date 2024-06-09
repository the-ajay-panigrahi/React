import "./App.css";
import Card from "./components/Card";

function App() {
  const arr = [1, 8, "jai Shree Ram", null];
  const obj = {
    fName: "Ajay",
    age: 20,
    status: "offline",
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-lg text-center mb-6">
        Tailwind Test
      </h1>
      <Card />
      <Card userName="Ajay" someObj={obj} someArr={arr} btnText="Join Me" />
      <Card userName="Hanuman" btnText="Ram" />
    </>
  );
}

export default App;
