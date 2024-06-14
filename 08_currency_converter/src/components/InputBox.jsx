import React from "react";

function InputBox({
  amount,
  conversionSide,
  currency,
  setAmount,
  currencyOptions = [],
  onCurrencyChange,
  amountdisabled,
}) {
  return (
    <div className="w-full h-full bg-white flex justify-between items-center p-6 rounded-xl flex-wrap">
      <div className="flex justify-between items-start flex-col h-16 flex-wrap">
        <div className="text-slate-500 font-semibold text-lg">
          {conversionSide}
        </div>
        <input
          type="number"
          placeholder="Type the amount..."
          value={amount}
          onChange={(event) =>
            setAmount && setAmount(Number(event.target.value))
          }
          disabled={amountdisabled}
        />
      </div>
      <div className="flex justify-between items-end flex-col h-16 flex-wrap">
        <div className="text-slate-500 font-semibold text-lg">
          Currency Type
        </div>
        <select
          className="text-red-500 text-xl text-center"
          value={currency}
          onChange={(event) =>
            onCurrencyChange && onCurrencyChange(event.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option
              className="text-black text-xl"
              key={currency}
              value={currency}
            >
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
