import data from "./faqs.js";
import "./Accordion_v2.css";
import { useState } from "react";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(null);
  function handleClick(i) {
    if (i == isOpen) return setIsOpen(null);
    setIsOpen(i);
  }

  return (
    <div className="accordion">
      {data.map((faq, i) => {
        return (
          <AccordionItem
            key={i}
            number={i + 1}
            title={faq.title}
            text={faq.text}
            isOpen={isOpen == i}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

function AccordionItem({ number, title, text, isOpen, handleClick }) {
  return (
    <div className={isOpen ? "item open" : "item"} onClick={() => handleClick(number - 1)}>
      <p className="number">{number}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
