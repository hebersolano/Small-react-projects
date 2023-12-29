import { useEffect, useState } from "react";
import "./DateCounter_v2.css";

Date.prototype.addDays = function (days) {
  let date = new Date();
  if (days == 0) return this.setDate(date.getDate());
  this.setDate(date.getDate() + days);
};

let oneDate = new Date();

export default function DateCounter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  function handleSteps(e) {
    const t = e.target.innerText;
    if (t == "-") setSteps((v) => --v);
    if (t == "+") setSteps((v) => ++v);
  }

  function handleDays(e) {
    const t = e.target.innerText;
    if (t == "-")
      setCount((v) => {
        const count = v - steps;
        oneDate.addDays(count);
        // oneDate.setTime(oneDate.getTime() - 86400000);
        return count;
      });
    if (t == "+")
      setCount((v) => {
        const count = v + steps;
        oneDate.addDays(count);
        // oneDate.setTime(oneDate.getTime() + 86400000);
        return count;
      });
    // handleDate(t);
  }

  function handleChange(evt) {
    const value = +evt.target.value;
    if (evt.target.type == "number") setCount(value);

    if (evt.target.type == "range") setSteps(value);
  }

  function reset() {
    setSteps(1);
    setCount(0);
  }

  return (
    <div className="date-counter">
      <div className="steps-counter">
        <button onClick={handleSteps}>-</button>
        <input type="range" defaultValue={1} min="1" max="10" step={1} onChange={handleChange} />
        <span>{steps}</span>
        <button onClick={handleSteps}>+</button>
      </div>
      <div className="days-counter">
        <button onClick={handleDays}>-</button>
        <input type="number" value={count} onChange={handleChange} />
        <button onClick={handleDays}>+</button>
      </div>
      <div className="message">
        <h2>
          {(count < 0 && `${Math.abs(count)} days ago was`) ||
            (count > 0 && `${count} day${count > 1 ? "s" : ""} from today is`) ||
            "Today is"}{" "}
          {oneDate.toDateString()}
        </h2>
      </div>
      {steps !== 1 || count !== 0 ? (
        <div>
          <button onClick={reset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
