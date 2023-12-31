import data from "./faqs.js";
import "./Accordion.css";
import { useState } from "react";

export default function Accordion() {
  const arr = new Array(data.length).fill(false);
  const [faqShowed, setFaqShowed] = useState(arr);

  function handleClick(i) {
    setFaqShowed((arr) => {
      const newArr = [...arr];
      newArr[i] = !arr[i];
      return newArr;
    });
  }

  return (
    <div className="accordion">
      {data.map((faq, i) => {
        const isActive = faqShowed[i];
        return (
          <div key={i} className={isActive ? "faq faq-active" : "faq"}>
            <div className="number box" style={isActive ? { color: "green" } : {}} onClick={() => handleClick(i)}>
              {i + 1}
            </div>
            <div className="content box">
              <div className="question" style={isActive ? { color: "green" } : {}} onClick={() => handleClick(i)}>
                {faq.title}
              </div>
              {isActive && <div className="response">{faq.text}</div>}
            </div>
            <div className="icon box" style={isActive ? { color: "green" } : {}} onClick={() => handleClick(i)}>
              {isActive ? "-" : "+"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
