import { useState } from "react";
import "./TipCalculator.css";

const calcState = { bill: 0, selfSatisfaction: 0, friendSatisfaction: 0 };

function TipCalculator() {
  const [state, setState] = useState(calcState);

  function onBill(e) {
    setState((state) => ({ ...state, bill: +e.target.value }));
  }

  function onSatisfaction(e) {
    setState((state) => ({ ...state, [e.target.name]: +e.target.value }));
  }
  console.log(state);
  return (
    <div className="tip-calculator">
      <BillInput bill={state.bill} handleChange={onBill} />
      <SatisfactionInput
        question="How did you like the service?"
        qnName={"selfSatisfaction"}
        state={state}
        handleChange={onSatisfaction}
      />
      <SatisfactionInput
        question="How did your friend like the service?"
        qnName={"friendSatisfaction"}
        state={state}
        handleChange={onSatisfaction}
      />
      <DisplayResult state={state} />
    </div>
  );
}

function BillInput({ bill, handleChange }) {
  return (
    <Question question={"How much was the bill?"}>
      <input type="number" value={bill} onChange={handleChange} />
    </Question>
  );
}

function SatisfactionInput({ question, qnName, state, handleChange }) {
  return (
    <Question question={question}>
      <select name={qnName} value={state[qnName]} onChange={handleChange}>
        <option value="0">{"Dissatisfied (0%)"}</option>
        <option value="0.05">{"It was OK (5%)"}</option>
        <option value="0.1">{"It was good (10%)"}</option>
        <option value="0.2">{"Absolutely amazing! (20%)"}</option>
      </select>
    </Question>
  );
}

function DisplayResult({ state }) {
  let tip = Math.trunc(state.bill * ((state.selfSatisfaction + state.friendSatisfaction) / 2));
  let pay = state.bill + tip;
  return (
    <div className="result">
      <br />
      <h3>{`You pay $${pay} ($${state.bill} + $${tip} tip)`}</h3>
    </div>
  );
}

function Question({ question, children }) {
  return (
    <div className="question">
      {question} {children}
    </div>
  );
}

export default TipCalculator;
