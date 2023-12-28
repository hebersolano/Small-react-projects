import "./FlashCards.css";
import FlashCard from "./FlashCard";
import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
    showed: false,
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
    showed: false,
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
    showed: false,
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
    showed: false,
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
    showed: false,
  },
  {
    id: 2002,
    question: "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
    showed: false,
  },
];

export default function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function showAnswer(id) {
    if (id == selectedId) setSelectedId(null);
    else setSelectedId(id);
  }

  return (
    <div className="flash-cards">
      {questions.map((question) => (
        <FlashCard key={question.id} data={question} selectedId={selectedId} showAnswer={showAnswer} />
      ))}
    </div>
  );
}
