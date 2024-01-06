import { useState } from "react";

export default function BillAndSplit({ friend, saveData }) {
  const [formState, setFormState] = useState({ bill: 0, yourExpense: 0, friendExpense: 0, whoPay: "You" });

  function handleChange(evt) {
    setFormState((state) => {
      if (evt.target.name == "yourExpense") {
        const friendExpense = state.bill - evt.target.value;
        return { ...state, yourExpense: evt.target.value, friendExpense };
      } else {
        return { ...state, [evt.target.name]: evt.target.value };
      }
    });
  }

  function handleClick() {
    let owe = 0;
    if (formState.whoPay == "You") owe = formState.friendExpense;
    else owe = -formState.yourExpense;
    console.log(owe);
    saveData(friend.id, owe);
  }
  console.log(formState);
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
