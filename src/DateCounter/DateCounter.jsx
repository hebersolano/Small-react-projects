import { useEffect, useState } from "react";

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

  return (
    <div>
      <div className="steps-counter">
        <button onClick={handleSteps}>-</button>
        <span>Step: {steps}</span>
        <button onClick={handleSteps}>+</button>
      </div>
      <div className="days-counter">
        <button onClick={handleDays}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
}
