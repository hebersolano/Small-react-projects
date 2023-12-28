export default function FlashCard({ data, selectedId, showAnswer }) {
  function handleClick() {
    showAnswer(data.id);
  }
  return (
    <div className={selectedId == data.id ? "flash-card showed" : "flash-card"} onClick={handleClick}>
      <p> {selectedId == data.id ? data.answer : data.question}</p>
    </div>
  );
}
