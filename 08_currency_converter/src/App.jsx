import { useState } from "react";
import backgroundImage from "./assets/currency-background.jpg";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  // console.log(options);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="w-screen h-screen bg-cover	bg-no-repeat bg-center flex justify-center items-center"
      >
        <div className="bg-black p-10 w-2/5 flex flex-col gap-2 justify-center items-center border-8 border-white rounded-3xl relative">
          <h1 className="text-5xl text-yellow-500 font-extrabold mb-2">
            Currency Converter
          </h1>
          <InputBox
            amount={amount}
            conversionSide="From"
            currency={from}
            setAmount={setAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            amountdisabled={false}
          />

          <InputBox
            amount={convertedAmount}
            conversionSide="To"
            currency={to}
            setAmount={setAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            amountdisabled={true}
          />
          <button
            className="bg-blue-500 text-white text-2xl font-bold w-full h-12 rounded transition-all duration-200 hover:bg-green-500"
            onClick={convert}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
          <div
            className="bg-red-500 text-white font-bold p-2 rounded-md absolute cursor-pointer transition-all duration-200 hover:bg-green-500"
            onClick={swap}
          >
            Swap
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
