import "./index.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-amber-500 text-5xl text-center p-5 w-fit mx-auto mt-2 rounded-4xl text-gray-50 ">
        Hello
      </h1>
      <div className="flex justify-center items-center mt-8 gap-3 flex-wrap p-3">
        <Card
          title="Haanji... Kaise Hoon App Sab"
          content="sample"
          btnText="Grind karo"
        />
        <Card title="Ram Ram" content="Demo" btnText="Padhlo" />
        <Card
          title="Jai Shree Ram!"
          content="Sankat Mochan Mahabali Hanuman Ki Jai"
          btnText="Siya pati ramchandra ki jai"
        />
      </div>
    </>
  );
}

export default App;
