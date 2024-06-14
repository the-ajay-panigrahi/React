import React, { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((finalResponse) => {
        setData(finalResponse[currency]);
      });
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
