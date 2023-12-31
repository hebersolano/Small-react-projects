import data from "./faqs.js";
import "./Accordion_v2.css";
import { useState } from "react";

export default function Accordion() {
  return (
    <div className="accordion">
      {data.map((faq, i) => {
        return <AccordionItem key={i} number={i + 1} title={faq.title} text={faq.text} />;
      })}
    </div>
  );
}

function AccordionItem({ number, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((bool) => !bool);
  }
  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleClick}>
      <p className="number">{number}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
