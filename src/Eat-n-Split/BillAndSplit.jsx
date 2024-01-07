import { useState } from "react";

export default function BillAndSplit({ friend, saveData }) {
  const [formState, setFormState] = useState({ bill: 0, yourExpense: 0, friendExpense: 0, whoPay: "You" });

  function handleChange(evt) {
    setFormState((state) => {
      if (evt.target.name == "yourExpense") {
        const yourExpense = +evt.target.value <= +formState.bill ? evt.target.value : formState.yourExpense;
        const friendExpense = state.bill - yourExpense;
        return { ...state, yourExpense, friendExpense };
      } else {
        return { ...state, [evt.target.name]: evt.target.value };
      }
    });
  }

  function handleClick() {
    let owe = 0;
    if (formState.whoPay == "You") owe = formState.friendExpense;
    else owe = -formState.yourExpense;
    saveData(friend.id, owe);
    setFormState({ bill: 0, yourExpense: 0, friendExpense: 0, whoPay: "You" });
  }

  return (
    <div className="bill-and-split">
      <h2 className="title">Split a bill with {friend.name}</h2>
      <div className="bill-form">
        <label htmlFor="bill-value">Bill value</label>
        <input type="number" name="bill" id="bill-value" value={formState.bill} onChange={handleChange} required />
        <label htmlFor="your-expense">Your expense</label>
        <input
          type="number"
          name="yourExpense"
          id="your-expense"
          value={formState.yourExpense}
          onChange={handleChange}
          max={formState.bill}
          required
        />
        <label htmlFor="friend-expense">{friend.name} expense</label>
        <input type="number" name="friendExpense" id="friend-expense" value={formState.friendExpense} disabled />
        <label htmlFor="who-pay">Who is paying the bill?</label>
        <select name="whoPay" value={formState.whoPay} onChange={handleChange}>
          <option value={friend.name}>{friend.name}</option>
          <option value="You">You</option>
        </select>
        <button className="btn" onClick={handleClick}>
          Split bill
        </button>
      </div>
    </div>
  );
}
