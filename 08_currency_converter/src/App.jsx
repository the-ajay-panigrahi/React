import backgroundImage from "./assets/currency-background.jpg";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="w-screen h-screen bg-cover	bg-no-repeat bg-center"
      ></div>
    </>
  );
}

export default App;
