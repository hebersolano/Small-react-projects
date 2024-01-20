// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [output, setOutput] = useState("");

  function handleCurrency(e) {
    const target = e.target;
    if (target.name === "amount") setAmount(Number(target.value));
    if (target.name === "currency-01") setCurrency1(target.value);
    if (target.name === "currency-02") setCurrency2(target.value);
  }

  useEffect(
    function () {
      const controller = new AbortController();
      async function getData() {
        if (amount <= 0 || currency1 == currency2) return setOutput("");
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${currency1}&to=${currency2}`,
            {
              signal: controller.signal,
            }
          );
          const data = await res.json();
          console.log(data);
          setOutput(`${amount} ${currency1} = ${data.rates[currency2]} ${currency2}`);
        } catch (error) {
          console.error(error);
        }
      }
      getData();

      return function effectCleaner() {
        controller.abort();
      };
    },

    [amount, currency1, currency2]
  );

  console.log(amount, currency1, currency2);
  return (
    <div>
      <input type="number" defaultValue={1} min={0.01} name="amount" onChange={handleCurrency} />
      <select name="currency-01" onChange={handleCurrency}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="HNL">HNL</option>
      </select>
      <select name="currency-02" onChange={handleCurrency}>
        <option value="USD">USD</option>
        <option value="EUR" selected>
          EUR
        </option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="HNL">HNL</option>
      </select>
      <p>{output}</p>
    </div>
  );
}
